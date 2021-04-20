import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/core/services/api.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-entrie',
  templateUrl: './entrie.component.html',
  styleUrls: ['./entrie.component.scss']
})
export class EntrieComponent implements OnInit {
  entries$ = this.dataService.data;

  constructor(private apiService: ApiService,
              public dataService: DataService) { }

  ngOnInit() {
    this.apiService.getEntries().subscribe(res => {
      const { entries } = res;
      // this.entries = entries;
      this.dataService.setData(entries);
      // this.dataService.setData(entries);
    });
  }

}
