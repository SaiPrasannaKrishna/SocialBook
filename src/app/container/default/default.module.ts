import {NgModule} from '@angular/core';
import { DefaultRouteModule } from './default.routing.module';
import { DefaultComponent } from './default.component';
import { HeaderComponent } from '../../header/header/header.component';

@NgModule({
    imports:[DefaultRouteModule],
    exports:[],
    declarations:[DefaultComponent,HeaderComponent]
})

export class DefaultModule {}
