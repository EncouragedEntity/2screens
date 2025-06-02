import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ColorsModule from '../../modules/colors'
import {styles, StyledButton, StyledText} from './styles';

const COLORS = ['#D199E7', '#72C1ED', '#A196F1', '#7D72ED'];

const useButtonColor = (index: number) =>
  useSelector((state: any) => state.colors.buttons[index]);

export default React.memo(() => {
  const dispatch = useDispatch();

  const getNextColor = (current: string) => {
    const index = COLORS.indexOf(current);
    return COLORS[(index + 1) % COLORS.length];
  };

  const buttonOneColor = useButtonColor(1);
  const buttonTwoColor = useButtonColor(2);
  const buttonThreeColor = useButtonColor(3);


  const animatedColor = useSharedValue(buttonThreeColor);

  React.useEffect(() => {
    animatedColor.value = withTiming(buttonThreeColor, { duration: 200 });
  }, [buttonThreeColor]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: animatedColor.value,
    };
  });

  const handlePress = (index: number, current: string) => {
    const next = getNextColor(current);
    
    dispatch(ColorsModule.buttons({[index]: next}));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.button, { backgroundColor: buttonOneColor }]}
        onPress={() => handlePress(1, buttonOneColor)}
      >
        <Text style={styles.text}>Button 1</Text>
      </TouchableOpacity>

      <StyledButton
        activeOpacity={0.8}
        style={{ backgroundColor: buttonTwoColor }}
        onPress={() => handlePress(2, buttonTwoColor)}
      >
        <StyledText>Button 2</StyledText>
      </StyledButton>

      <Animated.View style={[styles.button, animatedStyle]}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => handlePress(3, buttonThreeColor)}>
          <Text style={styles.text}>Button 3</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
});
