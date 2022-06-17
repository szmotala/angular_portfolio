import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SvgIconComponent } from '../shared/svg-icon/svg-icon.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ContactPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContactPageComponent
  ]
})
export class ContactPageModule { }
