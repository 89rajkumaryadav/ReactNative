import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
  Platform,
  FlatList,
} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import fontFamily from '../../constants/fontFamily';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import { scale, moderateScale } from 'react-native-core-responsive-screen';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/MainStack';

const { width, height } = Dimensions.get('window');

type DetailScreenRouteProps = RouteProp<MainStackParamList, 'DetailsScreen'>;
type Props = { route: DetailScreenRouteProps };

const DetailsScreen = ({ route }: Props) => {
  const { airData } = route.params;
  const navigation = useNavigation();

  const airConditionData = [
    { id: 1, name: 'UV INDEX', value: '3' },
    { id: 2, name: 'WIND', value: '0.2 km/h' },
    { id: 3, name: 'HUMIDITY', value: '56%' },
    { id: 4, name: 'VISIBILITY', value: '12 km' },
    { id: 5, name: 'FEELS LIKE', value: '30' },
    { id: 6, name: 'CHANCE OF RAIN', value: '0%' },
    { id: 7, name: 'PRESSURE', value: '1008 hPa' },
    { id: 8, name: 'SUNSET', value: '20:58' },
  ];
  return (
    <WrapperContainer>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image style={styles.imgBack} source={imagePath.back} />
        </Pressable>
        <Text style={styles.txtHeaderTitle}>Air Conditions</Text>
        <View />
      </View>
      <View style={{ alignItems: 'center', marginTop: moderateScale(20) }}>
        <Text style={styles.txtSubHeader}>Madrid</Text>
        <Text style={styles.txtChanceRain}>Chance of rain: 0%</Text>
        <Image style={styles.imgSun} source={imagePath.sun} />
        <Text style={styles.txtTemp}>31°</Text>
        <View>
          <FlatList
            style={{ marginTop: moderateScale(10) }}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-around',
            }}
            ItemSeparatorComponent={() => (
              <View style={{ height: moderateScale(12) }} />
            )}
            data={airConditionData}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: '46%',
                    backgroundColor: colors.cardBackgroundColor,
                    paddingHorizontal: moderateScale(14),
                    paddingVertical: moderateScale(16),
                    borderRadius: moderateScale(14),
                  }}
                >
                  <Text numberOfLines={1} style={styles.txtRender}>
                    {item.name}
                  </Text>
                  <Text style={{ ...styles.txtRender, color: colors.white }}>
                    {item.value}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </WrapperContainer>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS == 'ios' ? moderateScale(8) : moderateScale(24),
    paddingLeft: scale(10),
  },
  imgBack: {
    width: moderateScale(22),
    height: moderateScale(22),
    resizeMode: 'contain',
  },
  txtHeaderTitle: {
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: moderateScale(15),
  },
  txtSubHeader: {
    fontFamily: fontFamily.medium,
    fontSize: scale(16),
    color: colors.white,
  },
  txtChanceRain: {
    fontFamily: fontFamily.regular,
    fontSize: scale(11),
    color: colors.textGreyB,
  },
  imgSun: {
    width: moderateScale(70),
    height: moderateScale(70),
    resizeMode: 'contain',
    marginTop: moderateScale(30),
  },
  txtTemp: {
    fontFamily: fontFamily.bold,
    fontSize: scale(31),
    color: colors.white,
    marginTop: 25,
  },
  txtRender: {
    fontFamily: fontFamily.regular,
    fontSize: scale(14),
    color: colors.textGreyB,
  },
});
