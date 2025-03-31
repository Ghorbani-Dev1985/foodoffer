import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { IconsDirective } from '@directives/icons/icons.directive';
import { SliderService } from '@services/slider/slider.service';


@Component({
  selector: 'foodOffer-slider',
  imports: [CommonModule, IconsDirective ],
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  providers: [SliderService],
})
export class SliderComponent implements OnInit , OnDestroy{
  sliderService = inject(SliderService);

  images = signal<string[]>([
    '/images/sliders/slide1.webp',
    '/images/sliders/slide2.webp',
    '/images/sliders/slide3.webp',
    '/images/sliders/slide4.webp',
    '/images/sliders/slide5.webp',
    '/images/sliders/slide6.webp'
  ]);
  constructor() {

  }
  ngOnInit(): void {
    this.sliderService.startAutoSlide(this.images().length);
  }

  ngOnDestroy() {
    this.sliderService.stopAutoSlide();
  }

  prevSlide(): void {
    this.sliderService.prevSlide(this.images().length);

  }

  nextSlide(): void {
    this.sliderService.nextSlide(this.images().length);

  }
  goToSlide(index: number): void {
    this.sliderService.goToSlide(this.images().length , index);
  }

}
