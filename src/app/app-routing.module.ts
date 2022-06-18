import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';

const routes: Routes = [
  { path: '',  component: HomePageComponent, data: { page: 'HomePage' }},
  { path: 'about', component: AboutPageComponent, data: { page: 'AboutPage' }},
  { path: 'contact', component: ContactPageComponent, data: { page: 'ContactPage' }},
  { path: 'blog_app', component: ProjectPageComponent, data: { page: 'BlogPage', type: 'blog' }},
  { path: 'photography_portfolio', component: ProjectPageComponent, data: { page: 'PhotoPage', type: 'photography' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
