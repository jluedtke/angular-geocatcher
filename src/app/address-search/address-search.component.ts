import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GeocodeService } from '../geocode.service';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css'],
  providers: [GeocodeService]
})
export class AddressSearchComponent implements OnInit {
  @Output() clickSender = new EventEmitter();
  values: string[];
  coordinateInfo: any[];

  constructor(private geoService: GeocodeService) { }

  ngOnInit() {
  }

  addressInput(address: string) {
    this.values = [];
    var formattedAddress: string = address.replace(/( )/, '+');
    this.geoService.getCoordinatesFromAddress(formattedAddress).subscribe(data => {
      if (data.json().results.length > 0) {
        this.coordinateInfo = data.json();
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
