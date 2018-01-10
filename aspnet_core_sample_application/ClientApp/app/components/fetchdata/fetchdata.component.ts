import { Component, Inject, ViewEncapsulation } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import "rxjs/add/observable/fromEvent";

@Component({
    selector: "fetchdata",
    templateUrl: "./fetchdata.component.html",
    styleUrls: ["./../../../../node_modules/@progress/kendo-theme-default/dist/all.css"],
    encapsulation: ViewEncapsulation.None
})
export class FetchDataComponent {
    public forecasts: IWeatherForecast[];

    constructor(http: HttpClient, @Inject("ORIGIN_URL") originUrl: string) {
        http.get(originUrl + "/api/SampleData/WeatherForecasts").subscribe(result => {
            this.forecasts = result as IWeatherForecast[];
        });
    }
}

interface IWeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
