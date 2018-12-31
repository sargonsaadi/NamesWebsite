import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService} from '../http.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newName: any ={};
  categories={
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
    '6': false,
    '7': false,
    '8': false,
  };
  @Output() addEmitter = new EventEmitter();

  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    
  }
  hideAdd(){
    // console.log("Inside Hide Add in Add comp");
    this.addEmitter.emit("hide");
  }
  add(){
    let cat_add_arr=[];
    console.log("INSIDE ADD COmp")
    for(let cat in this.categories){
      if(this.categories[cat]){
        cat_add_arr.push(cat);
      }
    }
    let newNameData= {
      name: this.newName,
      cat_add_arr: cat_add_arr,
    }
    console.log(newNameData);
    this._httpService.add(newNameData).subscribe(data=>{
      console.log("data from ADD is ", data);
      if(data['results2']){
        this.hideAdd();
      }
    })
  }

}
