import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/projects/models/projects';
import { ProjectsService } from 'src/app/projects/services/projects.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  projects: Projects[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  private loadProjects() {
    this.projectsService.getProjects().subscribe(resp => {
      if (resp) {
        this.projects = resp;  
        // console.log(resp);
      }
    })
  }

}
