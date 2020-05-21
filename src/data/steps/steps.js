/**
*
* steps.js
* Static data
*
* @author - Faizal
* @date   - 2 May 2020
* Covert mp4 to mp3 https://audio.online-convert.com/convert/mp4-to-mp3
***/
// ALL SHARED FILES
import * as Constant from '../../shared/constant';
import * as Generate from '../../shared/generate';
import * as Utils from '../../shared/utils';

//STEPS
import * as Wudu from './wudu';
import * as ProphetNames from './prophetnames';


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
		bgColor: '#c7ecee',
		active: false,
		img: require('../../../assets/img/steps/wudu.png'),
		details: 'Wudu, or ablution, is the ritual purification for cleansing parts of the body. It is an essential step before performing salah and reading the Quran.',
	},
	{
		id: 3,
		title: 'Umrah',
		data: [],
		desc: 'How to perform Umrah',
		bgColor: '#bee99d',
		active: false,
		img: require('../../../assets/img/steps/umrah.png'),
		details: 'Umrah is the pilgrimage to Mecca performed at any time of the year, unlike Hajj which is done during specific dates.',
	},
	{
		id: 4,
		title: 'Hajj',
		data: [],
		desc: 'How to perform Hajj',
		bgColor: '#3c6382',
		active: false,
		img: require('../../../assets/img/steps/hajj.png'),
		details: 'Hajj, which is the pilgrimage to Mecca in the month of Dhul-Hijjah, is one of the five Pillars of Islam',
	},
	{
		id: 5,
		title: 'Drinking Water',
		data: [],
		desc: 'Drinking Water the Sunnah Way',
		bgColor: '#cf6a87',
		active: false,
		img: require('../../../assets/img/steps/drinking.png'),
		details: 'He it is who sends down water from the sky. With it, we bring forth plants of every kind (6:99).',
	},
	{
		id: 6,
		title: 'Major Sunnah',
		data: [],
		desc: 'Major Sunnah in Islam',
		bgColor: '#34495e',
		active: false,
		img: require('../../../assets/img/steps/good.png'),
		details: 'Sayings and Teachings of Prophet Muhammad (pbuh).',
	},
	{
		id: 7,
		title: 'Friday Sunnah',
		data: [],
		desc: 'Virtues and \n Sunnah acts of Jummah',
		bgColor: '#c44569',
		active: false,
		img: require('../../../assets/img/steps/prayer.png'),
		details: ' O you who believe! When the call is proclaimed for the Salah on Al-Jumu`ah (Friday), then hasten (Fas`aw) to the remembrance of Allah and leave off business...(62:9-10)',
	},
	{
		id: 8,
		title: 'Five Pillars',
		data: [],
		desc: 'Five Pillars of Islam',
		bgColor: '#35ace0',
		active: false,
		img: require('../../../assets/img/steps/pillars.png'),
		details: 'Basic mandatory acts in Islam and the foundation of Muslim life. Faith, Prayer, Zakat, Fasting and Hajj.',
	},
	{
		id: 9,
		title: 'Quran Knowledge',
		data: [],
		desc: 'How much do you know about Quran?',
		bgColor: '#079992',
		active: false,
		img: require('../../../assets/img/steps/quran.png'),
		details: "The Holy Quran was revealed to Prophet Muhammad (pbuh) in the Cave of Hira.",
	},
	{
		id: 10,
		title: 'Benefits of Fasting',
		data: [],
		desc: 'Benefit of\nfasting during Ramadan',
		bgColor: '#60a3bc',
		active: false,
		img: require('../../../assets/img/steps/fasting.png'),
		details: 'Fasting develops the quality of righteousness (taqwa) by making Muslims abstain from sinful deeds and training them to control our thoughts and desires.',
	},
	{
		id: 11,
		title: 'Quran Verses',
		data: [],
		desc: 'Five Life-Changing\nVerses of the Quran',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/verse.png'),
		details: ' Each and every verse of Quran is a gem. However, there are few which life-changing.',
	},
	{
		id: 12,
		title: 'Mahram',
		data: [],
		desc: 'Know your Mahram\nin Islam',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/mahram.png'),
		details: "Mahram is with whom marriage would be considered haram and concealment of the body with hijab, is not obligatory.",
	} 
]