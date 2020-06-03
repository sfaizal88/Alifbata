/**
*
* steps.js
* Static data
*
* @author - Faizal
* @date   - 2 May 2020
* Covert mp4 to mp3 https://audio.online-convert.com/convert/mp4-to-mp3
* https://www.remove.bg/upload Remove background
***/
// ALL SHARED FILES
import * as Constant from '../../shared/constant';
import * as Generate from '../../shared/generate';
import * as Utils from '../../shared/utils';

//STEPS
import * as Wudu from './wudu';
import * as ProphetNames from './prophetnames';
import * as Drinking from './drinking';
import * as FastingBenefit from './fastingBenefit';
import * as FavouriteFood from './favouriteFood';
import * as Sunnah from './sunnah';
import * as Hajj from './hajj';
import * as Mahram from './mahram';
import * as Pillars from './pillars';
import * as FridaySunnah from './fridaySunnah';
import * as Quran from './quran';
import * as Umrah from './umrah';
import * as Verse from './verse';
import * as Angels from './angels';
import * as FrequentWords from './frequentWords';
import * as Revelation from './revelation';

import { Colors } from '../../shared/colors';


// ALL CHAPTER

export const data = [
	{
		id: 1,
		title: 'Prophets in Islam',
		data: ProphetNames.data,
		desc: '25 Prophets \nand their Miracles',
		bgColor: '#049991',
		active: true,
		img: require('../../../assets/img/steps/prophets.png'),
		details: "Prophets are individuals who were sent by Allah to various communities to serve as examples of ideal human behavior and to spread God's message on Earth. ",
	},
	{
		id: 7,
		title: 'Angels in Islam',
		data: Angels.data,
		desc: 'Major Angels\nand Their Duties',
		bgColor: '#2e86de',
		active: true,
		img: require('../../../assets/img/steps/angel.png'),
		details: "Angels are believed to be celestial beings created from light by Allah SWT.",
	},
	{
		id: 6,
		title: 'Five Pillars',
		data: Pillars.data,
		desc: 'Five Pillars of Islam',
		bgColor: '#049991',
		active: true,
		img: require('../../../assets/img/steps/pillars.png'),
		details: 'Basic mandatory acts in Islam and the foundation of Muslim life. Faith, Prayer, Zakat, Fasting and Hajj.',
	},
	{
		id: 2,
		title: 'Quran Verses',
		data: Verse.data,
		desc: 'Five Life-Changing\nVerses of the Quran',
		bgColor: '#34495e',
		active: true,
		img: require('../../../assets/img/steps/verse.png'),
		details: ' Each and every verse of Quran is a gem. However, there are few which life-changing.',
	},
	{
		id: 3,
		title: 'Benefits of Fasting',
		data: FastingBenefit.data,
		desc: 'Benefit of\nfasting during Ramadan',
		bgColor: '#60a3bc',
		active: true,
		img: require('../../../assets/img/steps/fasting.png'),
		details: 'Fasting develops the quality of righteousness (taqwa) by making Muslims abstain from sinful deeds and training them to control our thoughts and desires.',
	},
	{
		id: 4,
		title: "Favourite food",
		data: FavouriteFood.data,
		desc: "Prophet Muhammed's (pbuh)\nfavourite food",
		bgColor: '#c44569',
		active: true,
		img: require('../../../assets/img/steps/food.png'),
		details: "Prophet Muhammed's (pbuh) favourite food.",
	},
	{
		id: 5,
		title: 'Friday Sunnah',
		data: FridaySunnah.data,
		desc: 'Virtues and \n Sunnah acts of Jummah',
		bgColor: '#4b6584',
		active: true,
		img: require('../../../assets/img/steps/prayer.png'),
		details: ' O you who believe! When the call is proclaimed for the Salah on Al-Jumu`ah (Friday), then hasten (Fas`aw) to the remembrance of Allah and leave off business...(62:9-10)',
	},
	{
		id: 8,
		title: 'Quran Knowledge',
		data: Quran.data,
		desc: 'How much do you\nknow about Quran?',
		bgColor: '#c44569',
		active: true,
		img: require('../../../assets/img/steps/quran.png'),
		details: "The Holy Quran was revealed to Prophet Muhammad (pbuh) in the Cave of Hira.",
	},
	{
		id: 9,
		title: 'Revelation',
		data: Revelation.data,
		desc: 'Book of Revelation',
		bgColor: '#34495e',
		active: true,
		img: require('../../../assets/img/steps/revelation.png'),
		details: "Four Revelation in Islam Torah revealed to Prophet Musa (A.S), the Zabur revealed to Prophet Dawud (A.S), the Injeel revealed to Prophet Isa (A.S), and the Quran revealed to Prophet Muhammad (pbuh).",
	},
	{
		id: 10,
		title: 'Arabic Words',
		data: FrequentWords.data,
		desc: 'Frequently used\nwords',
		bgColor: '#e66767',
		active: true,
		img: require('../../../assets/img/steps/frequentWords.png'),
		details: "What are the Frequently used words, during which time and the meaning.",
	},
	{
		id: 11,
		title: 'Wudu',
		data: Wudu.data,
		desc: 'How to perform Wudu',
		bgColor: '#d1d8e0',
		active: true,
		img: require('../../../assets/img/steps/wudu.png'),
		details: 'Wudu, or ablution, is the ritual purification for cleansing parts of the body. It is an essential step before performing salah and reading the Quran.',
	},
	{
		id: 12,
		title: 'Drinking Water',
		data: Drinking.data,
		desc: 'Drinking Water the Sunnah Way',
		bgColor: '#cf6a87',
		active: true,
		img: require('../../../assets/img/steps/drinking.png'),
		details: 'He it is who sends down water from the sky. With it, we bring forth plants of every kind (6:99).',
	},
	{
		id: 13,
		title: 'Major Sunnah',
		data: Sunnah.data,
		desc: 'Major Sunnah in Islam',
		bgColor: '#34495e',
		active: false,
		img: require('../../../assets/img/steps/good.png'),
		details: 'Sayings and Teachings of Prophet Muhammad (pbuh).',
	},
	{
		id: 14,
		title: 'Umrah',
		data: Umrah.data,
		desc: 'How to perform Umrah',
		bgColor: '#bee99d',
		active: false,
		img: require('../../../assets/img/steps/umrah.png'),
		details: 'Umrah is the pilgrimage to Mecca performed at any time of the year, unlike Hajj which is done during specific dates.',
	},
	{
		id: 15,
		title: 'Hajj',
		data: Hajj.data,
		desc: 'How to perform Hajj',
		bgColor: '#3c6382',
		active: false,
		img: require('../../../assets/img/steps/hajj.png'),
		details: 'Hajj, which is the pilgrimage to Mecca in the month of Dhul-Hijjah, is one of the five Pillars of Islam',
	},
	{
		id: 16,
		title: 'Mahram',
		data: Mahram.data,
		desc: 'Know your Mahram\nin Islam',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/mahram.png'),
		details: "Mahram is with whom marriage would be considered haram and concealment of the body with hijab, is not obligatory.",
	} 
]