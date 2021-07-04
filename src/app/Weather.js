export class Weather {
  constructor(city, countryCode) {
    this.apikey = "eab57262d28f723ae3a2fe7d332f6d6d";
    this.city = city;
    this.countryCode = countryCode;
  }

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apikey}&units=metric&lang=es`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }
  
  async getGeolocation(lat, lon) {    
    const URI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&lang=es&appid=${this.apikey}`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  chengueLocation(city) {
    this.city = city;
  }

 

}