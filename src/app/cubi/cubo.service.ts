import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {of, Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {Cubo} from "./cubo";

@Injectable({
  providedIn: 'root'
})
export class CubiService {
  constructor(private http: HttpClient) {
  }

  getCubi() {
    return this.http.get<Cubo[]>(
      'http://localhost:8080/api/listacubi',
      {
        headers: new HttpHeaders('Access-Control-Allow-Headers: *')
      }
    );
  }
}
