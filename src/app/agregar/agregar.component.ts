import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from '../ProyectoService/proyectos.service';

@Component({
  selector: 'app-agregar',
  standalone: false,
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.scss',
})
export class AgregarComponent {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectService: ProyectosService
  ) {
    this.projectForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      this.projectService.createProject(formData).subscribe(
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
