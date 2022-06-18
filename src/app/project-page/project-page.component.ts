import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  type: any;
  images: any[] = [];
  projectData: any;

  constructor(
    private route: ActivatedRoute,
  ) { 
    route.data.subscribe(data => {
      this.type = data['type'];
    });

    if(this.type === 'blog') {
      this.images = [
        {
          url: '/assets/blog/blog_main.webp',
          alt: 'Screen of blog app main page',
        },
        {
          url: '/assets/blog/blog_page.webp',
          alt: 'Screen of blog app blog page',
        },
        {
          url: '/assets/blog/post.webp',
          alt: 'Screen of blog app simple post',
        }
      ];

      this.projectData = {
        title: 'Blog app',
        concept: 'The goal of the project was to design and develop a web application for a simple blog. The main focus involved in the design process was for the clarity and simplicity of the content presented.',
        development: 'The application was developed using the Angular web application framework in addition to the Sass stylesheet language. The complete backend of the web application was controlled by the Firebase platform. Data could be easily updated by adding new database records in the Firestore cloud-hosted database. All changes are refreshed automatically by using services connect to Firebase.',
        redirect: 'https://karo-blog-app.web.app',
      }
    } else if(this.type === 'photography') {
      this.images =[
        {
          url: '/assets/photography/photo_main.webp',
          alt: 'Screen of photography portfolio main page',
        },
        {
          url: '/assets/photography/photo_about.webp',
          alt: 'Screen of photography portfolio about page',
        },
      ];

      this.projectData = {
        title: 'Photography portoflio',
        concept: 'A simple photography portfolio, which is very clear, on a white background with a photo gallery on the first page. Gentle animations were used in good taste. A static website which serves as a business card.',
        development: 'The static website was written in HTML5 and the Sass stylesheet language. Animations have been realised with the use of the GSAP library. The largest obstacle involved creating a photo gallery with the ability for their previews. In the mobile version, the events had to be programmed to execute gestures from a user. Such gestures included zooming and image swapping. All events were developed in JavaScript.',
        redirect: 'https://szmotala.github.io/photography-portfolio-project/',
      }
    }
  }

  ngOnInit(): void {
  }

}
