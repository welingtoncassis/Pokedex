import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InformationGuard implements  CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

                const number = parseInt(route.params['number'], 10);
                console.log(number);
                if (number > 0 && number <=  710) {
                  return true;
                }else{

                  this.router.navigate(['/']);
                  return false;
                }
  }
}
