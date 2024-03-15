import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import {RouterModule} from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {StoreModule, StoreRootModule} from '@ngrx/store';
import { HttpClientModule} from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import {selectedCubo} from "./state/reducers/selectedCube";
import {CubiEffects} from "./state/effects/CubiEffects";
import {collectionReducer} from "./state/reducers/collectionReducer";


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DettaglioComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      cuboSelection: selectedCubo,
      collectionReducer: collectionReducer
    }),
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ListaComponent },
      {path: 'dettaglio', component: DettaglioComponent}
    ]),
    FontAwesomeModule,
    EffectsModule.forRoot([
      CubiEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
