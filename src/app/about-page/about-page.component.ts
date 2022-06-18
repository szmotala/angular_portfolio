import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent implements OnInit {

  skills: any[];

  constructor() {
    this.skills = [
      {
        name: 'angular-icon',
        title: 'Angular',
      },
      {
        name: 'CSS3-icon',
        title: 'CSS3',
      },
      {
        name: 'HTML5-icon',
        title: 'HTML5',
      },
      {
        name: 'jQuery-icon',
        title: 'jQuery',
      },
      {
        name: 'JS-icon',
        title: 'JavaScript',
      },
      {
        name: 'sass-icon',
        title: 'SASS',
      }
    ] 
  }

  ngOnInit(): void {

  }

}
