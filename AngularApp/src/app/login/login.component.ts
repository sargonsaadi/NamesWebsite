import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService} from '../http.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any;
  
  @Output() loginEmitter = new EventEmitter();
  constructor(private _route: ActivatedRoute,
    private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    this.user={
      'email':"",
      'password':""
    }

  }
  login(){
    let observ = this._httpService.login(this.user);
    
    observ.subscribe(data=>{
      console.log("data from login is ",data);
      if(data['message']=="Success retrieving user"){

        this._httpService.changeLoginTo(true);
        this.toggleMenu();
        // this._router.reload();
        this._router.navigate(['/dashboard']);
      }else{
        console.log(data['error']);
      }
    })
  }
  toggleMenu(){
    this.loginEmitter.emit("toggle menu");
    console.log("inside toggleMenu Login")
  }

}
