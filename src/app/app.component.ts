import { Component, VERSION, OnInit } from '@angular/core';
import { IDocente } from './docente';
import { DocenteService } from './docentes/docente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sistema-Docente';
  name = 'Angular' + VERSION.major;
  _listFilter:string="";
  filteredDocentes:IDocente[]=[];
  docentes: IDocente[]=[];

  constructor(private docenteService:DocenteService){}
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredDocentes = this.listFilter ? this.performFilter(this.listFilter) : this.docentes;
  }

  performFilter(filterBy: string): IDocente[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.docentes.filter((product: IDocente) =>
      product.docenteNombre.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }

  ngOnInit(): void{
    this.docenteService.getDocentes().subscribe( (res : any[]) => {
      this.docentes = res;
      this.filteredDocentes = res;
      console.log(this.docentes);
    },
    err => console.log(err)
    )
  }

  guardarProducto(docente: IDocente) {
    this.docenteService.saveDocente(docente).subscribe(() => {
      return this.docenteService.getDocentes().subscribe((res: any[]) => {
        this.docentes = res;
        this.filteredDocentes = res;
      },
      err => console.log(err));
    })
  }
}
