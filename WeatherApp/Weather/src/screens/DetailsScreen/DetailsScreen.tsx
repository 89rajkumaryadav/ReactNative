import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
  Platform,
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
      <Text style={{ fontFamily: fontFamily.bold, color: colors.white }}>
        {airData[0].weather}
      </Text>
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
});
