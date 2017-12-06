import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MaterializeModule} from "angular2-materialize";
import {HeroesComponent} from './hero/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero/service_hero/hero.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './messages/msg_service/message.service';

import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    NavBarComponent,
    FooterComponent

  ],

  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
