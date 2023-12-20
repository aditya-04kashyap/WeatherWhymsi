const inputBox=document.querySelector('input');
const searchBtn=document.getElementById('I2');
const WeatherImg=document.getElementById('I3');
const temp=document.getElementById('I4');
const desc=document.getElementById('I5');
const humidity=document.getElementById('I6');
const wind_speed=document.getElementById('I7');
const wea_disp=document.getElementById('I8');
const twhd = document.getElementById('I9');

async function checkWeather(city){
    const api_k="44d6a03fa5652b669736afff5759799a";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_k}`;
    
    const weather_data=await fetch(`${url}`).then(response => response.json());
     
    if (weather_data.cod === `404`) {
        WeatherImg.src="error.png";
        temp.innerHTML="error";
        desc.innerHTML="error";
        humidity.innerHTML="error";
        wind_speed.innerHTML="error";
        
    }

    temp.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    
    desc.innerHTML=`${weather_data.weather[0].description}`;

    humidity.innerHTML=`${weather_data.main.humidity}%`;

    wind_speed.innerHTML=`${Math.round(weather_data.wind.speed * 3.6)}Km/hr`;

    

    switch(weather_data.weather[0].main){
        case 'Clouds':
            WeatherImg.src="overcast.png";
            break;
        case 'Clear':
            WeatherImg.src="clearsky.png";
            break;
        case 'Rain':
            WeatherImg.src="Rain.png";
            break;
        case 'Snow':
            WeatherImg.src="SnowFall.png";
            break;
        case 'Mist':
            WeatherImg.src="mist.png";
            break;
        case 'Haze':
            WeatherImg.src="haze.png";
            break;
        case 'Smoke':
            WeatherImg.src="smoke.png";
            break;
        case 'Fog':
            WeatherImg.src="fog.png";
            break; 
    }
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
    console.log(response.json());
})

