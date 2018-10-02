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
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StateEffects } from './reducers/state.effects';
import { AgencyEffects } from './reducers/agency.effects';


@NgModule({
  declarations: [
    AppComponent,
    LanzamientosComponent,
    BuscadorComponent,
    CriterioComponent,
    ValoresComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([StateEffects]),

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
