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
let imgURL = '../../../assets/img/steps/water/'
export const data = [
	{
		id: 1,
		title: "Sunnah 1",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Clean glass and\nfill it with water',
		img: require(imgURL + '1.png'),
		details: 'Take a clean glass and fill it with water according to your requirement. It is necessary that you don’t drink a lot of water at a time even if you’re very thirsty.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "Do not drink directly from a water pitcher or any water container" (Al-Bukhaari 5628).'
	},
	{
		id: 2,
		title: "Sunnah 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Start with Bismillah',
		img: require(imgURL + '2.png'),
		details: 'When commencing to drink first recite Bismillah. By this act, we actually praise The Almighty Allah, who gave us water to drink without which nobody can survive on earth.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "When one of you eats food, then let him say Bismillah. If he forgets in the beginning, then let him say Bismillah Fi Awwalihi Wa Akhirih (In the Name of Allah in its beginning and its end)" (At-Tirmidhi 1858).',
	},
	{
		id: 3,
		title: "Sunnah 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'See the Water\nbefore drinking',
		img: require(imgURL + '3.png'),
		details: 'See the Water before drinking, to check wheather it is clean or not.',
	},
	{
		id: 4,
		title: "Sunnah 4",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Drink with the\nright hand',
		img: require(imgURL + '4.png'),
		details: 'We should always drink water with the right hand just like most of the other daily routine works are said to be performed with the right hand.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "When any one of you intends to eat (meal), he should eat with his right hand. and when he (intends) to drink he should drink with his right hand, for the Satan eats with his left hand and drinks with his left hand" (Muslim 2020).',
	},
	{
		id: 5,
		title: "Sunnah 5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Always sit down\nand drink',
		img: require(imgURL + '5.png'),
		details: 'Everyone is in a hurry for something, but that should not stop us from taking a moment to sit down and drink it in a healthy way.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "Sit down and drink" (Al-Bukhari 6452).'
	},
	{
		id: 6,
		title: "Sunnah 6",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Drink water while\ntaking three breathing pauses.',
		img: require(imgURL + '6.png'),
		details: 'It is prohibited to drink water in a single gulp, an act that we normally do when we are extremely thirsty.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "Do not drink water only in one breath, but drink it in two or three breaths" (Al-Bukhari 5631)'
	},
	{
		id: 7,
		title: "Sunnah 7",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Do not blow\nfrom your mouth',
		img: require(imgURL + '7.png'),
		details: 'Do not blow or exhale your breath into the glass while drinking water. This is one of the most important etiquettes of drinking water.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "When you drink (water), do not breath in the vessel" (Al-Bukhari 5630).'
	},
	{
		id: 8,
		title: "Sunnah 8",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Ends with\nAlhamdulillah',
		img: require(imgURL + '8.png'),
		details: 'Ends with "Alhamdulillah" (All praise is due to Allah) after drinking water.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "Recite Bismillah before drinking and say Alhamdulillah after drinking" (?).'
	},
]