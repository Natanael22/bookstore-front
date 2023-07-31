import { Component } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent {

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];

  categorias: Categoria[] = []

  constructor(private service: CategoriaService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(resposta => {

      console.log(resposta);
      this.categorias = resposta;
    })
  }
}
