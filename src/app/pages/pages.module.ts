import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

// Routes
import { PAGES_ROUTES } from './pages.routes';
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphs1Component } from './graphs1/graphs1.component';
import { PagesComponent } from './pages.component';
import { IncreaserComponent } from '../shared_components/increaser/increaser.component';
import { DoughnutGraphComponent } from '../shared_components/doughnut-graph/doughnut-graph.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
    IncreaserComponent,
    DoughnutGraphComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphs1Component,
    DoughnutGraphComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule {}
