import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Hola 2DAW";

  nombre = 'Pablo López';
  edad = 40;
  email = 'rpablo@gmail.com';
  sueldos = [1700, 1600, 1900];
  activo = true;

  placeh = "Escriba aquí un texto";
  deshabilitado = true;

  imagen = "https://solofruver.com/wp-content/uploads/2020/06/papa-amarilla-1.jpg";

  texto = "prueba, javi tiene cancer";

  constructor() {
    console.log("Constructor cargado");
    setTimeout(() => {
      this.deshabilitado = false
    },3000);
  }

  esActivo() {
    if (this.activo){
      return 'Trabajador Activo';
    }
    else{
      return 'Trabajador Inactivo';
    }
  }

  ultimos3Sueldos() {
    let suma = 0;
    for (let x = 0; x < this.sueldos.length; x++){
      suma += this.sueldos[x];
    }
    return suma;
  }

  cambiar() {
    this.nombre = "Paco";
  }

  cambiarImagen(){
    this.imagen = "https://static.nationalgeographicla.com/files/styles/image_3200/public/home_papa-leao-14.png?w=1900&h=1528&p=top";
  }

  listaalumnos = [
    {nombre : "maria", resultado : "no apto"},
    {nombre : "javi", resultado : "no apto"},
    {nombre : "carmen", resultado : "apto"}
  ];


  mostrar = false;
  mostrarTabla(){
    this.mostrar = !this.mostrar;
  }
}