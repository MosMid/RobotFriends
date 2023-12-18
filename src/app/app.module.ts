import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { FetchDataService } from './fetch-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
