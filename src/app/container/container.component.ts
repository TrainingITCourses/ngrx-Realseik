import { CriteriosState } from './../reducers/criterio.reducer';
import { DataService } from './../services/data.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GlobalState } from '../reducers';
import { map } from '../../../node_modules/rxjs/operators';
import { LoadCriterios } from '../reducers/criterio.actions';
import { LoadValors } from '../reducers/valor.actions';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {
  public criterios$: Observable<any>;
  public valores$: Observable<any>;
  public lanzamientos$: Observable<any>;
  public lanzamientos = [];
  private criterio: string;

  constructor(private data: DataService, private store: Store<GlobalState>) { }

  ngOnInit() {
    this.loadData();
    this.observeLaunches();
  }

  loadData = () => {
    this.store.dispatch(new LoadCriterios());
  }

  observeLaunches = () => {

    this.criterios$ = this.store.select('criterios').pipe(
      map((stateCriterios: CriteriosState) => {
        return stateCriterios.criterios;
      })
    );

    this.valores$ = this.store.select('valores').pipe(
      map(stateValores => {
        return stateValores.valores;
      })
    );

    // this.lanzamientos$ = this.store.select("lanzamientos").pipe(
    //   map(stateLanzamientos => {
    //     stateLanzamientos.lanzamientos;
    //   })
    // );
  }

  onCriterioSeleccionado(criterio) {
    this.criterio = criterio;
    this.store.dispatch(new LoadValors(criterio));
  }

  onValorSeleccionado(valorCriterio) {
    
    this.data.leerLanzamientos(this.criterio, valorCriterio);
  }
}
