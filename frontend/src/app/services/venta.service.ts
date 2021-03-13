import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(public http: HttpClient) { }

  selectedVenta: venta = {
    cantidad: 0,
    precioTotal: 0
  };

  URL_API = 'http://localhost:4000/api/ventas';

  ventas: venta[];

  getVenta(_id: String){
    return this.http.get(`${this.URL_API}/${_id}`);
  }

  getVentas(){
    return this.http.get<venta[]>(this.URL_API);
  }

  createVenta(venta: venta, _id: string){
    return this.http.post(`${this.URL_API}/${_id}`, venta);
  }

  deleteVenta(_id: String){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  updateVenta(venta: venta){
    this.http.put(`${this.URL_API}/${venta._id}`, venta);
  }

}