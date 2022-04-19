import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

const day = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const city = {
  "cityname": [
    {
      "name": "Adana",
      "nameEn": "Adana"
    },
    {
      "name": "Adıyaman",
      "nameEn": "Adiyaman"
    },
    {
      "name": "Afyonkarahisar",
      "nameEn": "Afyonkarahisar"
    },
    {
      "name": "Ağrı",
      "nameEn": "Agri"
    },
    {
      "name": "Amasya",
      "nameEn": "Amasya"
    },
    {
      "name": "Ankara",
      "nameEn": "Ankara"
    },
    {
      "name": "Antalya",
      "nameEn": "Antalya"
    },
    {
      "name": "Artvin",
      "nameEn": "Artvin"
    },
    {
      "name": "Aydın",
      "nameEn": "Aydin"
    },
    {
      "name": "Balıkesir",
      "nameEn": "Balikesir"
    },
    {
      "name": "Bilecik",
      "nameEn": "Bilecik"
    },
    {
      "name": "Bingöl",
      "nameEn": "Bingol"
    },
    {
      "name": "Bitlis",
      "nameEn": "Bitlis"
    },
    {
      "name": "Bolu",
      "nameEn": "Bolu"
    },
    {
      "name": "Burdur",
      "nameEn": "Burdur"
    },
    {
      "name": "Bursa",
      "nameEn": "Bursa"
    },
    {
      "name": "Çanakkale",
      "nameEn": "Canakkale"
    },
    {
      "name": "Çankırı",
      "nameEn": "Cankırı"
    },
    {
      "name": "Çorum",
      "nameEn": "Corum"
    },
    {
      "name": "Denizli",
      "nameEn": "Denizli"
    },
    {
      "name": "Diyarbakır",
      "nameEn": "Diyarbakir"
    },
    {
      "name": "Edirne",
      "nameEn": "Edirne"
    },
    {
      "name": "Elazığ",
      "nameEn": "Elazig"
    },
    {
      "name": "Erzincan",
      "nameEn": "Erzincan"
    },
    {
      "name": "Erzurum",
      "nameEn": "Erzurum"
    },
    {
      "name": "Eskişehir",
      "nameEn": "Eskisehir"
    },
    {
      "name": "Gaziantep",
      "nameEn": "Gaziantep"
    },
    {
      "name": "Giresun",
      "nameEn": "Giresun"
    },
    {
      "name": "Gümüşhane",
      "nameEn": "Gumushane"
    },
    {
      "name": "Hakkari",
      "nameEn": "Hakkari"
    },
    {
      "name": "Hatay",
      "nameEn": "Hatay"
    },
    {
      "name": "Isparta",
      "nameEn": "Isparta"
    },
    {
      "name": "Mersin",
      "nameEn": "Mersin"
    },
    {
      "name": "İstanbul",
      "nameEn": "Istanbul"
    },
    {
      "name": "İzmir",
      "nameEn": "Izmir"
    },
    {
      "name": "Kars",
      "nameEn": "Kars"
    },
    {
      "name": "Kastamonu",
      "nameEn": "Kastamonu"
    },
    {
      "name": "Kayseri",
      "nameEn": "Kayseri"
    },
    {
      "name": "Kırklareli",
      "nameEn": "Kirklareli"
    },
    {
      "name": "Kırşehir",
      "nameEn": "Kirşehir"
    },
    {
      "name": "Kocaeli",
      "nameEn": "Kocaeli"
    },
    {
      "name": "Konya",
      "nameEn": "Konya"
    },
    {
      "name": "Kütahya",
      "nameEn": "Kutahya"
    },
    {
      "name": "Malatya",
      "nameEn": "Malatya"
    },
    {
      "name": "Manisa",
      "nameEn": "Manisa"
    },
    {
      "name": "Kahramanmaraş",
      "nameEn": "Kahramanmaras"
    },
    {
      "name": "Mardin",
      "nameEn": "Mardin"
    },
    {
      "name": "Muğla",
      "nameEn": "Mugla"
    },
    {
      "name": "Muş",
      "nameEn": "Mus"
    },
    {
      "name": "Nevşehir",
      "nameEn": "Nevsehir"
    },
    {
      "name": "Niğde",
      "nameEn": "Nigde"
    },
    {
      "name": "Ordu",
      "nameEn": "Ordu"
    },
    {
      "name": "Rize",
      "nameEn": "Rize"
    },
    {
      "name": "Sakarya",
      "nameEn": "Sakarya"
    },
    {
      "name": "Samsun",
      "nameEn": "Samsun"
    },
    {
      "name": "Siirt",
      "nameEn": "Siirt"
    },
    {
      "name": "Sinop",
      "nameEn": "Sinop"
    },
    {
      "name": "Sivas",
      "nameEn": "Sivas"
    },
    {
      "name": "Tekirdağ",
      "nameEn": "Tekirdag"
    },
    {
      "name": "Tokat",
      "nameEn": "Tokat"
    },
    {
      "name": "Trabzon",
      "nameEn": "Trabzon"
    },
    {
      "name": "Tunceli",
      "nameEn": "Tunceli"
    },
    {
      "name": "Şanlıurfa",
      "nameEn": "Sanliurfa"
    },
    {
      "name": "Uşak",
      "nameEn": "Usak"
    },
    {
      "name": "Van",
      "nameEn": "Van"
    },
    {
      "name": "Yozgat",
      "nameEn": "Yozgat"
    },
    {
      "name": "Zonguldak",
      "nameEn": "Zonguldak"
    },
    {
      "name": "Aksaray",
      "nameEn": "Aksaray"
    },
    {
      "name": "Bayburt",
      "nameEn": "Bayburt"
    },
    {
      "name": "Karaman",
      "nameEn": "Karaman"
    },
    {
      "name": "Kırıkkale",
      "nameEn": "Kirikkale"
    },
    {
      "name": "Batman",
      "nameEn": "Batman"
    },
    {
      "name": "Şırnak",
      "nameEn": "Sirnak"
    },
    {
      "name": "Bartın",
      "nameEn": "Bartin"
    },
    {
      "name": "Ardahan",
      "nameEn": "Ardahan"
    },
    {
      "name": "Iğdır",
      "nameEn": "Igdir"
    },
    {
      "name": "Yalova",
      "nameEn": "Yalova"
    },
    {
      "name": "Karabük",
      "nameEn": "Karabuk"
    },
    {
      "name": "Kilis",
      "nameEn": "Kilis"
    },
    {
      "name": "Osmaniye",
      "nameEn": "Osmaniye"
    },
    {
      "name": "Düzce",
      "nameEn": "Duzce"
    }
  ]
};

