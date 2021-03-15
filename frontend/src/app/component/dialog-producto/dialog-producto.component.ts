import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { producto } from '../../models/producto';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-dialog-producto',
  templateUrl: './dialog-producto.component.html',
  styleUrls: ['./dialog-producto.component.css']
})
export class DialogProductoComponent implements OnInit {

  shoppingCart = [];

  filterPost = "";

  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProductos().subscribe(
      (res) => {
        this.productoService.productos = res;
      },
      (err) => console.error(err)
    )
  }

  addToCart(producto: producto){
    this.shoppingCart.push(producto)
  }

  sellProducto(){
    this.productoService.selectedProductos = this.shoppingCart;
  }

}
