import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class FlickerService {

  private dataSource = new BehaviorSubject<{}>({});
  currentData = this.dataSource.asObservable();

  constructor(private http: Http) { }

  getPhotos(user) {
    return this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a5c711d5854f9b3fca7a878903cd3dd0&text=food&format=json&nojsoncallback=1', '').map(res => res.json());
  }
  changeData(data: any) {
    this.dataSource.next(data);
  }
}
