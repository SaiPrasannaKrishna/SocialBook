import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { feed } from "../../interfaces/feed";

@Injectable()
export class FeedService {
    
    private messageBus = new BehaviorSubject<string>('empty');
    currentMessage = this.messageBus.asObservable();
    
    constructor(private _http:HttpClient){

    }

    loginService(userName:string){
        console.log(userName);
        this.messageBus.next(userName);
    }
}