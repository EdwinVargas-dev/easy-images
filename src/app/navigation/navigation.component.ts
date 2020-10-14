import { Component, OnInit } from '@angular/core';
import { PhotosService } from "../services/photos.service";
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public servicePhotos: PhotosService, public appComponent: AppComponent){}
  photoSelected = {};
  textToSearch;
  
  ngOnInit() {}

  getPhotosOfService (category: string, word: string) {
    if(category) this.appComponent.photos = this.servicePhotos.getPhotos('&category=' + category);
    else if(word) this.appComponent.photos = this.servicePhotos.getPhotos('&q=' + word); 
    else this.appComponent.photos = this.servicePhotos.getPhotos('&q=');
  }

}
