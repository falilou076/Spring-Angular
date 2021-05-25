import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private apiServerUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  public getUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/getUser`);
  }

  public getOne(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/getOneUser/`+id);
  }

  public postUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/postUser/`, user);
  }

  public deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/deleteUser/`+id);
  }

  public updateUser(id: number, user: User): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/updateUser/`+id, user);
  }
}
