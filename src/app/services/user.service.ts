import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'assets/MOCK_DATA.json';

  constructor(private http: HttpClient) {}

  getUsers(
    pageIndex: number,
    pageSize: number,
    sortField: string,
    sortOrder: string
  ): Observable<User[]> {
    let params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());

    if (sortField && sortOrder) {
      params = params.set('sortField', sortField).set('sortOrder', sortOrder);
    }

    return this.http.get<User[]>(this.apiUrl, { params });
  }
}
