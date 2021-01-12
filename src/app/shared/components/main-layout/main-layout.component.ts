import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(event: Event): void {
    event.preventDefault();
    
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin', 'dashboard']);
    } else {
      this.authService.logout();
      this.router.navigate(['/admin', 'login']);
    }
  }

}
