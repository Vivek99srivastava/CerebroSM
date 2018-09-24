import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FeatureToolbarComponent } from './components/feature-toolbar/feature-toolbar.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//cerebroSm-components
import { CerebroSMAppComponent } from './cerebro-sm-app.component';
import { DialogOverviewExampleDialog } from './components/feature-toolbar/feature-toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  { path: '',component: CerebroSMAppComponent, children:[
    {  path:'',component:MainContainerComponent 
  }]},
  { path: '**' , redirectTo:'' }
  ];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CerebroSMAppComponent, ToolbarComponent, MainContainerComponent, SideNavComponent, FeatureToolbarComponent,DialogOverviewExampleDialog],
  entryComponents: [DialogOverviewExampleDialog]
})
export class CerebromanagerModule { }
