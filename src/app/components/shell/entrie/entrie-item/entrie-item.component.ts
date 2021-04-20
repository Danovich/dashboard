import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrie-item',
  templateUrl: './entrie-item.component.html',
  styleUrls: ['./entrie-item.component.scss']
})
export class EntrieItemComponent implements OnInit {
  @Input() entrie;

  constructor() { }

  ngOnInit() {
  }

}
