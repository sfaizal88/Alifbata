/**
*
* settingNavigator.js
* Use to create navigation between multi setting options
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
// REACT NATIVE IMPORT
import * as React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../shared/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ALL MODULE PAGE FILES
import {MoreScreen} from '../../pages/more';
import {PrivacyPolicyScreen} from '../../pages/setting/privacypolicy';
import {TermsnConditionScreen} from '../../pages/setting/termsncondition';
import {SupportScreen} from '../../pages/setting/support';

export const AllSettingNavigation = (props) => {
  
  // DECLARE NAVIGATION
  const Stack = createStackNavigator();

  // LOCAL VARIABLE DECLARATION
  const navConfig = { headerBackTitle: ''};

  // RENDER HTML
  return (
    <>
      <Stack.Navigator initialRouteName={'More'}
          headerMode= 'screen'
          screenOptions={{
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: Colors.primary
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerForceInset: { top: 'never', bottom: 'never' }
        }}>
        <Stack.Screen name="More" component={MoreScreen}  options={{title: 'My Settings', ...navConfig, headerShown: false }}/>
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen}  options={{title: 'Privacy Policy', ...navConfig}}/>
        <Stack.Screen name="TermsnCondition" component={TermsnConditionScreen}  options={{title: 'Terms of Service', ...navConfig}}/>
        <Stack.Screen name="Support" component={SupportScreen}  options={{title: 'Get Help', ...navConfig}}/>
      </Stack.Navigator>
    </>
  );
}