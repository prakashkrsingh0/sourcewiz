import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import LeftArrow from '../assets/icons/arrow_left.svg';
import CheckList from '../assets/icons/checklist.svg';
import Scanner from '../assets/icons/scanner.svg';
import DetailCard from '../component/detailsCard/index';
import Button from '../component/button/index';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.headerConatiner}>
        <Image
          source={require('../assets/images/arrow-left.png')}
          style={{
            height: 20,
            width: 20,
          }}
        />
        <Text style={styles.buyerNameTextStyle}>Prakash</Text>
      </View>
      <View style={styles.mainConatiner}>
        <View style={styles.caresoleContainer}>
          <Text>{'<'}</Text>
          <Image
            source={require('../assets/images/pillow1.png')}
            style={styles.caresoleImageStyle}
          />
          <Text>{'>'}</Text>
        </View>
        <View
          style={{
            marginTop: '12%',
          }}>
          <Text>Notes</Text>
          <TextInput
            style={styles.inputTextStyle}
            placeholder={'Enter note here'}
            placeholderTextColor={'#0000005A'}
          />
          <DetailCard title={'Product ID'} detail={'ID 28736'} />
          <DetailCard title={'Material'} detail={'Glass and ceramic'} />
          <DetailCard title={'Size'} detail={'12 x 12 x 12 cm'} />
          <DetailCard title={'Color'} detail={'Red'} />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '3%',
        }}>
        <Button
          buttonText={'Review visit'}
          buttonColor={'white'}
          // LeftIcon={<CheckList />}
          buttonBorderWith={2}
          buttonBorderColor={'#00000054'}
          onPressButton={() => console.log('clicked on review Vist')}
        />

        <Button
          buttonText={'Scan More'}
          buttonColor={'#3FAC7B'}
          // LeftIcon={<CheckList />}
          onPressButton={() => console.log('clicked on scan more ')}
        />
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
  },
  mainConatiner: {
    flex: 1,
    paddingHorizontal: '3%',
    paddingTop: '5%',
    borderTopColor: '#00000052',
    borderTopWidth: 1,
    borderBottomColor: '#00000052',
    borderBottomWidth: 1,
  },
  headerConatiner: {
    height: '5%',
    paddingHorizontal: '3%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  caresoleContainer: {
    height: '35%',
    width: '90%',
    backgroundColor: '#0000002F',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyerNameTextStyle: {
    marginLeft: '1%',
    fontWeight: 'bold',
  },
  caresoleImageStyle: {
    height: '100%',
    width: '100%',
  },
  inputTextStyle: {
    width: '100%',
    height: '17%',
    borderWidth: 2,
    borderColor: '#00000013',
    marginTop: '3%',
    borderRadius: 5,
    padding: '2%',
  },
});
