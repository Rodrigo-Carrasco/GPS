import { ModalAddService } from './modal-add.service';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent {
  public oculto:string='';
  constructor(private modalAddService:ModalAddService){}

  ocultarModal(){
    this.modalAddService.ocultarModal2;
  }
  mostrarModal(){
    this.oculto='block';
    console.log('mostrar modal');
  }
}
