import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environments';
import { Livro } from './livro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Livro[]>{
    const url = `${this.baseUrl}/livros`
    return this.http.get<Livro[]>(url);
  }

  create(livro: Livro):Observable<Livro>{
    const url = `${this.baseUrl}/livros`
    return this.http.post<Livro>(url,livro);
  }

  findById(id: String):Observable<Livro>{
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.get<Livro>(url);
  }

  delete(id: string):Observable<void>{
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.delete<void>(url);
  }
  
  update(id: string, livro: Livro):Observable<void>{
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.put<void>(url, livro);
  }
  
  mensagem(str: String): void{
    this._snack.open(`${str}`,'OK',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}
