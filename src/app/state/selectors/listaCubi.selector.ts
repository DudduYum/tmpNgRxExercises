import {Cubo} from "../../cubi/cubo";
import {createSelector} from "@ngrx/store";


export interface ListaCubiState {
  listaCubi: Cubo[]
}
export interface AppState {
  lista: ListaCubiState;
}

// export const selectListaCubi = (state: AppState) => state.lista;

export const selectFeatureCount = createSelector(
  (store:any) => store.collectionReducer,
  (state) => state
);
