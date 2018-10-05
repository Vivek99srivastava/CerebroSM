import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//all components
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FeatureToolbarComponent } from './components/feature-toolbar/feature-toolbar.component';
import { CreateFeatureComponent } from './components/feature-toolbar/create-feature/create-feature.component';
import { CreateReleaseComponent } from './components/feature-toolbar/create-release/create-release.component';
import { CreateUserStoryComponent } from './components/feature-toolbar/create-user-story/create-user-story.component';
import { CreateSprintComponent } from './components/feature-toolbar/create-sprint/create-sprint.component';
import { BacklogsComponent } from './components/backlogs/backlogs.component';
import { ActiveSprintsComponent } from './components/active-sprints/active-sprints.component';
import { CompletedSprintsComponent } from './components/completed-sprints/completed-sprints.component';
import { FeaturesComponent } from './components/features/features.component';
import { ReleasesComponent } from './components/releases/releases.component';
import { SprintBurndownComponent } from './components/sprint-burndown/sprint-burndown.component';
import { WorklogsComponent } from './components/worklogs/worklogs.component';
import { LogHistoryComponent } from './components/log-history/log-history.component';
import { IssuesComponent } from './components/issues/issues.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { FlexLayoutModule } from '@angular/flex-layout';

//cerebroSm-components
import { CerebroSMAppComponent } from './cerebro-sm-app.component';
import { DialogOverviewExampleDialog } from './components/feature-toolbar/feature-toolbar.component';

//service import
import { UserService } from './services/user.service';

//for angular material -material module
import { MaterialModule } from '../shared/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Routing sidenav to main-container


// For FusionChart   
// import * as FusionCharts from 'fusioncharts';  
// import * as Charts from 'fusioncharts/fusioncharts.charts';  
// import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';  
// import { FusionChartsModule } from 'angular4-fusioncharts';  
// FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme); 



const routes: Routes = [
  { path: '',component: CerebroSMAppComponent, children:[
    {  path:'',component: MainContainerComponent },
    { path:'create-feature',component: CreateFeatureComponent },
    { path:'create-userstory',component: CreateUserStoryComponent },
    { path:'create-sprint',component: CreateSprintComponent },
    { path:'create-release',component: CreateReleaseComponent },
    { path:'backlogs',component: BacklogsComponent },
    { path:'active-sprints',component: ActiveSprintsComponent },
    { path:'features',component: FeaturesComponent },
    { path:'releases',component: ReleasesComponent },
    { path:'sprint-burndown',component: SprintBurndownComponent },
    { path:'worklogs',component: WorklogsComponent },
    { path:'log-history',component: LogHistoryComponent },
    { path:'issues',component: IssuesComponent }
    
  ]},
    { path: '**' , redirectTo:'' }
    ];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[
    UserService
  ],
  declarations: [CerebroSMAppComponent, ToolbarComponent, MainContainerComponent, SideNavComponent, 
                   FeatureToolbarComponent,DialogOverviewExampleDialog, CreateFeatureComponent, 
                   CreateReleaseComponent, CreateUserStoryComponent, CreateSprintComponent,
                   BacklogsComponent, ActiveSprintsComponent, CompletedSprintsComponent, 
                   FeaturesComponent, ReleasesComponent, SprintBurndownComponent, WorklogsComponent, 
                   LogHistoryComponent, IssuesComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class CerebromanagerModule { }
