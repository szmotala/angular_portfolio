import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() elements: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.elements);
    
  }

}
