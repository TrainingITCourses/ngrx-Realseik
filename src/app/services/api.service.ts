import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/app/shared/config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = URL + 'pub/items';
  constructor(private http: HttpClient) { }

  post$ = car => this.http.post(this.url, car);
  get$ = carId => this.http.get(this.url + '/' + carId);
}
