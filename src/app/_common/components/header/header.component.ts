import { Component, viewChild, ViewEncapsulation} from '@angular/core';
import { signal } from '@angular/core';

import { DrawerModule } from 'primeng/drawer';
import { Drawer } from 'primeng/drawer';
import { HeaderUserActionsComponent } from "./header-user-actions/header-user-actions.component";
import { DesktopNavigationComponent } from './desktop-navigation/desktop-navigation.component';
import { MobileNavigationComponent } from "./mobile-navigation/mobile-navigation.component";

@Component({
  selector: 'foodOffer-header',
  imports: [DesktopNavigationComponent, HeaderUserActionsComponent, DrawerModule, MobileNavigationComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  isShowSearchBox = signal<boolean>(true);
  isShowMobileNav:boolean = false;
  private mobileNavRef = viewChild.required<Drawer>('mobileNavRef');
  constructor() { }
  onSearchTriggered() {
    this.isShowSearchBox.set(!this.isShowSearchBox());
  }
  onCloseMobileNav(e: Event): void{
    const drawerInstance = this.mobileNavRef();
    if (drawerInstance) {
      drawerInstance.close(e);
    }
  }
}
