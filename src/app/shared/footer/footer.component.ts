import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  social_items = [
    { 
      icon: 'Linkedin-ico',
      url: 'https://linkedin.com/in/sz-motała',
      alt: 'Linkedin - Szymon Motała', 
    },
    { 
      icon: 'Github-ico',
      url: 'https://github.com/szmotala',
      alt: 'GitHub - Szymon Motała', 
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
