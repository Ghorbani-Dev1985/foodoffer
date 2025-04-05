import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

import { IOfferItems } from '@models/offerItems.model';
import { OffersItems } from '@constants/OffersItems';
import { SwiperService } from '@services/swiper/swiper.service';
import { SectionTitleComponent } from "@components/section-title/section-title.component";

@Component({
  selector: 'foodOffer-food-offers',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  providers: [SwiperService],
  templateUrl: './food-offers.component.html',
  styleUrls: ['./food-offers.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodOffersComponent implements OnInit {
  private swiperService = inject(SwiperService);
  swiperConfig = this.swiperService.getDefaultConfig();

  offers = signal<IOfferItems[]>(OffersItems);

  ngOnInit() {

  }
}
