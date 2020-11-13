import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: [ './img.component.css' ]
})
export class ImgComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

}
