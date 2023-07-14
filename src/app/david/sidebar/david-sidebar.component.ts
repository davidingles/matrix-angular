import { Component, OnInit } from '@angular/core';
import { menu } from './data'

@Component({
  selector: 'david-sidebar',
  templateUrl: './david-sidebar.component.html',
  styleUrls: ['./david-sidebar.component.css']
})
export class DavidSidebarComponent implements OnInit {
  
  constructor() { }
  ngOnInit() { 
    this.bajar()
    // this.midu()
  }

  public menu = menu
  public svg = '../../../assets/home.svg'
  public isDesplegado: boolean = false
  public svgColor: string = 'black'

  bajar(){
    const nav = document.querySelector('#dil-nav')
    const menu = document.querySelector('#menu')
    window.addEventListener('load', ()=>{
      nav?.classList.add('visible')
      menu?.classList.add('img2')
    })
  }
  desplazar(){
    const logo = document.querySelector('#logo')
    const side = document.querySelector('#sidebar')
    const menu = document.querySelector('#menu')
    this.isDesplegado = !this.isDesplegado
    this.isDesplegado ? (this.svgColor = 'orange') : (this.svgColor = "black")
    // this.isDesplegado ? (logo?.classList.add('logo3')) : (logo?.classList.add('logo2')) ;
  }



}


