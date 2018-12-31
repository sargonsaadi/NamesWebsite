import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() editName:any;
  @Output() editEmitter= new EventEmitter();
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
  

  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    console.log("Word INIT is ",this.editName.eng_word);
    this.getCats(this.editName.id);
  }
  
  hideEdit(){
    // this.getCats(this.editName.id);
    this.editEmitter.emit("close edit");
    // console.log("Hiding ", this.editName.eng_word );

  }
  getCats(word_id:number){
    let observ = this._httpService.getCats(word_id);
    observ.subscribe(data=>{
      console.log("data from getCats is ", data);
      
      if(data['results']){
        for(let i =1;i<9;i++){
          let found = false;
          for(let k=0;k<data['results'].length;k++){
            if(i == data['results'][k].id){
              found = true;
            }
          }
          if(found){
            this.categories[i]=true;
            console.log(i+ " is true")
          }else{
            this.categories[i]=false;
            console.log(i+ " is false")

          }
        }
      }
      
    })
  }
  edit(id:number){
    let observ = this._httpService.edit(this.editName);
    console.log("categories is", this.categories);
    observ.subscribe(data=>{
      console.log("data from edit is ", data);
      if(!data['error']){
        this.hideEdit();
        // this._router.navigate(['/dashboard']);
      }
    })
  }
  edit2(id:number){
    // this.getCats(id);
    let cat_add_arr=[];
    let cat_remove_arr=[];

    for(let cat in this.categories){
      if(this.categories[cat]){
        cat_add_arr.push(cat);
      }else{
        cat_remove_arr.push(cat);
      }
    }

    let editData= {
      name: this.editName,
      cat_add_arr: cat_add_arr,
      cat_remove_arr: cat_remove_arr
      }

    let observ = this._httpService.edit2(editData);
    console.log("categories is", this.categories);
    observ.subscribe(data=>{
      console.log("data from edit is ", data);
      if(!data['error']){
        this.hideEdit();
      }
    })
  }
}
