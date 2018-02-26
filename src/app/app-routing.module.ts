import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationComponent} from './components/station/station.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StationDetailComponent} from './components/station-detail/station-detail.component';
import {LogsComponent} from './components/logs/logs.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: StationDetailComponent },
  { path: 'stations', component: StationComponent },
  { path: 'logs', component: LogsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
