import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado',
  imports: [RouterLink,FormField],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {

  // signal del elemento a observar (select)
  selectDepartamentos = signal({
    departamento : "Todos" // inicializamos en todos
  });

  departamentoForm = form(this.selectDepartamentos);
  
  listaEmpleados = signal([ 
    { id: 1,
      nombre: 'Ana',  
      apellido: 'García',  
      departamento: 'Sistemas',  
      correo:"empleado6@gmail.com", 
      foto: 'https://i.pravatar.cc/200?u=1'  
    }, 
    { id: 2,  
      nombre: 'Carlos',  
      apellido: 'Ruiz',  
      departamento: 'Recursos Humanos',  
      correo:"empleado6@gmail.com", 
      foto: 'https://i.pravatar.cc/200?u=2'   
    }, 
    { id: 3,  
      nombre: 'Laura',  
      apellido: 'Méndez',  
      departamento: 'Marketing',  
      correo:"empleado6@gmail.com", 
      foto: 'https://i.pravatar.cc/200?u=3'  
    }, 
    { id: 4,  
      nombre: 'Martina',  
      apellido: 'Jiménez',  
      departamento: 'Ventas',  
      correo:"empleado6@gmail.com", 
      foto: 'https://i.pravatar.cc/200?u=4'  
    }, 
    { id: 5,  
      nombre: 'Luis',  
      apellido: 'Torres',  
      departamento: 'Contabilidad',  
      correo:"empleado6@gmail.com", 
      foto: 'https://i.pravatar.cc/200?u=5'  
    }, 
    { id: 6,  
      nombre: 'Lucía',  
      apellido: 'López',  
      departamento: 'Contabilidad',  
      correo:"empleado6@gmail.com", 
      foto: 'https://i.pravatar.cc/200?u=6'  
    } 
  ]);


  listaEmpleadosFiltrados = signal<any[]>(this.listaEmpleados()); // <any> para que se le puedan pasar objetos

  // filtrar usuarios por categoria seleccionada y añadir al nuevo signal
  filtrar(departamento: string) {

    if (departamento === 'Todos') {
      this.listaEmpleadosFiltrados.set(this.listaEmpleados()); // guardamos este array
      return;
    }

    let filtrados = [];

    for (let i = 0; i < this.listaEmpleados().length; i++){
      if (this.listaEmpleados()[i].departamento == departamento){
        filtrados.push(this.listaEmpleados()[i]);
      }
    }

    this.listaEmpleadosFiltrados.set(filtrados); // guardamos este array
  }
}