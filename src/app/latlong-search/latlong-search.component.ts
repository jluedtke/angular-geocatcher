import { Component, OnInit } from '@angular/core';
import { GeocodeService } from '../geocode.service';

@Component({
  selector: 'app-latlong-search',
  templateUrl: './latlong-search.component.html',
  styleUrls: ['./latlong-search.component.css'],
  providers: [GeocodeService]
})
export class LatlongSearchComponent implements OnInit {
  addressInfo: any[] = null;

  constructor(private geoService: GeocodeService) { }

  ngOnInit() {
  }

  latLongInput(lat: string, long: string) {
    this.geoService.getAddressFromCoordinates(lat, long).subscribe(data => {
      if (data.json().results.length > 0) {
        this.addressInfo = data.json();
        console.log(this.addressInfo)
      } else {
        console.log('No Data');
      }
    });
  }
}
