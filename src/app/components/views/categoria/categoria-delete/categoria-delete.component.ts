import { Component } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent {

  categoria : Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private route:  ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.categoria.nome = this.route.snapshot.paramMap.get('nome')!
    this.categoria.descricao = this.route.snapshot.paramMap.get('descricao')!

    this.findById()

  }

  findById():void{
    this.service.findById(this.categoria.id!).subscribe(resposta =>{
      //console.log(resposta)
      this.categoria = resposta;
    })
  }

  delete():void{
    this.service.delete(this.categoria.id!).subscribe(resposta =>{
      this.router.navigate(['categorias'])
      this.service.mensagem("Categoria deletada com sucesso!")
      
    }, err => {      
      //console.log(err)
      this.service.mensagem(err.error.error)      

      //err.error.errors.forEach( (e: any) => 
        //this.service.mensagem(e)
      //);
    })
  }

  cancel():void{
    this.router.navigate(['categorias'])
  }
}
