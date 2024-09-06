import { HttpHeaders } from '@angular/common/http';
import { inject, Inject, Injectable, InjectionToken } from '@angular/core';
import { resourceURL } from '../../../../app.env';
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => sessionStorage
});
@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  get(key: string) : string | null  {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) : void {
    this.storage.setItem(key, value);
  }

  clear() : void {
    this.storage.clear()
  }

  generateTokenHeader() : HttpHeaders{
    return new HttpHeaders({
      'Authorization' : `Bearer ${this.get("access_token")}`
    })
  }
}

