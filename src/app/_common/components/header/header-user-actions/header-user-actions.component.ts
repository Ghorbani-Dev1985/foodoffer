import { Component, inject, output } from '@angular/core';

import { IconsDirective } from '@directives/icons/icons.directive';


@Component({
  selector: 'foodOffer-header-user-actions',
  imports: [IconsDirective],
  templateUrl: './header-user-actions.component.html',
})
export class HeaderUserActionsComponent {
  searchTriggered = output<boolean>();
  onSearchClick(){
    this.searchTriggered.emit(true);
  }
}
