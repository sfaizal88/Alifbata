/**
*
* quiz.js
* Quiz data
*
* @author - Faizal
* @date   - 6 May 2020
*
***/
// ALL SHARED FILES
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';
import * as Questions from './questions';
import * as Common from './common';
import * as Generate from '../shared/generate';

import * as General from './quiz/general';
import * as Prophets from './quiz/prophets';
import * as Pillars from './quiz/pillars';
import * as Quran from './quiz/quran';
import * as Jannah from './quiz/jannah';
import * as Jahannam from './quiz/jahannam';
import * as Sunnah from './quiz/sunnah';

import { Colors } from '../shared/colors';

// QUIZ
export const generateQuiz = (data, quizId, quizCount) => {
	return [
	Common.COMMON_SECTION[5],
	...Generate.generateQuiz(data, quizId, quizCount),
	Common.COMMON_SECTION[6]
	]
};

// QUIZ DATA
export const quizList = [
  {
    id: 1,
    title: 'Prophets of Islam',
    desc: "Prophets are individuals sent by Allah to various communities to serve as examples of ideal human behavior and to spread Allah's message on Earth.",
    data:  Prophets.data,
    img: require('../../assets/img/prophets.png'),
    bgColor: '#049991',
    active: true
  },
  {
    id: 2,
    title: 'Pillars of Islam',
    desc: "Basic mandatory acts in Islam and the foundation of Muslim life. The five Pillars are Faith, Prayer, Zakat, Fasting and Hajj.",
    data:  Pillars.data,
    img: require('../../assets/img/pillars.png'),
    bgColor: Colors.primary,
    active: true
  },
  {
    id: 3,
    title: 'The Holy Quran',
    desc: 'The Holy Quran was revealed to Prophet Muhammad (pbuh) in the Cave of Hira.',
    data:  Quran.data,
    img: require('../../assets/img/quran.png'),
    bgColor: '#B33771',
    active: true
  },
  {
    id: 4,
    title: 'General',
    desc: 'Islam, which means submission to God, is a monotheistic religion, believing in one God (i.e. Allah).',
    data:  [...General.data],
    img: require('../../assets/img/idea.png'),
    bgColor: '#34495e',
    active: true
  },
  {
    id: 5,
    title: 'Jannah',
    desc: "The after-life paradise, described as “gardens of pleasure” in the Quran (31:8), is achieved by living religiously, asking Allah’s forgiveness and doing good deeds in this life.",
    data:  Jannah.data,
    img: require('../../assets/img/heaven.png'),
    bgColor: '#b33939',
    active: true
  },
  {
    id: 6,
    title: 'Jahannam',
    desc: 'The after-life hell to punish the evildoers. Punishments are carried in accordance with the degree of evil one has done during his life.',
    data:  Jahannam.data,
    img: require('../../assets/img/fire.png'),
    bgColor: '#ccae62',
    active: true
  },
  {
    id: 7,
    title: 'Sunnah',
    desc: 'Sayings and teachings of Prophet Muhammad (pbuh).',
    data:  Sunnah.data,
    img: require('../../assets/img/heart.png'),
    bgColor: '#596275',
    active: false
  }
]