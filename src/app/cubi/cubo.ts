export class Cubo {
  get lastupdate(): Date {
    return this._lastupdate;
  }

  set lastupdate(value: Date) {
    this._lastupdate = value;
  }
  get peso(): number {
    return this._peso;
  }

  set peso(value: number) {
    this._peso = value;
  }
  private _id:number;
  private _colore:string;
  private _nome:string;
  private _x:number;
  private _y:number;
  private _z:number;
  private _peso:number;
  private _lastupdate: Date

  public constructor(
    id:number,
    colore:string,
    nome:string,
    x: number,
    y: number,
    z: number,
    peso: number,
    lastupdate: Date
  ) {
    this._id = id;
    this._colore = colore;
    this._nome = nome;
    this._x = x;
    this._y = y;
    this._z = z;
    this._peso = peso;
    this._lastupdate = lastupdate
  }


  get z(): number {

    return this._z;
  }
  set z(value: number) {
    this._z = value;
  }

  get y(): number {
    return this._y;
  }
  set y(value: number) {
    this._y = value;
  }

  get x(): number {
    return this._x;
  }
  set x(value: number) {
    this._x = value;
  }

  get nome(): string {
    return this._nome;
  }
  set nome(value: string) {
    this._nome = value;
  }

  get colore(): string {
    return this._colore;
  }
  set colore(value: string) {
    this._colore = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
