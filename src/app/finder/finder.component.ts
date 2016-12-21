import { Component, OnInit } from '@angular/core';
import { FinderService } from './finder.service'
import { MapService } from '../map/map.service'

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss'],
  providers: [
    MapService
  ]
})
export class FinderComponent implements OnInit {
  locations = [];
  loading = false;
  searchString = 'IE'

  constructor(
    private finderService: FinderService,
    private mapService: MapService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.finderService.search().then((res) => {
        this.locations = res;
        this.loading = false;
    },() => {
      alert('There was a problem during the search. Please, try again in a few minutes.')
      this.loading = false;
    });
  }

  private getMapLink = (location) => {
    let lat = location.GeoCode.Latitude;
    let lng = location.GeoCode.Longitude;
    return this.mapService.getByLatLng([lat, lng]);
  }

  goToMap = (location) => {
    let mapLink = this.getMapLink(location);
    window.open(mapLink,'_blank');
  }

  getStars = (qt) => {
    return Array(qt).fill(1);
  }

}
