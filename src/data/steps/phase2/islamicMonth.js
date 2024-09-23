/**
*
* quran.js
* No. in Quran
*
* @author - Faizal
* @date   - 24 May 2020
***/
// ALL SHARED FILES
import { Html5Entities } from 'html-entities'; 
import * as Constant from '../../../shared/constant';
import * as Generate from '../../../shared/generate';
import * as Utils from '../../../shared/utils';
import { styles  } from '../../../shared/stylesheet';

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();
let imgURL = '../../../../assets/img/steps/months/'

export const data = [
	{
		id: 1,
		title: "1st Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '1.png'),
		imgStyle: styles.img200,
		desc: 'Muharram',
		topStyle: styles.topPattern,
		details: "The first month of the Islamic calendar. The literal meaning of Muharram is “Forbidden”. The best month to fast after Ramadan.",
		moreDetails: "Abu Haraira (Allah be pleased with him) reported Allah's Messenger (ﷺ) as saying:, 'The most excellent fast after Ramadan is God's month. al-Muharram, and the most excellent prayer after what is prescribed is prayer during the night.' (Sahih Muslim 1163 a)"
	},
	{
		id: 2,
		title: "2nd Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '2.png'),
		imgStyle: styles.img200,
		desc: 'Safar',
		topStyle: styles.topPattern,
		details: "The Beloved daughter of Prophet Muhammad (saw) Fatima (R.A) married Ali (R.A) in this month. Ghazwa-e- Khaiber (battle) and Battle of Abwaa took place in month of Safar. The literal meaning of Muharram is “Whistling of the wind”."
	},
	{
		id: 3,
		title: "3rd Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '3.png'),
		imgStyle: styles.img200,
		desc: 'Rabi-ul-Awwal',
		topStyle: styles.topPattern,
		details: 'The month of the Holy Prophet’s birth, Hijrah and death. Rabi-ul-Awwal which means the first month of spring',
	},
	{
		id: 4,
		title: "4th Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '4.png'),
		imgStyle: styles.img200,
		desc: 'Rabi-ul-Thani',
		topStyle: styles.topPattern,
		details: 'Fourth part of year, and is named so as being the second month of spring.',
	},
	{
		id: 5,
		title: "5th Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '5.png'),
		imgStyle: styles.img200,
		desc: 'Jumada-l-Ula',
		topStyle: styles.topPattern,
		details: 'The first month of summer. "Jumada" means dry. Also significant month because the Holy Prophet Muhammed (PBUH) married His first Wife, Hazrat Khatija (R.A) in it. The Grandfather of Rasulullah (PBUH), Abdul Muttalib, who took his great care, also died at this time of the year.',
	},
	{
		id: 6,
		title: "6th Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '6.png'),
		imgStyle: styles.img200,
		desc: 'Jumada-th-Thaniyya',
		topStyle: styles.topPattern,
		details: 'The second month of summer. "Jumada" means dry.',
	},
	{
		id: 7,
		title: "7th Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '7.png'),
		imgStyle: styles.img200,
		desc: 'Rajab',
		topStyle: styles.topPattern,
		details: 'Sacred month of year whose name was derived from the Arabic word “Rajaba”, which means “to respect”, as it was always considered as a sacred time. The Messenger Prophet Muhammed (PBUH) of Allah went on the journey of Miraj (Ascension to Heavens) and brought back the gift of Salah for the believers with Himself.',
	},
	{
		id: 8,
		title: "8th Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '8.png'),
		imgStyle: styles.img200,
		desc: 'Shaaban',
		topStyle: styles.topPattern,
		details: 'It is the eighth month of the Islamic Calendar, whose name originated from a word “tash`aba”, which means to spread in different ways.',
	},
	{
		id: 9,
		title: "9th Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '9.png'),
		imgStyle: styles.img200,
		desc: 'Ramadhan',
		topStyle: styles.topPattern,
		details: 'The month in which the Holy Quran started to be revealed and the month in which the Ramadhan fasting starts.',
	},
	{
		id: 10,
		title: "10th Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '10.png'),
		imgStyle: styles.img200,
		desc: 'Shawwal',
		topStyle: styles.topPattern,
		details: 'On the first day of this month Eid-ul Fitr is celebrated.',
	},
	{
		id: 11,
		title: "11th Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '11.png'),
		imgStyle: styles.img200,
		desc: 'Dhul Qadah',
		topStyle: styles.topPattern,
		details: 'The literal meaning of Dhul Qadah is sit. Also sacred month in which fighting was forbidden. The people also used to stop their business activities during this month and sit and prepare for the Hajj (Pilgrimage). Also The battle of Khandaq took place in it and Prophet Muhammad (PBUH) returned to Makkah foroffering Pilgrimage in 7 A.H.',
	},
	{
		id: 12,
		title: "12th Month",
		titleType: Constant.GENERIC.NUMBER,
		img: require(imgURL + '12.png'),
		imgStyle: styles.img200,
		desc: 'Dhul Hijja',
		topStyle: styles.topPattern,
		details: 'The month in which the Hajj is performed and Eid-ul Adha is celebrated on the 10th of this month.',
	}
]