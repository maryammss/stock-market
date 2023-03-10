import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/models/stock';

@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Stock[]> {
    return this.http.get<Stock[]>('http://localhost:9000/api/courses');
  }

  updatecourse(course: Stock) {  
    return this.http.put('/api/courses/'+ course.id, course);
  }

  updateCourseWithExtraHeaderPrams(course: Stock) {   
    let myHeader= new HttpHeaders().set("X-Auth","userId"); 
    return this.http.put('/api/courses/'+ course.id, course, {headers: myHeader});
  }

  deletecourse(index: number) {  
    return this.http.delete('http://localhost:9000/api/courses/'+ index);
  }

}