import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AnimComponent } from './anim/anim.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageModule } from './home-page/home-page.module';
import { SvgIconComponent } from './shared/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimComponent,
    FooterComponent,
    SvgIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
