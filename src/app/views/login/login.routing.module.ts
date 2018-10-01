import {NgModule} from '@angular/core';
import {Router,RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../../services/authGuard';

const routes:Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'home',
        loadChildren:'../home/home.module#HomeModule',
        canActivate:[AuthGuard]
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

export class LoginRoutingModule {}
