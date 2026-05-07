import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/AuthService';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  onLogin(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.auth.login().subscribe({

      next: (users) => {

        const user = users.find((u: any) =>
          u.email === this.email &&
          u.password === this.password
        );

        if (user) {

          localStorage.setItem(
            'currentUser',
            JSON.stringify(user)
          );

          console.log('Logged in successfully');

          this.router.navigate(['/tasks']);

        } else {

          alert('Invalid email or password');

        }

      },

      error: (err) => {
        console.log(err);
      }

    });
  }


  
/*
  onLogin(form: NgForm) {

  console.log(this.email);
  console.log(this.password);

  
  this.auth.login(this.email, this.password).subscribe({
    
    next: (users) => {

      console.log('response:', users);

      if (users.length > 0) {

        localStorage.setItem('user', JSON.stringify(users[0]));
        this.router.navigate(['/tasks']);

      } else {

        alert('Invalid email or password');

      }

    },

    error: (err) => {
      console.log('ERROR:', err);
    }

  });
  this.auth.login(this.email, this.password).subscribe(users => {

  console.log(users);

});

  }*/
}