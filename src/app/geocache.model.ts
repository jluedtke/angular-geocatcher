export class Geocache {
  private isFound: boolean = false;
  constructor ( public author: string, public lat: string, public lng: string, public address: string) {}
}
