import { Injectable } from '@angular/core';
import { geoKey } from './api-keys';
import { Http, Response } from '@angular/http';

@Injectable()
export class GeocodeService {

  constructor(private http: Http) { }

  getCoordinatesFromAddress(address: string) {
    //address pre-formatted
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + geoKey)
  }

  getAddressFromCoordinates(lat: string, long: string) {
    //Two form inputs
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=" + geoKey)
  }

}
