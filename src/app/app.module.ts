import { ValorEffects } from './reducers/valor.effects';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LanzamientosComponent } from './lanzamientos/lanzamientos.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CriterioComponent } from './criterio/criterio.component';
import { ValoresComponent } from './valores/valores.component';
import { ContainerComponent } from './container/container.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AgencyEffects } from './reducers/agency.effects';
import { EstadosEffects } from './reducers/estados.effects';
import { LanzamientosEffects } from './reducers/lanzamientos.effects';
import { CriterioEffects } from './reducers/criterio.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    LanzamientosComponent,
    BuscadorComponent,
    CriterioComponent,
    ValoresComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      EstadosEffects,
      LanzamientosEffects,
      AgencyEffects,
      ValorEffects
    ]),
    EffectsModule.forFeature([CriterioEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
