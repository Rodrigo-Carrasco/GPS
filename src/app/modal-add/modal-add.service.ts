import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalAddService {
  public oculto: string = '';

  constructor() { }

  ocultarModal(){
    this.oculto = '';
    console.log('ocultar modal');
  }

  mostrarModal(){
    this.oculto = 'block';
    console.log('mostrar modal');
  }

  mostrarModal2(){
    this.oculto='block';
  }
  ocultarModal2(){
    this.oculto='';
  }
}
