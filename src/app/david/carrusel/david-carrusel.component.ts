import { Component } from '@angular/core';

@Component({
  selector: 'david-carrusel',
  templateUrl: './david-carrusel.component.html',
  styleUrls: ['./david-carrusel.component.css']
})
export class DavidCarruselComponent {

  public isActive : boolean = false

  activar():void{
    const boton = document.querySelectorAll('box-puntos li')
    this.isActive = !this.isActive


  }
}

