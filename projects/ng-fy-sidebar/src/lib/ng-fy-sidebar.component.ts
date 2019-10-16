import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NgFySidebarService, NgFySidebarClickData } from './ng-fy-sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-fy-sidebar',
  templateUrl: "./ng-fy-sidebar.component.html",
  styleUrls: ["./ng-fy-sidebar.component.scss"]
})
export class NgFySidebarComponent implements OnInit {

  constructor(
    private ngFySidebarService: NgFySidebarService,
    private router: Router
  ) {
    this.ngFySidebarService.onSidebarItemClicked.subscribe((data: NgFySidebarClickData) => {
      if (data.item.children != undefined && !data.item.open) {
        for (let i = 0; i < data.item.children.length; i++) {
          this.itemSetClose(data.item.children[i]);
        }
      }

      if (this.windowWidth <= 1000 && data.id == 1 && data.item.children == undefined) {
        this.toggleMenu(true);
      }
      if (this.windowWidth <= 1000 && data.id == 2 && data.item.children == undefined) {
        this.toggleRightMenu(true);
      }
 
    })
  }

  ngOnInit() {
    this.checkWidth(this.windowWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let oldWidth = this.windowWidth;
    this.windowWidth = event.target.innerWidth;
    this.checkWidth(this.windowWidth,oldWidth);
  }

  @Input() data: NgFySidebarData = null;
  topbarChildClickActive: boolean = true;
  windowWidth: number = window.innerWidth;

  itemSetClose(item: NgFySidebarItemData) {
    if (item.children != undefined) {
      item.open = false;
      for (let i = 0; i < item.children.length; i++) {
        this.itemSetClose(item.children[i]);
      }
    }
  }

  topbarOutclick(item: NgFySidebarTopbarItemData) {
    if (item.open) {
      item.open = false;
    }
  }

  topbarClick(item: NgFySidebarTopbarItemData) {
    if (item.children != undefined && item.children.length > 0) {
      item.open = !item.open;
    } else if (item.onClick != undefined) {
      item.onClick();
    } else if (item.link) {
      this.router.navigateByUrl(item.link);
    }
  }

  topbarChildClick(item: NgFySidebarTopbarItemData, childItem: NgFySidebarTopbarItemChildData) {
    if (this.topbarChildClickActive) {
      this.topbarChildClickActive = false;
      if (childItem.onClick != undefined) {
        childItem.onClick();
      } else if (childItem.link != undefined) {
        this.router.navigateByUrl(childItem.link);
      }

      setTimeout(() => {
        this.topbarChildClickActive = true;
        item.open = false;
      }, 350);
    }
  }

  checkWidth(width:number,oldWidth:number=-1){
    if (oldWidth == -1) {
      if(width>1000){
        this.data.sidebarClosed = false;
      }else{
        this.data.sidebarClosed = true;
      }
    }else{
      if (width > 1000 && oldWidth <= 1000) {
        this.data.sidebarClosed = false;        
      }else if(width <= 1000 && oldWidth > 1000){
        this.data.sidebarClosed = true;                
      }
    }
  }

  toggleMenu(set?:boolean){
    if (set == undefined) {
      this.data.sidebarClosed = !this.data.sidebarClosed;
    }else{
      this.data.sidebarClosed = set;
    }
  }
  
  toggleRightMenu(set?:boolean){
    if (set == undefined) {
      this.data.mobileRightSidebarClosed = this.data.mobileRightSidebarClosed == undefined ? false : !this.data.mobileRightSidebarClosed;
    }else{
      this.data.mobileRightSidebarClosed = set;
    }    
  }

  toggleMenuBack(){    
    if (this.data.sidebarClosed != undefined && !this.data.sidebarClosed) {
      this.toggleMenu(true);
    }else if(this.data.mobileRightSidebarClosed != undefined && !this.data.mobileRightSidebarClosed){
      this.toggleRightMenu(true);
    }
  }
}

export interface NgFySidebarData {
  topbarDataRight?: NgFySidebarTopbarItemData[],
  topbarDataLeft?: NgFySidebarTopbarItemData[],
  logo?: string,
  mobileLogo?: string,
  sidebarData: NgFySidebarItemData[],
  sidebarClosed?: boolean,
  mobileRightSidebarClosed?: boolean,
  mobileRightSidebar:NgFySidebarItemData[]
}

export interface NgFySidebarTopbarItemData {
  title: string,
  icon?: string,
  link?: string,
  onClick?: Function,
  children?: NgFySidebarTopbarItemChildData[],
  open?: boolean,
}

export interface NgFySidebarTopbarItemChildData {
  title: string,
  icon?: string,
  link?: string,
  onClick?: Function,
}

export interface NgFySidebarItemData {
  title: string,
  icon?: string,
  onClick?: Function,
  children?: NgFySidebarItemData[],
  link?: string,
  open?: boolean,
  childHeigth?: number
}