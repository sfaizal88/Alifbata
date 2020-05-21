/**
*
* sukun.js
* Store all Sukun
*
* @author - Faizal
* @date  - 8 May 2020
***/
// ALL SHARED FILES
import * as Constant from '../shared/constant';

// UPPER - 1614
// LOWER - 1616
// MIDDLE E - 1615
// SUKUN - 1618

// ALIF - 1575 - ا
// BA - 1576 - ب
// TA - 1578 - ت’
// THA - 1579 - ث
// Jeem - 1580 - ج
// Hha - 1581 - ح
// Kha - 1582 - خ
// Dal - 1583 - د
// Dhal - 1584 - ذ
// Ra - 1585 - ر
// Za - 1586 - ز
// Seen - 1587 - س
// Sheen - 1588 - ش
// Saad - 1589 - ص
// Daad - 1590 - ض
// Toh - 1591 - ط
// Thoh - 1592 - ظ
// Ayn - 1593 - ع
// Ghayn - 1594 - غ
// Fa - 1601 - ف
// Qaf - 1602 - ق
// Kaf - 1603 - ك
// Lam - 1604 - ل
// Meem - 1605 - م
// Noon - 1606 - ن
// Ha - 1607 - ه
// Wao - 1608 - و
// Ya - 1610 - ي
// LOCAL VARIABLE DECLARATION
const sukunAudioPathPart1 = '../../assets/data/audio/sukun/part1/';
const sukunAudioPathPart2 = '../../assets/data/audio/sukun/part2/';
const sukunAudioPathPart3 = '../../assets/data/audio/sukun/part3/';
const sukunAudioPathPart4 = '../../assets/data/audio/sukun/part4/';

