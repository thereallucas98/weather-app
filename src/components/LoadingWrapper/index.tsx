import { ActivityIndicator } from "react-native";
import theme from "../../global/styles/theme";
import * as LoadingWrapperUI from "./styles";

function LoadingWrapper() {
  return (
    <LoadingWrapperUI.Container>
      <ActivityIndicator size={32} color={theme.colors.primary} />
      <LoadingWrapperUI.Content>
        <LoadingWrapperUI.LoadingText>
          Carregando as informações...
        </LoadingWrapperUI.LoadingText>
      </LoadingWrapperUI.Content>
    </LoadingWrapperUI.Container>
  );
}

export { LoadingWrapper };
