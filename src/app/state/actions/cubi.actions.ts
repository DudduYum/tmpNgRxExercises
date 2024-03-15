import {createActionGroup, props} from "@ngrx/store";
import {Cubo} from "../../cubi/cubo";
import {Option} from "@sniptt/monads";

export const CubiActions = createActionGroup({
  source: 'Cubo',
  events: {
    'select cubo': props<{selected: Option<Cubo>}>(),
    'unselect cubo': props
  }
})

export const CubiApiActions = createActionGroup({
  source: 'Cubi Api',
  events: {
    'Carica Cubi': props,
    'Cubi caricati con successo': props<{listaCubi: Cubo[]}>()
  }
})
