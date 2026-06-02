import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libro } from '../../models/libro.model';
import { Biblioteca } from '../../models/biblioteca.model';
import { LibroService } from '../../services/libro.service';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.scss'
})
export class LibrosComponent implements OnInit {
  libros: Libro[] = [];
  bibliotecas: Biblioteca[] = [];
  nuevo = { titulo: '', autor: '', categoria: '' };
  bibliotecaId = 0;

  constructor(
    private libroService: LibroService,
    private bibliotecaService: BibliotecaService
  ) {}

  ngOnInit() {
    this.cargar();
    this.bibliotecaService.listar().subscribe(data => this.bibliotecas = data);
  }

  cargar() {
    this.libroService.listar().subscribe(data => this.libros = data);
  }

  crear() {
    const body = { ...this.nuevo, biblioteca: { id: this.bibliotecaId } };
    this.libroService.crear(body).subscribe(() => {
      this.nuevo = { titulo: '', autor: '', categoria: '' };
      this.cargar();
    });
  }

  eliminar(id: number) {
    this.libroService.eliminar(id).subscribe(() => this.cargar());
  }
}
