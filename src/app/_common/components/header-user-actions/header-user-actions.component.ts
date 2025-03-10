import { Component, inject } from '@angular/core';

import { ToggleSearchBoxService } from '@services/toggle-search-box.service/toggle-search-box.service';

@Component({
  selector: 'foodOffer-header-user-actions',
  imports: [],
  templateUrl: './header-user-actions.component.html',
})
export class HeaderUserActionsComponent {
  showSearchBox: ToggleSearchBoxService = inject(ToggleSearchBoxService)
}
