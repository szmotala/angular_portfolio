import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit {

  @Input() title?: string = '';
  @Input() text?: string = '';
  @Input() technologies?: Array<string> = [];
  @Input() mainImgUrl?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
