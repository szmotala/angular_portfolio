import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';



@NgModule({
  declarations: [ FooterComponent, SvgIconComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent, SvgIconComponent
  ]
})
export class SharedModule { }
