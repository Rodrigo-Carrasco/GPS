import { DocenteService } from './../docentes/docente.service';
import { Component, OnInit } from '@angular/core';
import { IDocente } from '../docente';

@Component({
  selector: 'app-crear-docente',
  templateUrl: './crear-docente.component.html',
  styleUrls: ['./crear-docente.component.css']
})
export class CrearDocenteComponent implements OnInit{

  docentes: IDocente[]=[];
  docente:IDocente={docenteId:0,docenteNombre:"",docenteHoras:"",docenteDescripcion:""};
  nombre:string='';
  descripcion:string='';
  hora:string = '';

  constructor(private docenteService:DocenteService){  }
  ngOnInit(): void {

  }

  saveDocente(){

    let datos: any = {
      name: this.nombre,
      hora : this.hora,
      description : this.descripcion
    };
    this.docenteService.saveDocente(datos).subscribe(response=>{
      console.log('Datos ingresados',response);
    },
    error=>{
      console.error('Error al ingresar datos.',error)
    }
    );
  }
}
