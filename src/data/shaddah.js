/**
*
* Shaddah.js
* Store all Two Letter with Shaddah
*
* @author - Faizal
* @date  - 9 May 2020
***/
// ALL SHARED FILES
import * as Constant from '../shared/constant';

// LOCAL VARIABLE DECLARATION
const twoLetterShaddahAudioPathPart1 = '../../assets/data/audio/shaddah/part1/';
const twoLetterShaddahAudioPathPart2 = '../../assets/data/audio/shaddah/part2/';

// TWO LETTER
export const ARABIC_TWO_LETTER_SHADDAH = [
// PART 1 STARTS
{key: 1, en: 'ab', audio: require(twoLetterShaddahAudioPathPart1 + '1-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1616;&#1607;&#64610;'},
{key: 2, en: 'lab', audio: require(twoLetterShaddahAudioPathPart1 + '1-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1607;&#64610;'},
{key: 3, en: 'sab', audio: require(twoLetterShaddahAudioPathPart1 + '1-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1615;&#1607;&#64609;'},
{key: 4, en: 'Hab', audio: require(twoLetterShaddahAudioPathPart1 + '1-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1616;&#1607;&#64608;'},
{key: 5, en: 'ab', audio: require(twoLetterShaddahAudioPathPart1 + '1-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1615;&#1607;&#64610;'},
{key: 6, en: 'shab', audio: require(twoLetterShaddahAudioPathPart1 + '1-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1607;&#64609;'},
{key: 7, en: 'dab', audio: require(twoLetterShaddahAudioPathPart1 + '1-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1577;&#64609;'},
{key: 8, en: 'Tab', audio: require(twoLetterShaddahAudioPathPart1 + '2-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1615;&#1577;&#64610;'},

{key: 9, en: 'Tam', audio: require(twoLetterShaddahAudioPathPart1 + '2-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1615;&#1586;&#64610;'},
{key: 10, en: 'lam', audio: require(twoLetterShaddahAudioPathPart1 + '2-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1586;&#64609;'},
{key: 11, en: 'sam', audio: require(twoLetterShaddahAudioPathPart1 + '2-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1616;&#1586;&#64608;'},
{key: 12, en: 'sham', audio: require(twoLetterShaddahAudioPathPart1 + '2-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1616;&#1585;&#64608;'},
{key: 13, en: 'dam', audio: require(twoLetterShaddahAudioPathPart1 + '2-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1615;&#1585;&#64610;'},
{key: 14, en: 'dham', audio: require(twoLetterShaddahAudioPathPart1 + '2-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;&#1585;&#64609;'},
{key: 15, en: '‘am', audio: require(twoLetterShaddahAudioPathPart1 + '3-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;&#1582;&#64609;'},
{key: 16, en: '‘ad', audio: require(twoLetterShaddahAudioPathPart1 + '3-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1577;&#64609;'},

{key: 17, en: 'qad', audio: require(twoLetterShaddahAudioPathPart1 + '3-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1615;&#1577;&#64610;'},
{key: 18, en: 'jad', audio: require(twoLetterShaddahAudioPathPart1 + '3-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;&#1577;&#64609;'},
{key: 19, en: 'jan', audio: require(twoLetterShaddahAudioPathPart1 + '3-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;&#1610;&#64609;'},
{key: 20, en: 'tan', audio: require(twoLetterShaddahAudioPathPart1 + '3-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1615;&#1610;&#64608;'},
{key: 21, en: 'Dhan', audio: require(twoLetterShaddahAudioPathPart1 + '3-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;&#1610;&#64608;'},
{key: 22, en: 'Han', audio: require(twoLetterShaddahAudioPathPart1 + '4-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1616;&#1581;&#64608;'},
{key: 23, en: 'Haj', audio: require(twoLetterShaddahAudioPathPart1 + '4-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1614;&#1581;&#64609;'},
{key: 24, en: 'faj', audio: require(twoLetterShaddahAudioPathPart1 + '4-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1615;&#1581;&#64610;'},

{key: 25, en: 'jaj', audio: require(twoLetterShaddahAudioPathPart1 + '4-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1615;&#1591;&#64610;'},
{key: 26, en: 'maj', audio: require(twoLetterShaddahAudioPathPart1 + '4-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1615;&#1591;&#64610;'},
{key: 27, en: 'maq', audio: require(twoLetterShaddahAudioPathPart1 + '4-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1616;&#1591;&#64609;'},
{key: 28, en: 'thaq', audio: require(twoLetterShaddahAudioPathPart1 + '4-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1614;&#1591;&#64608;'},
{key: 29, en: 'baq', audio: require(twoLetterShaddahAudioPathPart1 + '5-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1614;&#1592;&#64608;'},
{key: 30, en: 'bal', audio: require(twoLetterShaddahAudioPathPart1 + '5-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1616;&#1592;&#64609;'},
{key: 31, en: 'mal', audio: require(twoLetterShaddahAudioPathPart1 + '5-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1615;&#1592;&#64610;'},
{key: 32, en: 'tal', audio: require(twoLetterShaddahAudioPathPart1 + '5-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1616;&#1583;&#64609;'},

{key: 33, en: 'kal', audio: require(twoLetterShaddahAudioPathPart1 + '5-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1615;&#1583;&#64610;'},
{key: 34, en: 'kar', audio: require(twoLetterShaddahAudioPathPart1 + '5-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1583;&#64608;'},
{key: 35, en: 'bar', audio: require(twoLetterShaddahAudioPathPart1 + '5-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1577;&#64608;'},
{key: 36, en: 'nar', audio: require(twoLetterShaddahAudioPathPart1 + '6-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1584;&#64609;'},
{key: 37, en: 'jar', audio: require(twoLetterShaddahAudioPathPart1 + '6-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1615;&#1584;&#64610;'},
{key: 38, en: 'jat', audio: require(twoLetterShaddahAudioPathPart1 + '6-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1584;&#64608;'},
{key: 39, en: 'hat', audio: require(twoLetterShaddahAudioPathPart1 + '6-8.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1586;&#64608;'},
// PART 1 ENDS
// PART 2 STARTS
{key: 40, en: 'faq', audio: require(twoLetterShaddahAudioPathPart1 + '1-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1608;&#64609;'}, 

 
{key: 41, en: 'mat', audio: require(twoLetterShaddahAudioPathPart2 + '1-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1616;&#1608;&#64608;'}, // CHECK
{key: 42, en: 'mah', audio: require(twoLetterShaddahAudioPathPart2 + '1-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1615;&#1576;&#64609;'},
{key: 43, en: 'sah', audio: require(twoLetterShaddahAudioPathPart2 + '1-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1616;&#1578;&#64610;'},
{key: 44, en: 'bah', audio: require(twoLetterShaddahAudioPathPart2 + '1-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1588;&#64608;'},
{key: 45, en: 'tah', audio: require(twoLetterShaddahAudioPathPart2 + '1-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1616;&#1583;&#64609;'},
{key: 46, en: 'tath', audio: require(twoLetterShaddahAudioPathPart2 + '1-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1583;&#64609;'},
{key: 47, en: 'hath', audio: require(twoLetterShaddahAudioPathPart2 + '2-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1576;&#64608;'},
{key: 48, en: 'qath', audio: require(twoLetterShaddahAudioPathPart2 + '2-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1616;&#1579;&#64610;'},

{key: 49, en: 'fath', audio: require(twoLetterShaddahAudioPathPart2 + '2-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1615;&#1580;&#64609;'},
{key: 50, en: 'faH', audio: require(twoLetterShaddahAudioPathPart2 + '2-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1614;&#1584;&#64608;'},
{key: 51, en: 'saH', audio: require(twoLetterShaddahAudioPathPart2 + '2-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;&#1587;&#64610;'},
{key: 52, en: 'shah', audio: require(twoLetterShaddahAudioPathPart2 + '2-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1615;&#1605;&#64609;'},

{key: 53, en: 'shakh', audio: require(twoLetterShaddahAudioPathPart2 + '3-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1616;&#1607;&#64610;'},
{key: 54, en: 'Takh', audio: require(twoLetterShaddahAudioPathPart2 + '3-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1615;&#1606;&#64609;'},
{key: 55, en: 'DaH', audio: require(twoLetterShaddahAudioPathPart2 + '3-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1614;&#1604;&#64608;'},
{key: 56, en: 'lakh', audio: require(twoLetterShaddahAudioPathPart2 + '3-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1616;&#1591;&#64610;'},
{key: 57, en: 'laD', audio: require(twoLetterShaddahAudioPathPart2 + '3-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1615;&#1592;&#64609;'},
{key: 58, en: 'kaD', audio: require(twoLetterShaddahAudioPathPart2 + '3-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1614;&#1581;&#64608;'},
{key: 59, en: '‘aD', audio: require(twoLetterShaddahAudioPathPart2 + '3-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1615;&#1582;&#64609;'},

{key: 60, en: '‘aD', audio: require(twoLetterShaddahAudioPathPart2 + '4-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1615;&#1584;&#64608;'},
{key: 61, en: 'ghaT', audio: require(twoLetterShaddahAudioPathPart2 + '4-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1615;&#1584;&#64610;'},
{key: 62, en: 'baT', audio: require(twoLetterShaddahAudioPathPart2 + '4-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1616;&#1584;&#64609;'},
{key: 63, en: 'bagh', audio: require(twoLetterShaddahAudioPathPart2 + '4-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1585;&#64608;'},

{key: 64, en: 'faqh', audio: require(twoLetterShaddahAudioPathPart2 + '5-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1604;&#64608;'},
{key: 65, en: 'nagh', audio: require(twoLetterShaddahAudioPathPart2 + '5-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1587;&#64608;'},
{key: 66, en: 'naqh', audio: require(twoLetterShaddahAudioPathPart2 + '5-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1601;&#64608;'},
{key: 67, en: 'baqh', audio: require(twoLetterShaddahAudioPathPart2 + '5-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1603;&#64608;'},

{key: 68, en: 'Dhaqh', audio: require(twoLetterShaddahAudioPathPart2 + '6-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1615;&#1586;&#64609;'},
{key: 69, en: 'Dhak', audio: require(twoLetterShaddahAudioPathPart2 + '6-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1615;&#1589;&#64608;'},
{key: 70, en: 'sak', audio: require(twoLetterShaddahAudioPathPart2 + '6-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1616;&#1586;&#64608;'},
{key: 71, en: 'shak', audio: require(twoLetterShaddahAudioPathPart2 + '6-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1608;&#64609;'},
{key: 72, en: 'shagh', audio: require(twoLetterShaddahAudioPathPart2 + '6-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1591;&#64610;'},

{key: 73, en: 'Sagh', audio: require(twoLetterShaddahAudioPathPart2 + '7-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1614;&#1593;&#64609;'},
{key: 74, en: 'magh', audio: require(twoLetterShaddahAudioPathPart2 + '7-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1616;&#1602;&#64608;'},
{key: 75, en: 'maDh', audio: require(twoLetterShaddahAudioPathPart2 + '7-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1604;&#64609;'},
{key: 76, en: 'jaDh', audio: require(twoLetterShaddahAudioPathPart2 + '7-8.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1616;&#1604;&#64608;'},
// PART 2 ENDS
];