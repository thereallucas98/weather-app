import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "../../components/Input/InputText";
import { LoadingWrapper } from "../../components/LoadingWrapper";
import { RootState } from "../../redux/store";
import { updateUserData } from "../../redux/User";
import { getPhotoByName } from "../../utils/getPhoto";
import * as SettingsUserUI from "./styles";

function SettingsUser() {
  const user = useSelector((state: RootState) => state.user.data);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [userName, setUserName] = useState(user.name);
  const [userImageUrl, setUserImageUrl] = useState(user.image_url);

  const handleSubmitData = useCallback(() => {
    if (userName === "") {
      Alert.alert("Atenção", "O nome tem que estar preenchido");
      return;
    }

    const data = {
      name: userName,
      image_url: userImageUrl ? userImageUrl : getPhotoByName(userName),
    };

    dispatch(updateUserData(data));

    navigation.goBack();
  }, [userName, userImageUrl]);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {loading ? (
          <LoadingWrapper />
        ) : (
          <SettingsUserUI.Container>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
            <SettingsUserUI.Header>
              <SettingsUserUI.Title>
                Atualize{"\n"}o seu perfil
              </SettingsUserUI.Title>
              <SettingsUserUI.SubTitle>
                Altere abaixo o seu nome{"\n"}
                ou a sua foto do perfil para uma mais bacana.
              </SettingsUserUI.SubTitle>
            </SettingsUserUI.Header>
            <SettingsUserUI.Form>
              <InputText
                iconName="user"
                placeholder="Seu Nome"
                autoCorrect={false}
                autoCapitalize="none"
                defaultValue={userName}
                previousValue={userName}
                onChangeText={setUserName}
                value={userName}
              />

              <InputText
                iconName="image"
                placeholder="Url (não obrigatório)"
                autoCorrect={false}
                autoCapitalize="none"
                defaultValue={userImageUrl}
                previousValue={userImageUrl}
                onChangeText={setUserImageUrl}
                value={userImageUrl}
              />
            </SettingsUserUI.Form>
            <SettingsUserUI.Footer>
              <SettingsUserUI.LoginButton onPress={handleSubmitData}>
                <SettingsUserUI.LoginButtonText>
                  Atualizar
                </SettingsUserUI.LoginButtonText>
              </SettingsUserUI.LoginButton>
            </SettingsUserUI.Footer>
          </SettingsUserUI.Container>
        )}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { SettingsUser };
