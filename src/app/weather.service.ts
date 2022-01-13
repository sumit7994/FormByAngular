import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

interface WeatherVar {
  city: any;
  cityName: any;
  temprature: any;
  weather: any;
  country: any;
  humidity: any;
  feelsLike: any;
  cod: any;
  main: any;
  sys: any;
  name: any;
  message: any;
  error: any;
}

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherVar> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', '6ce5c09750fa1c4749c5790d1c8bd193')
    return this.http.get<WeatherVar>("https://api.openweathermap.org/data/2.5/weather", { params: params })
  }
}
