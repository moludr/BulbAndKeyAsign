import { Component, OnInit } from '@angular/core';
import { FlickerService } from '../flicker.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  data: any;
  constructor(private flickerService: FlickerService) { }

  ngOnInit() {
    this.flickerService.currentData.subscribe(data => this.data = data);
    this.consoleData(this.data);
  }
  consoleData(data) {
    console.log(data);
    console.log(this.data);
  }


}
