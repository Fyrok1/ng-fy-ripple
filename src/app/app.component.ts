import { Component } from '@angular/core';
import { NgFySidebarData } from 'projects/ng-fy-sidebar/src/public-api';

@Component({
  selector: 'mat-ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarData: NgFySidebarData = {
    logo: "https://www.biryudumkitap.com/img/logo-alt.png",
    mobileLogo:"https://www.biryudumkitap.com/img/logo-default.png",
    sidebarData: [
      {
        title: "test 1",
        icon: "<i class='material-icons'>dashboard</i>",
        children: [
          {
            title: "test 5",
            icon: "<i class='material-icons'>pan_tool</i>",
            children: [
              {
                title: "test 7",
                icon: "<i class='material-icons'>pan_tool</i>",
                children: [
                  {
                    title: "test 8",
                    icon: "<i class='material-icons'>pan_tool</i>",
                    children: [
                      {
                        title: "test 9",
                        icon: "<i class='material-icons'>pan_tool</i>",
                        children: [
                          {
                            title: "test 10",
                            icon: "<i class='material-icons'>pan_tool</i>",
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            title: "test 6",
            icon: "<i class='material-icons'>pan_tool</i>",
            children: [
              {
                title: "test 5",
                icon: "<i class='material-icons'>pan_tool</i>",
                children: [
                  {
                    title: "test 7",
                    icon: "<i class='material-icons'>pan_tool</i>",
                    children: [
                      {
                        title: "test 8",
                        icon: "<i class='material-icons'>pan_tool</i>",
                      }
                    ]
                  }
                ]
              },
            ]
          },
        ]
      },
      {
        title: "test 2",
        onClick: () => {
          console.log("test");
        }
      },
      {
        title: "test 3",
        children: [
          {
            title: "test 7",
            icon: "<i class='material-icons'>pan_tool</i>",
            children: [
              {
                title: "test 8",
                icon: "<i class='material-icons'>pan_tool</i>",
              }
            ]
          }
        ]
      },
      {
        title: "test 4",
      },
    ],
    topbarDataRight: [
      {
        title: "John Doe",
        icon: "<i class='material-icons'>person</i>",
        children: [
          {
            title: "Settings",
            icon: "<i class='material-icons'>settings_applications</i>",
          },
          {
            title: "Logout",
            icon: "<i class='material-icons'>exit_to_app</i>",
          },
        ]
      },
    ],
    topbarDataLeft: [
      {
        title:"",
        icon: "<i class='material-icons'>menu</i>",
        onClick:()=>{
          this.sidebarData.sidebarClosed = !this.sidebarData.sidebarClosed;
        }
      }
    ],
    mobileRightSidebar:[
      {
        icon: "<i class='material-icons'>person</i>",
        title:"John Doe",
        children:[
          {
            icon: "<i class='material-icons'>settings</i>",
            title: "Ayarlar"
          },
          {
            icon: "<i class='material-icons'>exit</i>",
            title: "Çıkış Yap"
          }
        ]
      }
    ]
  }
}