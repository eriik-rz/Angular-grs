import { Routes } from '@angular/router';
import { Nuevo } from './components/nuevo/nuevo';
import { Menu } from './components/menu/menu';
import { Configurar } from './components/configurar/configurar';


export const routes: Routes = [
    {path: 'nuevo', component: Nuevo},
    {path: 'menu', component: Menu},
    {path: 'configurar', component: Configurar},

    // rutas especiales, siempre al final por que se lee de arriba abajo
    {path: '', redirectTo: 'nuevo', pathMatch: "full"}, // muestra por defecto
    {path: '**', redirectTo: 'nuevo', pathMatch: "full"} // muestra si no esixte
];
