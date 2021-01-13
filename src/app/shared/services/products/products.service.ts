import { FbResponse, Product } from './../../interfaces';
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

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.fbDbUrl}/products.json`)
      .pipe(
        map(res => {
          return Object.keys(res).map(key => {
            return {
              ...res[key],
              id: key,
              date: new Date(res[key].date)
            };
          });
        })
      );
  }

  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.fbDbUrl}/products/${id}.json`)
      .pipe(
        map((res: Product) => {
          return {
            ...res,
            id,
            date: new Date(res.date)
          };
        })
      );
  }

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
