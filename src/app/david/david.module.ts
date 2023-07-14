import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DavidCarruselComponent } from './carrusel/david-carrusel.component';
import { DavidSidebarComponent } from './sidebar/david-sidebar.component';


@NgModule({
  declarations: [
    DavidCarruselComponent,
    DavidSidebarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DavidSidebarComponent
  ]
})
export class DavidModule { }
