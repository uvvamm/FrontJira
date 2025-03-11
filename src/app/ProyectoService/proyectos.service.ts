import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Proyecto {
  nombre: string;
  descrip: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiUrl = 'http://localhost:3000/api/projects';

  constructor(private http: HttpClient) { }

  createProject(project: any): Observable<any> {
    return this.http.post(this.apiUrl, project);
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
