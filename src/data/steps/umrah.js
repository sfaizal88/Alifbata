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
		desc: 'Entering Ihram (Sacred State)',
		img: require(imgURL + '1.png'),
		details: " Take Ghusl and wudu, wear Ihram cloth, and offer two rakaats of Sunnah prayer before you leave for the Miqat in Makkah.",
		moreDetails: " The state of Ihram consists wearing the Ihram attire (Male: Two white seamless cloths. Females: Any ordinary dress fulfilling the Islamic condition of the public dress with hands and face uncovered), taking wudu and refraining from certain activities such as clipping the nails, shaving body parts, using perfumes, killing animals.",
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "STEP 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'At the Miqat',
		img: require(imgURL + '1.png'),
		details: "At the Miqat, make Niyyah by saying “Labbayk Allahumma Umrah” (O Allah, here I am to perform Umrah). After this, keep reciting Talbiyah as Sunnah.",
		moreDetails: "Talbiyah: Labbayk allaahumma labbayk(a), labbayka laa shareeka laka labbayk(a), innal ḥamda wan ni’mata laka wal mulk(a), laa shareeka lak.",
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "STEP 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Tawaaf (Circling around Kaaba)',
		img: require(imgURL + '2.png'),
		details: 'Tawaaf refers to pilgrims circling the Kaaba 7 times counterclockwise. Start at the Black Stone and lift your hands in the direction of the Black Stone, saying Allahu Akbar. After completion of the seven rounds, go to the station of Ibrahim (Maqam Ibrahim) and perform two rakaats Salah.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "STEP 4",
		titleType: Constant.GENERIC.NUMBER,
		desc: "Sa'i between\nSafa and Marwah",
		img: require(imgURL + '3.png'),
		details: "Sa’i refers to the ritual walk between the two small hills of Safa and Marwah seven times. Proceed to the hill of Safa and upon reaching, face the direction of the Kaaba, raise your hands in supplication, and recite a Dua. After that, start walking towards Marwah and once reaching Marwah, walk back towards Safa. A circuit is from Safa to Marwah/Marwah to Safa.",
		moreDetails: "The rite of Sa’i commemorates the actions of Hajar (R.A), the wife of Prophet Ibrahim (A.S), who walked between the hills of Safa and Marwah seven times in search for water for their son, Ismail (A.S).",
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "STEP 5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Hair Removal',
		img: require(imgURL + '4.png'),
		details: 'After completing the Tawaafs, pilgrims shave their head or trim their hair. All male pilgrims shave their heads or trim their hair and women pilgrims cut the tips of their hair. With this last act, Umrah is officially completed.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 6,
		title: "STEP 6",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Tawaaf Ziyarat (Farewell)',
		img: require(imgURL + '2.png'),
		details: 'Before leaving Makkah, it is customary to perform a farewell Tawaaf.',
		moreDetails: "“The people were ordered to circumambulate the Kaaba as the last thing they should do in Makkah, but an exception is for menstruating women.” (Bukhari 1755, Muslim 1328)",
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	}
]