import { NgModule } from '@angular/core';
import { NgFySidebarComponent } from './ng-fy-sidebar.component';
import { NgFySidebarItemComponent } from './components/ng-fy-sidebar-item/ng-fy-sidebar-item.component';
import { RippleDirective } from './directives/ripple.directive';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { clickOutsideDirective } from './directives/clickOutside.directive';

@NgModule({
  declarations: [
    NgFySidebarComponent,
    NgFySidebarItemComponent,
    RippleDirective,
    clickOutsideDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [NgFySidebarComponent]
})
export class NgFySidebarModule { }
