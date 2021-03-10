import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Es necesario importar el componente
import { EmployeeComponent } from './component/employee/employee.component';
import { PersonaComponent } from './component/persona/persona.component';
import { ProductoComponent } from './component/producto/producto.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { VentasComponent } from './component/ventas/ventas.component';


//Se crea un array de las rutas que queremos generar en nuestra aplicación
//routes es un array de objetos de tipo Routes, inicialmente vacío, luego se añade al array los componentes 
//que corresponden a cada ruta en el menú.
//path: corresponde a la ruta que queremos configurar, component: corresponde al componente asociado a la ruta
const routes: Routes = [
  { path: '', component: VentasComponent},
  { path: 'empleados', component: EmployeeComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'personas', component: PersonaComponent },
  { path: 'mainnav',  component: MainNavComponent },
  { path: 'ventas', component: VentasComponent }
];

@NgModule({
  //Importamos las rutas de Angular
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
