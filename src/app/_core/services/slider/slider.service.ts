import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class SliderService {
  currentIndex = signal<number>(0);
  isFading = signal<boolean>(false);
  private intervalId: any = null;
  private platformId = inject(PLATFORM_ID);

  constructor() { }

  startAutoSlide(totalSlides: number, interval: number = 4000) {
    if (!this.intervalId && isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.nextSlide(totalSlides);
      }, interval);
    }
  }
  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  resetAutoSlide(totalSlides: number, interval: number = 4000) {
    this.stopAutoSlide();
    this.startAutoSlide(totalSlides, interval);
  }
  changeSlide(newIndex: number) {
    this.isFading.set(true);
    setTimeout(() => {
      this.currentIndex.set(newIndex);
      this.isFading.set(false);
    }, 500);
  }
  prevSlide(totalSlides: number) {
    const newIndex = (this.currentIndex() - 1 + totalSlides) % totalSlides;
    this.changeSlide(newIndex);
    this.resetAutoSlide(totalSlides);
  }
  nextSlide(totalSlides: number) {
    const newIndex = (this.currentIndex() + 1) % totalSlides;
    this.changeSlide(newIndex);
    this.resetAutoSlide(totalSlides);
  }
  goToSlide(totalSlides: number , index: number) {
    this.changeSlide(index);
    this.resetAutoSlide(totalSlides);
  }
}
