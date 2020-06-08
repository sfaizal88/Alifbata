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
let imgURL = '../../../assets/img/steps/umrah/'
export const data = [
	{
		id: 1,
		title: "STEP 1",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Preparations for Ihram',
		img: require(imgURL + '1.png'),
		details: "Make the Niyyah (Intention), take a bath, wear Ihram cloth, perform wudu and pray two rakaats sunnah prayer before you leave for the Meeqat in Makkah.",
		moreDetails: "Say what u need to say in arabic",
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "STEP 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Tawaaf',
		img: require(imgURL + '2.png'),
		details: 'Lift your hand in the direction of the stone (al-Ḥajaru al-Aswad), say "Allahu Akbar" and then start the Tawaaf taking rounds around the Kabah, with the Kabah being on your left. Upon finishing the seven rounds of Tawaaf, go to the station of Ibrahim (Maqam e Ibrahim).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "STEP 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Saee (Walk) between\nSafa and Marwah',
		img: require(imgURL + '3.png'),
		details: "Reach Safa hill and point from where the Kahab is visible. Face the Kahab, raise your hand, and supplicate to Allah (SWT). You can make whatever dua you desire. After that, walk towards Marwah from Safa and repeat for seven circuits. (One Circuit it's from Safa to Marwah). You can ask whatever dua you desire while walking.",
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "STEP 4",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Cutting of Hair',
		img: require(imgURL + '4.png'),
		details: 'Lastly, upon the completion of the seven circuits, you are required to cut your hair. With this last act, your Umrah is officially completed.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	}
]