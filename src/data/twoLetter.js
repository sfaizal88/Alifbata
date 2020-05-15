/**
*
* twoLetter.js
* Store all Two Letter
*
* @author - Faizal
* @date  - 9 May 2020
***/
// ALL SHARED FILES
import * as Constant from '../shared/constant';

// LOCAL VARIABLE DECLARATION
const twoLetterAudioPathPart1 = '../../assets/data/audio/twoLetter/part1/';
const twoLetterAudioPathPart2 = '../../assets/data/audio/twoLetter/part2/';

// TWO LETTER
export const ARABIC_TWO_LETTER = [
// PART 1 STARTS
{key: 1, en: 'bihi', audio: require(twoLetterAudioPathPart1 + '1-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1616;&#1607;&#1616;'},
{key: 2, en: 'bahi', audio: require(twoLetterAudioPathPart1 + '1-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1607;&#1616;'},
{key: 3, en: 'buhu', audio: require(twoLetterAudioPathPart1 + '1-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1615;&#1607;&#1615;'},
{key: 4, en: 'biha', audio: require(twoLetterAudioPathPart1 + '1-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1616;&#1607;&#1614;'},
{key: 5, en: 'buhi', audio: require(twoLetterAudioPathPart1 + '1-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1615;&#1607;&#1616;'},
{key: 6, en: 'bahu', audio: require(twoLetterAudioPathPart1 + '1-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1607;&#1615;'},
{key: 7, en: 'batu', audio: require(twoLetterAudioPathPart1 + '1-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1577;&#1615;'},
{key: 8, en: 'buti', audio: require(twoLetterAudioPathPart1 + '2-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1615;&#1577;&#1616;'},

{key: 9, en: 'tuzi', audio: require(twoLetterAudioPathPart1 + '2-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1615;&#1586;&#1616;'},
{key: 10, en: 'tazu', audio: require(twoLetterAudioPathPart1 + '2-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1586;&#1615;'},
{key: 11, en: 'tiza', audio: require(twoLetterAudioPathPart1 + '2-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1616;&#1586;&#1614;'},
{key: 12, en: 'fira', audio: require(twoLetterAudioPathPart1 + '2-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1616;&#1585;&#1614;'},
{key: 13, en: 'furi', audio: require(twoLetterAudioPathPart1 + '2-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1615;&#1585;&#1616;'},
{key: 14, en: 'faru', audio: require(twoLetterAudioPathPart1 + '2-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;&#1585;&#1615;'},
{key: 15, en: 'fakhu', audio: require(twoLetterAudioPathPart1 + '3-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;&#1582;&#1615;'},
{key: 16, en: 'khatu', audio: require(twoLetterAudioPathPart1 + '3-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1577;&#1615;'},

{key: 17, en: 'khuti', audio: require(twoLetterAudioPathPart1 + '3-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1615;&#1577;&#1616;'},
{key: 18, en: 'khitu', audio: require(twoLetterAudioPathPart1 + '3-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;&#1577;&#1615;'},
{key: 19, en: 'khiyu', audio: require(twoLetterAudioPathPart1 + '3-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;&#1610;&#1615;'},
{key: 20, en: 'khuya', audio: require(twoLetterAudioPathPart1 + '3-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1615;&#1610;&#1614;'},
{key: 21, en: 'khiya', audio: require(twoLetterAudioPathPart1 + '3-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;&#1610;&#1614;'},
{key: 22, en: 'thiHa', audio: require(twoLetterAudioPathPart1 + '4-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1616;&#1581;&#1614;'},
{key: 23, en: 'thuHu', audio: require(twoLetterAudioPathPart1 + '4-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1614;&#1581;&#1615;'},
{key: 24, en: 'thuHi', audio: require(twoLetterAudioPathPart1 + '4-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1615;&#1581;&#1616;'},

{key: 25, en: 'thuTi', audio: require(twoLetterAudioPathPart1 + '4-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1615;&#1591;&#1616;'},
{key: 26, en: 'huTi', audio: require(twoLetterAudioPathPart1 + '4-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1615;&#1591;&#1616;'},
{key: 27, en: 'hiTu', audio: require(twoLetterAudioPathPart1 + '4-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1616;&#1591;&#1615;'},
{key: 28, en: 'haTa', audio: require(twoLetterAudioPathPart1 + '4-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1614;&#1591;&#1614;'},
{key: 29, en: 'yaDha', audio: require(twoLetterAudioPathPart1 + '5-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1614;&#1592;&#1614;'},
{key: 30, en: 'yaDhu', audio: require(twoLetterAudioPathPart1 + '5-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1616;&#1592;&#1615;'},
{key: 31, en: 'yuDhi', audio: require(twoLetterAudioPathPart1 + '5-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1615;&#1592;&#1616;'},
{key: 32, en: 'midu', audio: require(twoLetterAudioPathPart1 + '5-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1616;&#1583;&#1615;'},

{key: 33, en: 'midu', audio: require(twoLetterAudioPathPart1 + '5-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1615;&#1583;&#1616;'},
{key: 34, en: 'mada', audio: require(twoLetterAudioPathPart1 + '5-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1583;&#1614;'},
{key: 35, en: 'mata', audio: require(twoLetterAudioPathPart1 + '5-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1577;&#1614;'},
{key: 36, en: 'lidhu', audio: require(twoLetterAudioPathPart1 + '6-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1584;&#1615;'},
{key: 37, en: 'ludhi', audio: require(twoLetterAudioPathPart1 + '6-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1615;&#1584;&#1616;'},
{key: 38, en: 'ladha', audio: require(twoLetterAudioPathPart1 + '6-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1584;&#1614;'},
{key: 39, en: 'liza', audio: require(twoLetterAudioPathPart1 + '6-8.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1586;&#1614;'},
// PART 1 ENDS
// PART 2 STARTS
{key: 40, en: 'awu', audio: require(twoLetterAudioPathPart1 + '1-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1608;&#1615;'}, 

 
{key: 41, en: 'fiwa', audio: require(twoLetterAudioPathPart2 + '1-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1616;&#1608;&#1614;'}, // CHECK
{key: 42, en: 'subu', audio: require(twoLetterAudioPathPart2 + '1-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1615;&#1576;&#1615;'},
{key: 43, en: 'Hiti', audio: require(twoLetterAudioPathPart2 + '1-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1616;&#1578;&#1616;'},
{key: 44, en: 'jasha', audio: require(twoLetterAudioPathPart2 + '1-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1588;&#1614;'},
{key: 45, en: 'idu', audio: require(twoLetterAudioPathPart2 + '1-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1616;&#1583;&#1615;'},
{key: 46, en: 'lidu', audio: require(twoLetterAudioPathPart2 + '1-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1583;&#1615;'},
{key: 47, en: 'aba', audio: require(twoLetterAudioPathPart2 + '2-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1576;&#1614;'},
{key: 48, en: 'tithi', audio: require(twoLetterAudioPathPart2 + '2-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1616;&#1579;&#1616;'},

{key: 49, en: 'juju', audio: require(twoLetterAudioPathPart2 + '2-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1615;&#1580;&#1615;'},
{key: 50, en: 'dadha', audio: require(twoLetterAudioPathPart2 + '2-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1614;&#1584;&#1614;'},
{key: 51, en: 'khisi', audio: require(twoLetterAudioPathPart2 + '2-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;&#1587;&#1616;'},
{key: 52, en: 'sumu', audio: require(twoLetterAudioPathPart2 + '2-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1615;&#1605;&#1615;'},

{key: 53, en: 'zihi', audio: require(twoLetterAudioPathPart2 + '3-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1616;&#1607;&#1616;'},
{key: 54, en: 'Sunu', audio: require(twoLetterAudioPathPart2 + '3-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1615;&#1606;&#1615;'},
{key: 55, en: 'wala', audio: require(twoLetterAudioPathPart2 + '3-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1614;&#1604;&#1614;'},
{key: 56, en: 'fiTi', audio: require(twoLetterAudioPathPart2 + '3-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1616;&#1591;&#1616;'},
{key: 57, en: 'quDhu', audio: require(twoLetterAudioPathPart2 + '3-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1615;&#1592;&#1615;'},
{key: 58, en: 'DaHa', audio: require(twoLetterAudioPathPart2 + '3-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1614;&#1581;&#1614;'},
{key: 59, en: 'yukhu', audio: require(twoLetterAudioPathPart2 + '3-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1615;&#1582;&#1615;'},

{key: 60, en: 'wudha', audio: require(twoLetterAudioPathPart2 + '4-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1615;&#1584;&#1614;'},
{key: 61, en: 'mudhi', audio: require(twoLetterAudioPathPart2 + '4-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1615;&#1584;&#1616;'},
{key: 62, en: 'nidhu', audio: require(twoLetterAudioPathPart2 + '4-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1616;&#1584;&#1615;'},
{key: 63, en: 'lara', audio: require(twoLetterAudioPathPart2 + '4-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1585;&#1614;'},

{key: 64, en: 'lila', audio: require(twoLetterAudioPathPart2 + '5-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1604;&#1614;'},
{key: 65, en: 'lisa', audio: require(twoLetterAudioPathPart2 + '5-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1587;&#1614;'},
{key: 66, en: 'afa', audio: require(twoLetterAudioPathPart2 + '5-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1601;&#1614;'},
{key: 67, en: 'laka', audio: require(twoLetterAudioPathPart2 + '5-7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1603;&#1614;'},

{key: 68, en: 'ruzu', audio: require(twoLetterAudioPathPart2 + '6-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1615;&#1586;&#1615;'},
{key: 69, en: 'u‘Sa', audio: require(twoLetterAudioPathPart2 + '6-3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1615;&#1589;&#1614;'},
{key: 70, en: 'ghiza', audio: require(twoLetterAudioPathPart2 + '6-4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1616;&#1586;&#1614;'},
{key: 71, en: 'liwu', audio: require(twoLetterAudioPathPart2 + '6-5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1608;&#1615;'},
{key: 72, en: 'kaTi', audio: require(twoLetterAudioPathPart2 + '6-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1591;&#1616;'},

{key: 73, en: 'wau‘', audio: require(twoLetterAudioPathPart2 + '7-1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1569;&#1614;&#1593;&#1615;'},
{key: 74, en: 'i‘qa', audio: require(twoLetterAudioPathPart2 + '7-2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1616;&#1602;&#1614;'},
{key: 75, en: 'lilu', audio: require(twoLetterAudioPathPart2 + '7-6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1604;&#1615;'},
{key: 76, en: 'kila', audio: require(twoLetterAudioPathPart2 + '7-8.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1616;&#1604;&#1614;'},
// PART 2 ENDS
];