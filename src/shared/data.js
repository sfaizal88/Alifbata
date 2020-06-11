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
import * as Chapters from '../data/chapters';
import {GeneralDataQuiz, JahannamDataQuiz, JannahDataQuiz, PillarsDataQuiz, ProphetsDataQuiz, QuranDataQuiz, SunnahDataQuiz} from '../data/';
import * as General from '../data/quiz/general';

import { Colors } from './colors';
// INTRO SLIDE DATA
export const introSlides = [
  {
    key: 1,
    isLastPage: false,
    title: 'Learn',
    text: 'Learn Arabic alphabets with audio.',
    image: require('../../assets/img/prophets.png'),
    backgroundColor: '#049991',
    statusColor: '#049991',
    color: Colors.white
  },
  {
    key: 2,
    isLastPage: false,
    title: 'Badges',
    text: 'Collect a badge for every chapter completed.',
    image: require('../../assets/img/medal.png'),
    backgroundColor: '#34495e',
    statusColor: '#2c3e50',
    color: Colors.white
  },
  {
    key: 3,
    isLastPage: false,
    title: 'Rewards',
    text: 'Earn stars, trophies and medals as you complete the lessons and play games.',
    image: require('../../assets/img/gift.png'),
    backgroundColor: '#45aaf2',
    statusColor: '#45aaf2',
    color: Colors.white
  },{
    key: 4,
    isLastPage: false,
    title: 'Quiz',
    text: 'Test your Islamic knowledge by taking our Quiz.',
    image: require('../../assets/img/quiz.png'),
    backgroundColor: '#e55039',
    statusColor: '#e55039',
    color: Colors.white
  },
  {
    key: 5,
    isLastPage: true,
    title: '',
    text: '',
    image: require('../../assets/img/medal.png'),
    backgroundColor: '#3c6382',
    statusColor: '#2c3e50',
    color: Colors.white
  },
];


// HOW TO PLAY STEPS IN HEADS UP GAME
export const howToPlayHeadsUp = [
  { id: 1, img: require('../../assets/img/game/3.png'), title: 'Guess the word', desc: "To start the game, a player must hold the phone upright (“Play Position”) on his forehead, while the others act out the word shown on the screen." },
  { id: 2, img: require('../../assets/img/tilt-down.png'), title: 'Tilt-up\n to Pass the word', desc: 'If the player guesses the word correctly, tilt down the phone so the screen faces the floor. Then bring back to Play Position for the next word.' },
  { id: 3, img: require('../../assets/img/tilt-up.png'), title: 'Tilt-down\n if you guess correctly', desc: 'If you want to skip the word, tilt up the phone so the screen faces the sky. Then bring back to Play Position for the next word.'  },
  { id: 4, img: require('../../assets/img/countdown.png'), title: "Time's Up", desc: 'Guess as many words as you can before the timer runs out!' }
];

// HOW TO PLAY STEPS IN SPY LETTER GAME
export const howToPlaySpyLetter = [
  { id: 1, img: require('../../assets/img/drag.png'), title: 'Drag and drop\nmissing letter', desc: 'You need to fill the blank spaces with the correct letters to form the word. Drag a letter from the given 12 letters to the blank spaces.' },
  { id: 2, img: require('../../assets/img/remove.png'), title: 'Remove the letter', desc: 'To remove the letter from the word, click on the letter once.' },
  { id: 3, img: require('../../assets/img/help.png'), title: "Need Clue", desc: 'If you need a clue, click on the “Help” icon in the center.' },
  { id: 4, img: require('../../assets/img/pass.png'), title: 'Pass the word', desc: 'If you want to skip the word, click on “Pass” for the next word.' },
  { id: 5, img: require('../../assets/img/check.png'), title: 'Check the word', desc: 'To check the word after finishing the puzzle, click on “Check”.'},
  { id: 6, img: require('../../assets/img/countdown.png'), title: "Time's Up", desc: 'Guess as many words as you can before the timer runs out!' }
];

// HOW TO PLAY STEPS IN RUNNER GAME
export const howToPlayRunner = [
 { id: 1, img: require('../../assets/img/2player.png'), title: '2-Player Game', desc: 'This is a 2-player game – one Red player and one Blue player.' },
 { id: 2, img: require('../../assets/img/game/4.png'), title: 'Click on Walk Icon', desc: 'Each player has to click on the Walk Icon of their respective colors. The more clicks, the further they will move.' },
 { id: 3, img: require('../../assets/img/mosque.png'), title: 'Reach Mosque', desc: 'There is a Mosque at the end of the running lanes. The first player to reach the Mosque wins.' }
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
  { id: 13, img: require('../../assets/img/badges/chapter13.png'), text: 'Abundance' }
];

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
    type: 'octicon',
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
    type: 'octicon',
    path: 'QuizNavigation' 
  },
  {
    id: 3,
    title: 'Badges',
    desc: 'All Rewards',
    icon: 'gift',
    bgColor: '#f2b645',
    color: '#fff',
    active: true,
    type: 'octicon',
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
    type: 'octicon',
    path: 'StepsNavigation' 
  },
  {
    id: 5,
    title: 'Game',
    desc: 'Have fun',
    icon: 'games',
    bgColor: '#3498db',
    color: '#fff',
    active: true,
    type: '',
    path: 'GameNavigation' 
  },
];

