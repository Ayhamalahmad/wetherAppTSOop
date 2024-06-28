import { Url } from "url";

// card New Variables
interface cardNewVariablesTypes {
    currentTemperature: HTMLElement | null,
    newsWeatherInfo: HTMLElement | null,
    highTemperature: HTMLElement | null,
    timeSunrise: HTMLElement | null,
    timeSunset: HTMLElement | null,
}
const cardNewVariables: cardNewVariablesTypes = {
    currentTemperature: document.querySelector(".current-temperature"),
    newsWeatherInfo: document.querySelector(".today-weather-details .weather-container .weather-info"),
    highTemperature: document.querySelector(".high-temperature"),
    timeSunrise: document.querySelector(".time-sunrise .time-value"),
    timeSunset: document.querySelector(".time-sunset .time-value")
}

interface headerVarsTypes {
    menuBtn: HTMLElement | null;
    headerContainer: HTMLElement | null;
    headerNav: HTMLElement | null;
    headerLinks: HTMLElement | null;
}
const headerVars: headerVarsTypes = {
    menuBtn: document.querySelector(".menu"),
    headerContainer: document.querySelector(".container"),
    headerNav: document.querySelector(".container .nav"),
    headerLinks: document.querySelector(".container .nav .links"),
}
interface homeVarsTypes {
    country: HTMLElement | null,
    cityName: HTMLElement | null,
    locationInput: HTMLElement | null,
    searchBTN: HTMLElement | null,
    filedMeessage: HTMLElement | null,
    locationBtn: HTMLElement | null,
    humidity: NodeListOf<HTMLElement> | null,
    clouds: NodeListOf<HTMLElement> | null,
    rain: NodeListOf<HTMLElement> | null,
    wind: NodeListOf<HTMLElement> | null,
    temperature: NodeListOf<HTMLElement> | null,
    weatherDescription: NodeListOf<HTMLElement> | null,
    tempMin: NodeListOf<HTMLElement> | null,
    tempMax: NodeListOf<HTMLElement> | null,
    weatherIcon: NodeListOf<HTMLImageElement>,
}
const homeVars: homeVarsTypes = {
    // Location info
    country: document.querySelector(".country"),
    cityName: document.querySelector(".city-name"),
    // search
    locationInput: document.querySelector(".location-input"),
    searchBTN: document.querySelector(".search-button"),
    filedMeessage: document.querySelector(".filed"),
    locationBtn: document.querySelector(".location-button"),
    // card left
    humidity: document.querySelectorAll(".boxes .humidity p"),
    clouds: document.querySelectorAll(".boxes .clouds p"),
    rain: document.querySelectorAll(".boxes .rain p"),
    wind: document.querySelectorAll(".boxes .wind p"),
    // card right
    temperature: document.querySelectorAll(".right .temperature"),
    weatherDescription: document.querySelectorAll(".right .description"),
    tempMin: document.querySelectorAll(".right .temp-min"),
    tempMax: document.querySelectorAll(".right .temp-max"),
    weatherIcon: document.querySelectorAll(".right .weather-icon"),
}
interface hotelVarsTypes {
    hotelCard: HTMLElement | null,
    hotelGallery: HTMLDivElement | null,
    hotelPreBtn: HTMLElement | null,
    hotelNextBtn: HTMLElement | null,
}
const hotelVars: hotelVarsTypes = {
    hotelCard: document.querySelector(".hotel-card"),
    hotelGallery: document.querySelector(".hotel-gallery"),
    hotelPreBtn: document.querySelector(".hotels .navigation-buttons .previous-button"),
    hotelNextBtn: document.querySelector(".hotels .navigation-buttons .next-button"),
}
interface RecentSearchvarsTypes {
    recentGallery: HTMLElement | null,
    recentWrapper: HTMLElement | null,
    recentCard: HTMLElement | null,
}
const RecentSearchvars: RecentSearchvarsTypes = {
    recentGallery: document.querySelector(".recent-search .recent-gallery"),
    recentWrapper: document.querySelector(".recent-search .recent-gallery .wrapper"),
    recentCard: document.querySelector(".recent-search .wrapper .box"),

}
interface RestaurantsVarsTypes {
    restaurantsPrevBtn: HTMLElement | null,
    restaurantsNextBtn: HTMLElement | null,
    restaurantGallery: HTMLElement | null,
    restaurantCard: HTMLElement | null,
}
const RestaurantsVars: RestaurantsVarsTypes = {
    restaurantsPrevBtn: document.querySelector(".restaurants .navigation-buttons .previous-button"),
    restaurantsNextBtn: document.querySelector(".restaurants .navigation-buttons .next-button"),
    restaurantGallery: document.querySelector(".restaurant-gallery"),
    restaurantCard: document.querySelector(".restaurant-card"),

}
interface SubscribeVarsTypes {
    weatherUpdateGallery: HTMLElement | null,
    weatherUpdateWrapper: HTMLElement | null,
    updateCard: HTMLElement | null,
}
const SubscribeVars: SubscribeVarsTypes = {
    weatherUpdateGallery: document.querySelector(".weather-update-gallery"),
    weatherUpdateWrapper: document.querySelector(".weather-update-wrapper"),
    updateCard: document.querySelector(".update-card"),
}
interface weeklyVarsTypes {
    groupAllBtn: NodeListOf<HTMLElement> | null,
    todayBtn: HTMLElement | null,
    weeklyBtn: HTMLElement | null,
    gallary: HTMLElement | null,
    gallaryWeekly: HTMLElement | null,
    weatherBox: HTMLElement | null,
    weeklyBox: HTMLElement | null,
    nextBtn: HTMLElement | null,
    previouBtn: HTMLElement | null,
    navigationBtns: NodeListOf<HTMLElement> | null,
    weeklyWrapper: HTMLElement | null,
    todayWrapper: HTMLElement | null,
}
const weeklyVars: weeklyVarsTypes = {
    groupAllBtn: document.querySelectorAll(".button-group button"),
    todayBtn: document.querySelector(".today-button"),
    weeklyBtn: document.querySelector(".weekly-button"),
    gallary: document.querySelector(".gallary"),
    gallaryWeekly: document.querySelector(".weekly-gallary"),
    weatherBox: document.querySelector(".weather-box"),
    weeklyBox: document.querySelector(".weekly-gallary .weekly-wrapper .box"),
    nextBtn: document.querySelector(".next-button"),
    previouBtn: document.querySelector(".previous-button"),
    navigationBtns: document.querySelectorAll(".navigation-buttons button"),
    weeklyWrapper: document.querySelector(".weekly-wrapper"),
    todayWrapper: document.querySelector(".today-wrapper"),

}

