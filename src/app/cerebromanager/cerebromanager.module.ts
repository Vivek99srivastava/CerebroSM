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
import { CerebroMainAppComponent } from './cerebro-main-app.component';
import { DialogOverviewExampleDialog } from './components/feature-toolbar/feature-toolbar.component';

//service import
import { UserService } from './services/user.service';
import { CerebroServicesService } from './services/cerebro-services.service';

//for angular material -material module
import { MaterialModule } from '../shared/material.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainSidenavComponent } from './components/main-sidenav/main-sidenav.component';
import { AllTicketsComponent } from './components/main-sidenav-components/all-tickets/all-tickets.component';
import { CreateIssueComponent } from './components/main-sidenav-components/create-issue/create-issue.component';
import { ViewIssuesComponent } from './components/main-sidenav-components/view-issues/view-issues.component';
import { MyTicketsComponent } from './components/main-sidenav-components/my-tickets/my-tickets.component';
import { ViewVendorVpnComponent } from './components/main-sidenav-components/view-vendor-vpn/view-vendor-vpn.component';
import { CreateCerebroTicketsComponent } from './components/main-sidenav-components/create-cerebro-tickets/create-cerebro-tickets.component';
import { CreateVendorVPNTicketComponent } from './components/main-sidenav-components/create-vendor-vpn-ticket/create-vendor-vpn-ticket.component';
import { CreateKalturaTicketComponent } from './components/main-sidenav-components/create-kaltura-ticket/create-kaltura-ticket.component';
import { CreateWarpTicketComponent } from './components/main-sidenav-components/create-warp-ticket/create-warp-ticket.component';
import { IssueDetailsComponent } from './components/main-sidenav-components/issue-details/issue-details.component';
import { TicketDetailsComponent } from './components/main-sidenav-components/ticket-details/ticket-details.component';
import { UserStoryDetailsComponent } from './components/user-story-details/user-story-details.component';
import { UserStoryIssueDetailsComponent } from './components/userstory-issue-details/userstory-issue-details.component';
import { ActiveSprintsComponent } from './components/active-sprints/active-sprints.component';
import { FeatureDetailsComponent } from './components/feature-details/feature-details.component';


// Routing sidenav to main-container

const routes: Routes = [
  { path: '',component: CerebroMainAppComponent, children:[
    { path: '',component: MainContainerComponent },
    { path:'all-tickets',component: AllTicketsComponent },
    { path:'create-cerebro-tickets',component: CreateCerebroTicketsComponent },
    { path:'create-vendor-vpn-ticket',component: CreateVendorVPNTicketComponent },
    { path:'create-kaltura-ticket',component: CreateKalturaTicketComponent },
    { path:'create-warp-ticket',component: CreateWarpTicketComponent },
    { path:'view-issues',component: ViewIssuesComponent },
    { path:'my-tickets',component: MyTicketsComponent },
    { path:'view-vendor-vpn',component: ViewVendorVpnComponent },
    { path:'ticket-details',component: TicketDetailsComponent },
    { path:'issue-details',component: IssueDetailsComponent },
    { path:'create-issue',component: CreateIssueComponent }



  ]},
    { path:'cerebro',component: CerebroSMAppComponent, children:[
    { path: '',component: MainContainerComponent },
    { path:'create-feature',component: CreateFeatureComponent },
    { path:'create-userstory',component: CreateUserStoryComponent },
    { path:'create-sprint',component: CreateSprintComponent },
    { path:'create-release',component: CreateReleaseComponent },
    { path:'backlogs',component: BacklogsComponent },
    { path:'active-sprints',component: ActiveSprintsComponent },
    { path:'complete-sprints',component: CompletedSprintsComponent },
    { path:'features',component: FeaturesComponent },
    { path:'releases',component: ReleasesComponent },
    { path:'sprint-burndown',component: SprintBurndownComponent },
    { path:'worklogs',component: WorklogsComponent },
    { path:'log-history',component: LogHistoryComponent },
    { path:'sidenav-cerebro',component: CerebroMainAppComponent },
    { path:'issues',component: IssuesComponent },
    { path:'user-story-details',component: UserStoryDetailsComponent },
    { path:'userstory-issue-details',component: UserStoryIssueDetailsComponent },
    { path:'feature-details',component: FeatureDetailsComponent }
    

    
    
  ]},
  { path: 'home', component: CerebroMainAppComponent },

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
    CerebroServicesService,UserService
  ],
  declarations: [CerebroSMAppComponent,CerebroMainAppComponent, ToolbarComponent, MainContainerComponent, SideNavComponent, 
                   FeatureToolbarComponent,DialogOverviewExampleDialog, CreateFeatureComponent, 
                   CreateReleaseComponent, CreateUserStoryComponent, CreateSprintComponent,
                   BacklogsComponent, CompletedSprintsComponent, 
                   FeaturesComponent, ReleasesComponent, SprintBurndownComponent, WorklogsComponent, 
                   LogHistoryComponent, IssuesComponent, MainSidenavComponent, AllTicketsComponent, CreateIssueComponent,ViewIssuesComponent, 
                   MyTicketsComponent,  CreateCerebroTicketsComponent, CreateVendorVPNTicketComponent, 
                   CreateKalturaTicketComponent, CreateWarpTicketComponent, IssueDetailsComponent, TicketDetailsComponent, 
                   ViewVendorVpnComponent, UserStoryDetailsComponent, UserStoryIssueDetailsComponent, ActiveSprintsComponent, FeatureDetailsComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class CerebromanagerModule { }
