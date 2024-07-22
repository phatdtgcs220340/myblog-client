import { inject } from "@angular/core"
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router"
import { BrowserStorageService } from "../services/browser-storage/browser-storage.service"

export const canActivateAdmin : CanActivateFn = (
  route : ActivatedRouteSnapshot,
  state : RouterStateSnapshot
) => {
  if (inject(BrowserStorageService).get("access_token"))
    return true
  else {
    inject(Router).navigate(["/"])
    return false
  }
}
