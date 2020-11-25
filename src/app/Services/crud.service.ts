import { Injectable } from '@angular/core';
import { Item } from 'src/app/Models/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //itemposts: Item[]= [];
  constructor(private http: HttpClient) { }
  /*data(){
    return this.itemposts;
  }*/
  getdata(): Observable<Item>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
