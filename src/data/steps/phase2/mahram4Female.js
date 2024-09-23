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
let moreDetails1 = "And tell the believing women to reduce [some] of their vision and guard their private parts and not expose their adornment except that which [necessarily] appears thereof and to wrap [a portion of] their headcovers over their chests and not expose their adornment except to their husbands, their fathers, their husbands' fathers, their sons, their husbands' sons, their brothers, their brothers' sons, their sisters' sons, their women, that which their right hands possess, or those male attendants having no physical desire, or children who are not yet aware of the private aspects of women. And let them not stamp their feet to make known what they conceal of their adornment. And turn to Allah in repentance, all of you, O believers, that you might succeed. (Surah An-Nur Verse 31)";
let moreDetails = "For more details, please check Surah An-Nur Verse 31";

export const data = [
	{
		id: 1,
		title: "MAHRAM 1/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Father',
		img: require(imgURL + 'midMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "MAHRAM 2/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Grandfathers',
		img: require(imgURL + 'oldMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "MAHRAM 3/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Great Grandfathers',
		img: require(imgURL + 'oldMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "MAHRAM 4/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Son',
		img: require(imgURL + 'youngerMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "MAHRAM 5/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Grandsons',
		img: require(imgURL + 'youngerMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 6,
		title: "MAHRAM 6/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Great Grandsons',
		img: require(imgURL + 'youngerMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 7,
		title: "MAHRAM 7/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Stepsons',
		img: require(imgURL + 'youngerMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 8,
		title: "MAHRAM 8/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Father in Law',
		img: require(imgURL + 'midMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 9,
		title: "MAHRAM 9/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Brothers',
		img: require(imgURL + 'youngMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 10,
		title: "MAHRAM 10/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Nephews',
		img: require(imgURL + 'youngMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 11,
		title: "MAHRAM 11/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Step Father',
		img: require(imgURL + 'midMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 12,
		title: "MAHRAM 12/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Half Brothers',
		img: require(imgURL + 'youngMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 13,
		title: "MAHRAM 13/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Son in Law',
		img: require(imgURL + 'midMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 14,
		title: "MAHRAM 14/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Foster Brothers',
		img: require(imgURL + 'youngMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 15,
		title: "MAHRAM 15/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Foster Nephews',
		img: require(imgURL + 'youngMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 16,
		title: "MAHRAM 16/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Foster Father',
		img: require(imgURL + 'midMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 17,
		title: "MAHRAM 17/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Paternal Uncles',
		img: require(imgURL + 'midMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 18,
		title: "MAHRAM 18/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Maternal Uncles',
		img: require(imgURL + 'midMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
	{
		id: 19,
		title: "MAHRAM 19/" + total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Maternal Uncles',
		img: require(imgURL + 'midMale.png'),
		details: '',
		imgStyle: imgProperty,
		moreDetails: moreDetails,
		//topStyle: styles.topPattern
	},
]