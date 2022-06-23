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
import { RootState } from "../../redux/store";
import { addUserData } from "../../redux/User";
import { getPhotoByName } from "../../utils/getPhoto";
import * as LoginUI from "./styles";

function LoginWithoutAuth() {
  const user = useSelector((state: RootState) => state.user.data);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [userImageUrl, setUserImageUrl] = useState("");

  const handleSubmitData = useCallback(() => {
    if (userName === "") {
      Alert.alert("Atenção", "O nome tem que estar preenchido");
      return;
    }

    const data = {
      name: userName,
      image_url: userImageUrl ? userImageUrl : getPhotoByName(userName),
    };

    dispatch(addUserData(data));

    navigation.navigate("Dashboard");
  }, [userName, userImageUrl]);

  useEffect(() => {
    if (user) {
      navigation.navigate("Dashboard");
    }
  }, []);

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LoginUI.Container>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <LoginUI.Header>
            <LoginUI.Title>Estamos{"\n"}quase lá</LoginUI.Title>
            <LoginUI.SubTitle>
              Faça seu login para começar{"\n"}
              uma experiência incrível
            </LoginUI.SubTitle>
          </LoginUI.Header>
          <LoginUI.Form>
            <InputText
              iconName="user"
              placeholder="Seu nome"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setUserName}
              value={userName}
            />

            <InputText
              iconName="image"
              placeholder="Url (não obrigatório)"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setUserImageUrl}
              value={userImageUrl}
            />
          </LoginUI.Form>
          <LoginUI.Footer>
            <LoginUI.LoginButton onPress={handleSubmitData}>
              <LoginUI.LoginButtonText>Cadastrar</LoginUI.LoginButtonText>
            </LoginUI.LoginButton>
          </LoginUI.Footer>
        </LoginUI.Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export { LoginWithoutAuth };
