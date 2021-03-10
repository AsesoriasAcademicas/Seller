import { Component, OnInit, Input } from '@angular/core';
//En el componente tengo que hacer el import del servicio
import { EmployeeService } from '../../services/employee.service';
import { DatosPersonaService } from '../../services/datos-persona.service';
import { NgForm } from "@angular/forms";
import { employee } from '../../models/employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //Posteriormente ya podremos inyectar el servicio en el constructor del componente
  constructor(public employeeService: EmployeeService, public datosPersonaService: DatosPersonaService) { }

  //Aquí ubicamos el llamado para poner en marcha el servicio
  ngOnInit(): void {
    this.getEmployees();
  }

  //HttpClient usa Observables de RxJS. 
  //Los observables son una colección de futuros eventos que llegan de forma asíncrona.
  /**
   * Después de la llamada al método get() usamos subscribe. Con ese método te esperas a que la petición termine.
   * Cuando queramos llamar al servicio (siempre y cuando lo hayamos inyectado en el controlador), tenemos que 
   * subscribirnos para recibir la información.
   */

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      (res) => {
        this.employeeService.employes = res;
      },
      (err) => console.error(err)
    )
  }

  resetForm(form: NgForm){
    form.reset();
  }

  addEmployee(form: NgForm ){
    if(form.value._id){
      this.employeeService.updateEmployees(form.value).subscribe(
        (res) =>{
          this.getEmployees();
          form.reset();
        },
        (err) => console.error(err)
      )
    } else {
      this.employeeService.createEmployees(form.value, this.datosPersonaService.getIdentificacion()).subscribe(
        (res) => {
          this.getEmployees();
          form.reset();
        },
        (err) => console.error(err)
      )
    }
  }

  deleteEmployee(id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployees(id).subscribe(
        (res) => {
          this.getEmployees();
        },
        (err) => console.error(err)
      )
    }
  }

  editEmployee(employee: employee){
    this.employeeService.selectedEmployee = employee;
  }

}
