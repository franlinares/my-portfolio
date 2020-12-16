import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Projects } from 'src/app/projects/models/projects';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public url: 'https://europe-west3-rock-palisade-293917.cloudfunctions.net/getProjects';

  constructor(private http: HttpClient) { }
}
