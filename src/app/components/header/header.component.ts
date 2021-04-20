import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { debounceTime, switchMap } from 'rxjs/operators';

import { ApiService } from 'src/app/core/services/api.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    searchSlug: ['']
  });
  searchSlug$;

  constructor(private fb: FormBuilder,
              private apiService: ApiService,
              private dataService: DataService) { }

  ngOnInit() {
    this.searchSlug$ = this.form.get('searchSlug').valueChanges.pipe(
      debounceTime(333),
      switchMap((slug) => this.apiService.getSearchEntriesByTitle(slug))
    ).subscribe(res => {
      const { entries } = res;
      this.dataService.setData(entries);
    });
  }

  ngOnDestroy() {
    this.searchSlug$.unsubscibe();
  }

}
