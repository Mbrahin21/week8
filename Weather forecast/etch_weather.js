// get weather data from the api
let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'
// find the table in html where we want to show the weather
let weatherTable = document.querySelector('#weather-forecast')
// request the weather data
fetch(weatherUrl)
// convert the response to json
    .then(response => response.json())
    // when we get the data, call the function to display it
    .then( weatherJson => {
        displayWeatherTable(weatherJson)  

    })
    // if something goes wrong, show an error
    .catch(error => {
        console.log(error)   // details in console for developer
        alert('Sorry, could not fetch the weather forecast')  // generic error to user
    })
// this function takes the weather data and puts it in the table

function displayWeatherTable(weatherJson) {
    console.log(weatherJson)
    // get the forecast periods from the json data
    let forecastArray = weatherJson.properties.periods
    console.log(forecastArray)
    forecastArray.forEach( forecastPeriodData => {
        console.log(forecastPeriodData)    
// create a table row, get the weather data from the api, put each value in its own cell, and add the cells to the row
  
        let tableRow = document.createElement('tr')

     
        let periodNameTableData = document.createElement('td')
        let periodName = forecastPeriodData.name  
        periodNameTableData.innerHTML = periodName
        tableRow.appendChild(periodNameTableData)

      
        let temperatureTableData = document.createElement('td')
        let temperature = forecastPeriodData.temperature 
        let temperatureUnit = forecastPeriodData.temperatureUnit
        temperatureTableData.innerHTML = temperature + temperatureUnit
        tableRow.appendChild(temperatureTableData)

        
        let weatherIconTableData = document.createElement('td')
        let weatherIconImage = document.createElement('img')
        let weatherIconSource = forecastPeriodData.icon
        weatherIconImage.src = weatherIconSource
        
        weatherIconTableData.appendChild(weatherIconImage)
  
        tableRow.appendChild(weatherIconTableData)

       
        let detailForecastTableData = document.createElement('td')
        let detailedForecast = forecastPeriodData.detailedForecast
        detailForecastTableData.innerHTML = detailedForecast
        tableRow.appendChild(detailForecastTableData)

        // Wind speed and direction
        let windTableData = document.createElement('td')
        let windSpeed = forecastPeriodData.windSpeed
        let windDirection = forecastPeriodData.windDirection
        windTableData.innerHTML = windSpeed + ', ' + windDirection
        tableRow.appendChild(windTableData)

     // get wind speed and direction from the api and add them to the table
        weatherTable.appendChild(tableRow)
    })
}