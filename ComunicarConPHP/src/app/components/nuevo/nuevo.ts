import { Component, inject, signal } from '@angular/core';
import { ArticulosService } from '../../articulos-service';
import { form, FormField } from '@angular/forms/signals';

@Component({
selector: 'app-nuevo',
imports: [FormField],
templateUrl: './nuevo.html',
styleUrl: './nuevo.css',
})

export class Nuevo {

  botonGuardarPulsado:boolean = false; // controla si se ha pulsado sobre el boton

  
  private artServicio = inject(ArticulosService);
  // 1. Creamos el objeto Signal con las propiedades a controlar y su estado inicial
  articuloModel = signal({
    descripcion: '',
    precio: 0
  });

  // 2. Creamos el Form Signal
  articuloForm = form(this.articuloModel);

  mostrarAlerta: boolean = false;

  alta(event: Event) { // pasamos el evento
    event.preventDefault(); // previnimos las acciones del html

    this.botonGuardarPulsado = true;

    // Revisamos si hay errores en cualquier campo
    const hayErrores =
      this.articuloForm.descripcion().errors().length > 0 ||
      this.articuloForm.precio().errors().length > 0;

    if (hayErrores) {
      return; // no guardamos si hay errores
    }

    // Accedemos al valor actual del signal
    this.artServicio.alta(this.articuloModel() as any).subscribe((datos: any) => {
      if (datos.resultado === 'OK') {
        this.botonGuardarPulsado = false; // boton a false despues de ser pulsado

        // Mostramos el banner
        this.mostrarAlerta = true;
        // Reseteamos el signal (el HTML se limpia solo)
        this.articuloModel.set({ descripcion: '', precio: 0 });
      }
    });
  }

  desactivarBanner() {
    this.mostrarAlerta = false;
  }

}
