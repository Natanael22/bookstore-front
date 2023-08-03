import { Component } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];

  categorias: Categoria[] = []

  constructor(private service: CategoriaService, private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {
      //console.log(resposta);
      this.categorias = resposta;
    })
  }

  navegarCreate(){
    this.router.navigate(["categorias/create"])
  }
}
