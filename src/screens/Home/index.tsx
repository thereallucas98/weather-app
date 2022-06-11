import React from "react";

import * as HomeUI from "./styles";

function Home() {
  return (
    <HomeUI.Container>
      <HomeUI.Header>
        <HomeUI.Greetings>Olá David Lucas, 🤞</HomeUI.Greetings>
        <HomeUI.ProfileImage
          source={{ uri: "https://github.com/thereallucas98.png" }}
        />
      </HomeUI.Header>

      <HomeUI.SearchWrapper>
        <HomeUI.SearchIcon name="search" size={32} color="#FFF" />
        <HomeUI.SearchInput
          placeholder="Busque por uma cidade"
          placeholderTextColor="#FFF"
        />
      </HomeUI.SearchWrapper>

      <HomeUI.WeatherCardWrapper>
        <HomeUI.WeatherImageStatus
          name="weather-partly-lightning"
          size={120}
          color="#FFF"
        />
        <HomeUI.WeatherLocationContent>
          <HomeUI.TemperatureValue>19°C</HomeUI.TemperatureValue>
          <HomeUI.LocationLabelWrapper>
            <HomeUI.LocationIcon name="location-pin" size={20} color="#FFF" />
            <HomeUI.LocationCity>Helsinki,</HomeUI.LocationCity>
            <HomeUI.LocationCountry>Finland</HomeUI.LocationCountry>
          </HomeUI.LocationLabelWrapper>
        </HomeUI.WeatherLocationContent>
      </HomeUI.WeatherCardWrapper>
    </HomeUI.Container>
  );
}

export { Home };
