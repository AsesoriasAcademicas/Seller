import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { producto } from '../../models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  form: FormGroup;

  public submitted = false;

  public tipoVenta = ['Libra','Kilo','Unidad'];

  constructor(public productoService: ProductoService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getProductos();

    this.form = this.formBuilder.group({
      _id: [],
      codigo: ['', [Validators.required, Validators.pattern('^([a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$')]],
      nombre: ['', [Validators.required, Validators.pattern('^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s])*$')]],
      detalle: ['', [Validators.required]],
      cantidad: ['', [Validators.required, Validators.pattern('^([0-9])*$')]],
      precioUnitario: ['', [Validators.required, Validators.pattern('^([0-9])*$')]],
      tipoVenta: ['', [Validators.required, Validators.pattern('^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s])*$')]]
    });
  }

  get validacion(){ return this.form.controls;}

  getProductos() {
    this.productoService.getProductos().subscribe(
      (res) => {
        this.productoService.productos = res;
      },
      (err) => console.error(err)
    )
  }

  resetForm(form: FormGroup){
    form.reset();
  }

  addProducto(form: FormGroup){
    this.submitted = true;
    if(this.form.invalid){
      return;
    } else {
      if(form.value._id){
        this.productoService.updateProducto(form.value).subscribe(
          (res) => {
            this.getProductos();
            form.reset();
          },
          (err) => console.error(err)
        )
      } else {
        this.productoService.createProducto(form.value).subscribe(
          (res) =>{
            this.getProductos();
            form.reset();
          },
          (err) => console.error(err)
        )
      }
    }
  }

  deleteProducto(id: String){
    if(confirm('Are you sure you want to delete it?')){
      this.productoService.deleteProducto(id).subscribe(
        (res) => {
          this.getProductos();
        },
        (err) => console.error(err)
      )
    }
  }

  editProducto(producto: producto){
    this.form.patchValue(producto);
  }

}
