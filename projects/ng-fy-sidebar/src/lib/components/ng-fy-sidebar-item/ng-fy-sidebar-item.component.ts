import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NgFySidebarItemData } from '../../ng-fy-sidebar.component';
import { NgFySidebarService } from '../../ng-fy-sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-fy-sidebar-item',
  templateUrl: './ng-fy-sidebar-item.component.html',
  styleUrls: ['./ng-fy-sidebar-item.component.scss']
})
export class NgFySidebarItemComponent implements OnInit {

  constructor(
    private ngFySidebarService: NgFySidebarService,
    private router:Router
  ) { }

  ngOnInit() {
    this.ngFySidebarService.onSidebarItemClicked.subscribe((item) => {
      this.setChildsHeight();
    })
  }

  @ViewChildren("childs") childs: QueryList<ElementRef>;
  @Input() level: number = 0;
  @Input() sidebarId: number = 0;
  @Input() data: NgFySidebarItemData[] = [];

  itemClick(item: NgFySidebarItemData, index: number) {
    if (item.children != undefined) {
      let itemIndex = this.getChildedItemIndex(item);
      item.open = !item.open;
      if (item.open) {
        item.childHeigth = this.childs.find((el, i) => {
          if (i == itemIndex) {
            return true;
          }
        }).nativeElement.scrollHeight;
        this.data.forEach((el)=>{
          if (el != item && el.children != undefined && el.children.length > 0 && el.open) {
            el.open = false;
            this.ngFySidebarService.sidebarItemClicked(el,this.sidebarId);
          }
        })
        
      }else{
        item.children.forEach((el,i)=>{
          if (el.children != undefined) {
            el.open = false;
          } 
        })
      }
      setTimeout(() => {
        this.setChildsHeight();
        this.ngFySidebarService.sidebarItemClicked(item,this.sidebarId);
      });
    }else if (item.onClick != undefined) {
      item.onClick(); 
      setTimeout(() => {
        this.ngFySidebarService.sidebarItemClicked(item,this.sidebarId);
      });
    }else if(item.link != undefined){
      this.router.navigateByUrl(item.link);
      setTimeout(() => {
        this.ngFySidebarService.sidebarItemClicked(item,this.sidebarId);
      });
    }
  }

  setChildsHeight() {
    this.data.forEach((item, index) => {
      let itemIndex = this.getChildedItemIndex(item);
      if (item.children != undefined) {
        let childItem = this.childs.find((el, i) => {
          if (i == itemIndex) {
            return true;
          }
        })
        item.childHeigth += this.getChildHeight(childItem.nativeElement.children);
      }
    })
  }

  getChildedItemIndex(item:NgFySidebarItemData):number{
    if (item.children == undefined || item.children.length == 0) {
      return -1;
    }
    let itemIndex = 0;
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i].children != undefined && this.data[i].children.length > 0){
        if (item == this.data[i]) {
          break;
        }else{
          itemIndex++;
        }
      }
    }
    return itemIndex;
  }

  getChildHeight(item: any): number {
    let rNumber: number = 0;
    for (let i = 0; i < item.length; i++) {
      for (let j = 0; j < item[i].children.length; j++) {
        if (item[i].children[j].children.length > 1) {
          let h = item[i].children[j].children[1].style.maxHeight;
          rNumber += h == "" || h == undefined ? 0 : parseInt(h);
          if (item[i].children[j].children[1].children.lenght > 0) {
            rNumber += this.getChildHeight(item[i].children[j].children[1].children);
          }
        }
      }
    }
    return rNumber;
  }
}
