import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DavidCarruselComponent } from './carrusel/david-carrusel.component';
import { DavidSidebarComponent } from './sidebar/david-sidebar.component';
import { DavidLayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    DavidCarruselComponent,
    DavidSidebarComponent,
    DavidLayoutComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DavidLayoutComponent
  ]
})
export class DavidModule { }
