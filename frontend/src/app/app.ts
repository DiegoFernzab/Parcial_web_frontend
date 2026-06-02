import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/">Bibliotecas</a> |
      <a routerLink="/libros">Libros</a>
    </nav>
    <router-outlet />
  `,
  styles: [`nav { padding: 8px; background: #ddd; margin-bottom: 12px; } a { margin-right: 8px; }`]
})
export class App {}
