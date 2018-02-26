import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StationComponent } from './components/station/station.component';
import { StationDetailComponent } from './components/station-detail/station-detail.component';
import {StationService} from './services/station.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './data/in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import { StationSearchComponent } from './components/station-search/station-search.component';
import { MapComponent } from './components/map/map.component';

import { AngularCesiumModule } from 'angular-cesium';
import { LogsComponent } from './components/logs/logs.component';
import {LogsService} from './services/logs.service';


@NgModule({
  declarations: [
    AppComponent,
    StationComponent,
    StationDetailComponent,
    MessagesComponent,
    DashboardComponent,
    StationSearchComponent,
    MapComponent,
    LogsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    AngularCesiumModule.forRoot()
  ],
  providers: [ StationService, MessageService, LogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
