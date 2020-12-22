import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from 'src/app/projects/projects-routing.module';
// httpclient
import { HttpClientModule } from '@angular/common/http';

import { MenuComponent } from './menu/menu.component';
import { DevelopmentComponent } from 'src/app/projects/development/development.component';
import { VideoComponent } from './video/video.component';
import { CardsComponent } from './development/cards/cards.component';
import { VideoCardsComponent } from './video/video-cards/video-cards.component';




@NgModule({
  declarations: [
    MenuComponent, 
    DevelopmentComponent, 
    VideoComponent, 
    CardsComponent, 
    VideoCardsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule
  ]
})
export class ProjectsModule { }
