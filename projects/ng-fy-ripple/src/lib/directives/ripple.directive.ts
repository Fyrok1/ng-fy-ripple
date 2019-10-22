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
        background-color: rgba(0, 0, 0, 0.2);
        z-index: 10;
        animation: ngFyRipple 0.75s ease-out forwards;
      }
      
      @keyframes ngFyRipple {
        0% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(0.1);
        }
        60% {
          opacity: 0.5;
        }
        95% {
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1);
        }
      }`;
      style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, "180deg");
      document.getElementsByTagName('head')[0].appendChild(style);
    }
  }

  ngOnInit() {

  }

  @HostListener('click', ['$event']) onClick(event) {    
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
        this.el.nativeElement.removeChild(child);
      }, 1000);
    }
  }

}