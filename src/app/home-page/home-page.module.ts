import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page.component';
import { AboutComponent } from './about/about.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { HomeContentComponent } from './home-content/home-content.component';



@NgModule({
  declarations: [ HeroComponent, HomeContentComponent, HomePageComponent, AboutComponent, ProjectOverviewComponent],
  imports: [
    CommonModule,
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