// Api Url
//template =>  https://wecast.vercel.app/

var temperatureUnit = document.createElement("sup");
temperatureUnit.textContent = "℃";
// °
interface locationSettingsTypes {
    latitude1: number | null,
    longitude2: number | null,
    data: any | null;
    hourlyDataForCurrentDay: string[],
    uniqueForecastDays: string[],
    iconURL: string,
    fiveDaysforecast?: any,
    createWeatherWeekly?: any,
}
let locationSettings: locationSettingsTypes = {
    latitude1: null,
    longitude2: null,
    data: null,
    hourlyDataForCurrentDay: [],
    uniqueForecastDays: [],
    iconURL: "",
    fiveDaysforecast: null,
    createWeatherWeekly: "",
}
interface DateUtilsTypes {
    weatherUpdateTime: HTMLElement | null,
    weatherDateT: HTMLElement | null,
    daysOfWeek: string[] | null,
    daysOfWeekAbbreviations: string[] | null,
    months: string[] | null,
    monthAbbreviations: string[] | null,
    currentDate: Date | null;
    currentDay: number | null;
}
const DateUtils: DateUtilsTypes = {
    weatherUpdateTime: document.querySelector(".weather-update-time"),
    weatherDateT: document.querySelector(".date-info .weather-date"),

    daysOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],

    daysOfWeekAbbreviations: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ],

    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],

    monthAbbreviations: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],
    currentDate: new Date(),
    // for hourly
    currentDay: new Date().getDate(),
}
class dateHndler {
    private hours: number | undefined | any;;
    private minutes: number | undefined | any;;
    private dateUtils: DateUtilsTypes;
    constructor(dateUtils: DateUtilsTypes, locationSettings: locationSettingsTypes) {
        this.dateUtils = dateUtils;
    }
    public handleData(): void {
        const { currentDate, daysOfWeek, monthAbbreviations, weatherDateT, weatherUpdateTime } = this.dateUtils;
        this.hours = currentDate?.getHours();
        this.minutes = currentDate?.getMinutes();

        const formattedTime: string = `${this.hours % 12 || 12}:${this.minutes < 10 ? "0" : ""
            }${this.minutes} ${this.hours >= 12 ? "PM" : "AM"}`;
        if (daysOfWeek && currentDate && monthAbbreviations && currentDate && weatherDateT && weatherUpdateTime) {
            let nowDate: string = `${daysOfWeek[currentDate.getDay()]},${monthAbbreviations[currentDate.getMonth()]} ${currentDate.getDate()}`;
            weatherDateT.textContent = nowDate;
            weatherUpdateTime.textContent = `Update As Of ${formattedTime}`;
        }
    }
}
class weatherData {
    private APIKey: string;
    private apiUrl: string;

