import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '',  component: HomePageComponent, data: { page: 'HomePage' }},
  { path: 'about', component: AboutPageComponent, data: { page: 'AboutPage' }},
  { path: 'contact', component: ContactPageComponent, data: { page: 'ContactPage' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
