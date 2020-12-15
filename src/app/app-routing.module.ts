import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from 'src/app/components/intro/intro.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { ContactComponent } from 'src/app/components/contact/contact.component';





const routes: Routes = [
  {path: 'home', component: IntroComponent},
  {path: 'about', component: AboutComponent},
  {path: '', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  {path: 'contact', component: ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
