import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteWeatherCard } from "../../components/FavoriteWeatherCard";
import { LocationType } from "../../models/weather.model";
import { RootState } from "../../redux/store";
import { removeWeatherLocationFromFavorite } from "../../redux/Weathers";
import * as FavoriteUI from "./styles";

function Favorite() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.weathers.items);

  function handleDeleteFromFavorite(data: LocationType) {
    dispatch(removeWeatherLocationFromFavorite(data));
  }

  return (
    <FavoriteUI.Container>
      <FavoriteUI.Header>
        <FavoriteUI.goBackButton onPress={() => navigation.goBack()}>
          <FavoriteUI.goBackIcon name="arrow-back" size={32} color="#FFF" />
        </FavoriteUI.goBackButton>
        <FavoriteUI.Title>Favoritos</FavoriteUI.Title>
        <FavoriteUI.CloseButton onPress={() => navigation.goBack()}>
          <FavoriteUI.CloseIcon name="close" size={32} color="#FFF" />
        </FavoriteUI.CloseButton>
      </FavoriteUI.Header>

      {favorites && favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item) => String(`${item.name}-${item.country}`)}
          renderItem={({ item }) => (
            <FavoriteWeatherCard
              data={item}
              onDelete={handleDeleteFromFavorite}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 10, marginTop: 64 }}
        />
      ) : (
        <FavoriteUI.HasNoFavoritesShow>
          <FavoriteUI.EmojiIcon>😳</FavoriteUI.EmojiIcon>
          <FavoriteUI.TextDescription>Você ainda não possui localidades favoritadas</FavoriteUI.TextDescription>
        </FavoriteUI.HasNoFavoritesShow>
      )}
    </FavoriteUI.Container>
  );
}

export { Favorite };
