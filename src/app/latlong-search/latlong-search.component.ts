import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GeocodeService } from '../geocode.service';

@Component({
  selector: 'app-latlong-search',
  templateUrl: './latlong-search.component.html',
  styleUrls: ['./latlong-search.component.css'],
  providers: [GeocodeService]
})
export class LatlongSearchComponent implements OnInit {
  addressInfo: any[] = null;
  values: string[];
  @Output() clickSender = new EventEmitter();
  constructor(private geoService: GeocodeService) { }

  ngOnInit() {
  }

  latLongInput(lat: string, long: string) {
    this.values = [];
    this.geoService.getAddressFromCoordinates(lat, long).subscribe(data => {
      if (data.json().results.length > 0) {
        this.addressInfo = data.json();
        this.values.push(data.json().results[0].formatted_address);
        this.values.push((data.json().results[0].geometry.location.lat).toString());
        this.values.push((data.json().results[0].geometry.location.lng).toString());
        this.sendValues();

      } else {
        alert('No data was present.');
      }
    });
  }

  sendValues() {
    this.clickSender.emit(this.values);
  }
}
