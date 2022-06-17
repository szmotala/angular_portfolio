import { transition, trigger, style, query, group, animate } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routeAnimations', [
      transition('* => HomePage', [
        group([
          query(':enter', [style( { opacity: 0.01, transform: 'translateX(50%)', position: 'fixed', right: 0, left: 0, width: '100%'} )], { optional: true}),
          query(':leave', [style( { opacity: 1, position: 'absolute', right: 0, left: 0, width: '100%'} )], { optional: true}),
        ]),
        query(':leave', [animate('0.5s ease-out', style({ opacity: 0}))], { optional: true}),
        query(':enter', [animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)'}))], { optional: true}),

    ]),

      transition('* <=> *', [
        group([
          query(':enter', [style( { opacity: 0.01, position: 'fixed', right: 0, left: 0, width: '100%'} )], { optional: true}),
          query(':leave', [style( { opacity: 1, position: 'absolute', right: 0, left: 0, width: '100%'} )], { optional: true}),
        ]),
        query(':leave', [animate('0.5s ease-out', style({ opacity: 0 }))], { optional: true}),
        query(':enter', [animate('1s ease-out', style({ opacity: 1 }))], { optional: true}),
      ])
  ])
  ]
})
export class AppComponent {
  title = 'portfolio-app';

  constructor(private contexts: ChildrenOutletContexts) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['page'];
  }
}
