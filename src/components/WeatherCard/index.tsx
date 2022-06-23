import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { LocationType } from "../../models/weather.model";
import { formatTimestampToHour } from "../../utils/formatTimestampToHour";
import { MainCard } from "./MainCard";
import { TemperatureCard } from "./TemperatureCard";
import { WindSunCard } from "./WindSunCard";

import * as WeatherCardUI from "./styles";
import {
  addWeatherLocationToFavorite,
  removeWeatherLocationFromFavorite,
} from "../../redux/Weathers";

interface WeatherCardProps {
  data: LocationType;
  isShowingAtHome?: boolean;
  onNavigateToWeatherInDetail?: () => void;
}

function WeatherCard({
  data,
  isShowingAtHome = true,
  onNavigateToWeatherInDetail,
}: WeatherCardProps) {
  const [isMyFavorite, setIsMyFavorite] = useState(false);

  const favorites = useSelector((state: RootState) => state.weathers.items);

  const sunRise = formatTimestampToHour(data.units.sunrise);
  const sunSet = formatTimestampToHour(data.units.sunset);

  const dispatch = useDispatch();

  function handleSeeWeatherDetail() {
    onNavigateToWeatherInDetail();
  }

  const handleAddToFavorite = useCallback(
    (data: LocationType) => {
      dispatch(addWeatherLocationToFavorite(data));
      setIsMyFavorite(true);
    },
    [dispatch]
  );

  const handleRemoveFromFavorite = useCallback(
    (data: LocationType) => {
      dispatch(removeWeatherLocationFromFavorite(data));
      setIsMyFavorite(false);
    },
    [dispatch]
  );

  useEffect(() => {
    if (favorites) {
      const isFavorited = favorites.find((item) => item.name === data.name);
      setIsMyFavorite(!!isFavorited);
    }
  }, [data, favorites]);

  return (
    <WeatherCardUI.Container>
      <MainCard
        icon={data.icon}
        name={data.name}
        country={data.country}
        temperature={data.main.temp}
      />
      <TemperatureCard data={data.main} />
      <WindSunCard data={data.wind} sunRise={sunRise} sunSet={sunSet} />

      {isShowingAtHome && (
        <WeatherCardUI.FooterButtons>
          <WeatherCardUI.ShowDetailWeatherButton
            onPress={handleSeeWeatherDetail}
          >
            <WeatherCardUI.ShowDetailWeatherButtonText>
              Ver mais detalhes
            </WeatherCardUI.ShowDetailWeatherButtonText>
          </WeatherCardUI.ShowDetailWeatherButton>
          {isMyFavorite ? (
            <WeatherCardUI.FavoriteWeatherLocationButton
              onPress={() => handleRemoveFromFavorite(data)}
            >
              <WeatherCardUI.IconFavoriteWeather
                name="favorite"
                size={24}
                color="#FFFF"
              />
            </WeatherCardUI.FavoriteWeatherLocationButton>
          ) : (
            <WeatherCardUI.FavoriteWeatherLocationButton
              onPress={() => handleAddToFavorite(data)}
            >
              <WeatherCardUI.IconFavoriteWeather
                name="favorite-border"
                size={24}
                color="#FFFF"
              />
            </WeatherCardUI.FavoriteWeatherLocationButton>
          )}
        </WeatherCardUI.FooterButtons>
      )}
    </WeatherCardUI.Container>
  );
}

export { WeatherCard };
