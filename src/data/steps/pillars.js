/**
*
* pillars.js
* 5 Pillars of Islam
*
* @author - Faizal
* @date   - 18 May 2020
***/
// ALL SHARED FILES
import * as Constant from '../../shared/constant';
import * as Generate from '../../shared/generate';
import * as Utils from '../../shared/utils';

// ALL CHAPTER
let imgURL = '../../../assets/img/steps/pillars/'
export const data = [
	{
		id: 1,
		title: "1st Pillar",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Faith',
		img: require(imgURL + '1.png'),
		details: "Shahadah (Faith) is the first pillar of Islam. One becomes a believing Muslim by reciting this phrase with conviction: 'Laa ilaahaa illallaah. Muhammadun rasoolullaah.' This means 'There is no God except Allah and Prophet Muhammad (PBUH) is the Messenger of Allah.'",
	},
	{
		id: 2,
		title: "2nd Pillar",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Prayer',
		img: require(imgURL + '2.png'),
		details: 'Salat (Prayer) is the second pillar of Islam, which is the obligatory prayers performed five times a day by Muslims. The five separate prayers are Fajr, Zuhr, Asr, Magrib, and Isha. Salat involves uniting the mind, soul, and body of a Muslim to increase their taqwa (closeness to Allah SWT). Wudu (ablution) should be done before performing the Salat.',
	},
	{
		id: 3,
		title: "3rd Pillar",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Zakat',
		img: require(imgURL + '3.png'),
		details: 'Zakat (Alms) is the third pillar of Islam.  In accordance with Islamic law, Muslims donate a fixed portion (2.5%) of their wealth to communities in need. Muslims are obligated to donate their wealth only if it exceeds the Nisab threshold for a specific lunar year. There are eight categories of people who are eligible to receive Zakat (e.g. the poor).',
	},
	{
		id: 4,
		title: "4th Pillar",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Fasting',
		img: require(imgURL + '4.png'),
		details: 'Sawm (Fasting) is the fourth pillar of Islam. During the daylight hours of Ramadan, the ninth month of the Islamic calendar, all healthy adult Muslims are required to abstain from food and drink. In the Quran, Allah SWT says: "O you who believe, fasting is prescribed for you as it was prescribed for those before you, that you may develop God-consciousness (2:183)."',
	},
	{
		id: 5,
		title: "5th Pillar",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Hajj',
		img: require(imgURL + '5.png'),
		details: 'Hajj (Pilgrimage) is the fifth and final pillar of Islam. It is an Islamic pilgrimage to the holy city of Mecca (in Saudi Arabia) in the month of Dhul Hijjah, the twelfth month of the Islamic calendar. It is mandatory for physically and financially able Muslims to perform Hajj at least once in a lifetime.',
	},
]