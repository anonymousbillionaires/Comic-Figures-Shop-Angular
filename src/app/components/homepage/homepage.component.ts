import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(private apiService: ApiService, private router: Router, private _snackBar: MatSnackBar) { }

  logout() {
    this.apiService.logout().subscribe({
      next: data => {
        this._snackBar.open('Logout successfully!', 'Close', {
          duration: 2500
        });
        sessionStorage.removeItem("token");
        this.router.navigate(['/login']);
      },
      error: error => {
        this._snackBar.open('Logout error, please try again!', 'Close', {
          duration: 2500
        });
      }
    });
  }
}
