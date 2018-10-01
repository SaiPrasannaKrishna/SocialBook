import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import {feedDataList} from '../../services/feedData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers:[FeedService]
})
export class ContentComponent implements OnInit {
  public feedList;
  constructor(private _feedService:FeedService) {
    this.feedList = feedDataList;
  }
    
  ngOnInit() 
  {

  }

}
