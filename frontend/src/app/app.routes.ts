import { Routes } from '@angular/router';
import { BibliotecasComponent } from './components/bibliotecas/bibliotecas.component';
import { LibrosComponent } from './components/libros/libros.component';

export const routes: Routes = [
  { path: '', component: BibliotecasComponent },
  { path: 'libros', component: LibrosComponent }
];
