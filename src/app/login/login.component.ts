import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  readonly network: string = "test-network";
  loginForm: FormGroup;
  hide: boolean = true;

  constructor(
    private _userService: UserService,
    private fb: FormBuilder,          
    private _router : Router
  ) {
    this.loginForm = this.fb.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
      network:[ this.network, Validators.required]
    });
  }

  ngOnInit() {}

  get lf() {
    return this.loginForm.controls;
  }

  onSubmit() {
    const value = this.loginForm.value;
    console.log(value)
    
    this._userService.login(value).subscribe( (data : any) => {
      console.log(data)
      this._userService.setUserInfo(data.token);
      this._router.navigate(['home']);
    }, err => {
      console.log(err);
    });
  }

}