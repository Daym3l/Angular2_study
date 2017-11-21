import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {AppComponent} from './app.component';
import {MaterializeModule} from "angular2-materialize";
import { OtherComponent } from './other/other.component';


@NgModule({
  declarations: [
    AppComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule, FormsModule, MaterializeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
