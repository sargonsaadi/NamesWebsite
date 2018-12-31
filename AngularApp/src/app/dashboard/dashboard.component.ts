import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  names= [];
  name: string;
  filters=[];
  nameEditSelected:any;
  // sorting = false;
  user:any;
  loggedIn:boolean=false;
  pages=[];
  nameCount:number;
  byName:boolean = false;
  filtersSelected:boolean=false;
  showAdd:boolean=false;
  sorting = {
    filter: "eng_word",
    state: true
  };

  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAdmin();
    this.name="";
  }
  getAllAdmin(){
    this.pages = [];
    this._httpService.isLoggedIn().subscribe(data=>{
      if(data['results']){
        this.loggedIn = true;
        this._httpService.filterNames("").subscribe(data=>{
          this.nameCount = data['results'].length;
          this._httpService.filterNames("?limit=2").subscribe(data2=>{
            for(let i=0;i<Math.ceil(this.nameCount/2);i++){
              this.pages.push(i+1);
            } 
            this.names = data2['results'];
          })
        })
      }else{
        this._router.navigate(['/login'])
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
    filters_str += extra_filter;
    
    this._httpService.filterNames(filters_str).subscribe(data=>{
      this.nameCount = data['results'].length;

      this._httpService.filterNames(filters_str + "&limit=2").subscribe(data2=>{
        for(let i=0;i<Math.ceil(this.nameCount/2);i++){
          this.pages.push(i+1);
        } 
        this.names = data2['results'];
      })
  
    })
  }
  showPage(page:number){
    let offset = (page*2) - 2;
    if(this.byName){
      this.filterNames("word="+this.name+"&offset="+offset);
    }else{
      this.filterNames("offset="+offset);
    }
  }
  searchByName(){
    this.byName = true;
    this.filterNames("word="+this.name)
  }
  addFilter(filter:string, filterType:string){
    this.byName =false;
    let filterFound = false;

    for(let i=0;i<this.filters.length;i++){
      if(this.filters[i][0]==filter){
        filterFound = true;
        this.showFilter(filter);
        this.removeFilter(filter);
      }
    }
    if(!filterFound){
      this.filters.push([filter,filterType]);
      this.filterNames("");
      this.filtersSelected= true;

    }
  }
  showFilter(filter:string){
    var element = document.getElementById(filter);
    element.style.opacity = "1";
  }
  hideFilter(filter:string){
    var element = document.getElementById(filter);
    // element.style.display ="none"
    element.style.opacity = "0.2";
  }
  removeFilter(filter:string){
    let index = -1;
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
  }
  delete(id:number){
    if(this.isLoggedIn()){
      let observ = this._httpService.delete(id);
      observ.subscribe(data=>{
        if(!data['error']){
          this._router.navigate(['/dashboard']);
        }
        this.getAllAdmin();
      })
    }else{
      this._router.navigate(['/login'])
    }
  }
  showEdit(id:number){
    // this.closeEdit();
    if(this.showAdd && !this.nameEditSelected){
      this.showAdd= false;
      this.showAddBtn();
      let observ = this._httpService.filterNames("?id="+id);
      observ.subscribe(data=>{
        this.nameEditSelected = data['results'][0];
        
      })
    }
    else if(!this.nameEditSelected){
      let observ = this._httpService.filterNames("?id="+id);
      observ.subscribe(data=>{
        this.nameEditSelected = data['results'][0];
        
      })
    }
  }
  closeEdit(){
    console.log("closing edit (dashboard)", this.nameEditSelected.eng_word)
    this.nameEditSelected = null;
    this.getAllAdmin();
  }
  // this is not working
  isLoggedIn(){
    // let result: boolean;
    let observ = this._httpService.isLoggedIn();
    observ.subscribe(data=>{
      // console.log("islogged in data is.... ", data);
      // console.log("islogged in data.results is.... ", data['results']);

      return data['results'];
      // if(data['results']){
      //   return data['results']; 
      // }else{
      //   return false;
      // }
      // return true;
    })
    // return result;
    // if(this._httpService.isLoggedIn()){
    //   return true;
    // }else{
    //   return false;
    // }
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
  add(){
    if(this.nameEditSelected){
      this.showAdd = true;
      this.hideAddBtn();
      this.nameEditSelected = null;
    }else{
      this.showAdd = true;
      this.hideAddBtn();
    }
  }
  showAddBtn(){
    var element = document.getElementById("add-btn");
    element.style.display = "inline-block";
  }
  hideAddBtn(){
    var element = document.getElementById("add-btn");
    element.style.display = "none";
  }
  hideAdd(){
    this.showAdd = false;
    console.log("Inside HIDEADD in dashboard. showAdd is now ", this.showAdd);
    this.showAddBtn();
  }
  
}
