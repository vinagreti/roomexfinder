import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import {SebmGoogleMap} from 'angular2-google-maps/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat: number = -27.60400701167507;
  lng: number = -48.46412658691406;
  address: any = '';
  zoom: number = 15;
  produtores: any[] = [];

  //http://maps.google.com/maps/api/geocode/xml?latlng=-27.60400701167507,-48.46412658691406&sensor=false

  @ViewChild('map') map;

  constructor(private http: Http) { }

  ngOnInit() {
    this.map.mapClick.subscribe(a => {
      this.lat = a.coords.lat;
      this.lng = a.coords.lng;
      this.getAddress(this.lat, this.lng);
    });

    this.map.zoomChange.subscribe(zoom => {
      this.zoom = zoom;
      console.log(zoom);
    });

    this.getProdutores();
  }

  private getProdutores(){
    this.http.get('http://localhost:4200/assets/jsons/produtores.json')
    .subscribe(produtores => this.produtores = produtores.json());
  }

  private getAddress(lat, lng){
    let address = 'http://maps.google.com/maps/api/geocode/json?latlng='+lat+','+lng+'6&sensor=false'
    this.http.get('address')
    .subscribe(this.getBody);
  }

  private getBody = (res: any) => {
    console.log(res.results);
    return res.results;
  }

}
