// import { inject, Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Clothe } from '../interfaces/Clothe.interface';
// import { catchError, Observable, of, tap } from 'rxjs';

// @Injectable({providedIn: 'root'})
// export class ProductService {
//   private baseUrl: string = "http://127.0.0.1:8000"
//   constructor(private http: HttpClient) { }

//   getProducts():Observable<Clothe[]> {
//     const url = `${this.baseUrl}/clothes`
//     return this.http.get<Clothe[]>(url)
//   }
// }

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Clothe } from '../interfaces/Clothe.interface';

@Injectable({
  providedIn: 'root', // Disponible globalmente en toda la aplicación
})
export class ProductService {
  private apiUrl = 'http://127.0.0.1:8000'; // URL de la API

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Clothe[]> {
    let url = `${this.apiUrl}/clothes`
    return this.http.get<Clothe[]>(url)
      .pipe(
        // tap(clothes => console.log(clothes)),
        catchError(() => of([]))
      )
  }

}
