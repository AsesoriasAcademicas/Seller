import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Para usar HttpClient de Angular en cualquier parte, tenemos que importar el módulo HttpClientModule
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ProductoComponent } from './component/producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from '@angular/material/checkbox';
//La clase "AppRoutingModule" del componente donde se configuran las rutas
import { AppRoutingModule } from './app-routing.module';
import { PersonaComponent } from './component/persona/persona.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FilterPipe } from './pipes/filter.pipe';
import { FormatdatePipe } from './pipes/formatdate.pipe';
import { VentasComponent } from './component/ventas/ventas.component';
import { DialogProductoComponent } from './component/dialog-producto/dialog-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ProductoComponent,
    MainNavComponent,
    PersonaComponent,
    FilterPipe,
    FormatdatePipe,
    VentasComponent,
    DialogProductoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCheckboxModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
