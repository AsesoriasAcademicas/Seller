import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
//En el servicio tengo que hacer el import del modelo de datos
import { employee } from '../models/employee';

//El servicio se autoimporta, no es necesario importarlo en el app.module.ts
//La anotación @Injectable indica que el servicio puede ser inyectado mediante inyección de dependencias
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}
  //Con eso listo ya puedes realizar llamadas HTTP
  /**
   * Ahora para realizar llamadas http podemos invocar cualquiera de los siguiente métodos definidos en el HttpClient:
   * get() - post() - put() - delete()
   */
  URL_API = 'http://localhost:4000/api/employees'

  selectedEmployee: employee = {
    usuario: '',
    contrasenia: '',
    tipoEmpleado: '',
  };
  employes : employee[];

  getEmployees(){
    return this.http.get<employee[]>(this.URL_API);
  }

  getEmployeesByIdPersona(){
    return this.http.get(this.URL_API);
  }

  //, idPersona: String
  createEmployees(employee: employee, idPersona: string){
    return this.http.post(`${this.URL_API}/${idPersona}`, employee);
  }

  deleteEmployees(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  updateEmployees(employee: employee){
    return this.http.put(`${this.URL_API}/${employee._id}`, employee)
  }
}
