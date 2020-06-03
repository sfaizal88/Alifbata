/**
*
* verse.js
* Life changing verse in Quran
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
let imgURL = '../../../assets/img/steps/verse/'

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Quran (29:2)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Allah (SAW)\n Tests the believer',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '1.png'),
		details: 'Do the people think that they will be left to say, "We believe" and they will not be tired? (29:2)',
		moreDetails: 'Allah SAW will inevitably test His believing servants according to their level of faith. The people most severely tested are the Prophets, then the righteous, then the next best and the next best. A man will be tested in accordance with the degree of his religious commitment; the stronger his religious commitment, the stronger his test.'
	},
	{
		id: 2,
		title: "Quran (65:3)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Rely on\nAllah (SAW) only',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '2.png'),
		details: '..And whoever relies upon Allah SAW then He is sufficient for him. Indeed, Allah SAW will accomplish his purpose. Allah SAW already set for everything a (decreed) extent. (65:3)',
		moreDetails: 'Allah SAW will inevitably test His believing servants according to their level of faith. The people most severely tested are the Prophets, then the righteous, then the next best and the next best. A man will be tested in accordance with the degree of his religious commitment; the stronger his religious commitment, the stronger his test.'
	},
	{
		id: 3,
		title: "Quran (2:263)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Kindness\nin character',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '3.png'),
		details: 'Kind words and the covering of faults are better than charity followed by injury. Allah SAW is free of all wants, and He is Most-Forbearing. (2:263)',
		moreDetails: 'Allah SAW will inevitably test His believing servants according to their level of faith. The people most severely tested are the Prophets, then the righteous, then the next best and the next best. A man will be tested in accordance with the degree of his religious commitment; the stronger his religious commitment, the stronger his test.'
	},
	{
		id: 4,
		title: "Quran (2:186)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Supplicate\nto Allah (SAW)',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '4.png'),
		details: "When my servant asks thee concerning Me, I am indeed close (to them). I listen to the prayer of every suppliant when he calleth on Me. (2:186)",
		moreDetails: 'Allah SAW will inevitably test His believing servants according to their level of faith. The people most severely tested are the Prophets, then the righteous, then the next best and the next best. A man will be tested in accordance with the degree of his religious commitment; the stronger his religious commitment, the stronger his test.'
	},
	{
		id: 5,
		title: "Quran (49:12)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Avoid Backbiting',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '5.png'),
		details: 'O you who believe! Avoid much suspicion, in deeds some suspicions are sins. And spy not either backbite one another. Would one of you like to eat the flesh of his dead brother? You would hate it... (49:12)',
		moreDetails: 'O you who believe! Avoid much suspicions, indeed some suspicions are sins. And spy not, neither backbite one another. Would one of you like to eat the flesh of his dead brother? You would hate it (so hate backbiting). And fear Allah. Verily, Allah is the One Who accepts repentance, Most Merciful.'
	}
]