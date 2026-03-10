// Injectable permite que el servicio pueda inyectarse en el componente
import { Injectable } from '@angular/core';
// HttpClient se usa para hacer peticiones HTTP (GET, POST, etc.)
import { HttpClient } from '@angular/common/http';
// Observable es el tipo que devuelve HttpClient
import { Observable } from 'rxjs';
import { Articulo } from './models/Articulo';

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {
  // URL base donde están los scripts PHP del backend
  private url = 'http://localhost/proyectoAngular/';

  // Inyectamos HttpClient mediante el constructor
  constructor(private http: HttpClient) { }

  /**
  * Recupera todos los artículos del backend
  * Devuelve un Observable con un array de Articulo
  */
  recuperarTodos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(`${this.url}recuperartodos.php`);
  }

  /**
  * Da de alta un nuevo artículo
  * Recibe un Articulo y devuelve la respuesta del backend
  */
  alta(articulo: Articulo): Observable<any> {
    return this.http.post<any>(`${this.url}alta.php`, articulo);
  }

  /**
  * Elimina un artículo por su código
  */
  baja(codigo: number): Observable<any> {
    return this.http.get<any>(`${this.url}baja.php?codigo=${codigo}`);
  }

  /**
  * Modifica un artículo existente
  */
  modificacion(articulo: Articulo): Observable<any> {
    return this.http.post<any>(`${this.url}modificacion.php`, articulo);
  }
}