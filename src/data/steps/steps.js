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

// ALL CHAPTER

export const data = [
	{
		id: 1,
		title: 'Wudu',
		data: [],
		desc: 'How to Perform Wudu',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/wudu.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	},
	{
		id: 2,
		title: 'Umrah',
		data: [],
		desc: 'How to perform Umrah',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/umrah.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	},
	{
		id: 3,
		title: 'Hajj',
		data: [],
		desc: 'How to perform Hajj',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/hajj.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	},
	{
		id: 4,
		title: 'Prophet names',
		data: [],
		desc: '25 Prophet names and Miracles',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/prophets.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	},
	{
		id: 5,
		title: 'Drinking Water',
		data: [],
		desc: 'How to drink water',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/drinking.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	},
	{
		id: 6,
		title: 'Major Sunnah',
		data: [],
		desc: 'Major Sunnah in Islam',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/good.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	},
	{
		id: 7,
		title: 'Friday Sunnah',
		data: [],
		desc: 'Virtues and Sunnah acts of Jummah',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/prayer.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	},
	{
		id: 8,
		title: '5 Pillars',
		data: [],
		desc: '5 Pillars of Islam',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/pillars.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	}, 
	{
		id: 9,
		title: 'Quran Knowledge',
		data: [],
		desc: 'Did you know about Quran',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/quran.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	}, 
	{
		id: 10,
		title: 'Fasting Benefit',
		data: [],
		desc: 'Benefit of fasting during Ramadan',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/fasting.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	}, 
	{
		id: 11,
		title: '5 Quran Verse',
		data: [],
		desc: '5 life changing verse of Quran',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/verse.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	}, 
	{
		id: 12,
		title: 'Mahram',
		data: [],
		desc: 'Know your Mahram in Islam',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		active: false,
		img: require('../../../assets/img/steps/mahram.png'),
		details: 'How to Perform Wudu. This gallery contains 5 images. Performing wudu is the first, essential step.',
	}, 
]