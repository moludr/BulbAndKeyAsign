import { Component, OnInit } from '@angular/core';
import { FlickerService } from '../flicker.service';
import { Router } from '@angular/router';

import { from } from 'rxjs';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  allPhotos: any;
  reqPhotos: any;
  messageClass: string;
  data: any;
  constructor(private flickerService: FlickerService, private router: Router) { }

  ngOnInit() {
    this.getAllPhoto()
    this.flickerService.currentData.subscribe(data => this.data = data);
  }
  getAllPhoto() {
    this.flickerService.getPhotos({}).subscribe(data => {
      console.log(data);
      if (data.stat != 'ok') {
        this.messageClass = 'alert alert-danger'; // Return error class
      } else {
        this.messageClass = 'alert alert-success'; // Return success class
        this.allPhotos = data.photos.photo;
        this.reqPhotos = this.allPhotos.slice(0, 20);
        console.log(this.allPhotos);
      }
    });
  }

  callImageRoute(data) {
    this.flickerService.changeData(data);
    this.router.navigateByUrl('review');

  }

}
