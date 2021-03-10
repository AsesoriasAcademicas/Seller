import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { persona } from '../models/persona';
import { employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) {}

  URL_API = "http://localhost:4000/api/personas";

  selectedPersona: persona = {
    identificacion: '',
    nombre: '',
    apellidos: '',
    email: '',
    fechaNac: '',
    telefono: '',
    direccion: ''
  }

  personas: persona[];

  getPersona(_id: string){
    return this.http.get(`${this.URL_API}/${_id}`);
  }

  getPersonas(){
    return this.http.get<persona[]>(this.URL_API);
  }

  createPersona(persona: persona){
    return this.http.post(this.URL_API, persona);
  }

  deletePersona(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  updatePersona(persona: persona){
    return this.http.put(`${this.URL_API}/${persona._id}`, persona)
  }
}
