import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaSprintsComponent } from './lista-sprints/lista-sprints.component';
import { CrearItemComponent } from './crear-item/crear-item.component';
import { CrearSprintComponent } from './crear-sprint/crear-sprint.component';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaProducBacklogComponent } from './lista-produc-backlog/lista-produc-backlog.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { SeleccionarSprintComponent } from './seleccionar-sprint/seleccionar-sprint.component';
import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AgregarComponent,
    ListaSprintsComponent,
    CrearItemComponent,
    CrearSprintComponent,
    ListaProducBacklogComponent,
    ListaItemsComponent,
    SeleccionarSprintComponent
  ],
  imports: [
    BrowserModule,
    NgxSonnerToaster,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

