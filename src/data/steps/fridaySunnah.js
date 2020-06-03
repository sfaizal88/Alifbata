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

// ALL CHAPTER
let imgURL = '../../../assets/img/steps/fridaySunnah/'
export const data = [
	{
		id: 1,
		title: "1",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Hair & Nail\nCut',
		img: require(imgURL + '1.png'),
		details: 'Clipping nails and removing extra hairs.',
	},
	{
		id: 2,
		title: "2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Bath',
		img: require(imgURL + '2.png'),
		details: 'Taking a ritual purificatory bath.',
	},
	{
		id: 3,
		title: "3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Dress',
		img: require(imgURL + '3.png'),
		details: 'Dressing in finest clothes.',
	},
	{
		id: 4,
		title: "4",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Siwak',
		img: require(imgURL + '4.png'),
		details: 'Using Siwak fights tooth decay and cavities.',
	},
	{
		id: 5,
		title: "5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Perfume',
		img: require(imgURL + '5.png'),
		details: 'Wearing perfume.',
	},
	{
		id: 6,
		title: "6",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Quran',
		img: require(imgURL + '6.png'),
		details: 'Reading Surat Al-Kahf.',
	},
	{
		id: 7,
		title: "7",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Early to Mosque',
		img: require(imgURL + '7.png'),
		details: 'Proceeding early to the mosque to be in the first rows..',
	},
	{
		id: 8,
		title: "8",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Friday Bayan',
		img: require(imgURL + '8.png'),
		details: 'Listening to friday sermon attentively.',
	},
	{
		id: 9,
		title: "9",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Supplicating\nAllah SAW',
		img: require(imgURL + '9.png'),
		details: 'Supplicating Allah SAW abundantly especially during the last hour before sunset.',
	}
]