import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VentaService } from '../../services/venta.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogProductoComponent } from '../dialog-producto/dialog-producto.component';
import { ProductoService } from '../../services/producto.service';
import { venta } from '../../models/venta';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  form: FormGroup;

  productoUpload: MatDialogRef<DialogProductoComponent>;

  public submitted = false;

  constructor(public ventaService: VentaService, public productoService: ProductoService, public formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getVentas();

    this.form = this.formBuilder.group({
      _id: [],
      codigo: ['', [Validators.required, Validators.pattern('^([a-zA-ZñÑáéíóúÁÉÍÓÚ0-9])*$')]],
      nombre: ['', [Validators.required, Validators.pattern('^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s])*$')]],
      detalle: ['', [Validators.required]],
      cantidad: ['', [Validators.required, Validators.pattern('^([0-9])*$')]],
      precioUnitario: ['', [Validators.required, Validators.pattern('^([0-9])*$')]],
      precioTotal: ['', [Validators.required, Validators.pattern('^([0-9])*$')]]
    });
  }

  get validacion(){return this.form.controls;}

  openDialog(){
    this.productoUpload = this.dialog.open(DialogProductoComponent);
    this.productoUpload.afterClosed().subscribe((res) => {
      console.log(this.productoService.selectedProductos);
      this.form.patchValue(this.productoService.selectedProductos[0]);
    })
  }

  getVentas(){
    this.ventaService.getVentas().subscribe(
      (res) => {
        console.log(res);
        this.ventaService.ventas = res;
      },
      (err) => console.error(err)
    )
  }

  resetForm(form: FormGroup){
    form.reset();
  }

  addVenta(form: FormGroup){
    form.value.precioTotal = form.value.precioUnitario * form.value.cantidad;
    this.ventaService.createVenta(form.value, form.value._id).subscribe(
      (res) => {
        this.getVentas();
        form.reset();
      },
      (err) => console.error(err)
    )
  }

  deleteVenta(id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.ventaService.deleteVenta(id).subscribe(
        (res) => {
          this.getVentas();
        },
        (err) => console.error(err)
      )
    }
  }

  editVenta(venta: venta){
    this.form.patchValue(venta);
  }

}
