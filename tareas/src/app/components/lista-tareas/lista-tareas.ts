import { Component, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-lista-tareas',
  imports: [FormField],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css',
})

export class ListaTareas {
  // 1. Definimos el "Estado de la Tarea" actual (lo que el usuario está escribiendo)
  // Es un Signal que contiene un objeto plano.
  tareaModel = signal({
    nombre: '',
    estado: false,
  });
  
  // 2. form() toma el signal del objeto (tareaModel) y lo convierte en un formulario reactivo necesario para poder usar [field] en el HTML.
  tareaForm = form(this.tareaModel);

  // 3. Definimos el array de tareas como un signal que almacena el array de todas las tareas añadidas (inicialmente vacío)
  listaTareas = signal<Tarea[]>([]);

  anadirTarea() {
    // Comprobamos si el campo nombre tiene contenido (accediendo al valor del Signal)
    if (this.tareaModel().nombre != '') {
      //el operador "spread" (...) copia el contenido del array existente y añade al final el nuevo objeto pasandolo a array
      this.listaTareas.update((lista) => [...lista, { ...this.tareaModel() }]);
      // Reseteamos el formulario a su estado inicial
      // Esto actualizará automáticamente el formulario y el input en el HTML
      this.tareaModel.set({
        nombre: '',
        estado: false,
      });
    }
  }

  eliminarTarea(indice : number){
    this.listaTareas.update(listaActual => listaActual.filter((tarea, posicion) => posicion != indice))
  };

  marcarTarea(indice : number){
    let tarea = this.listaTareas()[indice];
    tarea.estado = !tarea.estado;
    this.listaTareas.set([...this.listaTareas()]);
  }
}
