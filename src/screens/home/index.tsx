import React from 'react';
import {Dimensions} from 'react-native';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {LayoutGrid, Home, Settings} from 'lucide-react-native';

import * as S from './styles';

export default function HomeScreen() {
  const windowWidth = Dimensions.get('window').width;

  const offset = useSharedValue(0);

  const AnimatedTabStyles = useAnimatedStyle(() => {
    return {
      marginLeft: withTiming(-offset.value, {
        duration: 400,
        easing: Easing.ease,
      }),
    };
  });

  const AnimatedBottomStyles = useAnimatedStyle(() => {
    return {
      marginLeft: withTiming(offset.value, {
        duration: 400,
        easing: Easing.ease,
      }),
    };
  });

  const handleToggleTab = (value: number) => {
    switch (value) {
      case 1:
        offset.value = 0;
        break;
      case 2:
        offset.value = windowWidth;
        break;
      case 3:
        offset.value = windowWidth * 2;
        break;
      default:
        offset.value = 0;
        break;
    }
  };

  return (
    <S.Container style={[AnimatedTabStyles]}>
      <S.Tab backgroundColor="#468BF2">
        <S.Text>1</S.Text>
      </S.Tab>
      <S.Tab backgroundColor="#F24646">
        <S.Text>2</S.Text>
      </S.Tab>
      <S.Tab backgroundColor="#8746F2">
        <S.Text>3</S.Text>
      </S.Tab>
      <S.BottomContainer style={[AnimatedBottomStyles]}>
        <S.BottomButtons>
          <S.Button onPress={() => handleToggleTab(1)}>
            <LayoutGrid size={30} color="#2c2c2c" />
          </S.Button>
          <S.Button onPress={() => handleToggleTab(2)}>
            <Home size={30} color="#2c2c2c" />
          </S.Button>
          <S.Button onPress={() => handleToggleTab(3)}>
            <Settings size={30} color="#2c2c2c" />
          </S.Button>
        </S.BottomButtons>
      </S.BottomContainer>
    </S.Container>
  );
}
