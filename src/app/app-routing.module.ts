import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AsesorComponent } from './components/asesor/asesor.component';
import { MeetingsComponent } from './components/meetings/meetings.component';
import { CallsComponent } from './components/calls/calls.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'asesor', component: AsesorComponent, children:[
    {
      path:'meetings', 
      component:MeetingsComponent
    },
    {
      path: 'calls',
      component: CallsComponent
    }
  ]},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
