import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = new BehaviorSubject(null);

  constructor() { }

  getData() {
    return this.data.getValue();
  }

  setData(payload) {
    this.data.next(payload);
  }
}
