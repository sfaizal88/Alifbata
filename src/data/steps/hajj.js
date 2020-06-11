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
		desc: 'Entering Ihram (Sacred State)',
		img: require(imgURL + '1.png'),
		details: "Take Ghusl and wudu, wear Ihram cloth, and offer two rakaats of Sunnah prayer before you leave for the Miqat in Makkah.",
		moreDetails: "The state of Ihram consists wearing the Ihram attire (Male: Two white seamless cloths. Females: Any ordinary dress fulfilling the Islamic condition of the public dress with hands and face uncovered), taking wudu and refraining from certain activities such as clipping the nails, shaving body parts, using perfumes, killing animals.",
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "STEP 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'At the Miqat',
		img: require(imgURL + '1.png'),
		details: "At the Miqat, make Niyyah by saying “Labbayk Allahumma Umrah” (O Allah, here I am to perform Umrah), when performing Umrah as part of Hajj al-Tamattu. After this, keep reciting Talbiyah as Sunnah.",
		moreDetails: "Talbiyah: Labbayk allaahumma labbayk(a), labbayka laa shareeka laka labbayk(a), innal ḥamda wan ni’mata laka wal mulk(a), laa shareeka lak.",
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "STEP 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Tawaaf (Circling the Kaaba)',
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
		details: "Sa’i refers to the ritual walk between the two small hills of Safa and Marwah seven times. Proceed to the hill of Safa and upon reaching, face the direction of the Kaaba, raise your hands in supplication and recite a Dua. After that, start walking towards Marwah and once reaching Marwah, walk back towards Safa. A circuit is from Safa to Marwah/Marwah to Safa.",
		moreDetails: "The rite of Sa’i commemorates the actions of Hajar (R.A), the wife of Prophet Ibrahim (A.S), who walked between the hills of Safa and Marwah seven times in search for water for their son, Ismail (A.S).",
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "STEP 5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Departure to Mina',
		img: require(imgURL + '4.png'),
		details: 'Pilgrims proceed to the tent city of Mina on the first day of Hajj (Day of Tarwiah) and remain in Mina until the sunrise of the second day of Hajj. They offer five prayers, starting from Zuhr and ending with Fajr the following day.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 6,
		title: "STEP 6",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Day at Arafat',
		img: require(imgURL + '5.png'),
		details: 'After the Fajr prayer at the Mina, pilgrims leave for Mount Arafat and stay there till sunset. In the desert planes of Arafat, they glorify Allah (SAW) and supplicate to Him, repent for their sins and seek His forgiveness.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 7,
		title: "STEP 7",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Night at Muzdalifah',
		img: require(imgURL + '6.png'),
		details: "At sunset, the pilgrims leave Arafat, without performing Magrib. They proceed to Muzdalifah, where they gather in makeshift tents and perform Maghrib and Isha prayers jointly. They will spend the night praying and sleeping on the ground with open sky, and gather pebbles for the next day's ritual of Devil stoning.",
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 8,
		title: "STEP 8",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Devil Stoning in Mina',
		img: require(imgURL + '7.png'),
		details: 'Shortly before sunrise, pilgrims leave Muzdalifah to return to Mina, to perform symbolic stoning of the devil (Ramy al-Jamarat) by throwing seven stones from sunrise to sunset at only the largest of the three pillars, known as Jamrat al-Aqabah.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 9,
		title: "STEP 9",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Animal Sacrifice',
		img: require(imgURL + '8.png'),
		details: 'Traditionally the pilgrims either slaughtered the animal themselves or oversaw the slaughtering. Nowadays, they buy a sacrifice voucher in Mecca before the greater Hajj begins, which allows an animal to be slaughtered in the name of God (Allah) on the 10th day of Dhu al-Hijjah, without the pilgrim being physically present.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 10,
		title: "STEP 10",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Hair Removal',
		img: require(imgURL + '9.png'),
		details: 'Lastly, upon the completion of animal sacrifice, pilgrims shave their head or trim their hair. All male pilgrims shave their heads or trim their hair on the day of Eid al Adha and women pilgrims cut the tips of their hair. With this last act, Hajj is officially completed.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 11,
		title: "STEP 11",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Tawaf Ziyarat (Farewell)',
		img: require(imgURL + '10.png'),
		details: 'On the following day, the pilgrims return to Makkah to perform their farewell Tawaf.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	}
]