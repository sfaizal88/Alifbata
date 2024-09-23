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
let imgURL = '../../../../assets/img/steps/hijabMen/'
export const data = [
	{
		id: 1,
		title: "STEP 1",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Lower your gaze',
		img: require(imgURL + '1.png'),
		details: 'Lower your gaze from looking at women. "Surah An-Nur Verse 31"',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "STEP 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Clothing must cover\nbetween naval and knee.',
		img: require(imgURL + '2.png'),
		details: 'Clothing must conceal whatever is between the naval and knee.',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "STEP 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Not Tight Cloth',
		img: require(imgURL + '3.png'),
		details: 'Clothing must be loose, so the shape of the body is not seen.',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "STEP 4",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Not Transparent Cloth',
		img: require(imgURL + '4.png'),
		details: 'The clothes worn should not be transparent such that one can see through them.',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "STEP 5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Not Women Cloth',
		img: require(imgURL + '5.png'),
		details: 'Should not resemble the clothing of women.',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 6,
		title: "STEP 6",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Not Resemble\nof the unbelievers',
		img: require(imgURL + '6.png'),
		details: 'The clothes worn should not resemble that of the unbelievers i.e. they should not wear clothes that are specifically identities or symbols of the unbelievers’ religions.',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 7,
		title: "STEP 7",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Not So Glamorous',
		img: require(imgURL + '7.png'),
		details: 'The clothes worn should not be so glamorous as to attract the opposite sex.',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 8,
		title: "STEP 8",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Above the\nankle bone',
		img: require(imgURL + '8.png'),
		details: 'All garments must be above the ankle bone.',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	}
]