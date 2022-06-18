import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
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
