import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  blog_data = {
    title: 'Blog webapp',
    text: 'The goal of the project was to design and develop a web application for a simple blog. The main focus involved in the design process was for the clarity and simplicity of the content presented.',
    img: '/assets/blog.webp'
  };

  photo_data = {
    title: 'Photography portfolio',
    text: 'A simple photography portfolio, which is very clear, on a white background with a photo gallery on the first page. Gentle animations were used in good taste. A static website which serves as a business card.',
    img: '/assets/photographer.webp'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
