import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

  }

  city: string = "";
  cityName: string = "Enter Your City Above";
  temprature = "";
  country = "";
  weather = "";
  humidity = "";
  feelsLike = "";

  keyPress(event: KeyboardEvent) {
    if (event.key == "Enter") {
      this.weatherInfo()
    }
  }

  weatherInfo() {
    console.log(this.city);
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=6ce5c09750fa1c4749c5790d1c8bd193`)
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result)
    //     if (result.cod == 200) {
    //       this.cityName = result.name;
    //       this.temprature = result.main.temp + " C"
    //       this.country = result.sys.country
    //       this.weather = result.weather[0].main
    //       this.humidity = "Humidity:- " + result.main.humidity
    //       this.feelsLike = "Feels Like:- " + result.main.feels_like
    //     } else if (result.cod == 404) {
    //       this.cityName = result.message
    //       this.temprature = ""
    //       this.country = ""
    //       this.weather = ""
    //       this.humidity = ""
    //       this.feelsLike = ""
    //     }
    //   }
    //   )

    this.weatherService.getWeather(this.city).subscribe(result => {
      console.log(result, "dataaa");
      if (result.cod == 200) {
        this.cityName = result.name;
        this.temprature = result.main.temp + " C"
        this.country = result.sys.country
        this.weather = result.weather[0].main
        this.humidity = "Humidity:- " + result.main.humidity
        this.feelsLike = "Feels Like:- " + result.main.feels_like
      }
    }, (error) => {
      if (error.error.cod == 404) {
        this.cityName = error.error.message
        this.temprature = ""
        this.country = ""
        this.weather = ""
        this.humidity = ""
        this.feelsLike = ""
      }
    })

  }


}
