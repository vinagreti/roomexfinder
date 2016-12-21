import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FinderService } from './finder.service'

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  location = {};
  loading = false;
  private routeSubscription: any;

  constructor(
    private route: ActivatedRoute,
    private finderService: FinderService
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      if(params['id']){
        this.loading = true;
        this.finderService.get(params['id']).then((res) => {
          console.log(res);
            this.location = res;
            this.loading = false;
        },() => {
          alert('There was a problem getting the hotel info. Please, try again in a few minutes.')
          this.loading = false;
        });
      }
    });
  }

  getStars = (qt) => {
    return Array(qt).fill(1);
  }

}
