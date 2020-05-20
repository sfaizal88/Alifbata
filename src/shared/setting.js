/**
*
* SETTING.js
* Declare all main setting variable declare
* @author - Faizal
* @date   - 20 April 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import { Dimensions, StatusBar, Platform, NativeModules } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// DECALRE SETTING VARIABLE
const { StatusBarManager } = NativeModules;
export const Setting = {
  usTextSize: RFValue(10),
  xxxsTextSize: RFValue(11),
  xxsTextSize: RFValue(12),
  sxTextSize: RFValue(13),
  sTextSize: RFValue(14),
  nTextSize: RFValue(15),
  nlTextSize: RFValue(16),
  xlTextSize: RFValue(40),
  vlTextSize: RFValue(80),
  lTextSize: RFValue(30),
  h1TextSize: RFValue(26),
  h2TextSize: RFValue(24),
  h3TextSize: RFValue(22),
  h4TextSize: RFValue(20),
  h5TextSize: RFValue(18),
  h6TextSize: RFValue(17),
  moreIconSize: RFValue(22),
  smashIconSize: RFValue(200),
  scoreSize: RFValue(120),
  STATUSBAR_HEIGHT: Platform.OS === 'ios' ? 40 : StatusBarManager.HEIGHT,
  APPBAR_HEIGHT: Platform.OS === 'ios' ? 44 : 56,
  DEVICE_WIDTH: Dimensions.get('window').width,
  DEVICE_HEIGHT: Dimensions.get('window').height
};
