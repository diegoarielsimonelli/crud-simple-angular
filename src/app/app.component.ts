import { Component } from '@angular/core';
import { Empleados } from './models/empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud-simple';
  selectedEmpleado: Empleados = new Empleados();
  empleadoArray: Empleados[] = [
    { id: 1, name: 'Diego', country: 'Argentina' },
    { id: 2, name: 'Carolina', country: 'Chile' },
  ];
  addOrEdit(){
    if(this.selectedEmpleado.id===0){
      this.selectedEmpleado.id= this.empleadoArray.length+1
      this.empleadoArray.push(this.selectedEmpleado)
    }
    this.selectedEmpleado = new Empleados();
  }
  openForEdit(empleado:Empleados){
this.selectedEmpleado=empleado
  }
  delete(){
   if(confirm("¿Confirmas la operación?")){
    this.empleadoArray=this.empleadoArray.filter(x=>x!==this.selectedEmpleado)
    this.selectedEmpleado = new Empleados();
   }
  }
}
