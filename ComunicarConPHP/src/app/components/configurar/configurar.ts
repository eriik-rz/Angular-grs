import { Component, inject, signal, OnInit, computed } from '@angular/core';
import { ArticulosService } from '../../articulos-service';
import { Articulo } from '../../models/Articulo';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-configurar',
  standalone: true,
  imports: [FormField],
  templateUrl: './configurar.html',
  styleUrl: './configurar.css',
})
export class Configurar implements OnInit {

  // Inyectamos el servicio de artículos usando inject
  private artServicio = inject(ArticulosService);

  // Signal que mantiene el listado completo de artículos
  articulos = signal<Articulo[]>([]);

  // Signal que representa el artículo que estamos editando
  artEdicionModel = signal<Articulo>({
    codigo: 0,
    descripcion: '',
    precio: 0
  });

  // Creamos el formulario basado en el signal anterior
  artEdicionForm = form(this.artEdicionModel);

  // Al iniciar el componente, cargamos todos los artículos
  ngOnInit() {
    this.recuperarTodos();
  }

  // Recupera todos los artículos del backend y actualiza el signal "articulos"
  recuperarTodos() {
    this.artServicio.recuperarTodos().subscribe(res =>
      this.articulos.set(res)
    );
  }

  // Elimina un artículo por su código
  baja(codigo: number) {
    this.artServicio.baja(codigo).subscribe(() =>
      this.recuperarTodos()
    );
  }

  // Confirmar borrado desde el modal
  confirmarBaja(codigo: number) {
    this.baja(codigo);
  }

  abrirModal(articulo: Articulo) {
    this.artEdicionModel.set(articulo);
  }

  // Selecciona un artículo para editarlo
  seleccionar(articulo: Articulo) {
    this.artEdicionModel.set({ ...articulo });
  }

  // Envía los cambios del formulario al backend
  modificacion() {
    this.artServicio.modificacion(this.artEdicionModel()).subscribe((datos: any) => {
      if (datos.resultado === 'OK') {
        alert(datos.mensaje);
        this.recuperarTodos();
      }
    });
  }




  // paginación
  
  // Página actual
  paginaActual = signal(1);

  // Número de elementos por página
  elementosPorPagina = signal(5);

  // Articulos a mostrar según la página actual
  articulosPaginados = computed(() => {
    const inicio = (this.paginaActual() - 1) * this.elementosPorPagina();
    const fin = inicio + this.elementosPorPagina();
    return this.articulos().slice(inicio, fin);
  });

  // Total de páginas
  totalPaginas = computed(() =>
    Math.ceil(this.articulos().length / this.elementosPorPagina())
  );

  // Ir a la página anterior
  paginaAnterior() {
    if (this.paginaActual() > 1) {
      this.paginaActual.update(p => p - 1);
    }
  }

  // Ir a la página siguiente
  paginaSiguiente() {
    if (this.paginaActual() < this.totalPaginas()) {
      this.paginaActual.update(p => p + 1);
    }
  }

  // Cambiar a una página concreta
  cambiarPagina(pagina: number) {
    this.paginaActual.set(pagina);
  }
  
}
