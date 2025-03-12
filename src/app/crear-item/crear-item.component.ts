import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from '../ProyectoService/proyectos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-item',
  standalone: false,
  templateUrl: './crear-item.component.html',
  styleUrl: './crear-item.component.scss'
})
export class CrearItemComponent implements OnInit {
  itemsForm: FormGroup;
  projectName: any;
  SprintDefault= "Backlog";

  constructor(
    private fb: FormBuilder,
    private projectService: ProyectosService,
    private route: ActivatedRoute
  ) {
    this.itemsForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }
    ngOnInit(): void {
      this.projectName = this.route.snapshot.paramMap.get('proyecto') ;
    }

    onSubmit() {
      if (this.itemsForm.valid) {
        const formData = this.itemsForm.value;
        const id= Math.random().toString(36).substring(2);
        //agrega al formData el campo proyecto  this.projectName
        formData.proyecto = this.projectName;
        formData.sprint = this.SprintDefault;
        //generar uid aleatorio
        formData.uid = id;
        this.projectService.createItem(formData).subscribe(
          (response) => {
            console.log('Respuesta del servidor:', response);
            alert('Proyecto creado con éxito');
            this.goBack();
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

    goBack() {
      window.history.back();
    }
}


