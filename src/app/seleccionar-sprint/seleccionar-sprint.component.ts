import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { ProyectosService } from '../ProyectoService/proyectos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seleccionar-sprint',
  standalone: false,
  templateUrl: './seleccionar-sprint.component.html',
  styleUrl: './seleccionar-sprint.component.scss'
})
export class SeleccionarSprintComponent implements OnInit {

  constructor(
    private projectService: ProyectosService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}
  idItem: any;
  proyectoName: any;
  items: any;
  sprints: any;

  selectedSprint: string = ''; // Guarda el nombre del sprint seleccionado
  

  ngOnInit(): void {
    this.idItem = this.route.snapshot.paramMap.get('id');
    this.proyectoName = this.route.snapshot.paramMap.get('proyecto');
   this.getItemsForId();
   this.getSprints();
  }


  getItemsForId(): void {
    this.projectService.getItemsForId(this.idItem).subscribe(
      (item) => {
        this.items = item;
      },
      (error) => {
        console.error('Error al obtener los sprints:', error);
      }
    );
  }

  getSprints(): void {
    this.projectService.getSprints(this.proyectoName).subscribe(
      (sprints) => {
        this.sprints = sprints;
      },
      (error) => {
        console.error('Error al obtener los sprints:', error);
      }
    );
  }

 

  updateItem(): void {
    if (!this.selectedSprint) {
      alert('Por favor, selecciona un sprint antes de actualizar.');
      return;
    }
  
    if (!this.idItem) {
      console.error('El ID del ítem es obligatorio para la actualización.');
      return;
    }
  
    this.projectService.updateItems(this.idItem, this.selectedSprint).subscribe(
      response => {
        console.log('Sprint actualizado correctamente', response);
        alert('El sprint ha sido actualizado con éxito.');
      },
      error => {
        console.error('Error al actualizar el sprint', error);
        alert('Hubo un error al actualizar el sprint. Inténtalo de nuevo.');
      }
    );
  }
  }



