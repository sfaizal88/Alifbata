/**
*
* wudu.js
* How to perform Wudu data
*
* @author - Faizal
* @date   - 18 May 2020
***/
// ALL SHARED FILES
import * as Constant from '../../shared/constant';
import * as Generate from '../../shared/generate';
import * as Utils from '../../shared/utils';

import { styles  } from '../../shared/stylesheet';

// ALL CHAPTER
// https://sunnah.com/bukhari/4/23
export const data = [
	{
		id: 1,
		title: 'Step 1',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Make Niyyah',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/1.png'),
		imgStyle: styles.img200R1,
		details: 'Start by making Niyyah (intention) to perform wuḍu and to cleanse yourself.',
	},
	{
		id: 2,
		title: 'Step 2',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Say Bismillah and\nWash your Hands',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/1.png'),
		imgStyle: styles.img200R1,
		details: 'Say Bismillah. Wash your right hand up to the wrist (and between the fingers) once* and repeat for the left hand.',
		moreDetails: '*In Al-Bukhaari (157), Ibn Abbas narrates that washing twice or thrice is Sunnah.'
	},
	{
		id: 3,
		title: 'Step 3',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash your Mouth',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/2.png'),
		imgStyle: styles.img200R1,
		details: 'Using your right hand, put a small amount of water into your mouth, rinse your mouth once* and spit out the water.',
		moreDetails: '*In Al-Bukhaari (157), Ibn Abbas narrates that washing twice or thrice is Sunnah.'
	},
	{
		id: 4,
		title: 'Step 4',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash your Nose',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/3.png'),
		imgStyle: styles.img200R1,
		details: 'Wash your nose (nostrils) once* with a small amount of water.',
		moreDetails: '*In Al-Bukhaari (157), Ibn Abbas narrates that washing twice or thrice is Sunnah.'
	},
	{
		id: 5,
		title: 'Step 5',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash your Face',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/4.png'),
		imgStyle: styles.img200R1,
		details: 'Wash your face from forehead to chin once*.',
		moreDetails: '*In Al-Bukhaari (157), Ibn Abbas narrates that washing twice or thrice is Sunnah.'
	},
	{
		id: 6,
		title: 'Step 6',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash your hands\nup to the elbows',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/5.png'),
		imgStyle: styles.img200R1,
		details: 'Wash your right arm up to your elbow once* and repeat for the left arm.',
		moreDetails: '*In Al-Bukhaari (157), Ibn Abbas narrates that washing twice or thrice is Sunnah.'
	},
	{
		id: 7,
		title: 'Step 7',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wipe your head',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/6.png'),
		imgStyle: styles.img200R1,
		details: '"Wipe your head" with wet fingers from the front to back to front hairline only once (all in one motion).',
	},
	{
		id: 8,
		title: 'Step 8',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wipe your ears',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/7.png'),
		imgStyle: styles.img200R1,
		details: 'Wipe the insides of your ears with your index fingers and the back of your ears with your thumb once simultaneously.'
	},
	{
		id: 9,
		title: 'Step 9',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash both your\nfeet up to ankle',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/8.png'),
		imgStyle: styles.img200R1,
		details: 'Wash your right feet up to ankle and in between the toes once*. Repeat for the left feet.',
		moreDetails: '*In Al-Bukhaari (157), Ibn Abbas narrates that washing twice or thrice is Sunnah.'
	}
]