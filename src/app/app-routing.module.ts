import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaSprintsComponent } from './lista-sprints/lista-sprints.component';
import { CrearItemComponent } from './crear-item/crear-item.component';
import { CrearSprintComponent } from './crear-sprint/crear-sprint.component';
import { ListaProducBacklogComponent } from './lista-produc-backlog/lista-produc-backlog.component';
import { SeleccionarSprintComponent } from './seleccionar-sprint/seleccionar-sprint.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'lista-sprints/:projecto', component: ListaSprintsComponent },
  { path: 'crear-item/:proyecto', component: CrearItemComponent },
  { path: 'crear-sprint/:proyecto', component: CrearSprintComponent },
  { path: 'seleccionar-sprint/:id/:proyecto', component: SeleccionarSprintComponent },
  { path: 'lista-product-backlog/:proyecto', component: ListaProducBacklogComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
