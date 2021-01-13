import { FbResponse } from './../../interfaces';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  create(product): Observable<any> {
    return this.http.post(`${environment.fbDbUrl}/products.json`, product)
      .pipe(
        map((res: FbResponse) => {
          return {
            ...product,
            id: res.name,
            date: new Date(product.date)
          };
        })
      );
  }
}
