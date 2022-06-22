import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

import * as HomeUI from "./styles";
import api from "../../services/api";
import { whichIconShouldIUSeForMainCard } from "../../utils/whichIconShouldIUse";
import { LocationType } from "../../models/weather.model";
import { WeatherCard } from "../../components/WeatherCard";
import { LayoutContainer } from "../../global/layout/styles";
import { LoadingWrapper } from "../../components/LoadingWrapper";
import { Keyboard } from "react-native";

interface LocationPhoneType {
  coords: {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
}

function Home() {
  const navigation = useNavigation();

  const [cityToSearch, setCityToSearch] = useState("");
  const [locationLatAndLong, setLocationLatAndLong] =
    useState<LocationPhoneType>({} as LocationPhoneType);
  const [locationDefaults, setLocationDefaults] = useState<LocationType>(
    {} as LocationType
  );
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocationLatAndLong(location);
    })();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(
        `weather?lat=${locationLatAndLong.coords.latitude}&lon=${locationLatAndLong.coords.longitude}&appid=58818988a4c0b998104b5698523f35d2&units=metric&lang=pt_br`
      );

      const formatedData: LocationType = {
        main: {
          feels_like: Math.floor(response.data.main.feels_like),
          humidity: response.data.main.humidity,
          pressure: response.data.main.pressure,
          temp: Math.floor(response.data.main.temp),
          temp_max: Math.floor(response.data.main.temp_max),
          temp_min: Math.floor(response.data.main.temp_min),
        },
        name: response.data.name,
        country: response.data.sys.country,
        units: {
          id: response.data.sys.id,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          type: response.data.sys.type,
        },
        weather: response.data.weather,
        wind: response.data.wind,
        icon: whichIconShouldIUSeForMainCard(response.data.weather[0].icon),
      };

      setLocationDefaults(formatedData);
      setLoading(false);
    };
    fetchData();
  }, [locationLatAndLong]);

  async function handleResetLocation() {
    setLoading(true);
    setCityToSearch("");

    const response = await api.get(
      `weather?lat=${locationLatAndLong.coords.latitude}&lon=${locationLatAndLong.coords.longitude}&appid=58818988a4c0b998104b5698523f35d2&units=metric&lang=pt_br`
    );

    const formatedData: LocationType = {
      main: {
        feels_like: Math.floor(response.data.main.feels_like),
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        temp: Math.floor(response.data.main.temp),
        temp_max: Math.floor(response.data.main.temp_max),
        temp_min: Math.floor(response.data.main.temp_min),
      },
      name: response.data.name,
      country: response.data.sys.country,
      units: {
        id: response.data.sys.id,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        type: response.data.sys.type,
      },
      weather: response.data.weather,
      wind: response.data.wind,
      icon: whichIconShouldIUSeForMainCard(response.data.weather[0].icon),
    };

    setLocationDefaults(formatedData);
    setLoading(false);
  }

  async function handleSearchCity() {
    setLoading(true);

    const response = await api.get(
      `weather?q=${cityToSearch}&appid=58818988a4c0b998104b5698523f35d2&units=metric&lang=pt_br`
    );

    const formatedData: LocationType = {
      main: {
        feels_like: Math.floor(response.data.main.feels_like),
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        temp: Math.floor(response.data.main.temp),
        temp_max: Math.floor(response.data.main.temp_max),
        temp_min: Math.floor(response.data.main.temp_min),
      },
      name: response.data.name,
      country: response.data.sys.country,
      units: {
        id: response.data.sys.id,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        type: response.data.sys.type,
      },
      weather: response.data.weather,
      wind: response.data.wind,
      icon: whichIconShouldIUSeForMainCard(response.data.weather[0].icon),
    };

    setLocationDefaults(formatedData);
    setLoading(false);
    setCityToSearch("");
    Keyboard.dismiss();
  }

  function handleSeeWeatherDetail() {
    setCityToSearch("");

    navigation.navigate("WeatherInDetail", {
      location: locationDefaults,
    });
  }

  return (
    <LayoutContainer>
      <HomeUI.Container>
        <HomeUI.Header>
          <HomeUI.Greetings>Olá David Lucas, 🤞</HomeUI.Greetings>
          <HomeUI.ProfileImage
            source={{ uri: "https://github.com/thereallucas98.png" }}
          />
        </HomeUI.Header>

        <HomeUI.SearchWrapper>
          <HomeUI.SearchInput
            placeholder="Busque por uma cidade"
            placeholderTextColor="#FFF"
            value={cityToSearch}
            onChangeText={(e) => setCityToSearch(e)}
          />
          <HomeUI.InputButton onPress={handleSearchCity}>
            <HomeUI.SearchIcon name="search" size={32} color="#FFF" />
          </HomeUI.InputButton>
        </HomeUI.SearchWrapper>

        {loading ? (
          <LoadingWrapper />
        ) : (
          <>
            <WeatherCard
              data={locationDefaults}
              onNavigateToWeatherInDetail={handleSeeWeatherDetail}
            />
          </>
        )}
      </HomeUI.Container>
    </LayoutContainer>
  );
}

export { Home };
