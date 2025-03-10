import { Component} from '@angular/core';

import { DesktopNavigationComponent } from "../desktop-navigation/desktop-navigation.component";
import { HeaderUserActionsComponent } from "../header-user-actions/header-user-actions.component";

@Component({
  selector: 'foodOffer-header',
  imports: [DesktopNavigationComponent, HeaderUserActionsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {



}
