import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

// import { AppComponent } from './app.component';



const routes: Routes = [
  { path: 'search',component: SearchComponent},
  { path: 'login',component: LoginComponent},
  { path: 'dashboard',component: DashboardComponent},
  { path: 'edit',component: EditComponent},
  { path: 'add',component: AddComponent},
  
  // { path: 'app',component: AppComponent},
  
  
  { path: '', pathMatch: 'full', redirectTo: '/search' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