// DASHBOARD QUIZ
export const quizDashboardList = [
  {
    id: 1, title: 'Prophets of Islam', desc: '25 Prophets',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/prayer.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'octicon', path: 'QuizNavigation', data: { screen: 'QuizList', params: { slideIndex: 0 } }
  },
  {
    id: 2, title: 'Pillars of Islam', desc: '5 Pillars',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/pillars.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'font-awesome', path: 'QuizNavigation', data: { screen: 'QuizList', params: { slideIndex: 1 } }
  },
  {
    id: 3, title: 'The Holy Quran', desc: 'All Revelation',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/quran_gr.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'octicon', path: 'QuizNavigation', data: { screen: 'QuizList', params: { slideIndex: 2 } }
  },
  {
    id: 5, title: 'Jannah', desc: 'Paradise',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/heaven.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'font-awesome', path: 'QuizNavigation', data: { screen: 'QuizList', params: { slideIndex: 4 } }
  },
  {
    id: 6, title: 'Jahannam', desc: 'Hell fire',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/fire.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'octicon', path: 'QuizNavigation', data: { screen: 'QuizList', params: { slideIndex: 5 } }
  },
  /*{
    id: 7, title: 'Sunnah', desc: 'Teaching of Prophet',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/heart.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'font-awesome', path: 'QuizNavigation', data: { screen: 'QuizList', params: { slideIndex: 6 } }
  },*/
  {
    id: 8, title: 'More', desc: 'View all quiz',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
   img: require('../../assets/img/more.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'font-awesome', path: 'QuizNavigation', data: { screen: 'QuizList', params: { slideIndex: 0 } }
  },
]

// DASHBOARD KNOWLEDGE
export const knowledgeDashboardList = [
  {
    id: 1, title: 'How to do Wudu', desc: 'Wudu steps',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/steps/wudu.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'font-awesome', path: 'StepsNavigation', data: { screen: 'StepsList', params: { slideIndex: 1 } }
  },
  {
    id: 2, title: 'Miracles of Prophets', desc: '25 Prophets',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/prayer.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'octicon', path: 'StepsNavigation', data: { screen: 'StepsList', params: { slideIndex: 0 } }
  },
  {
    id: 3, title: 'Umrah', desc: 'How to perform Umrah',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/steps/hajj.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'octicon', path: 'StepsNavigation', data: { screen: 'StepsList', params: { slideIndex: 2 } }
  },
  {
    id: 4, title: 'Angels in Islam', desc: 'Major Angels',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/angel.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, path: 'StepsNavigation', data: { screen: 'StepsList', params: { slideIndex: 5 } }
  },
  {
    id: 5, title: 'Arabic Words', desc: 'Frequently used words',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/steps/frequentWords.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'octicon', path: 'StepsNavigation', data: { screen: 'StepsList', params: { slideIndex: 3 } }
  },
  {
    id: 6, title: 'Friday Sunnah', desc: 'Sunnah acts of Jummah',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/steps/prayer.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'octicon', path: 'StepsNavigation', data: { screen: 'StepsList', params: { slideIndex: 8 } }
  },
  {
    id: 7, title: 'Drinking Water', desc: 'How to drink',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/steps/drinking.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'octicon', path: 'StepsNavigation', data: { screen: 'StepsList', params: { slideIndex: 11 } }
  },
  {
    id: 8, title: 'More', desc: 'All Knowledge',
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
   img: require('../../assets/img/more.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, type: 'font-awesome', path: 'StepsNavigation', data: { screen: 'StepsList', params: { slideIndex: 0 } }
  },
]

// DASHBOARD GAMES
export const gameDashboardList = [
  {
    id: 1, title: 'Spy Word', desc: 'Find me', showHowtoPlay: true,
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/game/2.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, path: 'GameNavigation', data: { screen: 'GameList', params: { slideIndex: 0 } }
  },
  {
    id: 2, title: 'Charades', desc: 'Act and find', showHowtoPlay: true,
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/game/3.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, path: 'GameNavigation', data: { screen: 'GameList', params: { slideIndex: 1 } }
  },
  {
    id: 3, title: 'Runner', desc: 'Who reach mosque', showHowtoPlay: true,
    //icon: 'organization', bgColor: '#c44569', color: '#fff', type: 'octicon',
    img: require('../../assets/img/game/4.png'), bgColor: Colors.grayLightest, color: Colors.grayDarkest,
    active: true, path: 'GameNavigation', data: { screen: 'GameList', params: { slideIndex: 2 } }
  }
]

// SafeAreaView setting
export const SafeAreaViewSetting = {top: 'always'};