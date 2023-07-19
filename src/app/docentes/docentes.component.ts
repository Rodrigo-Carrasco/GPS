import { ModalAddService } from './../modal-add/modal-add.service';
import { Component, OnInit, Input } from '@angular/core';
import { IDocente } from '../docente';
import { DocenteService } from './docente.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit{

  docentes: IDocente[]=[];
  idEditar:number=0;
  docente:IDocente={docenteId:0,docenteNombre:"",docenteHoras:"",docenteDescripcion:""};

  constructor(private docenteService: DocenteService, private modalAddService:ModalAddService) {}

  ngOnInit(): void {
    this.getDocentes();
  }

  updateDocente(){
    this.docenteService.updateDocente(this.docente.docenteId, this.docente).subscribe(() => {
      return this.getDocentes();
    })
  }

  saveDocente(){
    this.docenteService.saveDocente(this.docente).subscribe(() => {
      return this.getDocentes();
    })
  }

  deleteDocente(id:number){
    this.docenteService.deleteDocente(id).subscribe(()=>{
      return this.docenteService.getDocentes().subscribe((res:any[])=>{
        this.docenteService.docentes=res;
        this.docenteService.filteredDocentes=res;
      },
      err=>console.log(err));
    })
  }

  cargarDato(docente:IDocente){
    this.docente=docente;
  }

  getDocentes(){
    this.docenteService.getDocentes().subscribe((res: any[]) => {
      this.docentes = res;
      console.log(this.docentes);
      this.docenteService.filteredDocentes = res;
    },
    err => console.log(err));
  }

  abrirModal(){
    this.modalAddService.mostrarModal2();
  }


}
