import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from './service/user.service';

export const authGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);
  const token = userService.getAuthToken();
  if (token) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }

};