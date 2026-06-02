import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Biblioteca } from '../../models/biblioteca.model';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-bibliotecas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bibliotecas.component.html',
  styleUrl: './bibliotecas.component.scss'
})
export class BibliotecasComponent implements OnInit {
  bibliotecas: Biblioteca[] = [];
  nueva: Biblioteca = { nombre: '', direccion: '', telefono: '', responsable: '' };

  constructor(private service: BibliotecaService) {}

  ngOnInit() { this.cargar(); }

  cargar() {
    this.service.listar().subscribe(data => this.bibliotecas = data);
  }

  crear(form: NgForm) {
    if (form.invalid) return;
    this.service.crear(this.nueva).subscribe(() => {
      this.nueva = { nombre: '', direccion: '', telefono: '', responsable: '' };
      form.resetForm();
      this.cargar();
    });
  }

  eliminar(id: number) {
    this.service.eliminar(id).subscribe(() => this.cargar());
  }
}
