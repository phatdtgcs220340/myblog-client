import { inject } from "@angular/core"
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router"
import { FetchUserService } from "../services/resources/users/fetch-user.service"

export const canActivateAdmin : CanActivateFn = (
  route : ActivatedRouteSnapshot,
  state : RouterStateSnapshot
) => {
  const user = inject(FetchUserService).getCurrentUser()
  let isAdmin = false
  if (user !== null)
    isAdmin = user.role.includes('ADMIN')
  if (!isAdmin)
    inject(Router).navigate(['/home'])
  return isAdmin
}
