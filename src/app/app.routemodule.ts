import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from '../app/app.component';
import { DefaultComponent } from '../app/container/default/default.component';

export const routes:Routes =[
    {
            path:'', 
            loadChildren: './views/login/login.module#LoginModule'
    },
    {
        path:'404',
        component:AppComponent
    },
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

  export class AppRoutingModule {}