import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  city: string = "";
  cityName: string = "Enter Your City Above";
  temprature = "";
  country = "";
  weather = "";
  humidity = "";
  feelsLike = "";

  weatherInfo() {
    console.log(this.city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=6ce5c09750fa1c4749c5790d1c8bd193`)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.cod == 200) {
          this.cityName = result.name;
          this.temprature = result.main.temp + " C"
          this.country = result.sys.country
          this.weather = result.weather[0].main
          this.humidity = "Humidity:- " + result.main.humidity
          this.feelsLike = "Feels Like:- " + result.main.feels_like
        } else if (result.cod == 404) {
          this.cityName = result.message
          this.temprature = ""
          this.country = ""
          this.weather = ""
          this.humidity = ""
          this.feelsLike = ""
        }
      }
      )

  }

}
