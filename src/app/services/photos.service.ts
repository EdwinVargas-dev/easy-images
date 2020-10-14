import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient){}
  url = "https://pixabay.com/api/";
  key = "13119377-fc7e10c6305a7de49da6ecb25";

  getPhotos (param: string) {
    let photosToSend = []
    this.http.get(this.url + "?key=" + this.key + "&lang=es" + param).subscribe((photos: any[]) => {
      photos['hits'].forEach(element => {
        photosToSend.push(element)
      });
    });
    return photosToSend
  }
}
