import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleSearchBoxService {
  isShowSearchBox = signal<boolean>(true);
  constructor() { }
  toggleSearch() {
    this.isShowSearchBox.set(!this.isShowSearchBox());
  }

  closeSearch() {
    this.isShowSearchBox.set(true);
  }
}
