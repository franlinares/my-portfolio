import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from 'src/app/projects/menu/menu.component';
import { DevelopmentComponent } from 'src/app/projects/development/development.component';
import { VideoComponent } from 'src/app/projects/video/video.component';




const routes: Routes = [
  { path: 'development', component: DevelopmentComponent },
  { path: 'video', component: VideoComponent },
  { path: '', pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }   