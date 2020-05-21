/**
*
* chapters.js
* Static data
*
* @author - Faizal
* @date   - 2 May 2020
* Covert mp4 to mp3 https://audio.online-convert.com/convert/mp4-to-mp3
***/
// ALL SHARED FILES
import * as Constant from '../shared/constant';
import * as Generate from '../shared/generate';
import * as Utils from '../shared/utils';

// ALL CHAPTER
import * as Common from './common';
import * as LongVowels from './longVowels';
import * as FourVariation from './fourVariation';
import * as TwoLetter from './twoLetter';
import * as Sukun from './sukun';
import * as Shaddah from './shaddah';

export const allChapter = [
	{
		title: 'Chapter 1',
		data: Generate.generateChapter(Common.ARABIC_ALPHABET, 'chapter1', Constant.GENERIC.ALPHABET_ORDER),
		desc: 'Arabic Alphabets', 
		pageTitle: 'Chapter 1: Arabic Alphabets',
		id: 'chapter1',
		bgColor: '#c0392b',
		active: true,
		img: require('../../assets/img/badges/chapter1.png'),
		details: 'There are 28 alphabets in the Arabic language. The Arabic letters are written from right to left. Alif is the first alphabet.',
	}, 
	{
		id: 'chapter2',
		data: Generate.generateChapter(Common.ARABIC_FATHA, 'chapter2', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 2',
		desc: 'Short Vowels (Fathah)',
		pageTitle: 'Chapter 2: Short Vowels (Fathah)',
		id: 'chapter2',
		bgColor: '#27ae60',
		active: true,
		img: require('../../assets/img/badges/chapter2.png'),
		details: 'Fathah  is a small diagonal line placed above a letter. It denotes a short "a" sound.',
	},
	{
		id: 'chapter3',
		data: Generate.generateChapter(Common.ARABIC_KASRAH, 'chapter3', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 3',
		desc: 'Short Vowels (Kasrah)',
		pageTitle: 'Chapter 3: Short Vowels (Kasrah)',
		id: 'chapter3',
		bgColor: '#16a085',
		active: true,
		img: require('../../assets/img/badges/chapter3.png'),
		details: 'Kasrah  is a small diagonal line placed below a letter. It denotes a short "i" sound.',
	},
	{
		id: 'chapter4',
		data: Generate.generateChapter(Common.ARABIC_DAMMA, 'chapter4', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 4',
		desc: 'Short Vowels (Dammah)',
		pageTitle: 'Chapter 4: Short Vowels (Dammah)',
		id: 'chapter4',
		bgColor: '#8e44ad',
		active: true,
		img: require('../../assets/img/badges/chapter4.png'),
		details: 'Dammah is a small curl-like symbol placed above a letter. It denotes a short "u" sound.',
	},
	{
		id: 'chapter5',
		data: Generate.generateChapter(Common.ARABIC_FATHATAIN, 'chapter5', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 5',
		desc: 'Fathahtain',
		pageTitle: 'Chapter 5: Fathahtain',
		bgColor: '#2c3e50',
		active: true,
		img: require('../../assets/img/badges/chapter5.png'),
		details: 'Fathahtain is two small diagonal lines placed above a letter. It denotes a short "an" sound.',
	},
	{
		id: 'chapter6',
		data: Generate.generateChapter(Common.ARABIC_KASRAHTAIN, 'chapter6', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 6',
		desc: 'Kasrahtain',
		pageTitle: 'Chapter 6: Kasrahtain',
		bgColor: '#f39c12',
		active: true,
		img: require('../../assets/img/badges/chapter6.png'),
		details: 'Kasrahtain is two small diagonal lines placed below a letter. It denotes a short "in" sound.',
	},
	{ 
		id: 'chapter7',
		data: Generate.generateChapter(Common.ARABIC_DAMMATAIN, 'chapter7', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 7',
		desc: 'Dammahtain',
		pageTitle: 'Chapter 7: Dammahtain',
		bgColor: '#78e08f',
		active: true,
		img: require('../../assets/img/badges/chapter7.png'),
		details: 'Dammahtain is a small curl-like symbol and diagonal line placed above a letter. It denotes a short "un" sound.',
	},
	{
		id: 'chapter8', 
		data: FourVariation.data,
		title: 'Chapter 8',
		desc: 'Alphabet Positions',
		pageTitle: 'Chapter 8: Alphabet Positions',
		bgColor: '#60a3bc',
		active: true,
		img: require('../../assets/img/badges/chapter8.png'),
		details: 'The basic 28 arabic alphabets change their shape according to their position in a word.',
	},
	{ 
		id: 'chapter9',
		data: Generate.generateChapter(Sukun.ARABIC_SUKUN, 'chapter9', Constant.GENERIC.PER_LESSON, true, Constant.GENERIC.PER_LESSON * Constant.GENERIC.TOTAL_LETTER_CHAPTER),
		title: 'Chapter 9',
		desc: 'Sukun',
		pageTitle: 'Chapter 9: Sukun',
		bgColor: '#B33771',
		active: true,
		img: require('../../assets/img/badges/chapter9.png'),
		details: 'Sukun is a small circle placed above a letter. It means that there is no vowel. For example, a sukun placed above "ba" denotes an "bb" sound.',
	},
	{ 
		id: 'chapter10',
		data: Generate.generateChapter(LongVowels.ARABIC_LONG_VOWELS_WITH_ALIF, 'chapter10', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 10',
		desc: 'Long Vowels (Alif)',
		pageTitle: 'Chapter 10: Long Vowels (Alif)',
		bgColor: '#34ace0',
		active: true,
		img: require('../../assets/img/badges/chapter10.png'),
		details: 'There are 3 long vowels in Arabic. A fathah vowel with an Alif is the first long vowel. It denotes a long "aa" sound.',
	},
	{ 
		id: 'chapter11',
		data: Generate.generateChapter(LongVowels.ARABIC_LONG_VOWELS_WITH_YAA, 'chapter11', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 11',
		desc: 'Long Vowels (Ya)',
		pageTitle: 'Chapter 11: Long Vowels (Ya)',
		bgColor: '#6ab04c',
		active: true,
		img: require('../../assets/img/badges/chapter11.png'),
		details: 'A Ya with a sukun placed next to a kasrah vowel is the second long vowel. It denotes a long "ee" sound.',
	},
	{ 
		id: 'chapter12',
		data: Generate.generateChapter(LongVowels.ARABIC_LONG_VOWELS_WITH_WAW, 'chapter12', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 12',
		desc: 'Long Vowel (Waaw)',
		pageTitle: 'Chapter 12: Long Vowel (Waaw)',
		bgColor: '#ffb142',
		active: true,
		img: require('../../assets/img/badges/chapter12.png'),
		details: 'A Waaw with a sukun placed next to a dummah vowel is the third long vowel. It denotes a long "uu" sound.',
	},
	{ 
		id: 'chapter13',
		data: Generate.generateChapter(TwoLetter.ARABIC_TWO_LETTER, 'chapter13', Constant.GENERIC.PER_LESSON, true, Constant.GENERIC.PER_LESSON * Constant.GENERIC.TOTAL_LETTER_CHAPTER),
		title: 'Chapter 13',
		desc: 'Two Letter Practice',
		pageTitle: 'Chapter 13: Two Letter Practice',
		bgColor: '#eb4d4b',
		active: true,
		img: require('../../assets/img/badges/chapter13.png'),
		details: "Now that we've learnt the individual Arabic letters, let's combine them. We'll start with the two-letter practice.",
	},
	{ 
		id: 'chapter14',
		data: Generate.generateChapter(Shaddah.ARABIC_TWO_LETTER_SHADDAH, 'chapter14', 7),
		title: 'Chapter 14',
		desc: 'Shaddah',
		pageTitle: 'Chapter 14: Shaddah',
		bgColor: '#16a085',
		active: false,
		img: require('../../assets/img/badges/chapter13.png'),
		details: 'Shaddah is a small "w"-like symbol placed above a letter. It denotes a stress on the letter placed. For example, ' + Utils.codeToArabic('&#1576;&#1614;&#1578;&#64610;') + ' is pronounced as batta instead of bata.',
	},
	{ 
		id: 'chapter15',
		data: Generate.generateChapter(Shaddah.ARABIC_TWO_LETTER_SHADDAH, 'chapter14', 7),
		title: 'Chapter 15',
		desc: 'Three Letter Practice',
		pageTitle: 'Chapter 14: Three Letter Practice',
		bgColor: '#c0392b',
		active: false,
		img: require('../../assets/img/badges/chapter13.png'),
		details: "Now that we've completed the two-letter practice, let's do the three-letter practice.",
	},
]