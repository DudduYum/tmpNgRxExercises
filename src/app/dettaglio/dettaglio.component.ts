import { Component } from '@angular/core';
import {Cubo} from "../cubi/cubo";
import {ActivatedRoute} from "@angular/router";
import {Option} from "@sniptt/monads";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectedCubo} from "../state/selectors/cubi.selectors";
import {format} from "date-fns";

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.css',

})
export class DettaglioComponent {
  cuboSelezionato$: Observable<Option<Cubo>> = this.store.select(selectedCubo);

  constructor(private route: ActivatedRoute, private store: Store<Option<Cubo>>) {}
  ngOnInit() {
    // this.activatedRoute.paramMap.pipe(map)
    // this.titolo = this.cuboSelezionato?.nome || '';
    // console.log(this.cuboSelezionato);
    // this.cuboSelezionato$.subscribe(
    //   (value) => console.log(value)
    // );

  }

  formatDate(date:Date) {
    return format(date, 'dd/MM/yyyy HH:MM');
  }

}
