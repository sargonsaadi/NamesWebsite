import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() showName : any;
  @Output() closeEmitter = new EventEmitter();
  stars =[];
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    if(this.showName){
      for(let i=0;i<parseInt(this.showName.rating);i++){
        this.stars.push("x");
      }
    }
  }
  closeInfo(name_event:any){
    this.closeEmitter.emit(name_event.srcElement.id);
    this.stars=[];
  }
}
