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

// DATA
import * as General from '../data/quiz/general';
import * as Prophets from '../data/quiz/prophets';
import * as Pillars from '../data/quiz/pillars';
import * as Quran from '../data/quiz/quran';

// INTRO SLIDE DATA
export const introSlides = [
  {
    key: 1,
    title: 'Learn',
    text: 'Learn Arabic alphabets with audio.',
    image: require('../../assets/img/read.png'),
    backgroundColor: '#0e8de2',
    statusColor: '#1088da',
    color: '#fff'
  },
  {
    key: 2,
    title: 'Rewards',
    text: 'Earn stars, trophies and medals as you complete the lessons and play games.',
    image: require('../../assets/img/gift.png'),
    backgroundColor: '#d06b60',
    statusColor: '#d06b60',
    color: '#fff'
  },
  {
    key: 3,
    title: 'Quiz',
    text: 'Test your Islamic knowledge by taking our Quiz.',
    image: require('../../assets/img/quiz.png'),
    backgroundColor: '#febe29',
    statusColor: '#f5b523',
    color: '#fff'
  },
  {
    key: 4,
    title: 'Badges',
    text: 'Collect a badge for every chapter completed.',
    image: require('../../assets/img/medal.png'),
    backgroundColor: '#34495e',
    statusColor: '#2c3e50',
    color: '#fff'
  },
];


// BADGE DATA
export const badges = [
  { id: 1, img: require('../../assets/img/badges/chapter1.png'), text: 'Knowledge' },
  { id: 2, img: require('../../assets/img/badges/chapter2.png'), text: 'Strength' },
  { id: 3, img: require('../../assets/img/badges/chapter3.png'), text: 'Health' },
  { id: 4, img: require('../../assets/img/badges/chapter4.png'), text: 'Wealth' },
  { id: 5, img: require('../../assets/img/badges/chapter5.png'), text: 'Love' },
  { id: 6, img: require('../../assets/img/badges/chapter6.png'), text: 'Joy' },
  { id: 7, img: require('../../assets/img/badges/chapter7.png'), text: 'Peace' },
  { id: 8, img: require('../../assets/img/badges/chapter8.png'), text: 'Courage' },
  { id: 9, img: require('../../assets/img/badges/chapter9.png'), text: 'Hope' },
  { id: 10, img: require('../../assets/img/badges/chapter10.png'), text: 'Faith' },
  { id: 11, img: require('../../assets/img/badges/chapter11.png'), text: 'Power' },
  { id: 12, img: require('../../assets/img/badges/chapter12.png'), text: 'Memory' },
  { id: 13, img: require('../../assets/img/badges/chapter13.png'), text: 'Abundance' }];

// QUIZ DATA
export const quizList = [
  {
    id: 1,
    title: 'General',
    desc: 'Used to truncate the text with an ellipsis after computing the text layout.',
    data:  General.data,
    img: require('../../assets/img/idea.png'),
    bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)], 
  },
  {
    id: 2,
    title: 'Prophets of Islam',
    desc: 'The View is now responding for touch events.',
    data:  Prophets.data,
    img: require('../../assets/img/prophets.png'),
    bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
  },
  {
    id: 3,
    title: 'The Pillars of Islam',
    desc: 'If a parent View wants to prevent a child View from becoming responder on a touch start.',
    data:  Pillars.data,
    img: require('../../assets/img/pillars.png'),
    bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
  },
  {
    id: 4,
    title: 'The Holey Quran',
    desc: 'An integer that specifies where to end the selection.',
    data:  Quran.data,
    img: require('../../assets/img/quran.png'),
    bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
  }
]

// INTRO MODEL DATA
export const introModelList = [
  {
    id: 1,
    title: 'General',
    desc: 'Used to truncate the text with an ellipsis after computing the text layout.',
    img: require('../../assets/img/medal.png')
  },
  {
    id: 2,
    title: 'Prophets of Islam',
    desc: 'The View is now responding for touch events.',
    img: require('../../assets/img/winner.png')
  },
  {
    id: 3,
    title: 'The Pillars of Islam',
    desc: 'If a parent View wants to prevent a child View from becoming responder on a touch start.',
    img: require('../../assets/img/star.png')
  }
]

// SafeAreaView setting
export const SafeAreaViewSetting = {top: 'always'};