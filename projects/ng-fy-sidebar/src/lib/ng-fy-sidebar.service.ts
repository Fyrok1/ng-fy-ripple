import { Injectable, EventEmitter } from '@angular/core';
import { NgFySidebarItemData } from './ng-fy-sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class NgFySidebarService {

  constructor() { }

  onSidebarItemClicked:EventEmitter<NgFySidebarClickData> = new EventEmitter();

  sidebarItemClicked(item:NgFySidebarItemData,id:number){
    this.onSidebarItemClicked.emit({item:item,id:id});
  }


}

export interface NgFySidebarClickData {
  item:NgFySidebarItemData,
  id:number
}
