import {RouterModule,Routes, Router} from '@angular/router';
import {NgModule} from '@angular/core';
import { DefaultComponent } from './default.component';

const routes:Routes = [
    {
        path:'',
        component:DefaultComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class DefaultRouteModule {}

