import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Widget1Component } from './components/widget1/widget1.component';
import { Widget2Component } from './components/widget2/widget2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Widget4Component } from './components/widget4/widget4.component';
import { HttpClientModule } from '@angular/common/http';
import { Widget3Component } from './components/widget3/widget3.component';
import { Widget5Component } from './components/widget5/widget5.component';
import { NameOfDayPipe } from './pipes/nameOfDay.pipe';
import { TemperatureFormatter } from './pipes/temperatureFormatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Widget1Component,
    Widget2Component,
    Widget3Component,
    Widget4Component,
    Widget5Component,
    NameOfDayPipe,
    TemperatureFormatter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
