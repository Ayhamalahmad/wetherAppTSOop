interface cardNewVariablesTypes {
    currentTemperature: HTMLElement | null,
    NewsWeatherInfo: HTMLElement | null,
    highTemperature: HTMLElement | null,
    timeSunrise: HTMLElement | null,
    timeSunset: HTMLElement | null,
}
const cardNewVariables: cardNewVariablesTypes = {
    currentTemperature: document.querySelector(".current-temperature"),
    NewsWeatherInfo: document.querySelector(".today-weather-details .weather-container .weather-info"),
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
    locationInput: HTMLInputElement | null,
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



// °
interface locationSettingsTypes {
    latitude1: number | null,
    longitude2: number | null,
    data: any | null;
    hourlyDataForCurrentDay: any[],
    uniqueForecastDays: string[],
    iconURL: string,
    fiveDaysforecast?: any,
    createWeatherWeekly?: any,
    daylyRain?: string,
    APIKey: string;
    apiUrl: string;
    successCallback: Function,
    positionErrorCallback: Function,
    hour12Format: any,
    temperature: any,
    temperatureMax: any,
    main: any,
    description: any,
    speed: any,
    period: any,
    dateTimeParts: any,
    daylyRainData: any,
    hour: any,
    temperatureUnit: HTMLElement,
}
let locationSettings: locationSettingsTypes = {
    latitude1: null,
    longitude2: null,
    data: "",
    hourlyDataForCurrentDay: [],
    uniqueForecastDays: [],
    iconURL: "",
    fiveDaysforecast: null,
    createWeatherWeekly: "",
    daylyRain: "",
    APIKey: "",
    apiUrl: "",
    successCallback: () => { },
    positionErrorCallback: () => { },
    hour12Format: "",
    temperature: "",
    temperatureMax: "",
    main: "",
    description: "",
    speed: "",
    period: "",
    dateTimeParts: "",
    daylyRainData: "",
    hour: "",
    temperatureUnit: document.createElement("sup"),
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
// classes
class dateHndler {
    private hours: number | undefined | any;;
    private minutes: number | undefined | any;;
    private dateUtils: DateUtilsTypes;
    constructor(dateUtils: DateUtilsTypes) {
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
    private reset: reset;
    private UIUpdater: UIUpdater;
    private dateHndler: dateHndler;
    private textHandler: textHandler;
    constructor() {
        locationSettings.APIKey = "473a86fc6ac47386e6d6c5132cc575a8";
        locationSettings.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${locationSettings.APIKey}`;
        this.reset = new reset();
        this.UIUpdater = new UIUpdater();
        this.dateHndler = new dateHndler(DateUtils);
        this.textHandler = new textHandler();
    }
    public async fetchWeather(): Promise<void> {
        try {
            console.log("from : fetchWeather");
            let response: Response = await fetch(locationSettings.apiUrl);
            locationSettings.data = await response.json();
            this.reset.resetNewsWeatherInfoAndTodayWrapper();
            this.reset.resetWeeklyWrapper();
            this.UIUpdater.createHourlyNews();
            // this.UIUpdater.createHourlyNews();
            this.dateHndler.handleData();
            this.textHandler.cityNameHandler();
            this.textHandler.cardleft();
            this.textHandler.newsCard();
            this.textHandler.cardRight();
            this.textHandler.hourly();
            this.textHandler.fiveDaysforecastM();
            this.textHandler.sunriseAndSunset();
            this.UIUpdater.updateHourlyWeatherData();
            // this.getWeatherWeekly();
        } catch (error) {

        }
    }
    public async searchCity(city: string) {
        locationSettings.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${locationSettings.APIKey}`;
        await this.fetchWeather();
        console.log("from searchCity");
        // Reset latitude1 and longitude2
        // locationSettings.latitude1 = 0;
        // locationSettings.longitude2 = 0;
        this.reset.resetCoordinates();
    }
    public async getWeatherWeekly(city?: any) {
        if ((locationSettings.latitude1, locationSettings.longitude2)) {
            locationSettings.apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${locationSettings.latitude1}&lon=${locationSettings.longitude2}&appid=${locationSettings.APIKey}`;
        } else {
            if (city) {
                locationSettings.apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${locationSettings.APIKey}`;
            } else {
                locationSettings.apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${locationSettings.APIKey}`;
            }
        }
        console.log("getWeatherWeekly", locationSettings.apiUrl);
        await this.fetchWeather();
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
        this.updateElementText(locationSettings.data.humidity, `${locationSettings.data.main?.humidity}%`);
        this.updateElementText(locationSettings.data.clouds, `clouds ${locationSettings.data?.clouds?.all}%`);
        this.updateElementText(locationSettings.data.wind, `Wind ${locationSettings.data?.wind?.speed}km/h`);
    }

    // card right
    public cardRight() {
        if (locationSettings.data && locationSettings.data.weather && locationSettings.data.weather.length > 0) {
            locationSettings.iconURL =
                "http://openweathermap.org/img/wn/" +
                locationSettings.data.weather[0]?.icon +
                "@4x" +
                ".png";
        }

        homeVars.weatherIcon?.forEach((e) => {
            e.src = locationSettings.iconURL;
        });

        this.updateElementText(homeVars.temperature, Math.trunc(locationSettings.data.main?.temp));
        this.updateElementText(homeVars.weatherDescription, locationSettings.data?.weather?.[0]?.description);
        this.updateElementText(homeVars.tempMin, `${Math.trunc(locationSettings.data.main?.temp_min)}°`);
        this.updateElementText(homeVars.tempMax, `- ${Math.trunc(locationSettings.data.main?.temp_max)}°`);
    }
    // news card
    public newsCard() {
        if (cardNewVariables.currentTemperature && cardNewVariables.highTemperature) {
            cardNewVariables.currentTemperature.textContent = `${Math.trunc(locationSettings.data?.main?.temp_min)}°`;
            cardNewVariables.highTemperature.textContent = `${Math.floor(locationSettings.data?.main?.temp_max)}°`;
        }
    }
    // five Days forecast
    public fiveDaysforecastM() {
        if (locationSettings.data.list) {
            console.log("from ,fiveDaysforecastM");
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
    // hourly
    public hourly() {
        if (locationSettings.data) {
            locationSettings.data.list?.forEach((e: any) => {
                const dateTimeParts = e.dt_txt.split(" ");
                const dateParts = dateTimeParts[0].split("-");
                const day = parseInt(dateParts[2]);
                console.log(day);
                console.log(dateParts);
                console.log(dateTimeParts);
                if (day === DateUtils.currentDay) {
                    locationSettings.hourlyDataForCurrentDay.push(e);
                }
            });
        }
    }

}
class reset {
    // reset NewsWeatherInfo
    resetNewsWeatherInfoAndTodayWrapper() {
        if (cardNewVariables.NewsWeatherInfo && weeklyVars.todayWrapper) {
            cardNewVariables.NewsWeatherInfo.textContent = "";
            // reset todayWrapper
            weeklyVars.todayWrapper.textContent = "";
        }

    }

    // reset weeklyWrapper
    public resetWeeklyWrapper() {
        if (weeklyVars.weeklyWrapper) { weeklyVars.weeklyWrapper.textContent = ""; }
        locationSettings.fiveDaysforecast?.forEach((element: any) => {
            weeklyVars.weeklyWrapper?.insertAdjacentHTML(
                "beforeend",
                locationSettings.createWeatherWeekly(element)
            );

        });
    }

    public resetCoordinates(): void {
        locationSettings.latitude1 = 0;
        locationSettings.longitude2 = 0;
    }
}
class UIUpdater {
    updateHourlyWeatherData() {
        locationSettings.hourlyDataForCurrentDay?.forEach((e: any) => {
            locationSettings.dateTimeParts = e.dt_txt.split(" ")[1].split(":")[0];
            locationSettings.daylyRainData = e.rain;
            locationSettings.daylyRain;
            if (locationSettings.daylyRainData && locationSettings.daylyRainData["3h"]) {
                locationSettings.daylyRain = locationSettings.daylyRainData["3h"];
            }
            locationSettings.period = "AM";
            locationSettings.hour = parseInt(locationSettings.dateTimeParts);
            if (locationSettings.hour >= 12) {
                locationSettings.period = "PM";
            }
            locationSettings.hour12Format = locationSettings.hour > 12 ? locationSettings.hour - 12 : locationSettings.hour;
            locationSettings.temperature = Math.floor(e.main.temp - 273.15);
            locationSettings.temperatureMax = Math.floor(e.main.temp_max - 273.15);
            locationSettings.main = e.weather[0].main;
            locationSettings.description = e.weather[0].description;
            locationSettings.speed = e.wind.speed;
            this.createHourly(e);
            weeklyVars.todayWrapper?.insertAdjacentHTML("beforeend", this.createHourly(e));
            this.createHourlyNews();
            cardNewVariables.NewsWeatherInfo?.insertAdjacentHTML("beforeend", uIUpdaterInstance.createHourlyNews());
        });
    }
    // Funtion to create card
    createHourly(e: any) {
        return `
        <div class="weather-box">
        <img src="http://openweathermap.org/img/wn/${e.weather[0].icon
            }@4x.png" alt="" />
    
        <div class="weather-info">
          <span class="weather-text">${locationSettings.main}</span>
          <span class="weather-time">${locationSettings.hour12Format < 10 ? `0${locationSettings.hour12Format}` : locationSettings.hour12Format
            } ${locationSettings.period}</span>
        </div>
    
        <div class="temperature">
          <h2 class="temperature-high">${locationSettings.temperature}°</h2>
          <h4 class="temperature-low">${locationSettings.temperatureMax}°</h4>
        </div>
    
        <div class="wind-rain">
          <div class="wind-speed">
            <i class="fas fa-wind icon"></i>
            <span class="wind-speed-text">${locationSettings.speed}km/H</span>
          </div>
    
          <div class="rain">
            <i class="fas fa-cloud-showers-heavy icon"></i>
            <span class="rain-text">rain ${locationSettings.daylyRain ? locationSettings.daylyRain : 0} h</span>
          </div>
        </div>
    
        <div class="weather-description">
          <p>${locationSettings.description}</p>
        </div>
      </div>
        `;
    };

    // hourly for news
    // Funtion to create card
    createHourlyNews() {
        console.log("from createHourlyNews");
        return `
              <div class="weather-details">
              <i class="fas fa-cloud weather-icon"></i>
              <span class="temperature">
              ${locationSettings.temperature}
                <sup>°</sup>
              </span>
              <span class="time">${locationSettings.hour12Format < 10 ? `0${locationSettings.hour12Format}` : locationSettings.hour12Format
            } ${locationSettings.period}</span>
              <span class="condition">${locationSettings.description}</span>
            </div>
        `;
    };
}
class userLocation {
    private weatherData: weatherData;
    constructor() {
        this.weatherData = new weatherData();
    }
    public getUserLocation(successCallback: Function, positionErrorCallback: Function): any {
        locationSettings.successCallback = successCallback;
        locationSettings.positionErrorCallback = positionErrorCallback;
        navigator.geolocation.getCurrentPosition(
            (position) => this.successCallback(position),
            (error) => this.positionErrorCallback(error)
        );
    }

    public async successCallback(position: any) {
        const { latitude, longitude } = position.coords;
        locationSettings.latitude1 = latitude;
        locationSettings.longitude2 = longitude;
        locationSettings.apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${locationSettings.APIKey}`;
        await this.weatherData.fetchWeather();
        await this.weatherData.getWeatherWeekly();
    }
    public positionErrorCallback(error: any) {
        console.log(error);
    }
}
locationSettings.temperatureUnit.textContent = "℃";
// Instances 
let weatherInstance = new weatherData();
let textHandlerInstance = new textHandler();
let userLocationInstance = new userLocation();
let uIUpdaterInstance = new UIUpdater();
let resetInstance = new reset();
let dateHndlerInstance = new dateHndler(DateUtils);
// Event listeners
homeVars.locationBtn?.addEventListener("click", (e) => {
    userLocationInstance.getUserLocation(locationSettings.successCallback, locationSettings.positionErrorCallback);
});
homeVars.searchBTN?.addEventListener("click", () => {
    if (homeVars.locationInput?.value.trim() !== "" && homeVars.locationInput) {
        // weatherInstance
        weatherInstance.searchCity(homeVars.locationInput.value.trim());
        weatherInstance.getWeatherWeekly(homeVars.locationInput.value.trim());
        // uIUpdaterInstance.updateHourlyWeatherData();
        resetInstance.resetWeeklyWrapper();
        homeVars.locationInput.value = "";
    }
});
homeVars.locationInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (homeVars.locationInput?.value.trim() !== "" && homeVars.locationInput) {
            weatherInstance.searchCity(homeVars.locationInput.value.trim());
            weatherInstance.getWeatherWeekly(homeVars.locationInput.value.trim());
            homeVars.locationInput.value = "";
            resetInstance.resetWeeklyWrapper();
        }
    }
});
weatherInstance.fetchWeather().then(() => {
    if (locationSettings.data) {
        console.log(locationSettings.data);
        // resetInstance
        resetInstance.resetWeeklyWrapper();
        // Insert Data
        cardNewVariables.NewsWeatherInfo?.insertAdjacentHTML("beforeend", uIUpdaterInstance.createHourlyNews());
        // Insert Data
        cardNewVariables.NewsWeatherInfo?.insertAdjacentHTML("beforeend", uIUpdaterInstance.createHourlyNews());
    }
});



