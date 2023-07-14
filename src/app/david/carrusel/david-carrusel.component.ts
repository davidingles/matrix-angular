import { Component } from '@angular/core';

@Component({
  selector: 'david-carrusel',
  templateUrl: './david-carrusel.component.html',
  styleUrls: ['./david-carrusel.component.css']
})
export class DavidCarruselComponent {

}

// const grande = document.querySelector('.dil-grande')
// const puntos = document.querySelectorAll('.dil-punto')

// puntos.forEach((punto, i) => {
//     let posicion = i
//     let op = `${posicion * -50}%`


//     punto.addEventListener('click', ()=>{
//         grande.style.transform = `translateX(${op})`
        
//         puntos.forEach((punto,i)=>{
//             punto.classList.remove('is-active')
//         })
//         punto.classList.add('is-active')
//     })
// })