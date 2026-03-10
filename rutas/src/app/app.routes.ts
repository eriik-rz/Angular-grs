import { Routes } from '@angular/router';
import { Contacto } from './components/contacto/contacto';
import { Acercade } from './components/acercade/acercade';

export const routes: Routes = [
    {path: 'contacto', component: Contacto},
    {path: 'acercade', component: Acercade},

    // rutas especiales, siempre al final por que se lee de arriba abajo
    {path: '', redirectTo: 'contacto', pathMatch: "full"}, // muestra por defecto
    {path: '**', component: Contacto} // muestra si no esixte
];
