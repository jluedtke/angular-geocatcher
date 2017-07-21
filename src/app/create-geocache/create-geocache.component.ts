import { Component, OnInit } from '@angular/core';
import { Geocache } from '../geocache.model';
import { DatabaseGeocacheService } from '../database-geocache.service';

@Component({
  selector: 'app-create-geocache',
  templateUrl: './create-geocache.component.html',
  styleUrls: ['./create-geocache.component.css'],
  providers: [DatabaseGeocacheService]
})
export class CreateGeocacheComponent implements OnInit {

  constructor(private dbgService: DatabaseGeocacheService) { }

  ngOnInit() {
  }

  createGeocache(author: string, lat: string, lng: string, address: string) {
    let newGeocache = new Geocache(author, lat, lng, address);
    this.dbgService.addGeocacheToDatabase(newGeocache);
  }
}
