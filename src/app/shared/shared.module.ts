import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { TextBlockComponent } from './text-block/text-block.component';



@NgModule({
  declarations: [ FooterComponent, SvgIconComponent, TextBlockComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent, SvgIconComponent, TextBlockComponent,
  ]
})
export class SharedModule { }
