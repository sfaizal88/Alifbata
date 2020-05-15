/**
*
* chapter4.js
* Conatin Arabic alphabets in Four variation
*
* @author - Faizal
* @date   - 6 May 2020
*
***/
// ALL SHARED FILES
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';
import * as Common from './common';

// DECLARE LOCAL VARIABLE
const chapter = 'chapter8';
const randomObj = {id: 1, type: 'R', data: Common.ARABIC_DAMMATAIN};

// CHAPTER 7 DATAS
export const data = [
	{
		id: 1,
		title: 'Lesson 1',
		desc: Utils.joinArabic([Common.ARABIC_ALPHABET[0]]),
		get pageTitle() { return this.title +': '+ this.desc},
		chapter: chapter,
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		data: [
			Common.ARABIC_4_VARIATION[0], 
			Common.ARABIC_4_TYPE[0], 
			Common.ARABIC_4_TYPE[1], 
			Common.ARABIC_4_TYPE[2], 
			Common.ARABIC_4_TYPE[3],
			Common.COMMON_SECTION[0]
		]
	}, 
	{
		id: 2,
		title: 'Lesson 2',
		desc: Utils.joinArabic([Common.ARABIC_ALPHABET[1], Common.ARABIC_ALPHABET[2], Common.ARABIC_ALPHABET[3]]),
		get pageTitle() { return this.title +': '+ this.desc},
		chapter: chapter,
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		data: [
			Common.ARABIC_4_VARIATION[1], 
			Common.ARABIC_4_TYPE[4], 
			Common.ARABIC_4_TYPE[5], 
			Common.ARABIC_4_TYPE[6], 
			Common.ARABIC_4_TYPE[7],
			Common.ARABIC_4_VARIATION[2], 
			Common.ARABIC_4_TYPE[8], 
			Common.ARABIC_4_TYPE[9], 
			Common.ARABIC_4_TYPE[10], 
			Common.ARABIC_4_TYPE[11],
			Common.ARABIC_4_VARIATION[3],  
			Common.ARABIC_4_TYPE[12], 
			Common.ARABIC_4_TYPE[13], 
			Common.ARABIC_4_TYPE[14], 
			Common.ARABIC_4_TYPE[15],
			Common.COMMON_SECTION[0]
		]
	}, 
	{
		id: 3,
		title: 'Lesson 3',
		desc: Utils.joinArabic([Common.ARABIC_ALPHABET[4], Common.ARABIC_ALPHABET[5], Common.ARABIC_ALPHABET[6]]),
		get pageTitle() { return this.title +': '+ this.desc},
		chapter: chapter,
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		data: [
			Common.ARABIC_4_VARIATION[4], 
			Common.ARABIC_4_TYPE[16], 
			Common.ARABIC_4_TYPE[17], 
			Common.ARABIC_4_TYPE[18], 
			Common.ARABIC_4_TYPE[19],
			Common.ARABIC_4_VARIATION[5], 
			Common.ARABIC_4_TYPE[20], 
			Common.ARABIC_4_TYPE[21], 
			Common.ARABIC_4_TYPE[22], 
			Common.ARABIC_4_TYPE[23],
			Common.ARABIC_4_VARIATION[6], 
			Common.ARABIC_4_TYPE[24], 
			Common.ARABIC_4_TYPE[25], 
			Common.ARABIC_4_TYPE[26], 
			Common.ARABIC_4_TYPE[27],
			Common.COMMON_SECTION[0]
		]
	}, 
	{
		id: 4,
		title: 'Lesson 4',
		desc: Utils.joinArabic([Common.ARABIC_ALPHABET[7], Common.ARABIC_ALPHABET[8], Common.ARABIC_ALPHABET[9], Common.ARABIC_ALPHABET[10]]),
		get pageTitle() { return this.title +': '+ this.desc},
		chapter: chapter,
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		data: [
			Common.ARABIC_4_VARIATION[7],
			Common.ARABIC_4_TYPE[28], 
			Common.ARABIC_4_TYPE[29], 
			Common.ARABIC_4_TYPE[30], 
			Common.ARABIC_4_TYPE[31],
			Common.ARABIC_4_VARIATION[8],
			Common.ARABIC_4_TYPE[32], 
			Common.ARABIC_4_TYPE[33], 
			Common.ARABIC_4_TYPE[34], 
			Common.ARABIC_4_TYPE[35],
			Common.ARABIC_4_VARIATION[9],
			Common.ARABIC_4_TYPE[36], 
			Common.ARABIC_4_TYPE[37], 
			Common.ARABIC_4_TYPE[38], 
			Common.ARABIC_4_TYPE[39],
			Common.ARABIC_4_VARIATION[10],
			Common.ARABIC_4_TYPE[40], 
			Common.ARABIC_4_TYPE[41], 
			Common.ARABIC_4_TYPE[42], 
			Common.ARABIC_4_TYPE[43],
			Common.COMMON_SECTION[0]
		]
	}, 
	{
		id: 5,
		title: 'Lesson 5',
		desc: Utils.joinArabic([Common.ARABIC_ALPHABET[11], Common.ARABIC_ALPHABET[12], Common.ARABIC_ALPHABET[13], Common.ARABIC_ALPHABET[14]]),
		get pageTitle() { return this.title +': '+ this.desc},
		chapter: chapter,
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		data: [
			Common.ARABIC_4_VARIATION[11],
			Common.ARABIC_4_TYPE[44], 
			Common.ARABIC_4_TYPE[45], 
			Common.ARABIC_4_TYPE[46], 
			Common.ARABIC_4_TYPE[47],
			Common.ARABIC_4_VARIATION[12],
			Common.ARABIC_4_TYPE[48], 
			Common.ARABIC_4_TYPE[49], 
			Common.ARABIC_4_TYPE[50], 
			Common.ARABIC_4_TYPE[51],
			Common.ARABIC_4_VARIATION[13],
			Common.ARABIC_4_TYPE[52], 
			Common.ARABIC_4_TYPE[53], 
			Common.ARABIC_4_TYPE[54], 
			Common.ARABIC_4_TYPE[55],
			Common.ARABIC_4_VARIATION[14],
			Common.ARABIC_4_TYPE[56], 
			Common.ARABIC_4_TYPE[57], 
			Common.ARABIC_4_TYPE[58], 
			Common.ARABIC_4_TYPE[59],
			Common.COMMON_SECTION[0]
		]
	}, 
	{
		id: 6,
		title: 'Lesson 6',
		desc: Utils.joinArabic([Common.ARABIC_ALPHABET[15], Common.ARABIC_ALPHABET[16], Common.ARABIC_ALPHABET[17], Common.ARABIC_ALPHABET[18]]),
		get pageTitle() { return this.title +': '+ this.desc},
		chapter: chapter,
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		data: [
			Common.ARABIC_4_VARIATION[15],
			Common.ARABIC_4_TYPE[60], 
			Common.ARABIC_4_TYPE[61], 
			Common.ARABIC_4_TYPE[62], 
			Common.ARABIC_4_TYPE[63],
			Common.ARABIC_4_VARIATION[16],
			Common.ARABIC_4_TYPE[64], 
			Common.ARABIC_4_TYPE[65], 
			Common.ARABIC_4_TYPE[66], 
			Common.ARABIC_4_TYPE[67],
			Common.ARABIC_4_VARIATION[17],
			Common.ARABIC_4_TYPE[68], 
			Common.ARABIC_4_TYPE[69], 
			Common.ARABIC_4_TYPE[70], 
			Common.ARABIC_4_TYPE[71],
			Common.ARABIC_4_VARIATION[18],
			Common.ARABIC_4_TYPE[72], 
			Common.ARABIC_4_TYPE[73], 
			Common.ARABIC_4_TYPE[74], 
			Common.ARABIC_4_TYPE[75],
			Common.COMMON_SECTION[0]
		]
	}, 
	{
		id: 7,
		title: 'Lesson 7',
		desc: Utils.joinArabic([Common.ARABIC_ALPHABET[19], Common.ARABIC_ALPHABET[20], Common.ARABIC_ALPHABET[21]]),
		get pageTitle() { return this.title +': '+ this.desc},
		chapter: chapter,
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		data: [
			Common.ARABIC_4_VARIATION[19],
			Common.ARABIC_4_TYPE[76], 
			Common.ARABIC_4_TYPE[77], 
			Common.ARABIC_4_TYPE[78], 
			Common.ARABIC_4_TYPE[79],
			Common.ARABIC_4_VARIATION[20],
			Common.ARABIC_4_TYPE[80], 
			Common.ARABIC_4_TYPE[81], 
			Common.ARABIC_4_TYPE[82], 
			Common.ARABIC_4_TYPE[83],
			Common.ARABIC_4_VARIATION[21],
			Common.ARABIC_4_TYPE[84], 
			Common.ARABIC_4_TYPE[85], 
			Common.ARABIC_4_TYPE[86], 
			Common.ARABIC_4_TYPE[87],
			Common.COMMON_SECTION[0]
		]
	}, 
	{
		id: 8,
		title: 'Lesson 8',
		desc: Utils.joinArabic([Common.ARABIC_ALPHABET[22], Common.ARABIC_ALPHABET[23], Common.ARABIC_ALPHABET[24]]),
		get pageTitle() { return this.title +': '+ this.desc},
		chapter: chapter,
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		data: [
			Common.ARABIC_4_VARIATION[22],
			Common.ARABIC_4_TYPE[88], 
			Common.ARABIC_4_TYPE[89], 
			Common.ARABIC_4_TYPE[90], 
			Common.ARABIC_4_TYPE[91],
			Common.ARABIC_4_VARIATION[23],
			Common.ARABIC_4_TYPE[92], 
			Common.ARABIC_4_TYPE[93], 
			Common.ARABIC_4_TYPE[94], 
			Common.ARABIC_4_TYPE[95],
			Common.ARABIC_4_VARIATION[24],
			Common.ARABIC_4_TYPE[96], 
			Common.ARABIC_4_TYPE[97], 
			Common.ARABIC_4_TYPE[98], 
			Common.ARABIC_4_TYPE[99],
			Common.COMMON_SECTION[0]
		]
	}, 
	{
		id: 9,
		title: 'Lesson 9',
		desc: Utils.joinArabic([Common.ARABIC_ALPHABET[25], Common.ARABIC_ALPHABET[26], Common.ARABIC_ALPHABET[27]]),
		get pageTitle() { return this.title +': '+ this.desc},
		chapter: chapter,
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		data: [
			Common.ARABIC_4_VARIATION[25],
			Common.ARABIC_4_TYPE[100], 
			Common.ARABIC_4_TYPE[101], 
			Common.ARABIC_4_TYPE[102], 
			Common.ARABIC_4_TYPE[103],
			Common.ARABIC_4_VARIATION[26],
			Common.ARABIC_4_TYPE[104], 
			Common.ARABIC_4_TYPE[105], 
			Common.ARABIC_4_TYPE[106], 
			Common.ARABIC_4_TYPE[107],
			Common.ARABIC_4_VARIATION[27],
			Common.ARABIC_4_TYPE[108], 
			Common.ARABIC_4_TYPE[109], 
			Common.ARABIC_4_TYPE[110], 
			Common.ARABIC_4_TYPE[111],
			Common.COMMON_SECTION[0]
		]
	}, 
	{
		id: 10,
		title: 'Exercise',
		desc: 'Arabic Alphabet',
		get pageTitle() { return this.title +': '+ this.desc},
		chapter: chapter,
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		data: [
			{id: 1, ...randomObj}, {id: 2, ...randomObj}, {id: 3, ...randomObj},
			{id: 4, ...randomObj}, {id: 5, ...randomObj}, {id: 6, ...randomObj},
			{id: 7, ...randomObj}, {id: 8, ...randomObj}, {id: 9, ...randomObj},
			{id: 10, ...randomObj}, {id: 11, ...randomObj}, {id: 12, ...randomObj},
			Common.COMMON_SECTION[0]
		]
	}
]