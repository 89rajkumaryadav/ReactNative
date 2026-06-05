import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import fontFamily from '../../constants/fontFamily';
import { scale, moderateScale } from 'react-native-core-responsive-screen';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import TodayInfoWeatrherComponent from '../../components/TodayInfoWeatrherComponent';

const Home = () => {
  const weekWeather = [
    { day: 'Monday', weather: 'Sunny', temperature: '31/19' },
    { day: 'Tuesday', weather: 'Cloudy', temperature: '31/19' },
    { day: 'Wednesday', weather: 'Rainy', temperature: '31/19' },
    { day: 'Thursday', weather: 'Partly Cloudy', temperature: '31/19' },
    { day: 'Friday', weather: 'Thunderstorm', temperature: '31/19' },
    { day: 'Saturday', weather: 'Winday', temperature: '31/19' },
    { day: 'Sunday', weather: 'Winday', temperature: '31/19' },
  ];
  return (
    <WrapperContainer>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.mainStyle}>
          <Text style={styles.titleStyle}> Madrid</Text>
          <Text style={styles.chanceTxt}>Chance of the rain: 0%</Text>
          <Image source={imagePath.sun} style={styles.centerImage} />
          <Text style={{ ...styles.titleStyle, marginTop: moderateScale(32) }}>
            31 °{' '}
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: moderateScale(24),
            marginTop: moderateScale(24),
          }}
        >
          <TodayInfoWeatrherComponent />
          <FlatList
            style={{
              marginTop: moderateScale(20),
              backgroundColor: colors.cardBackgroundColor,
              paddingHorizontal: moderateScale(14),
              paddingVertical: moderateScale(16),
              borderRadius: moderateScale(14),
            }}
            data={weekWeather}
            ListHeaderComponent={() => {
              return (
                <View style={{ marginBottom: moderateScale(10) }}>
                  <Text style={{ color: colors.txtLightGrey }}>
                    7-DAY FORECAST
                  </Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => (
              <View style={{ height: moderateScale(12) }} />
            )}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottomWidth: item?.day == 'Sunday' ? 0 : 0.6,
                    borderColor: colors.white,
                    paddingBottom: 12,
                  }}
                >
                  <Text style={{ ...styles.weekName, width: '15%' }}>
                    {item.day?.substring(0, 3)}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      width: '50%',
                    }}
                  >
                    <Image
                      style={{
                        width: moderateScale(32),
                        height: moderateScale(32),
                        resizeMode: 'contain',
                        paddingRight: 10,
                      }}
                      source={imagePath.sun}
                    />
                    <Text style={styles.weekName}>{item.weather}</Text>
                  </View>
                  <Text style={styles.weekName}>{item.temperature}</Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainStyle: { flex: 1, alignItems: 'center' },
  titleStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: scale(24),
    color: colors.white,
    marginTop: moderateScale(12),
  },
  chanceTxt: {
    fontFamily: fontFamily.regular,
    fontSize: scale(14),
    color: colors.white,
    marginTop: moderateScale(4),
  },
  centerImage: {
    width: moderateScale(120),
    height: moderateScale(120),
    marginTop: moderateScale(4),
  },
  weekName: {
    color: colors.txtLightGrey,
    fontFamily: fontFamily.medium,
    fontSize: scale(14),
  },
});
