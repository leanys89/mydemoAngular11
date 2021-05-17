import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  isLogged = false;
  isLoginFail = false;
  user!: User;
  username!: string;
  password!: string;
  messageError!:string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder, 
    private router: Router
    
    ) {
  }

  ngOnInit() {
    if(this.authService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.router.navigate(['/dashboard']);
    }
  }

  loginForm: FormGroup = this.fb.group({
    user: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    this.user = new User(this.username, this.password);
    //console.log(this.authService);
    this.authService.login(this.user).subscribe(
      response=>{
        if(+response.status === 200){
          this.isLogged = true,
          this.isLoginFail = false,
          this.authService.setToken(response.data.token),
          this.authService.setUsername(response.data.username)
          this.router.navigate(['/dashboard']);
        }else{
          this.isLogged = false,
          this.isLoginFail = true,
          this.messageError = response.message;
          console.log(response.message)
        }
      },
      err=>{
        this.isLogged = false,
        this.isLoginFail = true,
        this.messageError = err.message;
      }
    )
    
  }

}
