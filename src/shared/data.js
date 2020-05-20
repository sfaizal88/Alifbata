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
import * as Chapters from '../data/chapters';

import { Colors } from './colors';
// INTRO SLIDE DATA
export const introSlides = [
  {
    key: 1,
    title: 'Learn',
    text: 'Learn Arabic alphabets with audio.',
    image: require('../../assets/img/prophets.png'),
    backgroundColor: '#049991',
    statusColor: '#049991',
    color: '#fff'
  },
  {
    key: 2,
    title: 'Quiz',
    text: 'Test your Islamic knowledge by taking our Quiz.',
    image: require('../../assets/img/quiz.png'),
    backgroundColor: '#e55039',
    statusColor: '#e55039',
    color: '#fff'
  },
  {
    key: 3,
    title: 'Rewards',
    text: 'Earn stars, trophies and medals as you complete the lessons and play games.',
    image: require('../../assets/img/gift.png'),
    backgroundColor: '#45aaf2',
    statusColor: '#45aaf2',
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
    desc: 'Islam is an Abrahamic monotheistic religion teaching that there is only one God, and that Muhammad is the last messenger of God.',
    data:  [...General.data, ...Prophets.data, ...Pillars.data, ...Quran.data],
    img: require('../../assets/img/idea.png'),
    bgColor: '#34495e',
    active: true 
  },
  {
    id: 2,
    title: 'Prophets of Islam',
    desc: "Prophets in Islam are individuals who were sent by Allah to various communities in order to serve as examples of ideal human behavior and to spread Allah's message on Earth.",
    data:  Prophets.data,
    img: require('../../assets/img/prophets.png'),
    bgColor: '#049991',
    active: true
  },
  {
    id: 3,
    title: 'The Pillars of Islam',
    desc: 'The Five Pillars of Islam are some basic acts in Islam, considered mandatory by believers, and are the foundation of Muslim life. Faith, Prayer, Zakat, Fasting and Hajj.',
    data:  Pillars.data,
    img: require('../../assets/img/pillars.png'),
    bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
    active: true
  },
  {
    id: 4,
    title: 'The Holy Quran',
    desc: 'Islamic tradition says that Prophet Muhammad (pbuh) received his first revelation in the Cave of Hira during one of his isolated retreats to the mountains.',
    data:  Quran.data,
    img: require('../../assets/img/quran.png'),
    bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
    active: true
  },
  {
    id: 5,
    title: 'Jannah',
    desc: "Qur'an described as “gardens of pleasure” (Qur'an 31:8). People get to Paradise by living religiously, asking Allah for forgiveness and showing good actions in their life.",
    data:  Quran.data,
    img: require('../../assets/img/heaven.png'),
    bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
    active: false
  },
  {
    id: 6,
    title: 'Jahannam',
    desc: 'Afterlife place of punishment for evildoers. The punishments are carried in accordance with the degree of evil one has done during his life.',
    data:  Quran.data,
    img: require('../../assets/img/fire.png'),
    bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
    active: false
  },
  {
    id: 7,
    title: 'Sunnah',
    desc: 'Sayings and Teachings of Prophet Muhammad (pbuh).',
    data:  Quran.data,
    img: require('../../assets/img/heart.png'),
    bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
    active: false
  }
]

// TOTALS
export const totalChapter = Chapters.allChapter.filter(item => {return item.active}).length;
export const totalLesson = Chapters.allChapter.reduce((accumulator, currentValue) => {return accumulator + parseInt(currentValue.data.length)}, 0);
export const totalStars = 5000;

// DASHBOARD HELPFUL MENUS
export const dashboardHelpList = [
  {
    id: 1,
    title: 'All Chapters',
    desc: 'Start Learning',
    icon: 'book',
    bgColor: '#2aabab',
    color: '#fff',
    active: true,
    path: 'Chapter'
  },
  {
    id: 2,
    title: 'Quiz Game',
    desc: 'Islamic Test',
    icon: 'light-bulb',
    bgColor: Colors.red,
    color: '#fff',
    active: true,
    path: 'Quiz' 
  },
  {
    id: 3,
    title: 'Badges',
    desc: 'All Rewards',
    icon: 'gift',
    bgColor: '#f2b645',
    color: '#fff',
    active: true,
    path: 'Badge' 
  },
  {
    id: 4,
    title: 'Knowledge',
    desc: 'About Islam',
    icon: 'broadcast',
    bgColor: '#6972cf',
    color: '#fff',
    active: true,
    path: 'Quiz' 
  },
]
// SafeAreaView setting
export const SafeAreaViewSetting = {top: 'always'};