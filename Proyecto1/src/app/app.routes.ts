import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Listado } from './components/listado/listado';
import { Detalle } from './components/detalle/detalle';

export const routes: Routes = [
    {path: 'inicio', component: Inicio},
    {path: 'listado', component: Listado},
    {path: 'detalle/:id', component: Detalle},

    // rutas especiales, siempre al final por que se lee de arriba abajo
    {path: '', redirectTo: 'inicio', pathMatch: "full"}, // muestra por defecto
    {path: '**', component: Inicio} // muestra si no esixte
];
