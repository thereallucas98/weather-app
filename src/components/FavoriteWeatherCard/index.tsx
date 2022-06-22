import { Alert } from "react-native";
import { LocationType } from "../../models/weather.model";
import * as FavoriteWeatherCardUI from "./styles";

interface FavoriteWeatherCardProps {
  data: LocationType;
  onDelete: (data: LocationType) => void; 
}

function FavoriteWeatherCard({ data, onDelete }: FavoriteWeatherCardProps) {
  function onDeleteFromFavorite() {
    Alert.alert(
      "Remover item",
      "Você tem certeza que deseja remover essa localidade do seus favoritos?",
      [
        {
          text: "Não",
          style: "cancel"
        },
        { text: "Sim", onPress: () => onDelete(data) }
      ]
    );
  }

  return (
    <FavoriteWeatherCardUI.Container onLongPress={onDeleteFromFavorite}>
      <FavoriteWeatherCardUI.WeatherContainer>
        <FavoriteWeatherCardUI.WeatherIcon name={data.icon.name} size={32} />
        <FavoriteWeatherCardUI.WeatherDescription>{data.icon.label}</FavoriteWeatherCardUI.WeatherDescription>
      </FavoriteWeatherCardUI.WeatherContainer>
      <FavoriteWeatherCardUI.WeatherLocationLabel>{data.name}</FavoriteWeatherCardUI.WeatherLocationLabel>
    </FavoriteWeatherCardUI.Container>
  );
}

export { FavoriteWeatherCard };