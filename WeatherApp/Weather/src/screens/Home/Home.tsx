import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import fontFamily from '../../constants/fontFamily';
import { scale, moderateScale } from 'react-native-core-responsive-screen';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import TodayInfoWeatrherComponent from '../../components/TodayInfoWeatrherComponent';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../navigation/MainStack';
import { AirDataItem } from '../../constants/ObjectTypes';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

const Home = () => {
  const navigation = useNavigation<NavigationProp>();
  const weekWeather = [
    { day: 'Monday', weather: 'Sunny', temperature: '31/19' },
    { day: 'Tuesday', weather: 'Cloudy', temperature: '31/19' },
    { day: 'Wednesday', weather: 'Rainy', temperature: '31/19' },
    { day: 'Thursday', weather: 'Partly Cloudy', temperature: '31/19' },
    { day: 'Friday', weather: 'Thunderstorm', temperature: '31/19' },
    { day: 'Saturday', weather: 'Winday', temperature: '31/19' },
    { day: 'Sunday', weather: 'Winday', temperature: '31/19' },
  ];

  const airData: AirDataItem[] = [
    { id: 1, weather: 'Real Feel', image: imagePath.hot, temp: '30' },
    { id: 2, weather: 'winds', image: imagePath.wind, temp: '0%' },
    {
      id: 3,
      weather: 'Chance of rain',
      image: imagePath.drop,
      temp: '0.2 km/h',
    },
    { id: 4, weather: 'UV', image: imagePath.uv, temp: '3' },
    { id: 5, weather: 'Raining', image: imagePath.rain, temp: 30 },
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
            scrollEnabled={false}
            style={styles.cardUIStyle}
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

          <FlatList
            scrollEnabled={false}
            style={styles.cardUIStyle}
            ListHeaderComponent={() => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text style={styles.cardText}>AIR CONDITIONS</Text>
                  <Pressable
                    style={styles.seeMoreBtnStyle}
                    onPress={() =>
                      navigation.navigate('DetailsScreen', { airData })
                    }
                  >
                    <Text style={styles.seeMoreText}>See More</Text>
                  </Pressable>
                </View>
              );
            }}
            data={airData}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: moderateScale(14),
              paddingVertical: moderateScale(14),
            }}
            renderItem={({ item }) => {
              return (
                <View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      style={{
                        width: moderateScale(24),
                        height: moderateScale(24),
                        resizeMode: 'contain',
                        marginRight: moderateScale(8),
                      }}
                      source={item.image}
                    />
                    <Text>{item.weather}</Text>
                  </View>
                  <Text style={{ ...styles.cardText, textAlign: 'center' }}>
                    {item.temp}
                  </Text>
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
  cardUIStyle: {
    marginTop: moderateScale(20),
    backgroundColor: colors.cardBackgroundColor,
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(16),
    borderRadius: moderateScale(14),
  },
  cardText: {
    color: colors.txtLightGrey,
    fontFamily: fontFamily.semiBold,
    fontSize: scale(12),
  },
  seeMoreBtnStyle: {
    backgroundColor: colors.blue,
    padding: moderateScale(6),
    paddingHorizontal: moderateScale(12),
    borderRadius: 20,
    alignItems: 'center',
  },
  seeMoreText: {
    color: colors.white,
    fontFamily: fontFamily.medium,
    fontSize: scale(10),
  },
});
