import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryElementDirective } from './gallery/gallery-element.directive';



@NgModule({
  declarations: [
    ProjectPageComponent,
    GalleryComponent,
    GalleryElementDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class ProjectPageModule { }
