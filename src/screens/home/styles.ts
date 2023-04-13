import styled from 'styled-components';
import * as Native from 'react-native';
import Animated from 'react-native-reanimated';

const windowWidth = Native.Dimensions.get('window').width;
const windowHeight = Native.Dimensions.get('window').height;

export const Container = styled(Animated.View)`
  flex-direction: row;

  width: ${windowWidth * 3}px;
  height: ${windowHeight}px;

  background-color: #ffffff;
`;

export const Tab = styled(Native.View)<{backgroundColor?: string}>`
  width: ${windowWidth}px;
  height: ${windowHeight}px;

  align-items: center;
  justify-content: center;

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#ffffff'};
`;

export const BottomContainer = styled(Animated.View)`
  width: ${windowWidth}px;
  height: 100px;

  position: absolute;

  padding: 20px;
  margin-bottom: 20px;

  align-items: center;
  justify-content: center;

  bottom: 0;
`;

export const BottomButtons = styled(Native.View)`
  width: 100%;
  height: 100%;

  background-color: #ffffff;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  border-radius: 10px;

  padding: 0 30px;
`;

export const Button = styled(Native.TouchableOpacity)`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled(Native.Text)``;
