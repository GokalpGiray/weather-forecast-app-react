import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);

  const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=metric&exclude=hourly,current,minutely,alerts&appid=af3eda7c637910e6048fe05760c13f9d';

  const getWeather = (e) => {
    axios.get(url).then((response) => {
      setWeather(response.data)
      // console.log(response.data.daily[0].temp.day);
      // console.log(response.data.daily[0].temp.night);
      // console.log(response.data.daily[0].weather[0].icon);
    })
  }

  // console.log(users.daily[0]);

  useEffect(() => {
    console.log(weather?.daily[0].temp.day);
    console.log(weather?.daily[0].temp.night);
    console.log(weather?.daily[0].weather[0].icon);
  }, [weather]);

  return (
    <div className="App">
      <button onClick={e => getWeather(e)}>Click</button>
    </div>
  );
}

export default App;
