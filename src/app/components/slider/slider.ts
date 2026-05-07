import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class Slider implements OnInit, OnDestroy {
  images: string[] = [
    'assets/slider1.jpg',
    'assets/slider333.jpg',
    'assets/slider4.jpg'
  ];
  currentIndex = 0;
  private intervalId: any;
  private slideInterval = 2000;

  constructor(private cdr: ChangeDetectorRef) {} // ← ADD THIS LINE

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.cdr.detectChanges(); // ← Now this works because cdr is declared
    }, this.slideInterval);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
}