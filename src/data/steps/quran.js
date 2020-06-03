/**
*
* quran.js
* No. in Quran
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
let imgURL = '../../../assets/img/steps/angels/'

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Juz",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#c0392b',
		desc: 'Total number of Juz',
		imgText: '30',
		details: 'The Angel Jibril (A.S) revealed the verses of Quran to Prophet SAW on the Night of Power.',
	},
	{
		id: 2,
		title: "Surahs",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#049991',
		desc: 'Total number of Surahs',
		imgText: '114',
		details: 'The Angel Mika’il (A.S) is known as the giver of rain and that helps to provide food for people. ',
	},
	{
		id: 3,
		title: "Verses",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#60a3bc',
		desc: 'Total number of Verses',
		imgText: '6236',
		details: 'The Angel Izra’il (A.S) is in charge of taking possession of souls after death.',
	},
	{
		id: 4,
		title: "Years",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#c44569',
		desc: 'Number of years\nQuran is fully disclosed',
		imgText: '23',
		details: "The Angel Israfil (A.S) who blows the trumpet announcing the Day of Judgement. ",
	},
	{
		id: 5,
		title: "Prophets",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#4b6584',
		desc: 'Total number of\nProphets name in Quran',
		imgText: '25',
		details: "Total number of Prophets name in Quran is 25.",
	},
	{
		id: 6,
		title: "Prophet\nMuhammed (PBUH)",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#049991',
		desc: 'Number of times Prophet\nMuhammed (PBUH) name mentioned',
		imgText: '4',
		details: "The Angel Malik (A.S) is the guardian of hell.",
	},
	{
		id: 7,
		title: "Prophet Musa (A.S)",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#2e86de',
		desc: 'Number of times Prophet\nMusa (A.S) name mentioned',
		imgText: '136',
		details: "The Angels Al-Kiram and Al-Katibun (A.S) who sits on either sides of the human shoulders and note down the good / bad about them.",
	},
	{
		id: 8,
		title: "Prophet Isa (A.S)",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#c44569',
		desc: 'Number of times Prophet\nIsa (A.S) name mentioned',
		imgText: '25',
		details: "The Angel Ridwan (A.S) who serves as the guardian of heaven.",
	},
	{
		id: 9,
		title: "Prophet Nuh (A.S)",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#34495e',
		desc: 'Number of times Prophet\nNuh (A.S) name mentioned',
		imgText: '43',
		details: "The Angel Ridwan (A.S) who serves as the guardian of heaven.",
	},
	{
		id: 10,
		title: "Men / Women",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#e66767',
		desc: 'Number of times\nMen / Women word mentioned',
		imgText: '24',
		details: "Total Number of times Men / Women word mentioned in Quran is 24 each. Men word 24 times and Women word 24 times.",
	},
	{
		id: 11,
		title: "Death / Life",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#c0392b',
		desc: 'Number of times\nDeath / Life word mentioned',
		imgText: '145',
		details: "Total Number of times Death / Life word mentioned in Quran is 145 each. Death word 145 times and Life word 145 times.",
	},
	{
		id: 12,
		title: "Paraise / Hell",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#27ae60',
		desc: 'Number of times\nParadise / Hell word mentioned',
		imgText: '77',
		details: "Total Number of times Paradise / Hell word mentioned in Quran is 77 each. Paradise word 77 times and Hell word 77 times.",
	},
	{
		id: 13,
		title: "Angles / Devils",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#8e44ad',
		desc: 'Number of times\nAngles / Devils word mentioned',
		imgText: '88',
		details: "Total Number of times Angles / Devils word mentioned in Quran is 88 each. Angles word 88 times and Devils word 88 times.",
	},
	{
		id: 14,
		title: "Iman / Kufr",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#2c3e50',
		desc: 'Number of times\nIman / Kufr word mentioned',
		imgText: '25',
		details: "Total Number of times Iman / Kufr word mentioned in Quran is 25 each. Iman word 25 times and Kufr word 25 times.",
	},
	{
		id: 15,
		title: "Longest Surah",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.TEXT,
		bgColor: '#e66767',
		desc: 'Longest Surah in Quran',
		imgText: 'Al-Baqarah',
		details: "Longest Surah in Quran is Al-Baqarah which contain 286 verses.",
	},
	{
		id: 16,
		title: "Shortest Surah",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.TEXT,
		bgColor: '#049991',
		desc: 'Shortest Surah in Quran',
		imgText: 'Al-Kawthar',
		details: "Shortest Surah in Quran is Al-Kawthar which contain 3 verses and 10 words.",
	},
	{
		id: 17,
		title: "Heart of Quran",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.TEXT,
		bgColor: '#f39c12',
		desc: 'The heart of the Quran',
		imgText: 'Al-Yaseen',
		details: "The heart of the Quran Al-Yaseen.",
	},
]