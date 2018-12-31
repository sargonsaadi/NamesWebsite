import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService} from './http.service';
// import { Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor (private _route: ActivatedRoute, private _router: Router,private _httpService: HttpService){


  }
  isLoggedIn:boolean;
  // const login_observable = new Observable();
  // toggleMenu:any;

  ngOnInit(){
    this._httpService.isLoggedIn().subscribe(data=>{
      if(data['results']){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
      console.log("islogged in is in appcomp is ", this.isLoggedIn)
    })
    this._httpService.getLoginStatus().subscribe(curr_loging_status=>{
      this.isLoggedIn=curr_loging_status;
      console.log("observable data from ngONINit in APP component is ", curr_loging_status);
    })
  }
  checkMenu(){
    this._httpService.isLoggedIn().subscribe(data=>{
      if(data['results']){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
      console.log("islogged in is in appcomp is ", this.isLoggedIn)
    })
  }
  logout(){
    let observ = this._httpService.logout();
    observ.subscribe(data=>{
      console.log("data logout is",data)

      if(data['message'] == "Success logout"){
        // this._httpService.signOut();
        this.isLoggedIn = false;
        this._router.navigate(['/']);
      }else{
        console.log("error loging out");
      }
    })
  }
  toggleMenu(){
    this.isLoggedIn = false;
    console.log("insdie toggleMenu in App")
  }
  
}
