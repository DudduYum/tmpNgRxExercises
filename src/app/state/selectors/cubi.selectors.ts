import { createSelector, createFeatureSelector} from "@ngrx/store";
import {Cubo} from "../../cubi/cubo";
import {Option} from "@sniptt/monads";

export interface SelectedCubeState {
  selected: Option<Cubo>
}

export interface AppState {
  selectedCube: SelectedCubeState
}

export const selectfeature = (state: AppState) => state.selectedCube;

export const selectedCubo = createSelector(
  (store: any) => store.cuboSelection,
  (store) => store
)

