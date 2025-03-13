import { Component, inject, output } from '@angular/core';


@Component({
  selector: 'foodOffer-header-user-actions',
  imports: [],
  templateUrl: './header-user-actions.component.html',
})
export class HeaderUserActionsComponent {
  searchTriggered = output<boolean>();
  onSearchClick(){
    this.searchTriggered.emit(true);
  }
}
