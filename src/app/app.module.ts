import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing'

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LatlongSearchComponent } from './latlong-search/latlong-search.component';
import { AddressSearchComponent } from './address-search/address-search.component';
import { CreateGeocacheComponent } from './create-geocache/create-geocache.component';
import { GeocacheListComponent } from './geocache-list/geocache-list.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LatlongSearchComponent,
    AddressSearchComponent,
    CreateGeocacheComponent,
    GeocacheListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
