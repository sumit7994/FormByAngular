import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './MyComponents/home-page/home-page.component';
import { LoginSignupComponent } from './MyComponents/login-signup/login-signup.component';
import { TermsconditionsComponent } from './MyComponents/termsconditions/termsconditions.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "", component: LoginSignupComponent },
  { path: "login-signup", component: LoginSignupComponent },
  { path: "terms-conditions", component: TermsconditionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


