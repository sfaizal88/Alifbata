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
		desc: 'Fill a clean glass\nwith water',
		img: require(imgURL + '1.png'),
		topStyle: styles.topPattern,
		details: 'Take a clean glass and fill it with as much water as you need.',
		moreDetails:  'Prophet Muhammad (pbuh) said, "Do not drink directly from a water pitcher or any water container" (Al-Bukhaari 5628).'
	},
	{
		id: 2,
		title: "Sunnah 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Say Bismillah',
		img: require(imgURL + '2.png'),
		topStyle: styles.topPattern,
		details: 'Before drinking, say Bismillah. By doing this, we praise Allah SWT for giving us water, without which we cannot survive on earth.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "When one of you eats food, then let him say Bismillah. If he forgets in the beginning, then let him say Bismillah Fi Awwalihi Wa Akhirih (In the Name of Allah in its beginning and its end)" (At-Tirmidhi 1858).',
	},
	{
		id: 3,
		title: "Sunnah 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'See water\nbefore drinking',
		img: require(imgURL + '3.png'),
		topStyle: styles.topPattern,
		details: 'Before drinking, see the water to check that it is clean.',
	},
	{
		id: 4,
		title: "Sunnah 4",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Drink with the\nright hand',
		img: require(imgURL + '4.png'),
		topStyle: styles.topPattern,
		details: 'It is a Sunnah to eat or drink from our right hand.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "When anyone of you intends to eat (a meal), he should eat with his right hand. and when he (intends) to drink he should drink with his right hand, for the Satan eats with his left hand and drinks with his left hand" (Muslim 2020).',
	},
	{
		id: 5,
		title: "Sunnah 5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Always sit down\nand drink',
		img: require(imgURL + '5.png'),
		topStyle: styles.topPattern,
		details: 'Even when you’re in a hurry, you should always sit down to drink water. Drinking water whilst standing or walking can cause Gastrointestinal Tract (GIT) damage, kidney damage, and other disorders.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "Sit down and drink" (Al-Bukhari 6452).'
	},
	{
		id: 6,
		title: "Sunnah 6",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Do not drink water \nin a gulp',
		img: require(imgURL + '6.png'),
		topStyle: styles.topPattern,
		details: 'It is prohibited to drink water in a single gulp, an act that we normally do when we are extremely thirsty. We should take two or three pauses in between.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "Do not drink water only in one breath, but drink it in two or three breaths" (Al-Bukhari 5631)'
	},
	{
		id: 7,
		title: "Sunnah 7",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Do not blow\nfrom your mouth',
		img: require(imgURL + '7.png'),
		topStyle: styles.topPattern,
		details: 'Do not blow or exhale your breath into the glass of water. This is one of the most important etiquettes of drinking water.',
		moreDetails: 'Prophet Muhammad (pbuh) said, "When you drink (water), do not breath in the vessel" (Al-Bukhari 5630).'
	},
	{
		id: 8,
		title: "Sunnah 8",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Finish with\nAlhamdulillah',
		img: require(imgURL + '8.png'),
		topStyle: styles.topPattern,
		details: 'Say "Alhamdulillah" (All praise is due to Allah) when you finish drinking.'
	},
]