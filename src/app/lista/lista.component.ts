import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cubo} from "../cubi/cubo";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {CubiActions, CubiApiActions} from "../state/actions/cubi.actions";
import {selectFeatureCount} from "../state/selectors/listaCubi.selector";
import {Option, Some} from "@sniptt/monads";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
  // inputs: ["titolo","lista"]
})
export class ListaComponent {
  titolo: string | undefined;

  lista$: Observable<Cubo[]> = this.store.select(selectFeatureCount);
  // @Output() select = new EventEmitter<string>();


  constructor(private store: Store<Cubo[]>) {
  }

  ngOnInit() {
    this.titolo = "Lista cubi";
    this.store.dispatch({type:CubiApiActions.caricaCubi.type});


  }

  select(cubo:Cubo){
    this.store.dispatch(CubiActions.selectCubo({selected: Some<Cubo>(cubo)}));
  }
}
