/**
*
* jannahGates.js
* 8 gate details
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
let imgURL = '../../../assets/img/steps/jannahGates/'
export const data = [
	{
		id: 1,
		title: "Baab As-Salaat",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Prayers (Salaat)',
		img: require(imgURL + '1.png'),
		details: 'The believers who were punctual and attentive in their prayers. Allah promised great rewards for those who prayed with sincerity & faith will be allowed to enter Jannah through "Baab As-Salaat".',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "Baab Al-Jihad",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Died in the\ndefense of Islam',
		img: require(imgURL + '2.png'),
		details: 'The believers who sacrificed their lives in the way of Islam through Jihad will be allowed to enter Jannah through "Baab Al-Jihad".',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "Baab As-Sadaqah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Charity',
		img: require(imgURL + '3.png'),
		details: 'The believers who were charitable and gave Sadaqah in the way of Allah will be allowed to enter Jannah through "Baab As-Sadaqah".',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "Baab Ar-Rayyaan",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Fasting',
		img: require(imgURL + '4.png'),
		details: 'The believers who kept their fast with sincerity and to attain the blessings of Allah will be allowed to enter Jannah through "Baab Ar-Rayyaan".',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "Baab Al-Hajj",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Hajj',
		img: require(imgURL + '5.png'),
		details: 'The believers who observe the Hajj pilgrimage will be allowed to enter Jannah through "Baab Al-Hajj".',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 6,
		title: "Baab Al-Kaazimeen\nAl-Ghaiz Wal\nAafina Anin Naas",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Control anger and \n forgive others',
		img: require(imgURL + '6.png'),
		details: 'The believers who control their anger and forgive others will be allowed to enter Jannah through "Baab Al-Kaazimeen Al-Ghaiz Wal Aafina Anin Naas".',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 7,
		title: "Baab Al-Iman",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Faith and \ntrust in Allah',
		img: require(imgURL + '7.png'),
		details: 'The believers who have sincere faith and trust in Allah, and who strives to follow the commands of Allah will be allowed to enter Jannah through "Baab Al-Iman".',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 8,
		title: "Baab Al-Dhikr",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Remembered Allah\nand did Dhikr',
		img: require(imgURL + '8.png'),
		details: 'The believers who constantly remembered Allah and did Dhikr will be allowed to enter Jannah through "Baab Al-Dhikr".',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	}
]