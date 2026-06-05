import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale, scale, moderateVerticalScale,  } from "react-native-core-responsive-screen";
import fontFamily from '../constants/fontFamily';
import imagePath from '../constants/imagePath';

const { width, height } = Dimensions.get('window'); 

const TodayInfoWeatrherComponent = () => {
  return (
    <View style={styles.mainStyle}>
      <Text style = {styles.titleStyle}>TODAY'S FORECAST </Text>
      <View style = {styles.contentView}>
        <View style = {styles.itemViewStyle}>
            <Text style = {styles.timeTextStyle}>9:00 AM</Text>
            <Image style={styles.cloudSun} source = {imagePath.cloudy}/>
            <Text style = {{...styles.timeTextStyle, }}>25°</Text>
        </View>
        <View style = {styles.itemViewStyle}>
              <Text style = {styles.timeTextStyle}>9:00 AM</Text>
            <Image style={styles.cloudSun} source = {imagePath.sun}/>
            <Text style = {{...styles.timeTextStyle, }}>25°</Text>
        
        </View>
        <View style = {{...styles.itemViewStyle, borderRightWidth:0}}>
              <Text style = {styles.timeTextStyle}>9:00 AM</Text>
            <Image style={styles.cloudSun} source = {imagePath.sun}/>
            <Text style = {{...styles.timeTextStyle, }}>25°</Text>
       
        </View>
      </View>
    </View>
  )
}

export default TodayInfoWeatrherComponent

const styles = StyleSheet.create({
    mainStyle:{
        backgroundColor: colors.cardBackgroundColor,
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(20),
        borderRadius: moderateScale(8),
        height: height/4.8,
        width: '100%',
    },
    titleStyle:{
        fontFamily: fontFamily.medium,
        fontSize: moderateScale(16),
        color: colors.txtLightGrey,
    },
    contentView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: moderateScale(12),
        marginHorizontal:moderateScale(6),
        alignItems:'center'
    },
    timeTextStyle: {
        color: colors.txtLightGrey,
        fontFamily: fontFamily.medium,
        fontSize: moderateScale(14)
    },
    itemViewStyle: {
    borderRightWidth:0.3, borderColor: colors.white, alignItems:'center', paddingHorizontal: moderateScale(20)
    },
    cloudSun: {
        width:moderateScale(32), height: moderateScale(32), resizeMode:'contain', marginVertical:moderateScale(12)
    }
})

