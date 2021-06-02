import "./styles.css";
import React, { useState, useEffect } from "react";
export default function Weather() {
  const [value, setvalue] = useState(false);
  const [city, Setcity] = useState("");
  const [url, seturl] = useState("");
  const [list, setList] = useState([]);
  const [description, setdescription] = useState("");
  const changer = (e) => {
    Setcity(e.target.value);
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21e415d4065fb82cfcec09413d14be0a&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        // data ? setvalue(true) : setvalue(false);
        setList(data);
        console.log(data);
        setdescription(list?.weather?.[0]?.description);
        seturl(
          `http://openweathermap.org/img/wn/${list?.weather?.[0]?.icon}@2x.png`
        );
      });
  }, [city]);
  const my = () => {
    if (value) {
      result();
      console.log(value);
    }
  };
  const result = () => {
    return (
      <div
        style={{
          backgroundColor: "rgb(100 172 193 / 79%)",
          display: "block",
          margin: "auto",
          width: "50%",
          borderRadius: "4%",
          padding: "5%",
          marginTop: "4%",
          textAlign: "center",
          marginBottom: "4%"
        }}
      >
        <h1 style={{ textAlign: "center" }}>{city}</h1>
        <img style={{ marginRight: "auto", marginLeft: "auto" }} src={url} />
        <h1>{description}</h1>
        <h1>Temperature : {list?.main?.temp}°c</h1>
        <h1>Maximum Temperature : {list?.main?.temp_max}°c</h1>
        <h1>Minimum Temperature : {list?.main?.temp_min}°c</h1>
        <h1>Humidity : {list?.main?.humidity} %</h1>
        <h1>Wind Speed : {list?.wind?.speed} kph</h1>
      </div>
    );
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Weather monitor </h1>
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: 150,
          borderRadius: "2%"
        }}
      >
        <input
          onChange={changer}
          type="text"
          placeholder="enter city name"
          style={{ padding: 5 }}
        />
        <br />
      </div>
      <div>{result()}</div>
    </div>
  );
}
