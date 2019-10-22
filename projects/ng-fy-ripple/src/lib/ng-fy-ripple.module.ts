import { NgModule } from '@angular/core';
import { NgFyRippleComponent } from './ng-fy-ripple.component';
import { RippleDirective } from './directives/ripple.directive';

@NgModule({
  declarations: [
    NgFyRippleComponent,
    RippleDirective
  ],
  imports: [
  ],
  exports: [
    NgFyRippleComponent,
    RippleDirective
  ]
})
export class NgFyRippleModule { }
