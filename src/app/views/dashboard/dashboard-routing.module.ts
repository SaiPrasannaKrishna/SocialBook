import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const routes:Routes =[
    {
            path:'', 
            component:DashboardComponent,
            data:{
                title:'dashboard'
            },
            children:[{
                path:'hello',
                loadChildren:'../../container/default/default.module#DefaultModule'
            }]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
  })

  export class DashboardRoutingModule {}