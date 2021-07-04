const { currentDateWeather } = require('./dateWeather');
var moment = require('moment');
moment.locale('es');

export class UI{

    constructor(){
         
        this.search = document.getElementById('search');
        this.img_today = document.getElementById('img-today');
        this.des_today = document.getElementById('des-today');
        this.date_today = document.getElementById('date-today');
        this.country = document.getElementById('country');
        this.weather_today = document.getElementById('weather-today');

        /* Datos Actuales */
        this.wind = document.getElementById('wind');
        this.humidity = document.getElementById('humidity');
        this.visibility = document.getElementById('visibility');
        this.air = document.getElementById('air');

        this.miniCard = document.getElementById('mini-card');
        this.currentImg = document.getElementById('current-img');
    }    

    render(weather, firtsRequestData){  
        this.weather_today.textContent = parseInt(weather.current.temp);     
        this.country.textContent = firtsRequestData.name + ', ' + firtsRequestData.sys.country 
        this.des_today.textContent = "Para hoy "+ weather.current.weather[0].description;
        /* this.date_today.textContent = weather.list[0].dt_txt;  */
        this.date_today.textContent = currentDateWeather();

        this.wind.textContent = weather.current.wind_speed;
        this.humidity.textContent = weather.current.humidity;
        this.visibility.textContent = weather.current.visibility;
        this.air.textContent = weather.current.pressure;
    }

    showWeatherData(data){

        let otherDayForcast = '';
        data.daily.forEach((day, ind) => {
            if(ind == 0){
                this.currentImg.innerHTML = `                    
                     <img id="img-minicard" class="img-fluid img-current" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="">                                    
                `;
            }else{
                otherDayForcast += `              
                    <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3 col-card d-flex justify-content-center">
                        <div class="card-wheater">                         
                                <span id="dateMiniCard" class="card-title">${moment(day.dt*1000).format('ddd'+' '+'DD-MM')}</span>
                                <div class="card-container-img d-flex justify-content-center align-items-center">
                                    <div class="containter-img-wheater ">
                                        <img id="img-minicard" class="img-fluid" src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="">
                                    </div>
                                </div>                                             
                            <div class="d-flex justify-content-between px-3">
                                <span class="temp-min" id="min">${parseInt(day.temp.min)}&#176;C</span>
                                <span class="temp-max" id="max">${parseInt(day.temp.max)}&#176;C</span>
                            </div>                        
                        </div>
                    </div>                  
                `;
            }
        })
    
    
        this.miniCard.innerHTML = otherDayForcast;
        
    }
}