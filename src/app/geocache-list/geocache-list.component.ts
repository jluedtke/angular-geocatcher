import { Component, OnInit } from '@angular/core';
import { DatabaseGeocacheService } from '../database-geocache.service';
import { FirebaseListObservable } from 'angularfire2/database'

@Component({
  selector: 'app-geocache-list',
  templateUrl: './geocache-list.component.html',
  styleUrls: ['./geocache-list.component.css'],
  providers: [DatabaseGeocacheService]
})
export class GeocacheListComponent implements OnInit {
  geocaches: any[];

  constructor(private dbgService: DatabaseGeocacheService) { }

  ngOnInit() {
    this.dbgService.getGeocaches().subscribe(data => {
      this.geocaches = data;
    });
  }



}
