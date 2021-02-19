import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AsesorComponent } from './components/asesor/asesor.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'asesor', component: AsesorComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
