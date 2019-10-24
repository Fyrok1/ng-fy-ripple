import { Directive, ElementRef, HostListener, OnInit, Input } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Directive({
  selector: '[ngFyRipple]'
})
export class RippleDirective implements OnInit {

  @Input() ngFyRipple:boolean = undefined;

  constructor(
    private el?: ElementRef
  ) {    
    if (document.getElementById("ngFyRippleStyles") == null) {
      var style = document.createElement('style');
      style.id = "ngFyRippleStyles";
      style.type = 'text/css';
      var keyFrames = `
      *[ngfyripple],
      *[ng-reflect-ng-fy-ripple] {
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      *[ngfyripple] *,
      *[ng-reflect-ng-fy-ripple] * {
        pointer-events: none;
      }
      *[ng-reflect-ng-fy-ripple] .ripple-div,
      *[ngfyripple] .ripple-div {
        position: absolute;
        pointer-events: none;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.14);
        z-index: 10;
        animation: ngFyRipple 0.65s ease-out forwards;
      }

      *[ng-reflect-ng-fy-ripple] .ripple-div.ripple-remove,
      *[ngfyripple] .ripple-div.ripple-remove {
        animation: ngFyRippleRemove 0.3s ease-in forwards;
      }
      
      @keyframes ngFyRipple {
        0% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(0.05);
        }
        100% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }

      @keyframes ngFyRippleRemove {
        0% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1);
        }
      }
      `;
      style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "180deg");
      document.getElementsByTagName('head')[0].appendChild(style);
    }
  }

  ngOnInit() {

  }

  @HostListener('mousedown', ['$event']) mousedown(event) {    
    if (this.ngFyRipple || (this.ngFyRipple != undefined && this.ngFyRipple.toString() == "")) {
      let child = document.createElement('div'),
      weight = this.el.nativeElement.offsetHeight > this.el.nativeElement.offsetWidth ? this.el.nativeElement.offsetHeight : this.el.nativeElement.offsetWidth,
      style = [
        "height:" + (weight * 2.4) + "px",
        "width:" + (weight * 2.4) + "px",
        "left:" + event.offsetX + "px",
        "top:" + event.offsetY + "px",
      ];
      child.style.cssText = style.join(";");
      child.classList.add('ripple-div');
      this.el.nativeElement.appendChild(child);
      setTimeout(() => {
        child.classList.add("ripple-complated");
      }, 550);
    }
  }

  @HostListener('mouseup', ['$event']) mouseup(event) { 
    for (let i = 0; i < this.el.nativeElement.children.length; i++) {
      let element = this.el.nativeElement.children[i];
      if (element.className.search("ripple-div") != -1 && element.className.search("ripple-remove") == -1) {
        if (element.className.search("ripple-complated") != -1) {
          element.classList.add("ripple-remove");
          setTimeout(() => {
            element.parentNode.removeChild(element);
          }, 350);
        }else{
          let checkInter = setInterval(()=>{
            if (element.className.search("ripple-complated") != -1) {
              element.classList.add("ripple-remove");
              setTimeout(() => {
                if (element != null && element.parentNode != null) {
                  element.parentNode.removeChild(element);
                }
              }, 350);
              clearInterval(checkInter);
            }
          },50);
        }
      }
    }
  }

}