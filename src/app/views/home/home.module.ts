import {NgModule} from '@angular/core'
import { HomeRouteModule } from './home.route.module';
import { HomeComponent } from './home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ContentComponent } from '../content/content.component';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { FeedService } from '../../services/feed.service';
import { AutoCompleteDirective } from '../directives/auto-complete.directive';

@NgModule({
    imports:[HomeRouteModule,AngularFontAwesomeModule,HttpClientModule,CommonModule],
    declarations:[HomeComponent,ContentComponent,AutoCompleteDirective],
    providers:[FeedService]
})

export class HomeModule {}