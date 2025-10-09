import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxSelectBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
