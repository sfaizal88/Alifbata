/**
*
* angels.js
* Angels in Islam
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
let imgURL = '../../../assets/img/steps/angels/'

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Angel Jibril",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Angel of Revelation',
		img: require(imgURL + '1.png'),
		topStyle: styles.topPattern,
		details: "The Angel Jibril, also known as the Angel of Revelation, is an archangel who plays a vital role in communicating Islam to humanity. He is mentioned in both the Quran and the Hadith. The Angel Jibril revealed the Quran to Prophet Muhammad (PBUH) on Laylat al-Qadr (Night of Power). He also came to the Prophet's aid during the Battle of Badr, leading an army of angels.",
	},
	{
		id: 2,
		title: "Angel Mikail",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Angel of Mercy',
		img: require(imgURL + '2.png'),
		topStyle: styles.topPattern,
		details: "The Angel Mikail is another archangel who provides nourishments for bodies and souls while also being responsible for bringing rain and thunder to Earth. As the Angel of Mercy, he asks Allah to forgive people’s sins. In Islam, it is believed that Jibril and Mikail were the first two angels to obey Allah SWT's order to prostrate before Prophet Adam (A.S).",
	},
	{
		id: 3,
		title: "Angel Azrael",
		titleType: Constant.GENERIC.TEXT,
		desc: 'The Angel of Death',
		img: require(imgURL + '3.png'),
		topStyle: styles.topPattern,
		details: 'The Angel Azrael, also known as Malak-ul Mawt (Angel of Death), is responsible for parting the soul from the body of the dead. He appears as a beautiful creature to the believers and ugly for non-believers while taking their souls.',
	},
	{
		id: 4,
		title: "Angel Israfil",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Angel who blows\n the trumpet',
		img: require(imgURL + '4.png'),
		topStyle: styles.topPattern,
		details: "The Angel Israfil, also known as the Angel of Soor (Trumpet), is one of the four archangels responsible for signaling the coming of Qiyamah (Day of Judgement). Israfil will blow the horn two times - first, to signal Qiyamah and second, for resurrection.",
	},
	{
		id: 5,
		title: "Angel Munkar\nand Nakir",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Angels at the Grave',
		img: require(imgURL + '5.png'),
		topStyle: styles.topPattern,
		details: "The Angels Munkar and Nakir question the dead people in their graves to test their faith. The angels ask the dead people 3 questions - (1) Who is your Lord?, (2) Who is your Prophet?, (3) What is your book? The believers who answer the questions correctly will be allowed to rest in peace till Qiyamah (Day of Judgement), while the non-believers will be tormented in their grave.",
	},
	{
		id: 6,
		title: "Angel Kiraman\nand Katibin",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Recorder of Good\nand Bad Deeds',
		img: require(imgURL + '7.png'),
		topStyle: styles.topPattern,
		details: "The Angels Kiraman and Katibin sit on either side of a person's shoulders. The angel on the right shoulder is responsible for recording the good deeds and manners. The angel on the left shoulder is responsible for recording the bad deeds and manners. On Qiyamah, the angels will attend as witnesses of humans' deeds.",
	},
	{
		id: 7,
		title: "Angel Malik",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Guardian of Hell',
		img: require(imgURL + '6.png'),
		topStyle: styles.topPattern,
		details: "The Angel Malik is the chief of angels who govern Jahannam (Hell). He carries out Allah SWT's command to punish people in hell. Angel Malik supervises 19 other angels who guard Jahannam (hell) and punish the people there. In Surah 43 (Az-Zukhruf) verses 74 to 77 of the Quran.",
	},
	{
		id: 8,
		title: "Angel Ridwan",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Guardian of Heaven',
		img: require(imgURL + '8.png'),
		topStyle: styles.topPattern,
		details: "The Angel Ridwan is in charge of maintaining Jannah (Heaven). Quran describes in (Surah Ar-Ra'd 13, verses 23 & 24) how the angels that Ridwan leads in paradise will welcome believers as they arrive.",
	}
]