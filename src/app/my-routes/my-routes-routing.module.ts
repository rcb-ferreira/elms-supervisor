import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimesheetComponent } from '../timesheet/timesheet.component';
import { WorkforceComponent } from '../workforce/workforce.component';
import { TimesheetBreakdownComponent } from '../timesheet-breakdown/timesheet-breakdown.component';

const routes: Routes = [
  { path: '', redirectTo: '/workforce', pathMatch: 'full' },
  { path: 'workforce',  component: WorkforceComponent },
  { path: 'timesheet',  component: TimesheetComponent },
  { path: 'timesheet/:id', component: TimesheetBreakdownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyRoutesRoutingModule { }
