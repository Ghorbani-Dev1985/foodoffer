import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../_common/components/header/header.component";

@Component({
  selector: 'foodOffer-main-layout',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {

}
