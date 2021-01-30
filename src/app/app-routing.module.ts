import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DinnersComponent } from './components/dinners/dinners.component';
import { MissionPlanComponent } from './components/mission-plan/mission-plan.component';

const routes: Routes = [
  { path: '',   redirectTo: '/dinners', pathMatch: 'full' },
  { path: 'dinners', component: DinnersComponent },
  { path: 'plan', component: MissionPlanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
