import { Component, OnInit } from '@angular/core';

import { PanelMenu } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'foodOffer-mobile-navigation',
  imports: [CommonModule, PanelMenu ],
  templateUrl: './mobile-navigation.component.html'
})
export class MobileNavigationComponent implements OnInit {
  items: MenuItem[];
   constructor() {
    this.items = [];
   }

  ngOnInit() {
    this.items = [
        {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',

                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',

                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',

                }
            ]
        },
        {
            label: 'Sync',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Import',
                    icon: 'pi pi-cloud-download',

                },
                {
                    label: 'Export',
                    icon: 'pi pi-cloud-upload',

                }
            ]
        },
        {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',

        }
    ];
}
}
