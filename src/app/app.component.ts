import { Component } from '@angular/core';
import { PhotosService } from "./services/photos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public servicePhotos: PhotosService){}
  photos: any;
  photoSelected = {};
  
  ngOnInit() {
    this.photos = this.servicePhotos.getPhotos('&q=');
  }
}
