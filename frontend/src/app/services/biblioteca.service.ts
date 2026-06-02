import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Biblioteca } from '../models/biblioteca.model';

@Injectable({ providedIn: 'root' })
export class BibliotecaService {
  private url = 'http://localhost:8080/api/bibliotecas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>(this.url);
  }

  crear(b: Biblioteca): Observable<Biblioteca> {
    return this.http.post<Biblioteca>(this.url, b);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
