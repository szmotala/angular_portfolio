import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AnimatedBackgroundComponent } from './animated-background/animated-background.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageModule } from './home-page/home-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ContactPageModule } from './contact-page/contact-page.module';
import { SvgIconComponent } from './shared/svg-icon/svg-icon.component';
import { SharedModule } from './shared/shared.module';
import { AboutPageModule } from './about-page/about-page.module';
import { ProjectPageModule } from './project-page/project-page.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimatedBackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ContactPageModule,
    AboutPageModule,
    ProjectPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
