import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosPersonaService {

  public identificacion: string;

  constructor() { }

  seIdentificacion(identificacion: string) {
    this.identificacion = identificacion;
  }

  getIdentificacion() {
    return this.identificacion;
  }
}
