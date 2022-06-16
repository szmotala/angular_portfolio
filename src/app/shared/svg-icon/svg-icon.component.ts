import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SvgIconComponent implements OnInit {

  @Input() iconName: string = '';
  icon: any;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.http.get(`assets/icons/${this.iconName}.svg`, { responseType: 'text' }).subscribe(response => {
      this.icon = this.sanitizer.bypassSecurityTrustHtml(response);
    });
  }

}
