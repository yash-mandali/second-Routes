import { inject} from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { ToastrService } from 'ngx-toastr';

export const roleGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);
  const toast = inject(ToastrService)

  const expectedRoles = route.data?.['roles'] as string[] | undefined;
  const userRole = auth.getRole();

  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }

  if (!userRole || (expectedRoles && !expectedRoles.includes(userRole))) {
    // toast.error("UnAuthorized Access");

    if (userRole === 'Admin') {
      router.navigate(['/dashboard']);
    } else {
      router.navigate(['/']);
    }
    return false;
  }
  
  return true;
};
