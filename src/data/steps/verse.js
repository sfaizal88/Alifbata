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
import { styles  } from '../../shared/stylesheet';

// ALL CHAPTER
let imgURL = '../../../assets/img/steps/verse/'

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Quran (29:2)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Allah (SAW)\n Tests the Believers',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '1.png'),
		moreDetails: 'Do the people think that they will be left to say, "We believe" and they will not be tired? (29:2)',
		details: '',//'Allah SWT will inevitably test His believing servants according to their level of faith. The people most severely tested are the Prophets, then the righteous, then the next best and the next best. In other words, a believer will be tested in accordance with the degree of his/her religious commitment (The stronger the religious commitment, the harder the test will be).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "Quran (65:3)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Rely on\nAllah SWT alone',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '2.png'),
		moreDetails: '..And whoever relies upon Allah SAW then He is sufficient for him. Indeed, Allah will accomplish his purpose. Allah SAW already set for everything a (decreed) extent. (65:3)',
		details: '',//'Relying on Allah SWT is one of the greatest forms of worship. When a believer only relies on Allah SWT, it means that he entrusts his affairs to Him without turning to something or someone else for support. Allah SWT is pleased with believers who wholeheartedly believe that only He can grant their requests, alleviate their worries and repel harms from them.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "Quran (2:263)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Kindness\nin Character',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '3.png'),
		moreDetails: 'Kind words and the covering of faults are better than charity followed by injury. Allah is free of all wants, and He is Most-Forbearing. (2:263)',
		details: '',//'In our daily lives, we encounter many people and may not always be aware of the struggles they are facing. Often, the simple acts of kindness (e.g. exchanging positive conversation or simple smile) can be life-changing for someone. On covering of other’s faults, Prophet Muhammad (PBUH) told us that Allah SWT will cover our faults on the Day of Judgment if we cover the faults of others in this life.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "Quran (2:186)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Supplicate\nto Allah SWT',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '4.png'),
		moreDetails: "When my servant asks thee concerning Me, I am indeed close (to them). I listen to the prayer of every suppliant when he calleth on Me. (2:186)",
		details: '',//'Supplication (Dua), a powerful connection between Allah SWT and His servants, is the essence of worship. Allah SWT wants us to know that he is always very close us. Listening, guiding, helping and answering us. Hadith tells us that every time we ask Allah SWT for something, we either get exactly what we asked for, or something better.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "Quran (49:12)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Avoid Backbiting',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '5.png'),
		moreDetails: 'O you who believe! Avoid much suspicion, in deeds some suspicions are sins. And spy not either backbite one another. Would one of you like to eat the flesh of his dead brother? You would hate it... (49:12)',
		details: '',//'Backbiting is saying bad things about a person behind their back. It is one of the major sins in Islam and Allah SWT has strictly prohibited it. We should not spread rumors, especially if we knew that it would deliberately spoil the dignity and respect of another person. To express how despicable backbiting is, Allah SWT compares it to eating the flesh of a dead sibling.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	}
]