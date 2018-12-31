import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  loginCheck = new BehaviorSubject<boolean>(false);
  loginObservable = this.loginCheck.asObservable();

  // loggedIn:boolean=false;

  constructor(private _http: HttpClient) { }
  
  getAll(){
    return this._http.get('api/v5/names?status=approved')
  }
  getCats(word_id:number){
    return this._http.get('api/v2/names/categories/'+word_id);
  }
  getAllAdmin(){
    return this._http.get('api/v5/names')
  }
  filterNames(filters_str:string){
    console.log("Service filtername string is ",filters_str);
    return this._http.get('/api/v5/names'+filters_str);
  }
  login(user:any){
    return this._http.post('/api/v2/login',user);
  }
  logout(){
    this.changeLoginTo(false);
    return this._http.delete('/api/v2/logout'); 
  }
  delete(id:number){
    return this._http.delete('api/v1/names/'+id);
  }
  edit(name:any){
    return this._http.put('api/v2/names/'+name.id,name);
  }
  edit2(editData:any){
    return this._http.put('api/v3/names/'+editData.name.id,editData);
  }
  changeLoginTo(status: boolean){
    this.loginCheck.next(status);
  }
  getLoginStatus(){
    return this.loginObservable;
  }

  signIn(){
    // this.loggedIn = true;
    
  }
  signOut(){
    // this.loggedIn = false;
  }
  isLoggedIn(){
    console.log("inside service isLogged in")
    
    return this._http.get('/api/v2/names/check');

    // if(this.loggedIn){
    //   return true;
    // }else{
    //   return false
    // }
  }
  add(nameData:any){
    // console.log("inside service add method")
    return this._http.post('/api/v2/names',nameData);
  }
 

}