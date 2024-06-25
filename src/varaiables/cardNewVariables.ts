interface cardNewVariablesType {
    currentTemperature: HTMLElement | null,
    newsWeatherInfo: HTMLElement | null,
    highTemperature: HTMLElement | null,
    timeSunrise: HTMLElement | null,
    timeSunset: HTMLElement | null,
}
export const cardNewVariables: cardNewVariablesType = {
    currentTemperature: document.querySelector(".current-temperature"),
    newsWeatherInfo: document.querySelector(".today-weather-details .weather-container .weather-info"),
    highTemperature: document.querySelector(".high-temperature"),
    timeSunrise: document.querySelector(".time-sunrise .time-value"),
    timeSunset: document.querySelector(".time-sunset .time-value")
}
// export default {cardNewVariables};
// export 
// console.log("from cardNewVariables file");
export let as: string = "from cardNewVariables file";