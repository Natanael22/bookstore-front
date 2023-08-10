import { Component } from '@angular/core';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-ler',
  templateUrl: './livro-ler.component.html',
  styleUrls: ['./livro-ler.component.css']
})
export class LivroLerComponent {

  id_cat = ''  

  livro: Livro = {
    id: '',
    titulo:'',
    nomeAutor:'',
    texto:''
  }
  
  
  
  constructor(private service: LivroService,private route: ActivatedRoute, private router: Router){}

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.   

   this.id_cat = this.route.snapshot.paramMap.get("id_cat")!
   this.livro.id = this.route.snapshot.paramMap.get("id")!
   this.livro.nomeAutor = this.route.snapshot.paramMap.get("nomeAutor")!
   this.livro.texto = this.route.snapshot.paramMap.get("texto")!
   this.livro.titulo = this.route.snapshot.paramMap.get("titulo")!

   this.findById()
   console.log(this.livro)
 }

  update():void{
    this.service.update(this.livro).subscribe(resposta => {
      this.router.navigate([`/categorias/${this.id_cat}/livros`])
      //console.log(resposta)
      this.service.mensagem("Livro atualizado com sucesso")
    }, err => {
      this.router.navigate([`/categorias/${this.id_cat}/livros`])
      this.service.mensagem("erro inesperado")
    })
  }

  findById():void{
    this.service.findById(this.livro.id!).subscribe(resposta =>{
      this.livro = resposta
    })
  }
  cancel():void{
    this.router.navigate([`categorias/${this.id_cat}/livros`])
  }

}
