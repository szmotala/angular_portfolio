import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page.component';
import { AboutComponent } from './about/about.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SvgIconComponent } from '../shared/svg-icon/svg-icon.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ HeroComponent, HomeContentComponent, HomePageComponent, AboutComponent, ProjectOverviewComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
