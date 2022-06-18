import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.scss']
})
export class TextBlockComponent implements OnInit {

  @Input() title?: string = '';
  @Input() subtitle?: string = '';
  @Input() text?: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
