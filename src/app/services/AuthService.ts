import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users';
  //isLoggedinUser = false;

  constructor(private http: HttpClient) {}

  // ✅ SIGN UP
  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // ✅ LOGIN
  /*
  login(email: string, password: string): Observable<any[]> {
    console.log("login in auth service");
    const url =
    `${this.apiUrl}?email=${email}&password=${password}`;

    console.log(url);

    return this.http.get<any[]>(url);

  }*/

  
login(): Observable<any[]> {
  //this.isLoggedinUser = true;
  return this.http.get<any[]>(this.apiUrl);

}

isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }


  /*
    register(user: User): Observable<User> {
    return this.http.post(this.apiUrl, user);
  }

  // ✅ LOGIN
  login(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.apiUrl}?email=${email}&password=${password}`
    );
  }
  */
}