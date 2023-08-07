import { Component } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent {

  displayedColumns: string[] = ['id', 'nomeAutor', 'texto', 'titulo', 'acoes'];

  livros: Livro[] = []

  constructor(private service: LivroService, private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      //console.log(resposta);
      this.livros = resposta;
    })
  }

  navegarCreate(){
    this.router.navigate(["livros/create"])
  }
}