// SUKUN VARIABLE , SHOULD NOT MULTIPLE OF 8
export const ARABIC_SUKUN = [
// PART 1 STARTS
//{key: 1, en: 'Hab', audio: require(sukunAudioPathPart1 + 'ab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1576;'+Constant.SUKUN},
{key: 2, en: 'lab', audio: require(sukunAudioPathPart1 + 'lab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1576;'+Constant.SUKUN},
{key: 3, en: 'sab', audio: require(sukunAudioPathPart1 + 'sab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1576;'+Constant.SUKUN},
{key: 4, en: 'hab', audio: require(sukunAudioPathPart1 + 'Hab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1614;&#1576;'+Constant.SUKUN},
{key: 5, en: 'ab', audio: require(sukunAudioPathPart1 + 'ab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1576;'+Constant.SUKUN},
{key: 6, en: 'shab', audio: require(sukunAudioPathPart1 + 'shab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1576;'+Constant.SUKUN},
{key: 7, en: 'dab', audio: require(sukunAudioPathPart1 + 'dab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1614;&#1576;'+Constant.SUKUN},
{key: 8, en: 'Tab', audio: require(sukunAudioPathPart1 + 'Tab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1614;&#1576;'+Constant.SUKUN},

{key: 9, en: 'Tam', audio: require(sukunAudioPathPart1 + 'Tam.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1614;&#1605;'+Constant.SUKUN},
{key: 10, en: 'lam', audio: require(sukunAudioPathPart1 + 'lam.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1605;'+Constant.SUKUN},
{key: 11, en: 'sam', audio: require(sukunAudioPathPart1 + 'sam.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1605;'+Constant.SUKUN},
{key: 12, en: 'sham', audio: require(sukunAudioPathPart1 + 'sham.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1605;'+Constant.SUKUN},
{key: 13, en: 'dam', audio: require(sukunAudioPathPart1 + 'dam.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1614;&#1605;'+Constant.SUKUN},
{key: 14, en: 'dham', audio: require(sukunAudioPathPart1 + 'dham.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;&#1614;&#1605;'+Constant.SUKUN},
{key: 15, en: 'a‘m', audio: require(sukunAudioPathPart1 + 'am1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1614;&#1605;'+Constant.SUKUN},
{key: 16, en: 'a‘d', audio: require(sukunAudioPathPart1 + 'ad1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1614;&#1583;'+Constant.SUKUN},

{key: 17, en: 'qad', audio: require(sukunAudioPathPart1 + 'qad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1614;&#1583;'+Constant.SUKUN},
{key: 18, en: 'jad', audio: require(sukunAudioPathPart1 + 'jad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1583;'+Constant.SUKUN},
{key: 19, en: 'jan', audio: require(sukunAudioPathPart1 + 'jan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1606;'+Constant.SUKUN},
{key: 20, en: 'tan', audio: require(sukunAudioPathPart1 + 'tan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1606;'+Constant.SUKUN},
{key: 21, en: 'Dhan', audio: require(sukunAudioPathPart1 + 'Dhan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1614;&#1606;'+Constant.SUKUN},
{key: 22, en: 'Han', audio: require(sukunAudioPathPart1 + 'Han.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1614;&#1606;'+Constant.SUKUN},
{key: 23, en: 'Haj', audio: require(sukunAudioPathPart1 + 'Haj.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1614;&#1580;'+Constant.SUKUN},
{key: 24, en: 'faj', audio: require(sukunAudioPathPart1 + 'faj.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;&#1580;'+Constant.SUKUN},

{key: 25, en: 'jaj', audio: require(sukunAudioPathPart1 + 'jaj.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1580;'+Constant.SUKUN},
{key: 26, en: 'maj', audio: require(sukunAudioPathPart1 + 'maj.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1580;'+Constant.SUKUN},
{key: 27, en: 'maq', audio: require(sukunAudioPathPart1 + 'maq.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1602;'+Constant.SUKUN},
{key: 28, en: 'thaq', audio: require(sukunAudioPathPart1 + 'thaq.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1614;&#1602;'+Constant.SUKUN},
{key: 29, en: 'faq', audio: require(sukunAudioPathPart1 + 'faq.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;&#1602;'+Constant.SUKUN},
{key: 30, en: 'baq', audio: require(sukunAudioPathPart1 + 'baq.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1602;'+Constant.SUKUN},
{key: 31, en: 'bal', audio: require(sukunAudioPathPart1 + 'bal.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1604;'+Constant.SUKUN},
{key: 32, en: 'mal', audio: require(sukunAudioPathPart1 + 'mal.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1604;'+Constant.SUKUN},

{key: 33, en: 'tal', audio: require(sukunAudioPathPart1 + 'tal.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1604;'+Constant.SUKUN},
{key: 34, en: 'kal', audio: require(sukunAudioPathPart1 + 'kal.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1604;'+Constant.SUKUN},
{key: 35, en: 'kar', audio: require(sukunAudioPathPart1 + 'kar.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1585;'+Constant.SUKUN},
// PART 1 ENDS
// PART 2 STARTS 
{key: 36, en: 'bar', audio: require(sukunAudioPathPart2 + 'bar.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1585;'+Constant.SUKUN},
{key: 37, en: 'nar', audio: require(sukunAudioPathPart2 + 'nar.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1614;&#1585;'+Constant.SUKUN},
{key: 38, en: 'jar', audio: require(sukunAudioPathPart2 + 'jar.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1585;'+Constant.SUKUN},
{key: 39, en: 'jat', audio: require(sukunAudioPathPart2 + 'jat.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1578;'+Constant.SUKUN},
{key: 40, en: 'Hat', audio: require(sukunAudioPathPart2 + 'hat.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1614;&#1578;'+Constant.SUKUN},

{key: 41, en: 'mat', audio: require(sukunAudioPathPart2 + 'mat.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1578;'+Constant.SUKUN},
{key: 42, en: 'mah', audio: require(sukunAudioPathPart2 + 'mah.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1607;'+Constant.SUKUN},
{key: 43, en: 'sah', audio: require(sukunAudioPathPart2 + 'sah.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1607;'+Constant.SUKUN},
{key: 44, en: 'bah', audio: require(sukunAudioPathPart2 + 'bah.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1607;'+Constant.SUKUN},
{key: 45, en: 'tah', audio: require(sukunAudioPathPart2 + 'tah.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1607;'+Constant.SUKUN},
{key: 46, en: 'tath', audio: require(sukunAudioPathPart2 + 'tath.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1579;'+Constant.SUKUN},
{key: 47, en: 'hath', audio: require(sukunAudioPathPart2 + 'hath.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1614;&#1579;'+Constant.SUKUN},
{key: 48, en: 'qath', audio: require(sukunAudioPathPart2 + 'qath.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1614;&#1579;'+Constant.SUKUN},

{key: 49, en: 'fath', audio: require(sukunAudioPathPart2 + 'fath.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;&#1579;'+Constant.SUKUN},
{key: 50, en: 'faH', audio: require(sukunAudioPathPart2 + 'faH.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;&#1581;'+Constant.SUKUN},
{key: 51, en: 'saH', audio: require(sukunAudioPathPart2 + 'saH1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1581;'+Constant.SUKUN},
{key: 52, en: 'shaH', audio: require(sukunAudioPathPart2 + 'shah.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1581;'+Constant.SUKUN},
{key: 53, en: 'shakh', audio: require(sukunAudioPathPart2 + 'shakh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1582;'+Constant.SUKUN},
{key: 54, en: 'Takh', audio: require(sukunAudioPathPart2 + 'Takh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1614;&#1582;'+Constant.SUKUN},
{key: 55, en: 'DaH', audio: require(sukunAudioPathPart2 + 'DaH.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1614;&#1581;'+Constant.SUKUN},
{key: 56, en: 'lakh', audio: require(sukunAudioPathPart2 + 'lakh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1582;'+Constant.SUKUN},

{key: 57, en: 'laD', audio: require(sukunAudioPathPart2 + 'laD.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1590;'+Constant.SUKUN},
{key: 58, en: 'kaD', audio: require(sukunAudioPathPart2 + 'kaD.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1590;'+Constant.SUKUN},
{key: 59, en: '‘aD', audio: require(sukunAudioPathPart2 + 'aD.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1614;&#1590;'+Constant.SUKUN},
{key: 60, en: 'Had', audio: require(sukunAudioPathPart2 + 'aD1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1614;&#1590;'+Constant.SUKUN},
{key: 61, en: 'ghaT', audio: require(sukunAudioPathPart2 + 'ghaT.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1614;&#1591;'+Constant.SUKUN},
{key: 62, en: 'baT', audio: require(sukunAudioPathPart2 + 'baT.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1591;'+Constant.SUKUN},
{key: 63, en: 'bagh', audio: require(sukunAudioPathPart2 + 'bagh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1594;'+Constant.SUKUN},
{key: 64, en: 'fa‘', audio: require(sukunAudioPathPart2 + 'faqh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;&#1593;'+Constant.SUKUN},

{key: 65, en: 'nagh', audio: require(sukunAudioPathPart2 + 'nagh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1614;&#1594;'+Constant.SUKUN},
{key: 66, en: 'nah', audio: require(sukunAudioPathPart2 + 'naqh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1614;&#1607;'+Constant.SUKUN},
{key: 67, en: 'ba‘', audio: require(sukunAudioPathPart2 + 'baqh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1593;'+Constant.SUKUN},
{key: 68, en: 'Dha‘', audio: require(sukunAudioPathPart2 + 'Dhaqh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1614;&#1593;'+Constant.SUKUN},
{key: 69, en: 'Dhak', audio: require(sukunAudioPathPart2 + 'Dhak.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1614;&#1603;'+Constant.SUKUN},
{key: 70, en: 'sak', audio: require(sukunAudioPathPart2 + 'sak.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1603;'+Constant.SUKUN},
{key: 71, en: 'shak', audio: require(sukunAudioPathPart2 + 'shak.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1603;'+Constant.SUKUN},
{key: 72, en: 'shaf', audio: require(sukunAudioPathPart2 + 'shagh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1601;'+Constant.SUKUN},
// , Sagh, magh, maDh, jaDh, HaDh
// dadh, qadh, yad, yash, hash, has
// sas, sad, khas, khar, kar, kaz, yaz
//jab, jat, jath, Hath, Haj, Hakh
//Had, khad, khadh, khar, baz, bas
//bash, baS, taS, taD, taT, taDh
{key: 73, en: 'Saf', audio: require(sukunAudioPathPart2 + 'Sagh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1614;&#1601;'+Constant.SUKUN},
{key: 74, en: 'maf', audio: require(sukunAudioPathPart2 + 'magh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1601;'+Constant.SUKUN},
{key: 75, en: 'maDh', audio: require(sukunAudioPathPart2 + 'maDh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1592;'+Constant.SUKUN},
{key: 76, en: 'jaDh', audio: require(sukunAudioPathPart2 + 'jaDh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1592;'+Constant.SUKUN},
{key: 77, en: 'HaDh', audio: require(sukunAudioPathPart2 + 'HaDh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1614;&#1592;'+Constant.SUKUN},
//{key: 78, en: 'daDh', audio: require(sukunAudioPathPart2 + 'dadh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1614;&#1592;'+Constant.SUKUN},
{key: 79, en: 'qaDh', audio: require(sukunAudioPathPart2 + 'qadh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1614;&#1592;'+Constant.SUKUN},
{key: 80, en: 'yad', audio: require(sukunAudioPathPart2 + 'yad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1614;&#1583;'+Constant.SUKUN},

{key: 81, en: 'yash', audio: require(sukunAudioPathPart2 + 'yash.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1614;&#1588;'+Constant.SUKUN},
{key: 82, en: 'hash', audio: require(sukunAudioPathPart2 + 'hash.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1614;&#1588;'+Constant.SUKUN},
{key: 83, en: 'has', audio: require(sukunAudioPathPart2 + 'has.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1614;&#1587;'+Constant.SUKUN},
{key: 84, en: 'sas', audio: require(sukunAudioPathPart2 + 'sas.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1587;'+Constant.SUKUN},
{key: 85, en: 'sad', audio: require(sukunAudioPathPart2 + 'sad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1583;'+Constant.SUKUN},
{key: 86, en: 'khad', audio: require(sukunAudioPathPart2 + 'khas.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1583;'+Constant.SUKUN},
{key: 87, en: 'khar', audio: require(sukunAudioPathPart2 + 'khar.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1585;'+Constant.SUKUN},
{key: 88, en: 'kar', audio: require(sukunAudioPathPart2 + 'kar.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1585;'+Constant.SUKUN},

{key: 89, en: 'kaz', audio: require(sukunAudioPathPart2 + 'kaz.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1586;'+Constant.SUKUN},
{key: 90, en: 'yaz', audio: require(sukunAudioPathPart2 + 'yaz.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1614;&#1586;'+Constant.SUKUN},
{key: 91, en: 'jab', audio: require(sukunAudioPathPart2 + 'jab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1576;'+Constant.SUKUN},
{key: 92, en: 'jat', audio: require(sukunAudioPathPart2 + 'jat1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1578;'+Constant.SUKUN},
{key: 93, en: 'jath', audio: require(sukunAudioPathPart2 + 'jath.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1579;'+Constant.SUKUN},
{key: 94, en: 'Hath', audio: require(sukunAudioPathPart2 + 'Hath1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1614;&#1579;'+Constant.SUKUN},
{key: 95, en: 'Haj', audio: require(sukunAudioPathPart2 + 'Haj.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1614;&#1580;'+Constant.SUKUN},
{key: 96, en: 'Hakh', audio: require(sukunAudioPathPart2 + 'Hakh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1603;'+Constant.SUKUN},

{key: 97, en: 'Had', audio: require(sukunAudioPathPart2 + 'Had.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1614;&#1583;'+Constant.SUKUN},
{key: 98, en: 'khad', audio: require(sukunAudioPathPart2 + 'khad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1583;'+Constant.SUKUN},
{key: 99, en: 'khadh', audio: require(sukunAudioPathPart2 + 'khadh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1584;'+Constant.SUKUN},
{key: 100, en: 'khar', audio: require(sukunAudioPathPart2 + 'khar1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1585;'+Constant.SUKUN},
{key: 101, en: 'baz', audio: require(sukunAudioPathPart2 + 'baz.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1586;'+Constant.SUKUN},
{key: 102, en: 'bas', audio: require(sukunAudioPathPart2 + 'bas.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1587;'+Constant.SUKUN},
{key: 103, en: 'bash', audio: require(sukunAudioPathPart2 + 'bash.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1588;'+Constant.SUKUN},
{key: 104, en: 'baS', audio: require(sukunAudioPathPart2 + 'baS1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1589;'+Constant.SUKUN},

{key: 105, en: 'taS', audio: require(sukunAudioPathPart2 + 'taS.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1589;'+Constant.SUKUN},
{key: 106, en: 'taD', audio: require(sukunAudioPathPart2 + 'taD.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1590;'+Constant.SUKUN},
{key: 107, en: 'taT', audio: require(sukunAudioPathPart2 + 'taT.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1591;'+Constant.SUKUN},
{key: 108, en: 'taDh', audio: require(sukunAudioPathPart2 + 'taDh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1592;'+Constant.SUKUN},
// PART 2 ENDS 
// PART 3 START 
//taqh, thaqh, thagh, thaf, thaq, saq, sak
//sal, sam, sham, shan, shah, shaH
//shab, Sab, ab, a’b, a’l, a’m
//zan, wan, ran, ral, wal, war, Sar
//zad, am, daqh, dhagh, az, a’r, yar, yad
//rab, Haq, khaT, kaf, qad, lab, sar
//dam, Saf, kal, qaT, shaq, das, tak
{key: 109, en: 'taqh', audio: require(sukunAudioPathPart3 + 'taqh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1581;'+Constant.SUKUN},
{key: 110, en: 'thaqh', audio: require(sukunAudioPathPart3 + 'thaqh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1614;&#1581;'+Constant.SUKUN},
{key: 111, en: 'thagh', audio: require(sukunAudioPathPart3 + 'thagh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1614;&#1594;'+Constant.SUKUN},
{key: 112, en: 'thaf', audio: require(sukunAudioPathPart3 + 'thaf.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1614;&#1601;'+Constant.SUKUN},

{key: 113, en: 'thaq', audio: require(sukunAudioPathPart3 + 'thaq.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1614;&#1602;'+Constant.SUKUN},
{key: 114, en: 'saq', audio: require(sukunAudioPathPart3 + 'saq.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1602;'+Constant.SUKUN},
{key: 115, en: 'sak', audio: require(sukunAudioPathPart3 + 'sak.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1603;'+Constant.SUKUN},
{key: 116, en: 'sal', audio: require(sukunAudioPathPart3 + 'sal.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1604;'+Constant.SUKUN},
{key: 117, en: 'sam', audio: require(sukunAudioPathPart3 + 'sam.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1605;'+Constant.SUKUN},
{key: 118, en: 'sham', audio: require(sukunAudioPathPart3 + 'sham.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1605;'+Constant.SUKUN},
{key: 119, en: 'shan', audio: require(sukunAudioPathPart3 + 'shan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1606;'+Constant.SUKUN},
{key: 120, en: 'shah', audio: require(sukunAudioPathPart3 + 'shah.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1607;'+Constant.SUKUN},

{key: 121, en: 'shaH', audio: require(sukunAudioPathPart3 + 'shaH1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1581;'+Constant.SUKUN},
{key: 122, en: 'shab', audio: require(sukunAudioPathPart3 + 'shab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1576;'+Constant.SUKUN},
{key: 123, en: 'Sab', audio: require(sukunAudioPathPart3 + 'Sab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1614;&#1576;'+Constant.SUKUN},
{key: 124, en: 'ab', audio: require(sukunAudioPathPart3 + 'ab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1576;'+Constant.SUKUN},
{key: 125, en: 'ib', audio: require(sukunAudioPathPart3 + 'ab1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1616;&#1576;'+Constant.SUKUN}, // LATER
{key: 126, en: 'a’l', audio: require(sukunAudioPathPart3 + 'al1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1614;&#1575;'+Constant.SUKUN}, // LATER
{key: 127, en: 'a’m', audio: require(sukunAudioPathPart3 + 'am1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1614;&#1605;'+Constant.SUKUN}, // LATER
{key: 128, en: 'zan', audio: require(sukunAudioPathPart3 + 'zan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1614;&#1606;'+Constant.SUKUN},

{key: 129, en: 'wan', audio: require(sukunAudioPathPart3 + 'wan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1614;&#1606;'+Constant.SUKUN},
{key: 130, en: 'ran', audio: require(sukunAudioPathPart3 + 'ran.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1614;&#1606;'+Constant.SUKUN},
{key: 131, en: 'ral', audio: require(sukunAudioPathPart3 + 'ral.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1614;&#1604;'+Constant.SUKUN},
{key: 132, en: 'wal', audio: require(sukunAudioPathPart3 + 'wal.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1614;&#1604;'+Constant.SUKUN},
{key: 133, en: 'war', audio: require(sukunAudioPathPart3 + 'war.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1614;&#1585;'+Constant.SUKUN},
{key: 134, en: 'Sal', audio: require(sukunAudioPathPart3 + 'Sar.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1614;&#1604;'+Constant.SUKUN},
{key: 135, en: 'zad', audio: require(sukunAudioPathPart3 + 'zad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1614;&#1583;'+Constant.SUKUN},
{key: 136, en: 'am', audio: require(sukunAudioPathPart3 + 'am.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1605;'+Constant.SUKUN},

{key: 137, en: 'da‘', audio: require(sukunAudioPathPart3 + 'daqh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1614;&#1593;'+Constant.SUKUN},
//{key: 138, en: 'dhagh', audio: require(sukunAudioPathPart3 + 'dhagh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;&#1614;&#1594;'+Constant.SUKUN},
{key: 139, en: 'az', audio: require(sukunAudioPathPart3 + 'az.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1586;'+Constant.SUKUN},
{key: 140, en: 'a’r', audio: require(sukunAudioPathPart3 + 'ar1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1614;&#1585;'+Constant.SUKUN},// LATER
{key: 141, en: 'yar', audio: require(sukunAudioPathPart3 + 'yar.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1614;&#1585;'+Constant.SUKUN},
{key: 142, en: 'yad', audio: require(sukunAudioPathPart3 + 'yad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1614;&#1583;'+Constant.SUKUN},
{key: 143, en: 'rab', audio: require(sukunAudioPathPart3 + 'rab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1614;&#1576;'+Constant.SUKUN},
{key: 144, en: 'Haq', audio: require(sukunAudioPathPart3 + 'Haq.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1614;&#1602;'+Constant.SUKUN},

{key: 145, en: 'khaT', audio: require(sukunAudioPathPart3 + 'khaT.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1591;'+Constant.SUKUN},
//{key: 146, en: 'kaf', audio: require(sukunAudioPathPart3 + 'kaf.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1601;'+Constant.SUKUN},
{key: 147, en: 'qad', audio: require(sukunAudioPathPart3 + 'qad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1614;&#1583;'+Constant.SUKUN},
{key: 148, en: 'lab', audio: require(sukunAudioPathPart3 + 'lab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1576;'+Constant.SUKUN},
{key: 149, en: 'sar', audio: require(sukunAudioPathPart3 + 'sar1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1585;'+Constant.SUKUN},
{key: 150, en: 'dam', audio: require(sukunAudioPathPart3 + 'dam.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1614;&#1605;'+Constant.SUKUN},
{key: 151, en: 'Saf', audio: require(sukunAudioPathPart3 + 'Saf.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1614;&#1601;'+Constant.SUKUN},
{key: 152, en: 'kal', audio: require(sukunAudioPathPart3 + 'kal.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1604;'+Constant.SUKUN},

{key: 153, en: 'qaT', audio: require(sukunAudioPathPart3 + 'qaT.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1614;&#1591;'+Constant.SUKUN},
{key: 154, en: 'shaq', audio: require(sukunAudioPathPart3 + 'shaq.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1602;'+Constant.SUKUN},
{key: 155, en: 'das', audio: require(sukunAudioPathPart3 + 'das.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1614;&#1587;'+Constant.SUKUN},
{key: 156, en: 'tak', audio: require(sukunAudioPathPart3 + 'tak.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1603;'+Constant.SUKUN},
// PART 3 ENDS
// PART 4 STARTS
{key: 157, en: 'ab', audio: require(sukunAudioPathPart4 + 'ab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1576;'+Constant.SUKUN},
{key: 158, en: 'ib', audio: require(sukunAudioPathPart4 + 'ib.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1616;&#1576;'+Constant.SUKUN},
{key: 159, en: 'ub', audio: require(sukunAudioPathPart4 + 'ub.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1615;&#1576;'+Constant.SUKUN},
{key: 160, en: 'sab', audio: require(sukunAudioPathPart4 + 'sab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1576;'+Constant.SUKUN},

//ab, ib, ub, sab, sub, sib
//jab, jib, jub, khat, khut, khit
//mad, mid, mud, kan, kun, kin, min
//man, mun, sun, sin, sid, sud, ud(Removed)
//Hud, Hur, Hiz(Removed), Hil, bil, bul, buz
// tuz, tum, qum, qim, him, hij, huj
// Tub, Tib, Dib, Duf, hif, hud
// hum, qul, u’d, suj, ghur, qud, fukh
// tuh, bit, Tigh, kin, Tiqh, zik, Sif
// DiH, ish, with, hub, thiT, dus, jiDh - Removed fully
// dhuq, i’r(Removed), um, u’d, a’d, rish, khun(Removed)
// mah, luD, yaz, niS, shur, haz(Removed), yam(Removed)
{key: 161, en: 'sub', audio: require(sukunAudioPathPart4 + 'sub.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1615;&#1576;'+Constant.SUKUN},
{key: 162, en: 'sib', audio: require(sukunAudioPathPart4 + 'sib.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1616;&#1576;'+Constant.SUKUN},
{key: 163, en: 'jab', audio: require(sukunAudioPathPart4 + 'jab.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1576;'+Constant.SUKUN},
{key: 164, en: 'jib', audio: require(sukunAudioPathPart4 + 'jib.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1616;&#1576;'+Constant.SUKUN},
{key: 165, en: 'jub', audio: require(sukunAudioPathPart4 + 'jub.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1615;&#1576;'+Constant.SUKUN},
{key: 166, en: 'khat', audio: require(sukunAudioPathPart4 + 'khat.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1578;'+Constant.SUKUN},
{key: 167, en: 'khut', audio: require(sukunAudioPathPart4 + 'khut.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1615;&#1578;'+Constant.SUKUN},
{key: 168, en: 'khit', audio: require(sukunAudioPathPart4 + 'khit.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;&#1578;'+Constant.SUKUN},

{key: 169, en: 'mad', audio: require(sukunAudioPathPart4 + 'mad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1583;'+Constant.SUKUN},
{key: 170, en: 'mid', audio: require(sukunAudioPathPart4 + 'mid.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1616;&#1583;'+Constant.SUKUN},
{key: 171, en: 'mud', audio: require(sukunAudioPathPart4 + 'mud.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1615;&#1583;'+Constant.SUKUN},
{key: 172, en: 'kan', audio: require(sukunAudioPathPart4 + 'kan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1606;'+Constant.SUKUN},
{key: 173, en: 'kun', audio: require(sukunAudioPathPart4 + 'kun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1615;&#1606;'+Constant.SUKUN},
{key: 174, en: 'kin', audio: require(sukunAudioPathPart4 + 'kin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1616;&#1606;'+Constant.SUKUN},
{key: 175, en: 'min', audio: require(sukunAudioPathPart4 + 'min.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1616;&#1606;'+Constant.SUKUN},
{key: 176, en: 'man', audio: require(sukunAudioPathPart4 + 'man.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1606;'+Constant.SUKUN},

{key: 177, en: 'mun', audio: require(sukunAudioPathPart4 + 'mun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1615;&#1606;'+Constant.SUKUN},
{key: 178, en: 'sun', audio: require(sukunAudioPathPart4 + 'sun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1615;&#1606;'+Constant.SUKUN},
{key: 179, en: 'sin', audio: require(sukunAudioPathPart4 + 'sin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1616;&#1606;'+Constant.SUKUN},
{key: 180, en: 'sid', audio: require(sukunAudioPathPart4 + 'sid.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1616;&#1583;'+Constant.SUKUN},
{key: 181, en: 'sud', audio: require(sukunAudioPathPart4 + 'sud.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1615;&#1583;'+Constant.SUKUN},
{key: 182, en: 'u’d', audio: require(sukunAudioPathPart4 + 'Hud.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1615;&#1583;'+Constant.SUKUN},
{key: 183, en: 'Hur', audio: require(sukunAudioPathPart4 + 'Hur.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1615;&#1585;'+Constant.SUKUN},
{key: 184, en: 'Hil', audio: require(sukunAudioPathPart4 + 'Hil.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1616;&#1604;'+Constant.SUKUN},

{key: 185, en: 'bil', audio: require(sukunAudioPathPart4 + 'bil.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1616;&#1604;'+Constant.SUKUN},
{key: 186, en: 'bul', audio: require(sukunAudioPathPart4 + 'bul.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1615;&#1604;'+Constant.SUKUN},
{key: 187, en: 'buz', audio: require(sukunAudioPathPart4 + 'buz.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1615;&#1586;'+Constant.SUKUN},
{key: 188, en: 'tuz', audio: require(sukunAudioPathPart4 + 'tuz.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1615;&#1586;'+Constant.SUKUN},
{key: 189, en: 'tum', audio: require(sukunAudioPathPart4 + 'tum.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1615;&#1605;'+Constant.SUKUN},
{key: 190, en: 'qum', audio: require(sukunAudioPathPart4 + 'qum.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1615;&#1605;'+Constant.SUKUN},
{key: 191, en: 'qim', audio: require(sukunAudioPathPart4 + 'qim.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1616;&#1605;'+Constant.SUKUN},
{key: 192, en: 'him', audio: require(sukunAudioPathPart4 + 'him.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1616;&#1605;'+Constant.SUKUN},

{key: 193, en: 'hij', audio: require(sukunAudioPathPart4 + 'hij.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1616;&#1580;'+Constant.SUKUN},
{key: 194, en: 'huj', audio: require(sukunAudioPathPart4 + 'huj.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1615;&#1580;'+Constant.SUKUN},
{key: 195, en: 'Tub', audio: require(sukunAudioPathPart4 + 'Tub.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1615;&#1576;'+Constant.SUKUN},
//{key: 196, en: 'Tib', audio: require(sukunAudioPathPart4 + 'Tib.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1616;&#1576;'+Constant.SUKUN},
//{key: 197, en: 'Dib', audio: require(sukunAudioPathPart4 + 'Dib.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1616;&#1583;'+Constant.SUKUN},
{key: 198, en: 'Duf', audio: require(sukunAudioPathPart4 + 'Duf.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1615;&#1601;'+Constant.SUKUN},
{key: 199, en: 'hif', audio: require(sukunAudioPathPart4 + 'hif.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1616;&#1601;'+Constant.SUKUN},
{key: 200, en: 'hud', audio: require(sukunAudioPathPart4 + 'hud1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1615;&#1583;'+Constant.SUKUN},

{key: 201, en: 'hum', audio: require(sukunAudioPathPart4 + 'hum.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1615;&#1605;'+Constant.SUKUN},
{key: 202, en: 'qul', audio: require(sukunAudioPathPart4 + 'qul.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1615;&#1604;'+Constant.SUKUN},
{key: 203, en: 'u’d', audio: require(sukunAudioPathPart4 + 'ud2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1615;&#1583;'+Constant.SUKUN},
{key: 204, en: 'suj', audio: require(sukunAudioPathPart4 + 'suj.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1615;&#1580;'+Constant.SUKUN},
{key: 205, en: 'ghur', audio: require(sukunAudioPathPart4 + 'ghur.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1615;&#1585;'+Constant.SUKUN},
{key: 206, en: 'qud', audio: require(sukunAudioPathPart4 + 'qud.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1615;&#1583;'+Constant.SUKUN},
{key: 207, en: 'fukh', audio: require(sukunAudioPathPart4 + 'fukh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1615;&#1582;'+Constant.SUKUN},
{key: 208, en: 'tuh', audio: require(sukunAudioPathPart4 + 'tuh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1615;&#1607;'+Constant.SUKUN},

{key: 209, en: 'bit', audio: require(sukunAudioPathPart4 + 'bit.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1616;&#1578;'+Constant.SUKUN},
{key: 210, en: 'Tigh', audio: require(sukunAudioPathPart4 + 'Tigh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1616;&#1594;'+Constant.SUKUN},
{key: 211, en: 'kin', audio: require(sukunAudioPathPart4 + 'kin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1616;&#1606;'+Constant.SUKUN},
{key: 212, en: 'Ta‘', audio: require(sukunAudioPathPart4 + 'Tiqh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1614;&#1593;'+Constant.SUKUN},
{key: 213, en: 'zik', audio: require(sukunAudioPathPart4 + 'zik.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1616;&#1603;'+Constant.SUKUN},
{key: 214, en: 'Sif', audio: require(sukunAudioPathPart4 + 'Sif.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1616;&#1601;'+Constant.SUKUN},
{key: 215, en: 'Duq', audio: require(sukunAudioPathPart4 + 'dhuq.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1615;&#1602;'+Constant.SUKUN},
//{key: 216, en: 'u’d', audio: require(sukunAudioPathPart4 + 'ud3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1615;&#1605;'+Constant.SUKUN},

{key: 217, en: 'u’d', audio: require(sukunAudioPathPart4 + 'ud3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1615;&#1583;'+Constant.SUKUN}, // LATER
{key: 218, en: 'a’d', audio: require(sukunAudioPathPart4 + 'ad1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1614;&#1583;'+Constant.SUKUN}, // LATER
{key: 219, en: 'rish', audio: require(sukunAudioPathPart4 + 'rish.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1616;&#1588;'+Constant.SUKUN},
{key: 220, en: 'mah', audio: require(sukunAudioPathPart4 + 'mah.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1607;'+Constant.SUKUN},
{key: 221, en: 'luD', audio: require(sukunAudioPathPart4 + 'luD.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1615;&#1590;'+Constant.SUKUN},
{key: 222, en: 'yaz', audio: require(sukunAudioPathPart4 + 'yaz.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1614;&#1586;'+Constant.SUKUN},
{key: 223, en: 'naS', audio: require(sukunAudioPathPart4 + 'niS.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1614;&#1589;'+Constant.SUKUN},
{key: 224, en: 'shur', audio: require(sukunAudioPathPart4 + 'shur.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1615;&#1585;'+Constant.SUKUN},

{key: 225, en: 'jad', audio: require(sukunAudioPathPart1 + 'jad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1583;'+Constant.SUKUN},// PICKED FROM ABOVE 18 DUPLICATE
];