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
		desc: 'Basic Arabic Alphabet', 
		pageTitle: 'Chapter 1: Arabic Alphabet',
		id: 'chapter1',
		bgColor: '#c0392b',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	}, 
	{
		id: 'chapter2',
		data: Generate.generateChapter(Common.ARABIC_FATHA, 'chapter2', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 2',
		desc: 'Fathah (Short Vowels)',
		pageTitle: 'Chapter 2: Arabic Alphabet (Fathah)',
		id: 'chapter2',
		bgColor: '#27ae60',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{
		id: 'chapter3',
		data: Generate.generateChapter(Common.ARABIC_KASRAH, 'chapter3', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 3',
		desc: 'Kasrah (Short Vowels)',
		pageTitle: 'Chapter 3: Arabic Alphabet (Kasrah)',
		id: 'chapter3',
		bgColor: '#16a085',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{
		id: 'chapter4',
		data: Generate.generateChapter(Common.ARABIC_DAMMA, 'chapter4', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 4',
		desc: 'Dammah (Short Vowels)',
		pageTitle: 'Chapter 4: Arabic Alphabet (Dammah)',
		id: 'chapter4',
		bgColor: '#8e44ad',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{
		id: 'chapter5',
		data: Generate.generateChapter(Common.ARABIC_FATHATAIN, 'chapter5', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 5',
		desc: 'Fathatain (Double Short Vowels)',
		pageTitle: 'Chapter 5: Arabic Alphabet (Fathatain)',
		bgColor: '#2c3e50',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{
		id: 'chapter6',
		data: Generate.generateChapter(Common.ARABIC_KASRAHTAIN, 'chapter6', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 6',
		desc: 'Kasratain (Double Short Vowels)',
		pageTitle: 'Chapter 6: Arabic Alphabet (Kasratain)',
		bgColor: '#f39c12',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{ 
		id: 'chapter7',
		data: Generate.generateChapter(Common.ARABIC_DAMMATAIN, 'chapter7', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 7',
		desc: 'Dummatain (Double Short Vowels)',
		pageTitle: 'Chapter 7: Arabic Alphabet (Dummatain)',
		bgColor: '#78e08f',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{
		id: 'chapter8', 
		data: FourVariation.data,
		title: 'Chapter 8',
		desc: 'Different shapes depending on the positioning within the word.',
		pageTitle: 'Chapter 8: Alphabet different shape', 
		showMessage: true, 
		message: 'Arabic alphabets which take different shapes depending on the positioning (beginning, middle or end position) within the word.',
		bgColor: '#60a3bc',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{ 
		id: 'chapter9',
		data: Generate.generateChapter(Sukun.ARABIC_SUKUN, 'chapter9', 5),
		title: 'Chapter 9',
		desc: 'Sukun',
		pageTitle: 'Chapter 9: Sukun',
		bgColor: '#B33771',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{ 
		id: 'chapter10',
		data: Generate.generateChapter(LongVowels.ARABIC_LONG_VOWELS_WITH_ALIF, 'chapter10', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 10',
		desc: 'Long Vowels with Alif',
		pageTitle: 'Chapter 10: Long Vowels with Alif',
		bgColor: '#34ace0',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{ 
		id: 'chapter11',
		data: Generate.generateChapter(LongVowels.ARABIC_LONG_VOWELS_WITH_WAW, 'chapter11', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 11',
		desc: 'Long Vowels with Waw',
		pageTitle: 'Chapter 11: Long Vowels with Waw',
		bgColor: '#ffb142',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{ 
		id: 'chapter12',
		data: Generate.generateChapter(LongVowels.ARABIC_LONG_VOWELS_WITH_YAA, 'chapter12', Constant.GENERIC.ALPHABET_ORDER),
		title: 'Chapter 12',
		desc: 'Long Vowels with Yaa',
		pageTitle: 'Chapter 12: Long Vowels with Yaa',
		bgColor: '#6ab04c',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{ 
		id: 'chapter13',
		data: Generate.generateChapter(TwoLetter.ARABIC_TWO_LETTER, 'chapter13', 5),
		title: 'Chapter 13',
		desc: 'Two Letter',
		pageTitle: 'Chapter 13: Two Letter',
		bgColor: '#eb4d4b',
		active: true,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},
	{ 
		id: 'chapter14',
		data: Generate.generateChapter(Shaddah.ARABIC_TWO_LETTER_SHADDAH, 'chapter14', 7),
		title: 'Chapter 14',
		desc: 'Shaddah',
		pageTitle: 'Chapter 14: Shaddah',
		bgColor: '#BDC581',
		active: false,
		details: 'I am trying to implement box inner shadow similar to what you can achieve using box-shadow:inset in CSS. I tried the following',
	},/*,
	{ 
		id: 'chapter10',
		data: Generate.generateChapterType1(LongVowels.ARABIC_FATHAT_LONG_VOWELS, 'chapter9'),
		title: 'Chapter 9',
		desc: 'Fathat (Long Vowels)',
		pageTitle: 'Chapter 9: Fathat (Long Vowels)'
	},
	{ 
		id: 'chapter11',
		data: Generate.generateChapterType1(LongVowels.ARABIC_KASRAH_LONG_VOWELS, 'chapter10'),
		title: 'Chapter 10',
		desc: 'Kasrah (Long Vowels)',
		pageTitle: 'Chapter 10: Kasrah (Long Vowels)'
	},
	{ 
		id: 'chapter12',
		data: Generate.generateChapterType1(LongVowels.ARABIC_DAMMAH_LONG_VOWELS, 'chapter11'),
		title: 'Chapter 11',
		desc: 'Dammah (Long Vowels)',
		pageTitle: 'Chapter 11: Dammah (Long Vowels)'
	},*/
]