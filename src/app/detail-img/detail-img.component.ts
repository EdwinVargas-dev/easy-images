import { Component, Input, OnInit } from '@angular/core';
import { faThumbsUp, faEye } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detail-img',
  templateUrl: './detail-img.component.html',
  styleUrls: ['./detail-img.component.css']
})
export class DetailImgComponent implements OnInit {

  @Input('detailPhoto') detailDataPhoto;
  icons = {faThumbsUp:faThumbsUp, faEye:faEye};
  constructor() { }

  ngOnInit(): void {}

  convertTagsInArray () {
    if(this.detailDataPhoto.tags) return this.detailDataPhoto.tags.split(',');
  }
}
