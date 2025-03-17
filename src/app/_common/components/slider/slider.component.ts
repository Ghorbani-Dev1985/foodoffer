import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { IconsDirective } from '@directives/icons/icons.directive';


@Component({
  selector: 'foodOffer-slider',
  imports: [CommonModule, IconsDirective ],
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit , OnDestroy{
   currentIndex = signal<number>(0)
   isFading = signal<boolean>(false)
   private intervalId: any = null
   private platformId = inject(PLATFORM_ID)
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
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 4000);
    }
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  changeSlide(newIndex: number) {
    this.isFading.set(true);
    setTimeout(() => {
      this.currentIndex.set(newIndex);
      this.isFading.set(false);
    }, 500);
  }

  prevSlide() {
    const newIndex = (this.currentIndex() - 1 + this.images().length) % this.images().length;
    this.changeSlide(newIndex);
    this.resetAutoSlide();
  }

  nextSlide() {
    const newIndex = (this.currentIndex() + 1) % this.images().length;
    this.changeSlide(newIndex);
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.changeSlide(index);
    this.resetAutoSlide();
  }

}
