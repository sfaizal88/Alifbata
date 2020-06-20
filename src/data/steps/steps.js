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
import * as JannahGates from './jannahGates';
import * as RiverJannah from './riverJannah';

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
		id: 2,
		title: 'Wudu',
		data: Wudu.data,
		desc: 'How to perform Wudu',
		bgColor: '#d1d8e0',
		active: true,
		img: require('../../../assets/img/steps/wudu.png'),
		details: 'Wudu, or ablution, is the ritual purification for cleansing parts of the body. It is an essential step before performing salah and reading the Quran.',
	},
	{
		id: 3,
		title: 'Umrah',
		data: Umrah.data,
		desc: 'How to perform Umrah',
		bgColor: '#bee99d',
		active: true,
		img: require('../../../assets/img/steps/umrah.png'),
		details: 'Umrah is the pilgrimage to Mecca performed at any time of the year, unlike Hajj which is performed during the the month of DUL HAJJ.',
	},
	{
		id: 4,
		title: 'Arabic Words',
		data: FrequentWords.data,
		desc: 'Frequently used\nwords',
		bgColor: '#e66767',
		active: true,
		img: require('../../../assets/img/steps/frequentWords.png'),
		details: "What are the frequently used Arabic words by humans and it's purpose.",
	},
	{
		id: 5,
		title: 'Hajj',
		data: Hajj.data,
		desc: 'How to perform Hajj',
		bgColor: '#3c6382',
		active: true,
		img: require('../../../assets/img/steps/hajj.png'),
		details: 'Hajj, which is the pilgrimage to Mecca in the month of Dhul-Hijjah, is one of the five Pillars of Islam',
	},
	{
		id: 6,
		title: 'Angels in Islam',
		data: Angels.data,
		desc: 'Major Angels\nand Their Duties',
		bgColor: '#2e86de',
		active: true,
		img: require('../../../assets/img/steps/angel.png'),
		details: "Angels are believed to be celestial beings created from light by Allah SWT.",
	},
	{
		id: 7,
		title: 'Five Pillars',
		data: Pillars.data,
		desc: 'Five Pillars of Islam',
		bgColor: '#049991',
		active: true,
		img: require('../../../assets/img/steps/pillars.png'),
		details: 'Basic mandatory acts in Islam and the foundation of Muslim life. Faith, Prayer, Zakat, Fasting and Hajj.',
	},
	{
		id: 8,
		title: 'Quran Verses',
		data: Verse.data,
		desc: 'Inspired\nVerses of the Quran',
		bgColor: '#34495e',
		active: true,
		img: require('../../../assets/img/steps/verse.png'),
		details: ' Each and every verse of Quran is a gem. However, there are a few which is life changing.',
	},
	{
		id: 9,
		title: 'Friday Sunnah',
		data: FridaySunnah.data,
		desc: 'Virtues and \n Sunnah acts of Jummah',
		bgColor: '#4b6584',
		active: true,
		img: require('../../../assets/img/steps/prayer.png'),
		details: ' O you who believe! When the call is proclaimed for the Salah on Al-Jumu`ah (Friday), then hasten (Fas`aw) to the remembrance of Allah and leave off business...(62:9-10)',
	},
	{
		id: 10,
		title: 'The Holy Quran',
		data: Quran.data,
		desc: 'Facts about\nthe Holy Quran',
		bgColor: '#c44569',
		active: true,
		img: require('../../../assets/img/steps/quran.png'),
		details: "Quran, the last revelation of Allah SWT, was revealed to Prophet Muhammad (PBUH) by Angel Jibril. It was first revealed in the Cave of Hira (Mecca) on Laylat al-Qadr (Night of Power) in the Islamic month of Ramadhan.",
	},
	{
		id: 11,
		title: 'Revelation',
		data: Revelation.data,
		desc: 'Book of Revelation',
		bgColor: '#34495e',
		active: true,
		img: require('../../../assets/img/steps/revelation.png'),
		details: "In Islamic belief, Wahi (Revelation) is the sending of Allah's words to mankind, delivered by His messenger Prophets.",
	},
	{
		id: 12,
		title: 'Drinking Water',
		data: Drinking.data,
		desc: 'Drinking Water\nthe Sunnah Way',
		bgColor: '#cf6a87',
		active: true,
		img: require('../../../assets/img/steps/drinking.png'),
		details: 'He it is who sends down water from the sky. With it, we bring forth plants of every kind (6:99).',
	},
	{
		id: 13,
		title: 'Benefits of Fasting',
		data: FastingBenefit.data,
		desc: 'Benefit of\nfasting during Ramadan',
		bgColor: '#60a3bc',
		active: true,
		img: require('../../../assets/img/steps/fasting.png'),
		details: 'Fasting develops the quality of righteousness (taqwa) by making Muslims abstain from sinful deeds and training them to control our thoughts and desires.',
	},
	{
		id: 14,
		title: 'Jannah Gates',
		data: JannahGates.data,
		desc: '8 Gates in Jannah',
		bgColor: '#34495e',
		active: true,
		img: require('../../../assets/img/steps/gate.png'),
		details: 'Islamic describes Jannah as having eight gates. Each gates has a name that describes the types or characteristics of the people who will be admitted through it.',
	},
	{
		id: 15,
		title: 'Major Sunnah',
		data: Sunnah.data,
		desc: 'Major Sunnah in Islam',
		bgColor: '#34495e',
		active: true,
		img: require('../../../assets/img/steps/good.png'),
		details: 'Sayings and Teachings of Prophet Muhammad (pbuh).',
	},
	{
		id: 16,
		title: 'River',
		data: RiverJannah.data,
		desc: 'River in Jannah',
		bgColor: '#60a3bc',
		active: false,
		img: require('../../../assets/img/steps/river.png'),
		details: 'Islamic describes Jannah as having four rivers. River names are Saihan, Jaihan, Furat and Nil and also its described in Quran at "Surah Muhammad Verse 15"',
	},
	{
		id: 17,
		title: 'Mahram',
		data: Mahram.data,
		desc: 'Know your Mahram\nin Islam',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/mahram.png'),
		details: "Mahram is with whom marriage would be considered haram and concealment of the body with hijab, is not obligatory.",
	},
	{
		id: 18,
		title: "Favourite food",
		data: FavouriteFood.data,
		desc: "Prophet Muhammed's (pbuh)\nfavourite food",
		bgColor: '#c44569',
		active: false,
		img: require('../../../assets/img/steps/food.png'),
		details: "Prophet Muhammed's (pbuh) favourite food.",
	},
]