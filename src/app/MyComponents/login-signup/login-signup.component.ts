import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {


  ngOnInit(): void {

  }

  constructor(private router: Router) {

  }

  logEmail: string = "";
  logPassword: string = "";
  checked: boolean = false;
  title = 'Form';
  viewPassValue: string = "password"


  loginCall() {
    console.log("logged in", this.logEmail, this.logPassword, this.checked);
    if (this.logEmail !== "" && this.logPassword !== "") {
      this.router.navigate(['home'])
    }
    if (this.checked) {
      localStorage.setItem("email", this.logEmail)
      localStorage.setItem("password", this.logPassword)
    }
  }

  viewPass() {
    console.log("viewed");
    if (this.viewPassValue == "password") {
      this.viewPassValue = "text"
    } else {
      this.viewPassValue = "password"
    }
  }

}
