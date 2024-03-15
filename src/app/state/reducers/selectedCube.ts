import {Cubo} from "../../cubi/cubo";
import {createReducer, on} from "@ngrx/store";
import {CubiActions} from "../actions/cubi.actions";
import {None, Option, Some} from "@sniptt/monads";

export const selectedCube: Option<Cubo> = None;
export const selectedCubo = createReducer(
  selectedCube,
  on(
    CubiActions.selectCubo,
    (selectedCube, {selected}) => selected
  ),
  on(CubiActions.unselectCubo, (selectedCube) => None)
)
