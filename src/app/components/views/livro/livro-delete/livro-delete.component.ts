import { Component } from '@angular/core';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent {

  id_cat: string = ''

  livro: Livro = {
    id: '',
    titulo:'',
    nomeAutor:'',
    texto:''
  }
  constructor(private service: LivroService,private route: ActivatedRoute, private router: Router){
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!
    this.livro.id = this.route.snapshot.paramMap.get("id")!
    this.livro.nomeAutor = this.route.snapshot.paramMap.get("nomeAutor")!
    this.livro.texto = this.route.snapshot.paramMap.get("texto")!
    this.livro.titulo = this.route.snapshot.paramMap.get("titulo")!
    
    this.findById()
  }


  findById():void{
    this.service.findById(this.livro.id!).subscribe(resposta =>{
      this.livro = resposta
    })
  }

  delete():void{
    this.service.delete(this.livro.id!).subscribe(resposta => {
      this.router.navigate([`/categorias/${this.id_cat}/livros`])
      this.service.mensagem("Livro deletado com Sucesso")
    })
  }

  cancel():void{
    this.router.navigate([`categorias/${this.id_cat}/livros`])
  }
}
