/**
*
* fastingBenefit.js
* Benefit of fasting
*
* @author - Faizal
* @date   - 24 May 2020
***/
// ALL SHARED FILES
import { Html5Entities } from 'html-entities'; 
import * as Constant from '../../shared/constant';
import * as Generate from '../../shared/generate';
import * as Utils from '../../shared/utils';

// ALL CHAPTER
let imgURL = '../../../assets/img/steps/fastingBenefit/'

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Benefit 1",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Detoxifies\nthe human body',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '1.png'),
		details: 'Detoxifies the human body.',
	},
	{
		id: 2,
		title: "Benefit 2",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Improve\nthe metabolisam',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '2.png'),
		details: 'Improve the metabolisam.',
	},
	{
		id: 3,
		title: "Benefit 3",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Can lead\nto weight-loss',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '3.png'),
		details: 'Can lead to weight-loss.',
	},
	{
		id: 4,
		title: "Benefit 4",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Keep\ncholesterol',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '4.png'),
		details: "Keep cholesterol.",
	},
	{
		id: 5,
		title: "Benefit 5",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Satisfies\nthe heart and soul',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '5.png'),
		details: "Satisfies the heart and soul"
	},
	{
		id: 6,
		title: "Benefit 6",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Improves\nfaith in Allah (SAW)',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '6.png'),
		details: 'Improves faith in Allah (SAW)'
	}
]