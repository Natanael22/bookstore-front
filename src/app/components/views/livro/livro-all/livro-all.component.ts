import { Component } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-all',
  templateUrl: './livro-all.component.html',
  styleUrls: ['./livro-all.component.css']
})
export class LivroAllComponent {

  displayedColumns: string[] = ['id','titulo', 'nomeAutor', 'texto'];

  livros: Livro[] = []
  
  constructor(private service: LivroService){
    this.findAll()
  }

  findAll():void{
    this.service.findAll().subscribe(resposta => {
      this.livros = resposta
    })
  }
}