    constructor() {
        this.APIKey = "473a86fc6ac47386e6d6c5132cc575a8";
        this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${this.APIKey}`;
    }
    public async fetchWeather(): Promise<void> {
        try {
            console.log("from : fetchWeather");
            let response: Response = await fetch(this.apiUrl);
            locationSettings.data = await response.json();
        } catch (error) {

        }
    }
}
class textHandler {
    public updateElementText(elements: any, text: any): void {
        if (Array.isArray(elements)) {
            elements.forEach((element: any) => {
                if (element.textContent) element.textContent = text;
            });
        }
    }
    // 
    public cityNameHandler() {
        console.log("from : cityNameHandler");
        if (locationSettings.data && locationSettings.data.cod === "404") {
            console.log("from : cityNameHandler");
            homeVars.filedMeessage?.classList.add("active");
        } else {
            if (locationSettings.data.name && homeVars.cityName) {
                homeVars.cityName.textContent = locationSettings.data.name;
            }
            homeVars.filedMeessage?.classList.remove("active");
        }
    }
    // sunrise and sunset
    public sunriseAndSunset() {
        console.log("sunriseAndSunset");
        if (cardNewVariables.timeSunset && cardNewVariables.timeSunrise && homeVars.country && locationSettings.data.main && locationSettings.data.wind && locationSettings.data.weather && locationSettings.data.clouds && locationSettings.data.sys) {
            homeVars.country.textContent = locationSettings.data.sys.country;
            const sunsetTime = new Date(locationSettings.data.sys.sunset * 1000);
            const sunriseTime = new Date(locationSettings.data.sys.sunrise * 1000);
            cardNewVariables.timeSunrise.textContent = `${sunriseTime.getHours() < 10
                ? `0${sunriseTime.getHours()}`
                : sunriseTime.getHours()
                }:${sunriseTime.getMinutes() < 10
                    ? `0${sunriseTime.getMinutes()}`
                    : sunriseTime.getMinutes()
                } AM`;
            cardNewVariables.timeSunset.textContent = `${sunsetTime.getHours() < 10
                ? `0${sunsetTime.getHours()}`
                : sunsetTime.getHours()
                }:${sunsetTime.getMinutes() < 10
                    ? `0${sunsetTime.getMinutes()}`
                    : sunsetTime.getMinutes()
                } PM`;
        }
    }
    // card left
    public cardleft() {
        const rainData = locationSettings.data.rain;
        console.log("rainData", rainData);
        if (rainData && rainData["1h"]) {
            const rainAmount = rainData["1h"];
            this.updateElementText(locationSettings.data.rain, `rain ${rainAmount}h`);
        } else {
            this.updateElementText(locationSettings.data.rain, `rain ${0}h`);
        }
        this.updateElementText(locationSettings.data.humidity, `${locationSettings.data.main.humidity}%`);
        this.updateElementText(locationSettings.data.clouds, `clouds ${locationSettings.data.clouds.all}%`);
        this.updateElementText(locationSettings.data.wind, `Wind ${locationSettings.data.wind.speed}km/h`);
    }

    // card right
    public cardRight() {
        locationSettings.iconURL =
            "http://openweathermap.org/img/wn/" +
            locationSettings.data.weather[0].icon +
            "@4x" +
            ".png";
        homeVars.weatherIcon?.forEach((e) => {
            e.src = locationSettings.iconURL;
        });

        this.updateElementText(homeVars.temperature, Math.trunc(locationSettings.data.main.temp));
        this.updateElementText(homeVars.weatherDescription, locationSettings.data.weather[0].description);
        this.updateElementText(homeVars.tempMin, `${Math.trunc(locationSettings.data.main.temp_min)}°`);
        this.updateElementText(homeVars.tempMax, `- ${Math.trunc(locationSettings.data.main.temp_max)}°`);
    }
    // news card
    public newsCard() {
        if (cardNewVariables.currentTemperature && cardNewVariables.highTemperature) {
            console.log("locationSettings.data.main.temp_max", locationSettings.data.main.temp_max);
            cardNewVariables.currentTemperature.textContent = `${Math.trunc(locationSettings.data.main.temp_min)}°`;
            cardNewVariables.highTemperature.textContent = `${Math.floor(locationSettings.data.main.temp_max)}°`;
        }
    }
    // five Days forecast
    public fiveDaysforecastM() {
        if (locationSettings.data.list) {
            locationSettings.createWeatherWeekly = (element: any) => {
                const dateString = element.dt_txt.split(" ")[0];
                const dateParts = dateString.split("-");
                const year = parseInt(dateParts[0]);
                const month = parseInt(dateParts[1]) - 1;
                const day = parseInt(dateParts[2]);
                const dateObject = new Date(year, month, day);
                return `
            <div class="box">
              <div class="box-image">
                <img src="http://openweathermap.org/img/wn/${element.weather[0].icon
                    }@4x.png" alt="" />
              </div>
              <div class="box-content">
                <p class="date">
                ${DateUtils.daysOfWeekAbbreviations ? DateUtils.daysOfWeekAbbreviations[dateObject.getDay()] : ""}, ${day} ${DateUtils.monthAbbreviations ? DateUtils.monthAbbreviations[month] : ""}
            </p>
                < h2 class="temperature" > ${(
                        element.main.temp - 273.15
                    ).toFixed()
                    }°</h2>
                < /div>
                < /div>
                    `;
            };
            locationSettings.uniqueForecastDays = [];
            locationSettings.fiveDaysforecast = locationSettings.data.list.filter((forecast: any) => {
                const forecastDate: any = new Date(forecast.dt_txt).getDate();
                if (!locationSettings.uniqueForecastDays.includes(forecastDate)) {
                    locationSettings.uniqueForecastDays.push(forecastDate);
                    return true;
                }
                return false;
            });
        }
    }
    // reset weeklyWrapper
    public resetWeeklyWrapper() {
        if (weeklyVars.weeklyWrapper) { weeklyVars.weeklyWrapper.textContent = ""; }
        locationSettings.fiveDaysforecast.forEach((element: any) => {
            weeklyVars.weeklyWrapper?.insertAdjacentHTML(
                "beforeend",
                locationSettings.createWeatherWeekly(element)
            );

        });
    }



}
// Instances 
let weatherInstance = new weatherData();
let textHandlerInstance = new textHandler();


weatherInstance.fetchWeather().then(() => {
    if (locationSettings.data) {
        console.log(locationSettings.data);
        // weatherInstance.fetchWeather;
        textHandlerInstance.cityNameHandler();
        textHandlerInstance.sunriseAndSunset();
        textHandlerInstance.newsCard();
        textHandlerInstance.cardRight();
        textHandlerInstance.cardleft();
        textHandlerInstance.fiveDaysforecastM();

    } else {

    }
});



