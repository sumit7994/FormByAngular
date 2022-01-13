import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {

  }

  ngOnInit() {
    console.log("hello");
    // this.router.navigate(['login-signup'])
  }


  logEmail: string = "";
  logPassword: string = "";
  checked: boolean = false;
  title = 'Form';


  loginCall() {
    console.log("logged in", this.logEmail, this.logPassword, this.checked);
    this.router.navigate(['home'])
  }

  viewPass() {
    console.log("viewed");
  }
}

