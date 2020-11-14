import { Component, OnInit } from '@angular/core';
import { campus } from './models/campus';
import { ServiceWeatherSite } from './services/weather-site-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'weatherSite';


  mainPlace: campus = {
    image: '',
    main: {
      temp: 20
    },
    wind: {},
    weather: [
      { icon: 'snow' }
    ]
  };

  days: any[] = [];
  otherPlaces: campus[] = []
  bestDay = {
    main: {
      temp: 20
    },
    wind: {},
    weather: [
      { icon : 'snow'}
    ]
  }
  placesToVisit: any[] = [];

  constructor(
    private service: ServiceWeatherSite
  ) { }

  ngOnInit() {
    this.getCampus();
    this.getForcastExtended();
    this.getCities();
  }

  getCampus() {

    const endPoint = 'https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582';

    this.service.get(endPoint).subscribe(
      (response: any) => {

        const listOfPlaces: any[] = response.places;
        const listAux: campus[] = [];
        for (const iterator of listOfPlaces) {
          if (!iterator.main_headquarter) {
            listAux.push(iterator);
          }
        }
        this.otherPlaces = listAux;
        this.mainPlace = listOfPlaces.find(item => item.main_headquarter);
      }
    );
  }

  getForcastExtended() {
    const endpoint = 'https://run.mocky.io/v3/73c29128-d158-40db-aeae-ea78a0d762b7';

    this.service.get(endpoint).subscribe(
      (response: any) => {
        this.days = response.list.map((item: any) => {
          return {
            ...item,
            date: new Date(item.date).getDay()
          }
        });
        this.getBestDay();
      }
    );
  }

  getBestDay() {
    for (const iterator of this.days) {
      if (iterator.main.temp >= 298.15 && iterator.main.temp <= 301.15) {
        let auxHumidity = iterator.main.humidity;
        if (auxHumidity < iterator.main.humidity) {
          auxHumidity = iterator.main.humidity;
        }
        this.bestDay = iterator;
      }
    }
  }

  getCities() {
    const endpoint = 'https://run.mocky.io/v3/f8926877-849a-416f-8226-9fd9d9fc5e07';

    this.service.get(endpoint).subscribe(
      (response: any) => {
        const listAllCities: any[] = response.result;
        for (const iterator of listAllCities) {
          if (iterator.main.temp >= 297.15 && iterator.main.temp <= 303.15) {
            this.placesToVisit.push(iterator);
            if (this.placesToVisit.length === 3) {
              break;
            }
          }
        }
      }
    );
  }


}
