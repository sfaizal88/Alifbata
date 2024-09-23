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
let imgURL = '../../../../assets/img/steps/riverJannah/'
export const data = [
	{
		id: 1,
		title: "Water",
		titleType: Constant.GENERIC.TEXT,
		desc: 'River of Water',
		img: require(imgURL + '4.png'),
		moreDetails: 'Is the description of Paradise, which the righteous are promised, wherein are rivers of water unaltered, rivers of milk the taste of which never changes, rivers of wine delicious to those who drink, and rivers of purified honey, in which they will have from all [kinds of] fruits and forgiveness from their Lord, like [that of] those who abide eternally in the Fire and are given to drink scalding water that will sever their intestines? "Surah Muhammad Verse 15"',
		//imgStyle: styles.img150,
		//topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "Milk",
		titleType: Constant.GENERIC.TEXT,
		desc: 'River of Milk',
		img: require(imgURL + '1.png'),
		moreDetails: 'Is the description of Paradise, which the righteous are promised, wherein are rivers of water unaltered, rivers of milk the taste of which never changes, rivers of wine delicious to those who drink, and rivers of purified honey, in which they will have from all [kinds of] fruits and forgiveness from their Lord, like [that of] those who abide eternally in the Fire and are given to drink scalding water that will sever their intestines? "Surah Muhammad Verse 15"',
		//imgStyle: styles.img150,
		//topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "Honey",
		titleType: Constant.GENERIC.TEXT,
		desc: 'River of Honey',
		img: require(imgURL + '2.png'),
		moreDetails: 'Is the description of Paradise, which the righteous are promised, wherein are rivers of water unaltered, rivers of milk the taste of which never changes, rivers of wine delicious to those who drink, and rivers of purified honey, in which they will have from all [kinds of] fruits and forgiveness from their Lord, like [that of] those who abide eternally in the Fire and are given to drink scalding water that will sever their intestines? "Surah Muhammad Verse 15"',
		//imgStyle: styles.img150,
		//topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "Wine",
		titleType: Constant.GENERIC.TEXT,
		desc: 'River of Wine',
		img: require(imgURL + '3.png'),
		moreDetails: 'Is the description of Paradise, which the righteous are promised, wherein are rivers of water unaltered, rivers of milk the taste of which never changes, rivers of wine delicious to those who drink, and rivers of purified honey, in which they will have from all [kinds of] fruits and forgiveness from their Lord, like [that of] those who abide eternally in the Fire and are given to drink scalding water that will sever their intestines? "Surah Muhammad Verse 15"',
		//imgStyle: styles.img150,
		//topStyle: styles.topPattern
	}
]