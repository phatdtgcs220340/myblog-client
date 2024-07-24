import { inject, Inject, Injectable, InjectionToken } from '@angular/core';
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
}

