
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
    weatherIcon: NodeListOf<HTMLElement> | null,
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
}
let locationSettings: locationSettingsTypes = {
    latitude1: null,
    longitude2: null,
    data: null,
    hourlyDataForCurrentDay: [],
}
interface DateUtilsTypes {
    weatherUpdateTime: HTMLElement | null,
    weatherDate: HTMLElement | null,
    daysOfWeek: string[] | null,
    daysOfWeekAbbreviations: string[] | null,
    months: string[] | null,
    monthAbbreviations: string[] | null,
    currentDate: Date | null;
    currentDay: number | null;
}
const DateUtils: DateUtilsTypes = {
    weatherUpdateTime: document.querySelector(".weather-update-time"),
    weatherDate: document.querySelector(".date-info .weather-date"),

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
    constructor(dateUtils: DateUtilsTypes) {
        this.dateUtils = dateUtils;
    }
    public handleData(): void {
        const { currentDate, daysOfWeek, monthAbbreviations, weatherDate, weatherUpdateTime } = this.dateUtils;
        this.hours = currentDate?.getHours();
        this.minutes = currentDate?.getMinutes();

        const formattedTime: string = `${this.hours % 12 || 12}:${this.minutes < 10 ? "0" : ""
            }${this.minutes} ${this.hours >= 12 ? "PM" : "AM"}`;

        let nowDate: string =
            `${daysOfWeek[currentDate.getDay()]},${monthAbbreviations[currentDate.getMonth()]} ${currentDate.getDate()}`;

        weatherDate.textContent = nowDate;
        weatherUpdateTime.textContent = `Update As Of ${formattedTime}`;
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
            let response = await fetch(this.apiUrl);
            locationSettings.data = await response.json();
        } catch (error) {

        }
    }
}


let weatherInstance = new weatherData();
weatherInstance.fetchWeather().then(() => {
    if (locationSettings.data) {

    } else {

    }
});
// async function fetchDataAndLog() {
//     try {
//         await weatherInstance.fetchWeather();
//
//     } catch (error) {
//
//     }
// }

