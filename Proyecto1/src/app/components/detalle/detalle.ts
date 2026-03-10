import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle',
  imports: [RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {

  route = inject(ActivatedRoute);

  empleado: any = null; 

  listaEmpleados = [ 
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
  ];

  ngOnInit(){
     // Obtenemos el id del empleado 
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    // Buscamos el empleado en la lista de empleados 
    if (id) { 
      this.empleado = this.listaEmpleados.find(empleado => empleado.id === id); 
    } 
  }

}
