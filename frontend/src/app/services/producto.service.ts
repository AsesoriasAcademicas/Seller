import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public http: HttpClient) { }

  URL_API = 'http://localhost:4000/api/productos';

  selectedProducto: producto = {
    codigo : '',
    nombre: '',
    detalle: '',
    stock: 0,
    precioUnitario: 0,
    tipoVenta: ''
  };

  selectedProductos : producto[];

  productos : producto[];

  getProducto(_id: string){
    return this.http.get(`${this.URL_API}/${_id}`);
  }

  getProductos(){
    return this.http.get<producto[]>(this.URL_API);
  }

  createProducto(producto: producto){
    return this.http.post(this.URL_API, producto);
  }

  deleteProducto(_id: String){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  updateProducto(producto: producto){
    return this.http.put(`${this.URL_API}/${producto._id}`, producto);
  }
}
