import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private username: String;
  private email: String;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe((auth) => {
      if(auth == null)
      {
        this.isLoggedIn = false;
        this.username = "";
        this.email = "";
        this.router.navigate(['login']);
      }
      else
      {
        this.isLoggedIn = true;
        this.username = auth.google.displayName;
        this.email = auth.google.email;
        this.router.navigate(['']);
      }
    })
  }
}
