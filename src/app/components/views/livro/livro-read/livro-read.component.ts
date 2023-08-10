import { Component } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent {

  displayedColumns: string[] = ['id','titulo', 'livros','acoes'];

  livros: Livro[] = []

  id_cat: string = ""

  constructor(private service: LivroService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!
    this.findAllByCategoria();
  }

  findAllByCategoria(){
    this.service.findAllByCategoria(this.id_cat).subscribe(resposta => {
      //console.log(resposta);
      this.livros = resposta;
    })
  }

  navegarCreate(){
    this.router.navigate([`categorias/${this.id_cat}/livro/create`])
  }
}
