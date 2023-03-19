import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl: string = environment.apiUrl
  private token: string = environment.token
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${(this.token)}`
  })

  constructor(private http: HttpClient) { }

  getCourseList(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.headers })
  }

  getCourse(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, { headers: this.headers })
  }
}
