/**
*
* favouriteFood.js
* Favourite Food of Prophet Muhammed (pbuh)
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
let imgURL = '../../../assets/img/steps/favouriteFood/'

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Food 1",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Fig',
		img: require(imgURL + '1.png'),
		details: 'Quran mentioned about "Fig" in many places. Figs are high in natural sugars, minerals, and soluble fiber.',
		moreDetails: 'By the fig and the olive (Surah At-Tin Verse 1).',
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "Food 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Melon',
		img: require(imgURL + '2.png'),
		details: 'Melon are rich in nutrients, contains nutrients vital to bone health, help in reducing blood pressure, improve blood sugar control, boost your immune system and much more.',
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "Food 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Vinegar',
		img: require(imgURL + '3.png'),
		imgStyle: styles.img150,
		topStyle: styles.topPattern,
		details: "Vinegar (Balsamic) has various healthful properties, including antimicrobial and antioxidant effects. What's more, evidence suggests it may offer health benefits, such as aiding weight loss, reducing cholesterol, lowering blood sugar levels, and improving the symptoms of diabetes.",
	},
	{
		id: 4,
		title: "Food 4",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Olive oil',
		img: require(imgURL + '4.png'),
		imgStyle: styles.img150,
		topStyle: styles.topPattern,
		details: 'Quran mentioned about "Olive" at 7 places. Olive oil is extracted from the olive fruit. It helps prevent diabetes, controls cholesterol, and much more. Quran also mentioned about "Olive" in Surah At-Tin (95:1).',
		moreDetails: 'By the fig and the olive (Surah At-Tin Verse 1).'
	},
	{
		id: 5,
		title: "Food 5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Mushroom',
		img: require(imgURL + '5.png'),
		imgStyle: styles.img150,
		topStyle: styles.topPattern,
		details: 'All types of edible mushrooms contain varying degrees of protein and fibre. They also contain B vitamins as well as a powerful antioxidant called selenium, which helps to support the immune system and prevent damage to cells and tissues.',
	},
	{
		id: 6,
		title: "Food 6",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Grapes',
		img: require(imgURL + '6.png'),
		imgStyle: styles.img150,
		topStyle: styles.topPattern,
		details: 'Quran mentioned about "Graphs" at 8 places. Grape is one of the best natural sources for glucose & fructose and has a lot of health benefits. Graphs help to remove weariness, fights Anemia, good for liver, kidney & digestive system, lowers high blood pressure, and good for heart & treating bronchitis.',
		moreDetails: 'And We brought forth for you thereby gardens of palm trees and grapevines in which for you are abundant fruits and from which you eat (Surah Al-Muminun 23:19). In other places (Surah Ar-Rad Verse 4, Surah Al-Isra Verse 91, Surah Al-Kahf Verse 32, Surah Al-Anam Verse 99, Surah Ya-Sin Verse 34, Surah Al-Baqarah Verse 266 and Surah An-Naba Verse 32).'
	},
	{
		id: 7,
		title: "Food 7",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Water',
		img: require(imgURL + '7.png'),
		imgStyle: styles.img150,
		topStyle: styles.topPattern,
		details: 'Water is known to be the best and the most natural hydrating liquid. It promotes cardiovascular health, keeps muscles and joints working, and helps cleanse toxins from your body. Staying hydrated also helps balance your blood sugar, helps relieve headaches, and promotes healthy skin.',
	},
	{
		id: 8,
		title: "Food 8",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Pomegranate',
		img: require(imgURL + '8.png'),
		imgStyle: styles.img150,
		topStyle: styles.topPattern,
		details: 'Quran mentioned about "Pomegranate" at 3 places. Eating pomegranates removes the excess fat and prevents the hardening of artery walls. Pomegranate helps to pump the level of oxygen in our blood. Due to anti-oxidants present in pomegranate, it fights free radicals, reduces cholesterol, and prevents blood clots.',
		moreDetails: ' In both of them are fruit and palm trees and pomegranates (Surah Ar-Rahman Verse 19). In other places Surah Al-Anam Verse 141 and Surah Al-Anam Verse 99.'
	},
	{
		id: 9,
		title: "Food 9",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Barley',
		img: require(imgURL + '9.png'),
		imgStyle: styles.img150,
		topStyle: styles.topPattern,
		details: 'Barley are rich in many beneficial nutrients. Insoluble and Soluble Fiber Content Improves Digestion and much more.',
	},
	{
		id: 10,
		title: "Food 10",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Honey',
		img: require(imgURL + '10.png'),
		imgStyle: styles.img150,
		topStyle: styles.topPattern,
		details: 'Quran mentioned about "Honey" at 2 places. Honey has been linked to health benefits like improving heart health, wound healing, and blood antioxidant status.',
		moreDetails: 'And your Lord inspired to the bee, "Take for yourself among the mountains, houses, and among the trees and [in] that which they construct (Surah An-Nahl Verse 68). In other places Surah An-Nahl Verse 69.'
	},
	{
		id: 11,
		title: "Food 11",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Dates',
		img: require(imgURL + '11.png'),
		imgStyle: styles.img150,
		topStyle: styles.topPattern,
		details: 'Quran mentioned about "Dates" at many places. Dates are a source of antioxidants, good for blood sugar balance, help reduce blood pressure, contain a brain booster and help maintain bone mass.',
		moreDetails: "And We placed therein gardens of palm trees and grapevines and caused to burst forth therefrom some springs- (Surah Ya-Sin Verse 34)."
	},
	{
		id: 12,
		title: "Food 12",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Milk',
		img: require(imgURL + '12.png'),
		imgStyle: styles.img150,
		topStyle: styles.topPattern,
		details: "Milk is one of Prophet Muhammed's favourite beverages. Quran also mentioned about 'Milk'.",
		moreDetails: "And indeed, for you in livestock is a lesson. We give you drink from that which is in their bellies, and for you in them are numerous benefits, and from them you eat (Surah Al-Mu'minun Verse 21)."
	}
]