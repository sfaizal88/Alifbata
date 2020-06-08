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
let imgURL = '../../../assets/img/steps/hajj/'
export const data = [
	{
		id: 1,
		title: "STEP 1",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Preparations for Ihram',
		img: require(imgURL + '1.png'),
		details: "Make the Niyyah (Intention), take a bath, wear Ihram cloth, perform wudu and pray two rakaats sunnah prayer before you leave for the Meeqat in Makkah.",
		moreDetails: "Say what u need to say in arabic",
		imgStyle: styles.img200
	},
	{
		id: 2,
		title: "STEP 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Tawaaf',
		img: require(imgURL + '2.png'),
		details: 'Lift your hand in the direction of the stone (al-Ḥajaru al-Aswad), say "Allahu Akbar" and then start the Tawaaf taking rounds around the Kabah, with the Kabah being on your left. Upon finishing the seven rounds of Tawaaf, go to the station of Ibrahim (Maqam Ibrahim) and pray two rakat behind Maqam Ibrahim.',
		imgStyle: styles.img200
	},
	{
		id: 3,
		title: "STEP 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: "Sa'i (Walk) between\nSafa and Marwah",
		img: require(imgURL + '3.png'),
		details: "Reach Safa hill and point from where the Kahab is visible. Face the Kahab, raise your hand, and supplicate to Allah (SWT). You can make whatever dua you desire. After that, walk towards Marwah from Safa and repeat for seven circuits. (One Circuit it's from Safa to Marwah). You can ask whatever dua you desire while walking.",
		imgStyle: styles.img200,
	},
	{
		id: 4,
		title: "STEP 4",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Departure to Mina',
		img: require(imgURL + '4.png'),
		details: 'Put on Ihram garments again. Make intention for Hajj. Remain in Mina during the Tarwyah day(the 8th of Thul Hijjah) and perform the five prayers starting from Dhuhr prayer and ending with the Fajir prayer on the Day of Arafat.',
		imgStyle: styles.img200,
	},
	{
		id: 5,
		title: "STEP 5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Day at Arafat',
		img: require(imgURL + '5.png'),
		details: 'Leave for Arafat on the morning of the 9th of Thul Hijjah and stay till sunset. Stay in any part of Arafat. Glorify Allah (SAW), repeat supplication, repent to Allah (SAW) and ask for forgiveness. Combine Dhihir and Asr.',
		imgStyle: styles.img200,
	},
	{
		id: 6,
		title: "STEP 6",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Night at Muzdalifah',
		img: require(imgURL + '6.png'),
		details: 'Leave for Muzdalifah soon after sunset of the 9th day of Thul Hijjah. Perform Maghrib and the Isha salah combined (Isha is shortened to two rakaat). Stay overnight and perform the Fajir salah.',
		imgStyle: styles.img200,
	},
	{
		id: 7,
		title: "STEP 7",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Devil Stoning in Mina',
		img: require(imgURL + '7.png'),
		details: 'Shortly before sunrise, leave Muzdalifah for mina. Go to Jamarat Al-Aqabah and stone it with seven pebbles.',
		imgStyle: styles.img200,
	},
	{
		id: 8,
		title: "STEP 8",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Animal Sacrifice',
		img: require(imgURL + '8.png'),
		details: 'Slaughter your sacrifice.',
		imgStyle: styles.img200,
	},
	{
		id: 9,
		title: "STEP 9",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Hair Trim',
		img: require(imgURL + '9.png'),
		details: 'Lastly, upon the completion of animal sacrifice, shave your head or trim your hair and take off Ihram garments. With this last act, your Hajj is officially completed.',
		imgStyle: styles.img200,
	},
	{
		id: 10,
		title: "STEP 10",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Farewell Tawaf',
		img: require(imgURL + '10.png'),
		details: 'Go to Makkah and make Tawaf. Perform two rakaat of prayer. Let the Tawaf be the last you do in Makkah.',
		imgStyle: styles.img200,
	}
]