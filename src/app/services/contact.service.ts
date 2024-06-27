import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/contacts';
  // private apiUrl = 'https://api.example.com/data';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(catchError(this.handleError<any>('getData', [])));
  }

  postData(data: any): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, data)
      .pipe(catchError(this.handleError<any>('postData')));
  }

  putData(data: any): Observable<any> {
    return this.http
      .put<any>(`${this.apiUrl}/${data.id}`, data)
      .pipe(catchError(this.handleError<any>('putData')));
  }

  deleteData(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError<any>('deleteData')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
