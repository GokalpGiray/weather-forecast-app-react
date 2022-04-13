import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [users, setUsers] = useState(null);

  const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&units=metric&exclude=hourly,current,minutely,alerts&appid=af3eda7c637910e6048fe05760c13f9d';

  const searchLocation = (e) => {
    axios.get(url).then((response) => {
      setUsers(response.data)
      // console.log(response.data.daily[0].temp.day);
      // console.log(response.data.daily[0].temp.night);
      // console.log(response.data.daily[0].weather[0].icon);
    })
  }

  // console.log(users.daily[0]);

  useEffect(() => {
    console.log(users?.daily[0].temp.day);
    console.log(users?.daily[0].temp.night);
    console.log(users?.daily[0].weather[0].icon);
  }, [users]);

  return (
    <div className="App">
      <button onClick={e => searchLocation(e)}>Click</button>
    </div>
  );
}

export default App;
