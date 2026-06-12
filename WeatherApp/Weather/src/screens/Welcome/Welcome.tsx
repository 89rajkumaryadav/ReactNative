import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import WrapperContainer from '../../components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import {
  moderateScale,
  scale,
  moderateVerticalScale,
} from 'react-native-core-responsive-screen';
import colors from '../../styles/colors';
import fontFamily from '../../constants/fontFamily';
import { storage } from '../../untils/storage';
const { width, height } = Dimensions.get('window');

const Welcome = () => {
  const saveToken = () => {
    storage.set('token', '123456789');
    Alert.alert('Save Token');
  };
  return (
    <WrapperContainer>
      <View style={styles.mainViewStyles}>
        <Image style={styles.imageStyle} source={imagePath.umbrella} />
        <Text style={styles.textTitle}>{'App Stack'}</Text>
        <Text style={styles.weatherTextStyle}>{'Weather App'}</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => saveToken()}>
            <Image style={styles.imageBtnStyle} source={imagePath.arrow} />
          </TouchableOpacity>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  imageStyle: {
    width: moderateScale(150),
    height: moderateScale(150),
  },
  mainViewStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textTitle: {
    fontFamily: fontFamily.bold,
    fontSize: scale(28),
    color: colors.white,
    marginTop: moderateVerticalScale(height / 8),
  },
  weatherTextStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: scale(16),
    color: colors.textGreyB,
    marginTop: moderateVerticalScale(5),
  },
  buttonView: {
    flex: 0.2,
    alignItems: 'center',
  },
  imageBtnStyle: {
    width: moderateScale(62),
    height: moderateScale(62),
    marginTop: moderateScale(40),
    resizeMode: 'contain',
  },
});
