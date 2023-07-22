import { useState } from "react";
import { useEffect } from "react";
import "./styles.css";

export default function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("noida");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3e50670b7b81ef626d8fefb38ff893f1`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="main">
        <div className="search">
          <input
            type="search"
            value={search}
            placeholder="Enter city"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="non">No Data Found</p>
        ) : (
          <div className="city">
            <h1 className="location">
              <i className="fa-solid fa-location-dot fa-2x" id="i"></i>
              {search}
            </h1>
            <h2 className="temp">{city.temp}°C</h2>
            <h4 className="tempra">
              Max temp:{city.temp_max} °C
              <br />
              Min temp :{city.temp_min} °C
            </h4>
          </div>
        )}
      </div>
    </>
  );
}
