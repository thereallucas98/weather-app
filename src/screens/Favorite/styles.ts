import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 32px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.View`
  width: 100%;
  height: 72px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background_light};
`;

const goBackButton = styled(TouchableOpacity)`
  height: 62px;
  width: 62px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

const goBackIcon = styled(MaterialIcons)``;

const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: "Roboto_700Bold";
  color: ${({ theme }) => theme.colors.shape};
`;

const CloseButton = styled(goBackButton)``;

const CloseIcon = styled(MaterialIcons)``;

const HasNoFavoritesShow = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmojiIcon = styled.Text`
  font-size: ${RFValue(50)}px;
`;

const TextDescription = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export { 
  Container,
  Header,
  goBackButton,
  Title,
  goBackIcon,
  CloseButton,
  CloseIcon,
  HasNoFavoritesShow,
  EmojiIcon,
  TextDescription,
};