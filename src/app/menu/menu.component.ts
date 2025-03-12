import { Component, OnInit } from '@angular/core'
import { ProyectosService } from '../ProyectoService/proyectos.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  projects: any[] = [];
  constructor(private projectService: ProyectosService,private router: Router) { }

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

  verSprints(proyecto: string): void {
    console.log('verSprints', proyecto);
    this.router.navigate(['/lista-sprints', proyecto]);
  }

  productBacklog(proyecto: string): void {
    this.router.navigate(['/lista-product-backlog', proyecto]);
  }

  

}
