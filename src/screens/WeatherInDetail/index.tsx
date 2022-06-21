import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { DetailWeatherCard } from "../../components/DetailWeatherCard";
import { LoadingWrapper } from "../../components/LoadingWrapper";

import api from "../../services/api";
import { whichIconShouldIUSeForMainCard } from "../../utils/whichIconShouldIUse";
import {
  LocationType,
  WeatherIconType,
  WeatherParamsType,
  WeatherType,
} from "../../models/weather.model";
import * as WeatherInDetailUI from "./styles";
import { FlatList } from "react-native";
import { Forecast } from "../../components/Forecast";

interface Params {
  location: LocationType;
}

export interface LocationItem {
  dt: number;
  main: WeatherParamsType;
  weather: WeatherType[];
  icon: WeatherIconType;
}

function WeatherInDetail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { location } = route.params as Params;

  const [nextDaysWeather, setNextDayWeather] = useState<LocationItem[]>([]);
  const [loading, setLoading] = useState(true);

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(
        `forecast?q=${location.name}&appid=44cf0b9843f62148e4956ee57035404b&units=metric&lang=pt_br`
      );

      const formattedArray = response.data.list.map((item) => {
        const formatedData: LocationItem = {
          dt: item.dt,
          main: {
            feels_like: Math.floor(item.main.feels_like),
            humidity: item.main.humidity,
            pressure: item.main.pressure,
            temp: Math.floor(item.main.temp),
            temp_max: Math.floor(item.main.temp_max),
            temp_min: Math.floor(item.main.temp_min),
          },
          weather: item.weather,
          icon: whichIconShouldIUSeForMainCard(item.weather[0].icon),
        };

        return formatedData;
      });

      setNextDayWeather(formattedArray);
      setLoading(false);
    };

    fetchData();
  }, [location]);

  return (
    <WeatherInDetailUI.Container>
      {loading ? (
        <LoadingWrapper />
      ) : (
        <>
          <WeatherInDetailUI.Header>
            <WeatherInDetailUI.goBackButton onPress={handleGoBack}>
              <WeatherInDetailUI.goBackIcon
                name="arrow-back"
                size={32}
                color="#FFF"
              />
            </WeatherInDetailUI.goBackButton>
            <WeatherInDetailUI.LocationTitle>
              {location.name}
            </WeatherInDetailUI.LocationTitle>
            <WeatherInDetailUI.FavoriteWeatherLocationButton>
              <WeatherInDetailUI.IconFavoriteWeather
                name="favorite-border"
                size={32}
                color="#FFF"
              />
            </WeatherInDetailUI.FavoriteWeatherLocationButton>
          </WeatherInDetailUI.Header>

          <WeatherInDetailUI.WeatherDetailContent>
            <DetailWeatherCard data={location} />

            <WeatherInDetailUI.NextDays>
              Próximos dias
            </WeatherInDetailUI.NextDays>

            <FlatList
              data={nextDaysWeather}
              keyExtractor={(item) => String(item.dt)}
              renderItem={({ item }) => <Forecast data={item} />}
              showsVerticalScrollIndicator={false}
            />
          </WeatherInDetailUI.WeatherDetailContent>
        </>
      )}
    </WeatherInDetailUI.Container>
  );
}

export { WeatherInDetail };
