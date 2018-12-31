import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  names=[];
  name: string;
  filters=[];
  nameSelected:any;

  sorting = {
    filter: "eng_word",
    state: true
  };

  pages=[];
  curr_page=1;
  nameCount:number;
  byName:boolean=false;
  filtersSelected:boolean =false;
 
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    // this.getAll();
    this.filterNames("")
    this.name="";
    this.nameCount = 0;

  }
  getAll(){
    this.pages = [];
    let observ = this._httpService.getAll();
    observ.subscribe(data=>{
      console.log("data is ",data);
      if(data['error']){
        console.log("ERRORRR");
      }else{
        this.names = data['results'];
      }
    })
  }
  filterNames(extra_filter:string){
    this.pages = [];
    let filters_str    = "?";

    if(this.sorting.state){
      filters_str += `sort_by=asc.${this.sorting.filter}&`
    }else{
      filters_str += `sort_by=desc.${this.sorting.filter}&`
    }

    for(let i=0;i<this.filters.length;i++){
      filters_str += this.filters[i][1] + "=" + this.filters[i][0] +"&";
    }
    filters_str += extra_filter + "&status=approved";
    
    this._httpService.filterNames(filters_str).subscribe(data=>{
      console.log("data from fitler names!!!!",data)
      this.nameCount = data['results'].length;

      this._httpService.filterNames(filters_str + "&limit=2").subscribe(data2=>{
        for(let i=0;i<Math.ceil(this.nameCount/2);i++){
          this.pages.push(i+1);
        } 
        this.names = data2['results'];
      })
      // if(data['results'].length==0){
      //   this.nameCount =1;
      //   console.log("INSIDE nulling nameCount")
      // }
      
      
      
      // console.log("data array is ",data['results'].length)
      // console.log("pages array is ", this.pages);
      // console.log("nameCount is ",this.nameCount);
    })
  }
  next(offset:number){
    if( this.nameCount + offset ==0){
      this.filterNames("");
    }else{
      this.nameCount += offset;
      this.filterNames("offset="+this.nameCount);
    }
  }
  showPage(page:number){
    let offset = (page*2) - 2;
    this.curr_page = page;
    if(this.byName){
      this.filterNames("word="+this.name+"&offset="+offset);
    }else{
      this.filterNames("offset="+offset);
    }
  }
  addFilter(filter:string, filterType:string){
    // this.name="";
    this.byName = false;
    let filterFound = false;
    
    for(let i=0;i<this.filters.length;i++){
      if(this.filters[i][0]==filter){
        filterFound = true;
        this.showFilter(filter);
        
        this.removeFilter(filter);
      }
    }
    if(!filterFound){
        this.filtersSelected= true;
      console.log("0000000000000000000000000000filter array is ", this.filters)
      this.filters.push([filter,filterType]);
      this.filterNames("");
    }
    // this.pages = [];
  }

  showInfo(id:string){
    if(this.nameSelected){ // if the InfoBox is open
      if(this.nameSelected.id == id){  //if it's the same box being clicked.
        this.nameSelected= null;
        let x = document.getElementById(id);
        if(x){
          x.innerHTML = 'More Info';
          x.style.color = "white";
        }
      }else{      //if it's different name box being clicked.
        //close the previous box. selected.id
        let prevElement = document.getElementById(this.nameSelected.id);
        if(prevElement){
          prevElement.innerHTML = "More Info";
          prevElement.style.color = "white";
        }
        //replace it with new box. new id
        let newElement =document.getElementById(id);
        if(newElement){
          newElement.innerHTML = "close";
          newElement.style.color = "yellow";
          // make service request to get new info of new name. and update nameSelected
          let observ = this._httpService.filterNames("?id="+id);
          observ.subscribe(data=>{
            this.nameSelected = data['results'][0];
          })          
        }
      }
    }else{
      let x = document.getElementById(id);
      if(x){
        x.innerHTML = 'Close';
        x.style.color = "yellow";
        let observ = this._httpService.filterNames("?id="+id);
        observ.subscribe(data=>{
          this.nameSelected = data['results'][0];
          console.log("nameSelected is", data['results'][0]);
          console.log("data name is ",data);
        })
      }
    }
  }
  closeInfoBox(name_event:any){
    console.log("closing element id(name) of ",name_event);
    this.nameSelected= null;
    let observ = this._httpService.filterNames("?word="+name_event);
      observ.subscribe(data=>{
        let id = data['results'][0].id;
        let x = document.getElementById(id);
        if(x){
          x.innerHTML = 'More Info';
          x.style.color = "white";    
        }
      })
  }
  
  searchByName(){
    this.byName = true;
    this.filterNames("word="+this.name)
  }
  showFilter(filter:string){
    console.log("showing ",filter)
    var element = document.getElementById(filter);
    element.style.opacity = "1";
  }
  hideFilter(filter:string){
    var element = document.getElementById(filter);
    // element.style.display ="none"
    element.style.opacity = "0.2";
  }
  removeFilter(filter:string){
    let index:number;
    // this.filtersSelected= false;
    for(let i =0;i<this.filters.length;i++){
      if(this.filters[i][0]==filter){
        index = i;
      }
    }
    if(index == this.filters.length -1){
      this.filters.pop();
    }else{
      let temp = this.filters[this.filters.length -1];
      this.filters[this.filters.length-1] = this.filters[index];
      this.filters[index]=temp;

      this.filters.pop();
    }
    if(this.filters.length ==0){
      this.filtersSelected= false;
    }
    this.filterNames("");
  }
  sort(filter:string){
    let sql="";
    if(this.byName){
      sql = `word=${this.name}`;  
    }
    this.sorting.filter = filter;
    this.filterNames(sql);
    this.sorting.state = !this.sorting.state;
    // this.sorting.state = !this.sorting.state;
    console.log("sorting after sorting is ", this.sorting)
  }
  reset(){
    this.filtersSelected =false;
    console.log("filters arr is ", this.filters );
    let length = this.filters.length;
    for(let i =0;i<length;i++){
      console.log(this.filters[0][0])
      this.showFilter(this.filters[0][0]);
      this.filters.shift();    
    }
    this.filterNames("");
  }

}
