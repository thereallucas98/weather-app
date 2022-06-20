import { useNavigation, useRoute } from "@react-navigation/native";
import { WeatherCard } from "../../components/WeatherCard";
import { LocationType } from "../../models/weather.model";
import * as WeatherInDetailUI from "./styles";

interface Params {
  location: LocationType;
}

function WeatherInDetail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { location } = route.params as Params;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <WeatherInDetailUI.Container>
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
        <WeatherCard data={location} isShowingAtHome={false} />
      </WeatherInDetailUI.WeatherDetailContent>
    </WeatherInDetailUI.Container>
  );
}

export { WeatherInDetail };
