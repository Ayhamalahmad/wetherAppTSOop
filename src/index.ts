
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
console.log(cardNewVariables.currentTemperature);
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

class weatherData {
    private APIKey: string;
    private apiUrl: string;   

    constructor() {
        this.APIKey = "473a86fc6ac47386e6d6c5132cc575a8";
        this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${this.APIKey}`;
    }
    public async fetchWeather() : Promise<void> {
        try {
            let response = await fetch(this.apiUrl);
            locationSettings.data = await response.json();
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }
}

let weatherInstance = new weatherData();
weatherInstance.fetchWeather().then(() => {
    if (locationSettings.data) {
        console.log("locationSettings.data is", locationSettings.data);
    } else {
        console.log("No data fetched.");
    }
});
// async function fetchDataAndLog() {
//     try {
//         await weatherInstance.fetchWeather(); 
//         console.log("locationSettings.data is ", locationSettings.data);
//     } catch (error) {
//         console.error("Error fetching and logging weather data:", error);
//     }
// }

// fetchDataAndLog();
// class UIComponent {

//     if (data.list) {
        
//         const createWeatherWeekly = (element) => {
//           const dateString = element.dt_txt.split(" ")[0];
//           const dateParts = dateString.split("-");
//           const year = parseInt(dateParts[0]);
//           const month = parseInt(dateParts[1]) - 1;
//           const day = parseInt(dateParts[2]);
//           const dateObject = new Date(year, month, day);

//           return `
//             <div class="box">
//               <div class="box-image">
//                 <img src="http://openweathermap.org/img/wn/${
//                   element.weather[0].icon
//                 }@4x.png" alt="" />
//               </div>
//               <div class="box-content">
//                 <p class="date">${
//                   daysOfWeekAbbreviations[dateObject.getDay()]
//                 }, ${day} ${monthAbbreviations[month]}</p>
//                 <h2 class="temperature">${(
//                   element.main.temp - 273.15
//                 ).toFixed()}°</h2>
//               </div>
//             </div>
//           `;
//         };

//         const uniqueForecastDays = [];
//         const fiveDaysforecast = data.list.filter((forecast) => {
//           const forecastDate = new Date(forecast.dt_txt).getDate();
//           if (!uniqueForecastDays.includes(forecastDate)) {
//             uniqueForecastDays.push(forecastDate);
//             return true;
//           }
//           return false;
//         });
//         // reset weeklyWrapper
//         weeklyWrapper.textContent = "";
//         fiveDaysforecast.forEach((element) => {
//           weeklyWrapper.insertAdjacentHTML(
//             "beforeend",
//             createWeatherWeekly(element)
//           );
//         });
//         // hourly
//         // reset  hourlyDataForCurrentDay
//         hourlyDataForCurrentDay.length = 0;
//         data.list.forEach((e) => {
//           const dateTimeParts = e.dt_txt.split(" ");
//           const dateParts = dateTimeParts[0].split("-");
//           const day = parseInt(dateParts[2]);
//           if (day === currentDay) {
//             hourlyDataForCurrentDay.push(e);
//           }
//         });
//         // reset NewsWeatherInfo
//         NewsWeatherInfo.textContent = "";
//         // reset todayWrapper
//         todayWrapper.textContent = "";
//         hourlyDataForCurrentDay.forEach((e) => {
//           const dateTimeParts = e.dt_txt.split(" ")[1].split(":")[0];
//           const daylyRainData = e.rain;
//           let daylyRain;
//           if (daylyRainData && daylyRainData["3h"]) {
//             daylyRain = daylyRainData["3h"];
//           }
//           let period = "AM";
//           const hour = parseInt(dateTimeParts);
//           if (hour >= 12) {
//             period = "PM";
//           }
//           const hour12Format = hour > 12 ? hour - 12 : hour;
//           const temperature = Math.floor(e.main.temp - 273.15);
//           const temperatureMax = Math.floor(e.main.temp_max - 273.15);
//           const main = e.weather[0].main;
//           const description = e.weather[0].description;
//           const speed = e.wind.speed;
//           // Funtion to create card
//           const createHourly = () => {
//             return `
//       <div class="weather-box">
//       <img src="http://openweathermap.org/img/wn/${
//         e.weather[0].icon
//       }@4x.png" alt="" />
    
//       <div class="weather-info">
//         <span class="weather-text">${main}</span>
//         <span class="weather-time">${
//           hour12Format < 10 ? `0${hour12Format}` : hour12Format
//         } ${period}</span>
//       </div>
    
//       <div class="temperature">
//         <h2 class="temperature-high">${temperature}°</h2>
//         <h4 class="temperature-low">${temperatureMax}°</h4>
//       </div>
    
//       <div class="wind-rain">
//         <div class="wind-speed">
//           <i class="fas fa-wind icon"></i>
//           <span class="wind-speed-text">${speed}km/H</span>
//         </div>
    
//         <div class="rain">
//           <i class="fas fa-cloud-showers-heavy icon"></i>
//           <span class="rain-text">rain ${daylyRain ? daylyRain : 0} h</span>
//         </div>
//       </div>
    
//       <div class="weather-description">
//         <p>${description}</p>
//       </div>
//     </div>
//       `;
//           };
//           // Insert Data
//           todayWrapper.insertAdjacentHTML("beforeend", createHourly());
//           // hourly for news
//           // Funtion to create card
//           const createHourlyNews = () => {
//             return `
//             <div class="weather-details">
//             <i class="fas fa-cloud weather-icon"></i>
//             <span class="temperature">
//             ${temperature}
//               <sup>°</sup>
//             </span>
//             <span class="time">${
//               hour12Format < 10 ? `0${hour12Format}` : hour12Format
//             } ${period}</span>
//             <span class="condition">${description}</span>
//           </div>
//       `;
//           };
//           // Insert Data
//           NewsWeatherInfo.insertAdjacentHTML("beforeend", createHourlyNews());
//         });
//       }
// }
