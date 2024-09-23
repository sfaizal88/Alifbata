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
let imgURL = '../../../../assets/img/steps/leader/'
export const data = [
	{
		id: 1,
		title: "Caliph 1",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Abu Bakr (R.A)',
		img: require(imgURL + '1.png'),
		details: "Abu Bakr (R.A) was the 1st Leader of Islam, who ruled between June 632 A.D to August 634 A.D. Abu Bakr (R.A) was the Father of Aisha (Prophet Muhammad's (pbuh) wife) and best friend of Prophet Muhammad (pbuh).",
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "Caliph 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Umar ibn al-Khattab (R.A)',
		img: require(imgURL + '2.png'),
		details: "Umar ibn al-Khattab (R.A) was the 2nd Leader of Islam, who ruled between June 634 A.D to November 644 A.D. Umar ibn al-Khattab (R.A) was the Father of Hafsa (Prophet Muhammad's (pbuh) wife) and close friend of Prophet Muhammad (pbuh).",
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "Caliph 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Uthman ibn Affan (R.A)',
		img: require(imgURL + '3.png'),
		details: "Uthman ibn Affan (R.A) was the 3rd Leader of Islam, who ruled between November 644 A.D to June 656 A.D. Uthman ibn Affan (R.A) was the Husband of Prophet Muhammad's (pbuh) daughters, Ruqayya & later Umm Kulthum. Grandson of Umm Hakim bint Abdul Muttalib, Prophet Muhammad's (pbuh) paternal aunt.",
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "Caliph 4",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Ali ibn Abi Talib (R.A)',
		img: require(imgURL + '4.png'),
		details: "Ali ibn Abi Talib (R.A) was the 4th Leader of Islam, who ruled between June 656 A.D to January 661 A.D. Ali ibn Abi Talib (R.A) was the Prophet Muhammad's (pbuh) first cousin and Husband of Prophet Muhammad's (pbuh) daughter Fatimah.",
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "Caliph 5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Hasan ibn Ali (R.A)',
		img: require(imgURL + '5.png'),
		details: "Hasan ibn Ali (R.A) was the 5th Leader of Islam, who ruled between June 661 A.D to 670 A.D. Hasan ibn Ali (R.A) was the eldest son of Ali ibn Abi Talib (4th Leader of Islam) and Prophet Muhammad's (pbuh) daughter Fatimah.",
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	}
]