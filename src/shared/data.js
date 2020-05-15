/**
*
* data.js
* Static data
*
* @author - Faizal
* @date   - 20 April 2020
*
***/
// ALL SHARED FILES
import * as Constant from './constant';

// INTRO SLIDE DATA
export const introSlides = [
  {
    key: 1,
    title: 'Learn',
    text: 'Manage your personal debit & credit details across different currencies and customer.',
    image: require('../../assets/img/read.png'),
    backgroundColor: '#0e8de2',
    statusColor: '#1088da',
    color: '#fff'
  },
  {
    key: 2,
    title: 'Rewards',
    text: 'Create your own list of customers.\nYou can keep adding to your list.',
    image: require('../../assets/img/gift.png'),
    backgroundColor: '#d06b60',
    statusColor: '#d06b60',
    color: '#fff'
  },
  {
    key: 3,
    title: 'Quiz',
    text: 'You can access your data anywhere, any time.\nSecure your account with the login feature.',
    image: require('../../assets/img/quiz.png'),
    backgroundColor: '#febe29',
    statusColor: '#f5b523',
    color: '#fff'
  },
  {
    key: 4,
    title: 'Badges',
    text: 'Generate a report for a quick view of your debit & credit details.',
    image: require('../../assets/img/medal.png'),
    backgroundColor: '#34495e',
    statusColor: '#2c3e50',
    color: '#fff'
  },
];


// BADGE DATA
export const badges = [
  { id: 1, img: require('../../assets/img/badges/chapter1.png'), text: 'Good' },
  { id: 2, img: require('../../assets/img/badges/chapter2.png'), text: 'Passion' },
  { id: 3, img: require('../../assets/img/badges/chapter3.png'), text: 'Strength' },
  { id: 4, img: require('../../assets/img/badges/chapter4.png'), text: 'Power' },
  { id: 5, img: require('../../assets/img/badges/chapter5.png'), text: 'Memory' },
  { id: 6, img: require('../../assets/img/badges/chapter1.png'), text: 'Intelligent' },
  { id: 7, img: require('../../assets/img/badges/chapter2.png'), text: 'Work' },
  { id: 8, img: require('../../assets/img/badges/chapter3.png'), text: 'Brain' },
  { id: 9, img: require('../../assets/img/badges/chapter4.png'), text: 'Smile' },
  { id: 10, img: require('../../assets/img/badges/chapter5.png'), text: 'Super' },
  { id: 11, img: require('../../assets/img/badges/chapter1.png'), text: 'Excellent' },
  { id: 12, img: require('../../assets/img/badges/chapter2.png'), text: 'Super' },
  { id: 13, img: require('../../assets/img/badges/chapter3.png'), text: 'Excellent' },
  { id: 14, img: require('../../assets/img/badges/chapter4.png'), text: 'Super' }];

// SafeAreaView setting
export const SafeAreaViewSetting = {top: 'always'};