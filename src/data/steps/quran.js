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
		desc: 'Total Number of\nJuz',
		imgText: '30',
		details: 'The Quran is divided into 30 parts and each part is called a "Juz". Some use these divisions to facilitate recitation of the Quran in a month (e.g. during Ramadhan). Juz 1 starts from "Surah Al Fatiha".',
	},
	{
		id: 2,
		title: "Surahs",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#049991',
		desc: 'Total Number of\nSurahs',
		imgText: '114',
		details: 'A Surah is a chapter of the Quran. There are 114 Surahs in the Quran. Al-Fatiha is the first Surah, while Al-Naas is the last. Each Surah (except the ninth) starts with "Bismillahir-rahmanir-rahim".',
	},
	{
		id: 3,
		title: "Ayahs",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#60a3bc',
		desc: 'Total Number of\nVerses or Ayahs',
		imgText: '6236',
		details: 'An Ayah (Verses), which means "proof" or "sign" is a verse of a Surah. Each Ayah is of varying length and marked by a number.',
	},
	{
		id: 4,
		title: "Revelation Years",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#c44569',
		desc: 'Number of years\nQuran is fully disclosed',
		imgText: '23',
		details: "Total number of Years Taken for the Complete Revelation of Quran is 23 years. The Quran was revealed to Prophet Muhammad (PBUH) over a period of 23 years (from 610-632 C.E.).",
	},
	{
		id: 5,
		title: "Islamic Prophets",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#4b6584',
		desc: 'Total Number of\nProphets',
		imgText: '25',
		details: "The Quran mentions 25 Islamic prophets, including Prophet Adam (A.S), Prophet Ibrahim (A.S), and Prophet Musa (A.S).",
	},
	{
		id: 6,
		title: "Prophet\nMuhammed (PBUH)",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#049991',
		desc: "No. of Times Prophet Muhammed's\n(PBUH) Name mentioned",
		imgText: '5',
		details: 'The name "Muhammad" (PBUH) is mentioned 4 times in the Quran (Surahs 33:41, 47:3, 3:145, and 48:30). The name "Ahmad" (another variant of the name of Muhammad) is mentioned one time (Surah 61:7).',
	},
	{
		id: 7,
		title: "Prophet Musa (A.S)",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#2e86de',
		desc: "No. of Times Prophet\nMusa's (A.S) Name mentioned",
		imgText: '136',
		details: "Prophet Musa (A.S) is the most frequently mentioned individual in the Quran, with his name being mentioned 136 times. The Quran states that Prophet Musa (A.S) was sent by Allah to the Pharaoh of Egypt as a warning and to the Israelites for guidance.",
	},
	{
		id: 8,
		title: "Prophet Isa (A.S)",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#c44569',
		desc: "No. of Times Prophet\nIsa's (A.S) Name mentioned",
		imgText: '25',
		details: "Prophet Isa's (A.S) name is mentioned 25 times in the Quran (e.g. in Surah 3:45, it is mentioned that Isa (A.S) is the child of Maryam and that he held in honor in this world and in the Hereafter, and will be one of those who are near to Allah.",
	},
	{
		id: 9,
		title: "Prophet Nuh (A.S)",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#34495e',
		desc: "No. of Times Prophet\nNuh's (A.S) Name mentioned",
		imgText: '43',
		details: "Prophet Nuh's (A.S) name is mentioned 43 times in the Quran. Surah Nuh, the seventy-first surah of the Quran, is named after him. The Surah describes the Prophet's complaint about his people rejecting all warnings of Allah SWT.",
	},
	{
		id: 10,
		title: "Life / Death",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#c0392b',
		desc: 'No. of Times the Words \nLife and Death Mentioned',
		imgText: '145',
		details: "The Quran mentions the words Life and Death a total of 145 times each.",
	},
	{
		id: 11,
		title: "Jannah / Jahannam",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#27ae60',
		desc: 'No. of Times the Words\nJannah and Jahannam Mentioned',
		imgText: '77',
		details: "The Quran mentions the words Jannah (Paradise) and Jahannam (Hell) a total of 77 times each.",
	},
	{
		id: 12,
		title: "Angles / Devils",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#8e44ad',
		desc: 'No. of Times the Words\nAngles and Devils Mentioned',
		imgText: '88',
		details: "The Quran mentions the words Angels and Devils a total of 88 times each. Jibril, Mikail, Israfil, Malik, Munkar, and Nakeer are some of the angels mentioned in the Quran.",
	},
	{
		id: 13,
		title: "Longest Surah",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.TEXT,
		bgColor: '#e66767',
		desc: 'Longest Surah of the Quran',
		imgText: 'Al-Baqarah',
		details: "Surah Al-Baqarah, which contains a total of 286 verses, is the second and longest Surah of the Quran. Ayat al-Kursi (Throne Verse), one of the best known and widely memorized verses of the Quran, is the 255th verse of this Surah. The verse speaks about how nothing and nobody is regarded to be comparable to Allah.",
	},
	{
		id: 14,
		title: "Shortest Surah",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.TEXT,
		bgColor: '#049991',
		desc: 'Shortest Surah of the Quran',
		imgText: 'Al-Kawthar',
		details: "Surah Al-Kawthar, which contains 3 verses and 10 words, is the 108th and shortest Surah of the Quran.",
	},
	{
		id: 15,
		title: "Heart of Quran",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.TEXT,
		bgColor: '#f39c12',
		desc: 'The Heart of the Quran',
		imgText: 'Yaseen',
		details: "Surah Yaseen is the 36th Surah of the Quran and contains 83 verses. It is regarded as the heart of the Quran, as it presents the key themes of Allah SWT's sovereignty and unlimited power (as exemplified by His creations), paradise, the ultimate punishment of nonbelievers and resurrection.",
	},
]