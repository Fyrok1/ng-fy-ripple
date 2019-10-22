import { Component } from '@angular/core';
import { NgFySidebarData } from 'ng-fy-sidebar';

@Component({
  selector: 'mat-ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    setInterval(()=>{
      if (!this.sidebarData.sidebarClosed) {
        this.sidebarData.sidebarClosed = true;
      }
    },200)
  }

  sidebarData:NgFySidebarData = {
    sidebarData:[],
    sidebarClosed:true,
    topbarDataLeft:[
      {
        title:"",
        icon:'<img src="https://i.hizliresim.com/863L7n.png" width="45">'
      }
    ],
    mobileLogo:"https://i.hizliresim.com/863L7n.png",
    topbarDataRight:[
      {
        title:"",
        icon:'<img src="https://image.flaticon.com/icons/png/512/23/23931.png" width="35">',
        onClick:()=>{
          window.open('https://twitter.com/r_fyrok1', '_blank');
        }
      },
      {
        title:"",
        icon:'<img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="35">',
        onClick:()=>{
          window.open('https://twitter.com/r_fyrok1', '_blank');
        }
      },
      {
        title:"",
        icon:'<img src="https://lever-client-logos.s3.amazonaws.com/934a24e6-98af-40e3-821e-b73f36ad98f9-1538602447586.png" width="35">',
        onClick:()=>{
          window.open('https://twitter.com/r_fyrok1', '_blank');
        }
      },
    ],
    mobileRightSidebar:[
      {
        title:"Twitter",
        icon:'<img src="https://i.hizliresim.com/kMapvA.png" width="25">',
        onClick:()=>{
          window.open('https://twitter.com/r_fyrok1', '_blank');
        }
      },
      {
        title:"Github",
        icon:'<img src="https://i.hizliresim.com/4p3Qr4.png" width="25">',
        onClick:()=>{
          window.open('https://twitter.com/r_fyrok1', '_blank');
        }
      },
      {
        title:"Npm",
        icon:'<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/320px-Npm-logo.svg.png" width="25">',
        onClick:()=>{
          window.open('https://twitter.com/r_fyrok1', '_blank');
        }
      },
    ],
    mobileRightSidebarClosed:true,
    mobileTopBarRightIcon:"<i class='material-icons'>menu</i>"
  }
}