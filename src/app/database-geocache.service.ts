import { Injectable } from '@angular/core';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DatabaseGeocacheService {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.geocaches = this.db.list('geocaches');
  }


  addGeocacheToDatabase(geocache: Geocache) {
    this.geocaches.push(geocache);
  }

  getGeocaches() {
    return this.geocaches;
  }
}
