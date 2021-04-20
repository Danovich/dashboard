import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://api.publicapis.org/entries';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getEntries(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }

  getSearchEntriesByTitle(slug): Observable<any> {
    return this.http.get<any>(`${this.url}?title=${slug}`);
  }
}
