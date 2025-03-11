import { Component, OnInit } from '@angular/core'
import { ProyectosService } from '../ProyectoService/proyectos.service';
@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  projects: any[] = [];
  constructor(private projectService: ProyectosService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(
      projects => {
        this.projects = projects;
      },
      error => {
        console.error('Error al obtener los proyectos:', error);
      }
    );
  }

}
