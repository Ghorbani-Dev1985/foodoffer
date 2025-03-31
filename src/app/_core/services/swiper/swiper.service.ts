import { Injectable } from '@angular/core';

import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

@Injectable()
export class SwiperService {

  getDefaultConfig(): SwiperOptions {
    return {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '#nextBtn',
        prevEl: '#prevBtn',
      },
      loop: true,
      pagination: {
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      },

    };
  }
}
