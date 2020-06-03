/**
*
* frequentWords.js
* Frequently used words and their meaning
*
* @author - Faizal
* @date   - 24 May 2020
***/
// ALL SHARED FILES
import { Html5Entities } from 'html-entities'; 
import * as Constant from '../../shared/constant';
import * as Generate from '../../shared/generate';
import * as Utils from '../../shared/utils';

// ALL CHAPTER
let imgURL = '../../../assets/img/steps/words/'

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Bismillah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'In the name\nof Allah ',
		img: require(imgURL + '1.png'),
		details: 'Bismillah used extensively in everyday life, said as the opening of each action in order to receive blessing from Allah SAW.',
		moreDetails: ""// Add data here if u want to see in double quotes
	},
	{
		id: 2,
		title: "Alhamdhulillah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Praise be\nto Allah',
		img: require(imgURL + '2.png'),
		details: 'It means All and Total praise is for Allaah . It is used to thank Allah SAW for work accomplished or replying yes or positive to a question if the work has been done satisfactorily .',
		moreDetails: "Don't say 'I am fine', Say 'Alhamdhulillah'."
	},
	{
		id: 3,
		title: "Subhanallah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Glory be\nto Allah',
		img: require(imgURL + '3.png'),
		details: 'Subhanallah used during the prayer (salat), supplication (dua), during a sermon (khutba) in the mosque and commonly throughout the day. It is sometimes used to express shock or amazement.',
		moreDetails: "Don't say 'wow', Say 'Subhanallah'."
	},
	{
		id: 4,
		title: "Astaghfirullah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'I seek forgiveness\nfrom Allah',
		img: require(imgURL + '4.png'),
		details: "Astaghfirullah used when you feel that sadness within you, when you are disturbed and frustrated, when anxiety surrounds you.",
	},
	{
		id: 5,
		title: "Allahu Akbar",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Allah is most great',
		img: require(imgURL + '5.png'),
		details: "Allahu Akbar used when something great happen. Example: After the birth of a child as a means of praising Allah SAW.",
	},
	{
		id: 6,
		title: "Assalammu Alaikum",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Peace be up on you',
		img: require(imgURL + '6.png'),
		details: "Assalammu Alaikum is a religious salutation among Muslims when greeting. Assalammu Alaikum means 'Peace be up on you'.",
		moreDetails: "Don't say 'Hello', Say 'Assalammu Alaikum'."
	},
	{
		id: 7,
		title: "Walaikum Assalam",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Peace be up on you too',
		img: require(imgURL + '7.png'),
		details: "Walaikum Assalam is a religious salutation among Muslims when greeting back. Walaikum Assalam means 'Peace be up on you too'.",
	},
	{
		id: 8,
		title: "Fi Amanillah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'I leave you in\nthe custody of Allah.',
		img: require(imgURL + '8.png'),
		details: "When two people are about to be spread apart long distances and don’t know when they will next see each other next. You’re basically wishing them a safe journey on their travels.",
	},
	{
		id: 9,
		title: "Insha Allah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'if Allah wills',
		img: require(imgURL + '9.png'),
		details: "Insha Allah is commonly used to refer to events that one hopes will happen in the future.",
		moreDetails: "Don't say '0k', Say 'Insha Allah'."
	},
	{
		id: 10,
		title: "Barakallahu feek",
		titleType: Constant.GENERIC.TEXT,
		desc: 'The blessings of\nAllah upon you',
		img: require(imgURL + '10.png'),
		details: "Barakallahu feek is commonly used when responding to somebody saying Jazakallah to indicate that they realize it is God's blessing and not their own which is being transmitted.",
	},
	{
		id: 11,
		title: "Masha Allah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Allah has willed it',
		img: require(imgURL + '11.png'),
		details: "Masha Allah is used when you see something good and don't want to give the evil eye.",
		moreDetails: "Don't say 'great', Say 'Masha Allah'."
	}
]