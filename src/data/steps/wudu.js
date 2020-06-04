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
		desc: 'Say Bismillah and\nwash your hands',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/1.png'),
		imgStyle: styles.img200R1,
		details: 'Say Bismillah and wash your "hands" once (Al-Bukhaari (157) narrated by Ibn Abbas), although washing your "hand" two or three times is Sunnah.',
	},
	{
		id: 2,
		title: 'Step 2',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash you Mouth',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/2.png'),
		imgStyle: styles.img200R1,
		details: 'Wash your "mouth" once (Al-Bukhaari (157) narrated by Ibn Abbas), although washing your "mouth" two or three times is Sunnah.',
	},
	{
		id: 3,
		title: 'Step 3',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash your Nose',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/3.png'),
		imgStyle: styles.img200R1,
		details: 'Wash your "nose" once (Al-Bukhaari (157) narrated by Ibn Abbas), although washing your "nose" two or three times is Sunnah.',
	},
	{
		id: 4,
		title: 'Step 4',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash your Face',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/4.png'),
		imgStyle: styles.img200R1,
		details: 'Wash your "face" once (Al-Bukhaari (157) narrated by Ibn Abbas), although washing your "face" two or three times is Sunnah.',
	},
	{
		id: 5,
		title: 'Step 5',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash your hands\nup to the elbows',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/5.png'),
		imgStyle: styles.img200R1,
		details: 'Wash your "hands up to the elbows" once (Al-Bukhaari (157) narrated by Ibn Abbas), although washing your "hands up to the elbows"  two or three times is Sunnah.',
	},
	{
		id: 6,
		title: 'Step 6',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wipe your head',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/6.png'),
		imgStyle: styles.img200R1,
		details: '"Wipe your head" once (Al-Bukhaari (157) narrated by Ibn Abbas), although washing your "wipe your head" two or three times is Sunnah.',
	},
	{
		id: 7,
		title: 'Step 7',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash your ears',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/7.png'),
		imgStyle: styles.img200R1,
		details: 'Wash your "ears" once (Al-Bukhaari (157) narrated by Ibn Abbas), although washing your "ears" two or three times is Sunnah.',
	},
	{
		id: 8,
		title: 'Step 8',
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Wash both your\nfeets up to ankle',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/8.png'),
		imgStyle: styles.img200R1,
		details: 'Wash both your "feets up to ankle" once (Al-Bukhaari (157) narrated by Ibn Abbas), although washing your "feets" two or three times is Sunnah.',
	}
]