import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router  } from '@angular/router';
import { ProyectosService } from '../ProyectoService/proyectos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-produc-backlog',
  standalone: false,
  templateUrl: './lista-produc-backlog.component.html',
  styleUrl: './lista-produc-backlog.component.scss'
})
export class ListaProducBacklogComponent implements OnInit {
  backlogs: any;
  itemsAsignados: any;
  projectName: any;
  sprintDefault= "Backlog";

  constructor(
    private projectService: ProyectosService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get('proyecto');
    this.getItems();
    this.getItemsBacklog();
    console.log(this.backlogs.length);
  }

  getItems(): void {
    this.projectService.getItemsForSprint(this.projectName).subscribe(
      (sprints) => {
        this.itemsAsignados = sprints;
      },
      (error) => {
        console.error('Error al obtener los sprints:', error);
      }
    );
  }

  getItemsBacklog(): void {
    this.projectService.getItemsForProyecSprint(this.projectName,this.sprintDefault).subscribe(
      (items) => {
        this.backlogs = items;
      },
      (error) => {
        console.error('Error al obtener los sprints:', error);
      }
    );
  }

  asignarItem(uid: string, proyecto: string): void {
    this.router.navigate(['/seleccionar-sprint', uid, proyecto]);
  }

  agregarItem(Proyecto: string): void {
    this.router.navigate(['/crear-item', Proyecto]);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
