import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../model/curriculo.model';

@Injectable({
  providedIn: 'root',
})
export class CurriculoService {
  private api = 'http://localhost:3005/curriculos';

  deleteCurriculo(id: number) {
    return this.excluir(id);
  }

  getCurriculos() {
    return this.listar();
  }

  constructor(private http: HttpClient) {}

  listar(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.api);
  }

  buscarPorId(id: number): Observable<Curriculo> {
    return this.http.get<Curriculo>(`${this.api}/${id}`);
  }

  cadastrar(curriculo: Curriculo): Observable<Curriculo> {
    return this.http.post<Curriculo>(this.api, curriculo);
  }

  editar(id: number, curriculo: Curriculo): Observable<Curriculo> {
    return this.http.put<Curriculo>(`${this.api}/${id}`, curriculo);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
