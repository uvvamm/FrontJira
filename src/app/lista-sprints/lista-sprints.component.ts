import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from '../ProyectoService/proyectos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-sprints',
  standalone: false,
  templateUrl: './lista-sprints.component.html',
  styleUrl: './lista-sprints.component.scss',
})
export class ListaSprintsComponent implements OnInit {
  sprints: any;
  projectName: any;

  constructor(
    private projectService: ProyectosService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  //correr getsprint antes de renderizar

  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get('projecto');
    this.getSprints();
    console.log(this.sprints.length);
  }

  getSprints(): void {
    this.projectService.getSprints(this.projectName).subscribe(
      (sprints) => {
        this.sprints = sprints;
      },
      (error) => {
        console.error('Error al obtener los sprints:', error);
      }
    );
  }

  verDetalles(Proyecto: string): void {
    this.router.navigate(['/', Proyecto]);
  }

  agregarSprint(Proyecto: string): void {
    this.router.navigate(['/crear-sprint', Proyecto]);
  }
}
