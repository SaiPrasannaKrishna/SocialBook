import { Component, OnInit, NgZone } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { Router } from '@angular/router';
import {feedDataList} from '../../services/feedData';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private feedDataTitles = null;
  private filterItem = '';
  constructor(private _feedService:FeedService,private _router:Router,private zone:NgZone) {
   
   }

  ngOnInit() {
    this._feedService.currentMessage.subscribe((d)=>{
      console.log(d);
   });
  }

  setFilter(value){
    if(value.indexOf('remove') ===-1){
    this.zone.run(() => {
    this.feedDataTitles = feedDataList;
    this.feedDataTitles = this.feedDataTitles.filter((t)=>{
      return t.title.toLowerCase().indexOf(value.toLowerCase())>=0;
    });
    this.filterItem = value;
    console.log(this.filterItem);
    });
  }
  else{
    this.feedDataTitles=null;
  }
  }

  logout(){
    localStorage.removeItem('isLoggedIn');
    this._router.navigate(['/']);

  }

}
