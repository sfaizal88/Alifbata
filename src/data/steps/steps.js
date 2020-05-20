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
		title: 'Prophet names',
		data: ProphetNames.data,
		desc: '25 Prophet names\nand their Miracles',
		bgColor: '#049991',
		active: true,
		img: require('../../../assets/img/steps/prophets.png'),
		details: 'Prophets are individuals who were sent by Allah to various communities',
	},
	{
		id: 2,
		title: 'Wudu',
		data: Wudu.data,
		desc: 'How to Perform Wudu',
		bgColor: '#c7ecee',
		active: false,
		img: require('../../../assets/img/steps/wudu.png'),
		details: 'Before we perform Salah we must first prepare ourselves. This preparation includes making sure that we are clean from any physical impurities.',
	},
	{
		id: 3,
		title: 'Umrah',
		data: [],
		desc: 'How to perform Umrah',
		bgColor: '#bee99d',
		active: false,
		img: require('../../../assets/img/steps/umrah.png'),
		details: 'Pilgrimage to Mecca that can be undertaken at any time of the year, in contrast to the Ḥajj.',
	},
	{
		id: 4,
		title: 'Hajj',
		data: [],
		desc: 'How to perform Hajj',
		bgColor: '#3c6382',
		active: false,
		img: require('../../../assets/img/steps/hajj.png'),
		details: 'Duty for Muslims that must be carried out at least once in their lifetime by all Muslims who are physically and financially capable.',
	},
	{
		id: 5,
		title: 'Drinking Water',
		data: [],
		desc: 'How to drink water',
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
		desc: 'Virtues, \n Sunnah acts of Jummah',
		bgColor: '#c44569',
		active: false,
		img: require('../../../assets/img/steps/prayer.png'),
		details: ' O you who believe! When the call is proclaimed for the Salah on Al-Jumu`ah (Friday), then hasten (Fas`aw) to the remembrance of Allah and leave off business...(62:9-10)',
	},
	{
		id: 8,
		title: '5 Pillars',
		data: [],
		desc: '5 Pillars of Islam',
		bgColor: '#35ace0',
		active: false,
		img: require('../../../assets/img/steps/pillars.png'),
		details: 'Basic mandatory acts in Islam and are the foundation of Muslim life. Faith, Prayer, Zakat, Fasting and Hajj.',
	}, 
	{
		id: 9,
		title: 'Quran Knowledge',
		data: [],
		desc: 'Did you know about Quran',
		bgColor: '#079992',
		active: false,
		img: require('../../../assets/img/steps/quran.png'),
		details: "Islamic tradition says that Prophet Muhammad (pbuh) received his first revelation in the Cave of Hira.",
	}, 
	{
		id: 10,
		title: 'Fasting Benefit',
		data: [],
		desc: 'Benefit of\nfasting during Ramadan',
		bgColor: '#60a3bc',
		active: false,
		img: require('../../../assets/img/steps/fasting.png'),
		details: 'The purpose of fasting for Muslims is to learn self-restraint.',
	}, 
	{
		id: 11,
		title: '5 Quran Verse',
		data: [],
		desc: '5 life changing\nverse of Quran',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/verse.png'),
		details: 'Islamic tradition says that Prophet Muhammad (pbuh) received his first revelation in the Cave of Hira.',
	}, 
	{
		id: 12,
		title: 'Mahram',
		data: [],
		desc: 'Know your Mahram\nin Islam',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/mahram.png'),
		details: "With whom marriage would be considered haram, concealment of the body with hijab, is not obligatory",
	}, 
]