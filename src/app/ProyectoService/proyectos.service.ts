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
  private apiUrlSprints = 'http://localhost:3000/api/sprints';
  private apiUrlItems = 'http://localhost:3000/api/item';

  constructor(private http: HttpClient) { }

  createProject(project: any): Observable<any> {
    return this.http.post(this.apiUrl, project);
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSprints(proyecto: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlSprints}/${proyecto}`);
  }

  getSprintsNames(proyecto: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlSprints}/nombres/${proyecto}`);
  }
  createSprint(sprint: any): Observable<any> {
    return this.http.post(this.apiUrlSprints, sprint);
  }

  getItems(proyecto: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlItems}/${proyecto}`);
  }

  getItemsForId(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlItems}/uid/${id}`);
  }

  getItemsForProyecSprint(proyecto: string,sprint : string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlItems}/forsprint/${proyecto}/${sprint}`);
  }

  getItemsForSprint(proyecto: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlItems}/notbacklog/${proyecto}`);
  }

  createItem(item: any): Observable<any> {
    return this.http.post(this.apiUrlItems, item);
  }

  updateItems(uid: string, sprint: string): Observable<any> {
    const url = `${this.apiUrlItems}/update/${uid}`;
    const body = { sprint };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, body, { headers });
  }
}
