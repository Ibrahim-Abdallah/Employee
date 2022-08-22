import { Injectable } from '@angular/core';
import { Router, Route, CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad {

  constructor(private router: Router) {
  }
  canLoad(route: Route): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
