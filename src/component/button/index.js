import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = props => {
  const {
    buttonBorderWith,
    buttonBorderColor,
    buttonText,
    LeftIcon,
    buttonColor,
    RightIcon,
    onPressButton,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.buttonConatiner,
        {
          backgroundColor: buttonColor,
          borderColor: buttonBorderColor,
          borderWidth: buttonBorderWith,
        },
      ]}
      onPress={onPressButton}>
      {LeftIcon && <LeftIcon />}
      <Text>{buttonText}</Text>

      {RightIcon && <RightIcon />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '3%',
    width: '43%',
    borderRadius: 5,
  },
});

export default Button;
