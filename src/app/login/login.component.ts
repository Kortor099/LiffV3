import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private route:Router,
    private apiService: ApiService
  ){}

  onLogin() {
    const username = this.username;
    const password = this.password;
    
    this.apiService.login(username, password).subscribe({
      next: (res: any) => {
        if(res.message == 'incorect password') {
          this.route.navigate(['login'])
          console.error('Login failed',res);
          alert('Login failed username or password is incorrect, please try again')
        }
        else{
          console.log('Login successful', res);
          this.route.navigate(['close-liff'])
        }
      },
    })
  }

}





     

