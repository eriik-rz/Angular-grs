import { Component, computed, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-listado',
  imports: [FormField],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {
  filtroModel = signal({
    sexo: "Todos",
  })

  filtroForm = form(this.filtroModel);

  empleados = signal<Empleado[]>([
    { id: 1, nombre: 'Juan', apellido: 'Pérez', sexo: 'Masculino', sueldo: 2500 },
    { id: 2, nombre: 'Ana', apellido: 'García', sexo: 'Femenino', sueldo: 3000 },
    { id: 3, nombre: 'Luis', apellido: 'López', sexo: 'Masculino', sueldo: 2200 },
    { id: 4, nombre: 'María', apellido: 'Rodríguez', sexo: 'Femenino', sueldo: 3500},
  ]);


  // computed es un metodo de los signals, los signals se llaman con () al final como por ejemplo this.empleados()
  total = computed(() => 
    this.empleados().length
  );


  masculinos = computed(() =>
    this.empleados().filter(e => e.sexo === 'Masculino').length
  );


  femeninos = computed(() =>
    this.empleados().filter(e => e.sexo === 'Femenino').length
  );


  // propiedad de la clase
  empleadosFiltrados = signal<Empleado[]>(this.empleados());

  // funcion para filtrar cuando se clique
  filtrar(){
    let sexo = this.filtroForm.sexo().value();

    console.log(sexo);

    // array de tipo de la interfaz vacío
    let resultado : Empleado[] = [];

    if (sexo == "Todos"){

      for (let i = 0; i < this.empleados().length; i++){
        resultado.push(this.empleados()[i])
      };

    } else{

      for (let i = 0; i < this.empleados().length; i++){
        if(this.empleados()[i].sexo == sexo){
          resultado.push(this.empleados()[i]);
        }
      }

    }

    this.empleadosFiltrados.set(resultado);
  }

}

