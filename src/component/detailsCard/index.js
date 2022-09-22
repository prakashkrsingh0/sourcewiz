import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailCard = props => {
  const {title, detail} = props;
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={styles.detailStyle}>
        <Text>{detail}</Text>
      </View>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  titleStyle: {
    color: '#00000070',
    marginTop: '5%',
  },
  detailStyle: {
    marginTop: '2%',
  },
});
