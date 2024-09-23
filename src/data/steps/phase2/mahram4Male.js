/**
*
* riverJannah.js
* 8 gate details
*
* @author - Faizal
* @date   - 18 May 2020
***/
// ALL SHARED FILES
import * as Constant from '../../../shared/constant';
import * as Generate from '../../../shared/generate';
import * as Utils from '../../../shared/utils';
import { styles  } from '../../../shared/stylesheet';

// ALL CHAPTER
let imgURL = '../../../../assets/img/steps/mahram/';
let total  = 19;
let imgProperty = styles.img200;
let moreDetails1 = "Prohibited to you [for marriage] are your mothers, your daughters, your sisters, your father's sisters, your mother's sisters, your brother's daughters, your sister's daughters, your [milk] mothers who nursed you, your sisters through nursing, your wives' mothers, and your step-daughters under your guardianship [born] of your wives unto whom you have gone in. But if you have not gone in unto them, there is no sin upon you. And [also prohibited are] the wives of your sons who are from your [own] loins, and that you take [in marriage] two sisters simultaneously, except for what has already occurred. Indeed, Allah is ever Forgiving and Merciful. (Surah An-Nisa Verse 23)";
let moreDetails = "For more details, please check Surah An-Nisa Verse 22-23";

export const data = [
	{
		id: 1,
		title: "MAHRAM 1/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Mother',
		img: require(imgURL + 'midFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "MAHRAM 2/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Grandmothers',
		img: require(imgURL + 'oldFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "MAHRAM 3/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Great Grandmothers',
		img: require(imgURL + 'oldFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "MAHRAM 4/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Daughters',
		img: require(imgURL + 'youngerFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "MAHRAM 5/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Granddaughters',
		img: require(imgURL + 'youngerFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 6,
		title: "MAHRAM 6/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Great Granddaughters',
		img: require(imgURL + 'youngerFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 7,
		title: "MAHRAM 7/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Step Daughters',
		img: require(imgURL + 'youngerFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 8,
		title: "MAHRAM 8/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Mother in Law',
		img: require(imgURL + 'midFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 9,
		title: "MAHRAM 9/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Sisters',
		img: require(imgURL + 'youngFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 10,
		title: "MAHRAM 10/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Nieces',
		img: require(imgURL + 'youngFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 11,
		title: "MAHRAM 11/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Step Mother',
		img: require(imgURL + 'midFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 12,
		title: "MAHRAM 12/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Half Sisters',
		img: require(imgURL + 'youngFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 13,
		title: "MAHRAM 13/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Daughters in Law',
		img: require(imgURL + 'youngFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 14,
		title: "MAHRAM 14/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Foster Sisters',
		img: require(imgURL + 'youngFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 15,
		title: "MAHRAM 15/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Foster Nieces',
		img: require(imgURL + 'youngFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 16,
		title: "MAHRAM 16/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Foster Mother',
		img: require(imgURL + 'midFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 17,
		title: "MAHRAM 17/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Paternal Aunts',
		img: require(imgURL + 'midFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 18,
		title: "MAHRAM 18/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Maternal Aunts',
		img: require(imgURL + 'midFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 19,
		title: "MAHRAM 19/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Foster Aunts',
		img: require(imgURL + 'midFemale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
]