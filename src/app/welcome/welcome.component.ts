import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  masterGeocacheValues: string[];
  constructor() { }

  ngOnInit() {
  }

  setMasterGeocacheValues(values: string[]) {
    this.masterGeocacheValues = values;
  }
}
