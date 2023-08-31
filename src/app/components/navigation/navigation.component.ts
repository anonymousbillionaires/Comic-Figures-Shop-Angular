import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  email: String | null = sessionStorage.getItem('email');
  constructor(private apiService: ApiService, private _snackBar: MatSnackBar, private router: Router) { }
  logout() {
    this.apiService.logout().subscribe({
      next: data => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('email')
        this.router.navigate(['/login']);
        this._snackBar.open('Logout successfully!', 'Close', {
          duration: 2500
        });
      },
      error: error => {
        this._snackBar.open('Logout unsuccessfully, please try again!', 'Close', {
          duration: 2500
        });
      }
    });
  }
}
