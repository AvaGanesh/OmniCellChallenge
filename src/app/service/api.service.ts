import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageDetails } from '../models/image-details';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }


  listImageDetails() : Observable<ImageDetails[]> {
    return this.http.get<ImageDetails[]>('https://s3-ap-southeast-1.amazonaws.com/he-public-data/instaf913f18.json');
  }
}
