import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { HeaderComponent } from './components/header/header.component';
import { TwoColorButtonComponent } from './shared/componenets/two-color-button/two-color-button.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    HeaderComponent,
    TwoColorButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
