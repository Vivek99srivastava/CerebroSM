import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CerebroSMAppComponent } from './cerebromanager/cerebro-sm-app.component';
import { CerebromanagerModule } from 'src/app/cerebromanager/cerebromanager.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

//Routing routes

const routes: Routes = [
{ path: 'cerebromanager',loadChildren:'./cerebromanager/cerebromanager.module#CerebromanagerModule'},
{ path: 'demo',loadChildren:'./demo/demo.module#DemoModule'},
{ path: '**' , redirectTo:'cerebromanager' }
];

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CerebromanagerModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