function App() {
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Istanbul");

  useEffect(() => {
    getCoords();
  }, []);

  const urlFirst = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity},tr&appid=76408e74d198f03f5d26f16eacb33d1f`

  const getCoords = () => {
    axios.get(urlFirst).then((response) => {
      getWeather(response.data);
    }); 
  };
  
  const getWeather = (data) => {
    const urlSecond = `https://api.openweathermap.org/data/2.5/onecall?lat=${data?.coord.lat}&lon=${data?.coord.lon}&units=metric&exclude=hourly,current,minutely,alerts&appid=76408e74d198f03f5d26f16eacb33d1f`;
    axios.get(urlSecond).then((response) => {
      setWeather(response.data)
    });
  };

  const getCity = (e) => {
    setSelectedCity(e.target.value);
    getCoords();
  }

  const today = new Date();

  const weatherCity = city.cityname.filter(v => v.nameEn.includes(selectedCity));

  return (
    <div className="App">
      <div>
        <h1>
          {weatherCity[0].name} Hava Durumu
        </h1>
      </div>
      <div>
        <ul>
          {weather?.daily.map((i, index) =>
            <li key={i.temp.day}>
              <div className='date'>{day[today.getDay()+index >= 7 ? today.getDay()+index-7 : today.getDay()+index]}</div>
              <hr />
              <div className='date'>{today.getDate()+index}.{today.getMonth()}.{today.getFullYear()}</div>
              <img src={`http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`} />
              <div className='deg'>
                <span>
                  {Math.round(i.temp.day)}&deg; 
                </span>
                <span className='nightDeg'>
                  {Math.round(i.temp.night)}&deg;
                </span>
              </div>
            </li>
          )}
        </ul>
      </div>
      <select 
        className='selectMenu' 
        value={selectedCity}
        onChange={e => getCity(e)}>
        {city.cityname.map(obj =>
          <option key={obj.name} value={obj.nameEn}>{obj.name}</option>
        )}
      </select>
    </div>
  );
}

export default App;
