import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { EmployeeService } from '../../services/employee.service';
import { DatosPersonaService } from '../../services/datos-persona.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { persona } from '../../models/persona';
import { FormatdatePipe } from '../../pipes/formatdate.pipe';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  form: FormGroup;
  formEmpleado: FormGroup;

  public submitted = false;

  public isDisplayed: boolean = false;

  public tipoEmpleado = ['Administrador','Vendedor','Cliente'];

  //Definimos la propiedad filterPost que usa nuestro pipe filter
  filterPost = "";

  //inyectaremos FormBuilder en el constructor mediante inyección de dependencia
  constructor(public personaService: PersonaService, public employeeService: EmployeeService, public formBuilder: FormBuilder, public datosPersonaService: DatosPersonaService) { }


showForm(){
  if(this.isDisplayed){
    this.isDisplayed = false;
  } else {
    this.isDisplayed = true;
  }
}

  ngOnInit(): void {
    this.getPersonas();


    //Validación sincrónica, no necesitamos consultar ninguna fuente externa para comprobar los datos
    //Importaremos el módulo Validators en el componente, la cual contiene las siguientes validaciones predefinidas
    /**
     * required : el control de formulario no debe tener un campo vacío.
       MinLength: el control de formulario debe tener un valor de la longitud mínima especificada.
       MaxLength: el control de formulario debe tener un valor de la longitud máxima especificada.
       pattern: el valor de control de formulario debe coincidir con un valor regex dado.
     *  */
    this.form = this.formBuilder.group({
      _id: [],
      identificacion: ['', [Validators.required, Validators.pattern('^([0-9]{6,10})*$')]],
      nombre: ['', [Validators.required, Validators.pattern('^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s])*$')]],
      apellidos: ['', [Validators.required, Validators.pattern('^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s])*$')]],
      email: ['', [Validators.required, Validators.email]],
      fechaNac: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.pattern('^(8+[0-9]{6}|3+[0-9]{9})$')]],
      direccion: ['', [Validators.required]],
    });

    this.formEmpleado = this.formBuilder.group({
      _id: [],
      usuario: ['', [Validators.required, Validators.pattern('^([a-zA-ZñÑáéíóúÁÉÍÓÚ])*$')]],
      contrasenia: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])\\S{8,15}$')]],
      tipoEmpleado: ['', [Validators.required, Validators.pattern('^([a-zA-ZñÑáéíóúÁÉÍÓÚ\\s])*$')]]
    });
  }

  get validacion(){ return this.form.controls;}
  get validacionEmpleado(){ return this.formEmpleado.controls;}

  getPersonas(){
    this.personaService.getPersonas().subscribe(
      (res) => {
        this.personaService.personas = res;
      },
      (err) => console.error(err)
    )
  }

  resetForm(form: FormGroup) {
    form.reset();
  }

  addPersona(form: FormGroup) {
    this.submitted = true;
    if(this.form.invalid){
      return;
    } else {
      if(form.value._id){
        this.personaService.updatePersona(form.value).subscribe(
          (res) =>{
            console.log(res);
            this.getPersonas();
            form.reset();
            this.showForm();
            this.formEmpleado.patchValue(res);
          },
          (err) => console.error(err)
        )
      } else {
        this.personaService.createPersona(form.value).subscribe(
          (res) => {
            console.log(res);
            this.datosPersonaService.seIdentificacion(form.value.identificacion);
            this.getPersonas();
            form.reset();
            this.showForm();
          },
          (err) => console.error(err)
        )
      }
    }
  }

  addEmployee(formEmpleado: FormGroup ) {
    this.submitted = true;
    if(formEmpleado.invalid){
      return;
    } else {
      if(formEmpleado.value._id){
        this.employeeService.updateEmployees(formEmpleado.value).subscribe(
          (res) =>{
            formEmpleado.reset();
            this.showForm();            
          },
          (err) => console.error(err)
        )
      } else {
        this.employeeService.createEmployees(formEmpleado.value, this.datosPersonaService.getIdentificacion()).subscribe(
          (res) => {
            formEmpleado.reset();
            this.showForm();
          },
          (err) => console.error(err)
        )
      }
    }
  }

  deletePersona(id: string) {
    if(confirm('Are you sure you want to delete it?')) {
      this.personaService.deletePersona(id).subscribe(
        (res) => {
          this.getPersonas();
        },
        (err) => console.error(err)
      )
    }
  }

  editPersona(persona: persona) {
    var formatdatePipe = new FormatdatePipe();
    persona.fechaNac = formatdatePipe.transform(persona.fechaNac, 'yyyy-MM-dd');
    this.form.patchValue(persona);
  }
}
