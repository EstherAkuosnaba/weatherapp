import React, {useEffect, useState} from 'react';
 import axios from 'axios';
 
 import './Home.css'
 
//  import weatherIcon from '../assets/images/weather-icon.png'
//  import weatherIcon1 from '../assets/images/weather-1.png'
//  import weatherIcon2 from '../assets/images/weather-2.png'
//  import weatherIcon3 from '../assets/images/weather-3.png'
//  import weatherIcon4 from '../assets/images/weather-4.png'
 
 
 const APP_ID = "f1b8fe659c4596fdcdb52b02218fd116"
 
 
 function Home () {
     const [coords, setCoords] = useState({})
     const [weatherData, setWeatherData] = useState({})
 
     const getCurrentWeather = () => {
         if (coords.longitude !== undefined) {
             axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${APP_ID}`)
             .then((response)=> {
                 setWeatherData(response.data)
             })
         }
         
     }
 
     useEffect(()=> {
         navigator.geolocation.getCurrentPosition((position)=> {
             setCoords(position.coords)
             getCurrentWeather()
         }, (error)=> {
             console.log("Hey this is your err:", error)
         })
     }, [])
     return (
         <div className="container">
             <div className="content">
                 <div className="left">
                     <h3>Fri, 27<br/>November</h3>
                     <div className="currentWeatherInfo">
 
                         <p className="temp">-10&deg;</p>
                         {/* <img src={weatherIcon} alt="Weather Icon"/> */}
                         <p className="description">Cloudy with a little rainy drops</p>
                     </div>
                     <div className="weekWeatherInfo">
                         <div className="weather-info">
                             <h5>MON</h5>
                             {/* <img src={weatherIcon1} alt="Weather Info 1" /> */}
                             <p>12&deg;</p>
                         </div>
                         <div className="weather-info">
                             <h5>TUE</h5>
                             {/* <img src={weatherIcon2} alt="Weather Info 2" /> */}
                             <p>12&deg;</p>
                         </div>
                         <div className="weather-info">
                             <h5>WED</h5>
                             {/* <img src={weatherIcon3} alt="Weather Info 3" /> */}
                             <p>12&deg;</p>
                         </div>
                         <div className="weather-info">
                             <h5>THUR</h5>
                             {/* <img src={weatherIcon4} alt="Weather Info 4" /> */}
                             <p>12&deg;</p>
                         </div>
                         <div className="weather-info">
                             <h5>FRI</h5>
                             {/* <img src={weatherIcon} alt="Weather Info 5" /> */}
                             <p>12&deg;</p>
                         </div>
                     </div>
                 </div>
                 <div className="right"></div>
             </div>
         </div>
     )
 }
 
 
 export default Home;