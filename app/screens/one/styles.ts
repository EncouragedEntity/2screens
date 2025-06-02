import { StyleSheet } from "react-native";
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const StyledButton = styled.TouchableOpacity`
  width: 200px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

const StyledText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export {
  styles,
  StyledButton,
  StyledText,
}