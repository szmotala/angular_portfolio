import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @HostListener('document:click', ['$event.target']) onDocumentClick(target: HTMLElement) {
    if(!(target.classList.contains('menu') || target.classList.contains('menu__button'))){
      if(this.activated) {
        this.activated = false;
      }
    }
  }

  activated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateNavbar() {
    this.activated = !this.activated;
  }
}
