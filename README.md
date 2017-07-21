# Geocatcher
### Jared Luedtke 07.21.17

## Description
Geocaching is an outdoor activity in which participants either hide or locate objects in obscure places (there are geocaches in outerspace!). The location of these objects are stored on various listing sites as GPS coordinates. This is an app to post or look up the location of geocaches.

## Specs
| Spec | Input | Output | Description |
| :------------- | :------------- | :------------- | :------------- |
| Program can display an address from a set of coordinates. | "40.7, -73.9" | Some Address in California | Initial API call. |
| Program can display coordinates from an address. | "Some Address in California" | 40.7, -73.9 | Also an initial API call. |
| Program has full CRUD (Create, Read, Update, Delete) functionality for instances of geocaches. | Geocache1(author, lat, long, address, isFound) | Geocache1(Adam S., 40, -40, 1776 Freedom Ave, true) | Users of the website can create geocaches. |
| Program can display geocaches in a list. | "View all" | Geocache1, Geocache2, Geocache3 | Users of the website can view all geocaches. |



## Setup/Installation Requirements
1. Go to the <a href="https://github.com/jluedtke/angular-geocatcher">GitHub Repository</a>
2. Clone repository on to your machine
3. In the Terminal (Powershell for Windows), navigate to the project directory. (Usually /Users/User_Name/Desktop/angular-geocatcher)
4. Use the commands in order, "npm install", "bower install"
5. Navigate to Firebase inside of your internet browser.
6. Create your firebase database, and in the top left corner of the screen, click "Overview".
7. Click "Add Firebase to my Web App".
8. Create "api-keys.ts" inside of the src/app/ folder
9. Inside of api-keys.ts, copy this text: "
export var masterFirebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  databaseURL: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX"
}
10. Replace "XXXX" with the information you obtained from Firebase.
11. Obtain an API key from "https://developers.google.com/maps/documentation/geocoding/start".
12. In api-keys.ts, copy this text and replace the "XXXX" with your API key:
export const geoKey = "XXXX";
12. Run "ng serve"
13. Follow on-screen instructions.

## Known Bugs
None at this time

## Technologies Used
* JavaScript
  * Angular
  * Node.js

* CSS
  * SCSS
  * Tuxedo

* HTML


## Legal
Copyright (c) 2017 **_Jared Luedtke_** All Rights Reserved.
Licensed under the MIT license.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
