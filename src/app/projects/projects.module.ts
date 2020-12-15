import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from 'src/app/projects/projects-routing.module';

import { MenuComponent } from './menu/menu.component';
import { DevelopmentComponent } from 'src/app/projects/development/development.component';
import { VideoComponent } from './video/video.component';




@NgModule({
  declarations: [MenuComponent, DevelopmentComponent, VideoComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
