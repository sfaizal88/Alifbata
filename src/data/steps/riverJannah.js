/**
*
* riverJannah.js
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
let imgURL = '../../../assets/img/steps/riverJannah/'
export const data = [
	{
		id: 1,
		title: "Saihan",
		titleType: Constant.GENERIC.TEXT,
		desc: 'River of Milk',
		img: require(imgURL + '1.png'),
		details: 'The believers who were punctual and attentive in their prayers. Allah promised great rewards for those who prayed with sincerity & faith will be allowed to enter Jannah through "Baab As-Salaat".',
		//imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "Jaihan",
		titleType: Constant.GENERIC.TEXT,
		desc: 'River of Honey',
		img: require(imgURL + '2.png'),
		details: 'The believers who sacrificed their lives in the way of Islam through Jihad will be allowed to enter Jannah through "Baab Al-Jihad".',
		//imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "Furat",
		titleType: Constant.GENERIC.TEXT,
		desc: 'River of Wine',
		img: require(imgURL + '3.png'),
		details: 'The believers who were charitable and gave Sadaqah in the way of Allah will be allowed to enter Jannah through "Baab As-Sadaqah".',
		//imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "Nil",
		titleType: Constant.GENERIC.TEXT,
		desc: 'River of Water',
		img: require(imgURL + '4.png'),
		details: 'The believers who kept their fast with sincerity and to attain the blessings of Allah will be allowed to enter Jannah through "Baab Ar-Rayyaan".',
		//imgStyle: styles.img150,
		topStyle: styles.topPattern
	}
]