window.addEventListener("load", async () => {
    userLocationInstance.getUserLocation(locationSettings.successCallback, locationSettings.positionErrorCallback);
    await weatherInstance.fetchWeather();
    await weatherInstance.getWeatherWeekly();
    resetInstance.resetWeeklyWrapper();
    // Insert Data
    // cardNewVariables.NewsWeatherInfo?.insertAdjacentHTML("beforeend", uIUpdaterInstance.createHourlyNews());
});
class HorizontalScroll {
    static scrollInterval: ReturnType<typeof setInterval>;
    static isScrollingForward: Boolean = true;
    static scrollDelay: number = 6000;
    static isTargetReached: boolean = false;
    static isTargetReached2: boolean = false;
    public static scrollNext(neBtn: HTMLElement | null, Gallery: HTMLElement | null, ElementTo: HTMLElement | null | number, gap: number = 0) {
        neBtn.addEventListener("click", (e) => {
            if (typeof ElementTo === "number") {
                Gallery.scrollLeft += ElementTo + gap;
            } else {
                Gallery.scrollLeft += ElementTo.offsetWidth + gap;
            }
            console.log("from new fun");
        });
    }
    public static scrollpreviou(peBtn: HTMLElement | null, Gallery: HTMLElement | null, ElementTo: HTMLElement | null | number, gap: number = 0) {
        peBtn.addEventListener("click", (e) => {
            if (typeof ElementTo === "number") {
                Gallery.scrollLeft -= ElementTo + gap;
            } else {
                Gallery.scrollLeft -= ElementTo.offsetWidth + gap;
            }
            console.log("from new scrollpreviou");
        });
    }
    public static startAutoScroll(Gallery: HTMLElement | null, card: HTMLElement | null, wrapper: HTMLElement | null) {
        console.log("started");
        this.scrollInterval = setInterval(() => {
            if (this.isScrollingForward) {
                if (Gallery.scrollLeft + Gallery.clientWidth >= wrapper.scrollWidth) {
                    console.log("Reached the end, resetting scrollLeft.");
                    this.isScrollingForward = false;
                }
                Gallery.scrollLeft += card.offsetWidth;
            } else {
                if (Gallery.scrollLeft <= 0) {
                    console.log("Reached the start, reversing scroll direction.");
                    this.isScrollingForward = true;
                }
                Gallery.scrollLeft -= card.offsetWidth;
            }
        }, this.scrollDelay);
    }

}
window.addEventListener('scroll', () => {
    const currentPosition = window.scrollY;
    if (RecentSearchvars.recentGallery && RecentSearchvars.recentCard && RecentSearchvars.recentWrapper) {
        if (!HorizontalScroll.isTargetReached && currentPosition >= RecentSearchvars.recentGallery.offsetTop - 500) {
            HorizontalScroll.isTargetReached = true;
            console.log("I have reached the intended part");
            HorizontalScroll.startAutoScroll(RecentSearchvars.recentGallery, RecentSearchvars.recentCard, RecentSearchvars.recentWrapper);
        }
    }
    if (SubscribeVars.weatherUpdateGallery && SubscribeVars.updateCard && SubscribeVars.weatherUpdateWrapper) {
        if (!HorizontalScroll.isTargetReached2 && currentPosition >= SubscribeVars.weatherUpdateGallery.offsetTop - 500) {
            HorizontalScroll.isTargetReached2 = true;
            console.log("I have reached the intended part");
            HorizontalScroll.startAutoScroll(SubscribeVars.weatherUpdateGallery, SubscribeVars.updateCard, SubscribeVars.weatherUpdateWrapper);
        }
    }

});
// Today
HorizontalScroll.scrollNext(weeklyVars.nextBtn, weeklyVars.gallary, 350, 20);
HorizontalScroll.scrollpreviou(weeklyVars.previouBtn, weeklyVars.gallary, 350, 20);
// weekly
HorizontalScroll.scrollNext(weeklyVars.nextBtn, weeklyVars.gallaryWeekly, 350, 20);
HorizontalScroll.scrollpreviou(weeklyVars.previouBtn, weeklyVars.gallaryWeekly, 350, 20);
// hotel
HorizontalScroll.scrollNext(hotelVars.hotelNextBtn, hotelVars.hotelGallery, hotelVars.hotelCard, 7);
HorizontalScroll.scrollpreviou(hotelVars.hotelPreBtn, hotelVars.hotelGallery, hotelVars.hotelCard, 7);
// restaurants
HorizontalScroll.scrollNext(RestaurantsVars.restaurantsNextBtn, RestaurantsVars.restaurantGallery, RestaurantsVars.restaurantCard, 7);
HorizontalScroll.scrollpreviou(RestaurantsVars.restaurantsPrevBtn, RestaurantsVars.restaurantGallery, RestaurantsVars.restaurantCard, 7);