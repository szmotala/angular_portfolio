import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[GalleryElement]'
})
export class GalleryElementDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click') changeImage() {
    const src = this.el.nativeElement.src;
    const mainImg: any = document.getElementById('galleryMain');
    mainImg.src = src;

    if (!this.el.nativeElement.classList.contains('active')) {
      const imagesElements = document.querySelectorAll('.gallery__images--list li img');
      imagesElements.forEach((item) => {
        item.classList.remove('active');
      }); 
      this.el.nativeElement.classList.add('active');
    }
  }

}
