/**
*
* fonts.js
* Declare all type of fonts
* @author - Faizal
* @date   - 20 April 2020
*
***/
import { Platform, StyleSheet } from 'react-native';

// Style definition
export const fontStyles = StyleSheet.create({
    base: {
        fontFamily: 'Roboto',
    },
    fontWeight100: {
        ...Platform.select({
            ios: { fontWeight: '100' },
            android: { fontFamily: 'Roboto-Thin' },
        }),
    },
    fontWeight200: {
        ...Platform.select({
            ios: { fontWeight: '200' },
            android: { fontFamily: 'Roboto-Thin' },
        }),
    },
    fontWeight300: {
        ...Platform.select({
            ios: { fontWeight: '300' },
            android: { fontFamily: 'Roboto-Light' },
        }),
    },
    fontWeight400: {
        ...Platform.select({
            ios: { fontWeight: '400' },
            android: { fontFamily: 'Roboto-Regular' },
        }),
    },
    fontWeight500: {
        ...Platform.select({
            ios: { fontWeight: '500' },
            android: { fontFamily: 'Roboto-Medium' },
        }),
    },
    fontWeight600: {
        ...Platform.select({
            ios: { fontWeight: '600' },
            android: { fontFamily: 'Roboto-Medium' },
        }),
    },
    fontWeigh700: {
        ...Platform.select({
            ios: { fontWeight: '700'},
            android: { fontFamily: 'Roboto-Bold'},
        }),
    },
    fontWeightBold: {
        ...Platform.select({
            ios: { fontWeight: 'bold' },
            android: { fontFamily: 'Roboto-Black'},
        }),
    },
});