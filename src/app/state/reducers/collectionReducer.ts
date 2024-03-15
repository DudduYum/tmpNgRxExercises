import {createReducer, on } from "@ngrx/store";
import {CubiActions, CubiApiActions} from "../actions/cubi.actions";
import {Cubo} from "../../cubi/cubo";

export const initalState: ReadonlyArray<Cubo> = [];

export const collectionReducer = createReducer(
  initalState,
  on(CubiApiActions.cubiCaricatiConSuccesso, (state, {listaCubi}) => {

    return listaCubi;
  }),


)
