import { Component, OnInit } from '@angular/core';
import { GeocodeService } from '../geocode.service';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css'],
  providers: [GeocodeService]
})
export class AddressSearchComponent implements OnInit {
  coordinateInfo: any[];

  constructor(private geoService: GeocodeService) { }

  ngOnInit() {
  }

  addressInput(address: string) {
    var formattedAddress: string = address.replace(/( )/, '+');
    this.geoService.getCoordinatesFromAddress(formattedAddress).subscribe(data => {
      if (data.json().results.length > 0) {
        this.coordinateInfo = data.json();
        console.log(this.coordinateInfo);
      } else {
        console.log('No Data');
      }
    });
  }

}
