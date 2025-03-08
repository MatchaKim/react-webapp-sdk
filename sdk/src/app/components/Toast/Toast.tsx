import React, { useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './Toast.store';
import { hideToast } from './Toast.slice';

const Toast = () => {
  const dispatch = useDispatch();
  const { message, isVisible } = useSelector((state: RootState) => state.toast);

  const fadeAnim = new Animated.Value(isVisible ? 1 : 0);

  useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => dispatch(hideToast()));
      }, 2000);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 4,
        opacity: fadeAnim,
        zIndex: 10000,
        width: '90%',
        alignSelf: 'center',
      }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{message}</Text>
    </Animated.View>
  );
};

export default Toast;
