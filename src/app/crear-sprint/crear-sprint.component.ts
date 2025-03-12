import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from '../ProyectoService/proyectos.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crear-sprint',
  standalone: false,
  templateUrl: './crear-sprint.component.html',
  styleUrl: './crear-sprint.component.scss'
})
export class CrearSprintComponent implements OnInit {
  sprintsForm: FormGroup;
  projectName: any;
  constructor(
    private fb: FormBuilder,
    private projectService: ProyectosService,
    private route: ActivatedRoute
  ) {
    this.sprintsForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
    });


  }
  ngOnInit(): void {
    this.projectName = this.route.snapshot.paramMap.get('proyecto') ;
  }

  onSubmit() {
    if (this.sprintsForm.valid) {
      const formData = this.sprintsForm.value;
      //agrega al formData el campo proyecto  this.projectName
      formData.proyecto = this.projectName;
      this.projectService.createSprint(formData).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          alert('Proyecto creado con éxito');
        },
        (error) => {
          console.error('Error al crear el proyecto:', error);
          alert('Ocurrió un error al crear el proyecto');
        }
      );
    } else {
      console.log('Formulario no válido');
      alert('Por favor, completa todos los campos.');
    }
  }
}
