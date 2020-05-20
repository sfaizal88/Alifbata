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

// ALL CHAPTER

export const data = [
	{
		id: 1,
		title: 1,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Say Bismillah',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/1.png'),
		details: 'Say Bismillah and wash your hands 3 times.',
	},
	{
		id: 2,
		title: 2,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Mouth',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/2.png'),
		details: 'Wash your mouth 3 times.',
	},
	{
		id: 3,
		title: 3,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Nose',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/3.png'),
		details: 'Wash your nose 3 times.',
	},
	{
		id: 4,
		title: 4,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Face',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/4.png'),
		details: 'Wash your face 3 times.',
	},
	{
		id: 5,
		title: 5,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Hands',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/5.png'),
		details: 'Wash your hands up to the elbows 3 times.',
	},
	{
		id: 6,
		title: 6,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Head',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/6.png'),
		details: 'Wash your head.',
	},
	{
		id: 7,
		title: 7,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Ears',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/7.png'),
		details: 'Wash your ears.',
	},
	{
		id: 8,
		title: 8,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Feets',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require('../../../assets/img/steps/wudu/8.png'),
		details: 'Finally, wash your feets 3 times.',
	}
]