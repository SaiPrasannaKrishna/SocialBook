import {NgModule} from '@angular/core'
import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from '../register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FeedService } from '../../services/feed.service';

@NgModule({
    imports:[LoginRoutingModule,FormsModule
    ],
    declarations:[LoginComponent,RegisterComponent],
    providers:[FeedService]
})

export class LoginModule {}