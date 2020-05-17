/**
*
* longvowels.js
* Store all long vowels character
*
* @author - Faizal
* @date   - 7 May 2020
* https://central-mosque.com/index.php/Arabic/rules-of-tajweed.html
* https://www.key-shortcut.com/en/writing-systems/%EF%BA%95%EF%BA%8F%D8%A2-arabic-alphabet
* Covert mp4 to mp3 https://audio.online-convert.com/convert/mp4-to-mp3
* https://www.filesmerge.com/merge-images
***/
// ALL SHARED FILES
import * as Constant from '../shared/constant';

// LOCAL VARIABLE DECLARATION
const alifLongVowelsAudioPath      = '../../assets/data/audio/longVowel/alif/';
const wawLongVowelsAudioPath     = '../../assets/data/audio/longVowel/waw/';
const yaaLongVowelsAudioPath      = '../../assets/data/audio/longVowel/yaa/';
const imgPathL10             = '../../assets/img/missing/lesson10/';
const imgPathL11             = '../../assets/img/missing/lesson11/';

// BASIC ARABIC ALPHABET LONG VOWELS WITH ALIF
export const ARABIC_LONG_VOWELS_WITH_ALIF = [
{key: 1, en: 'aa', ar: 'اُ', audio: require(alifLongVowelsAudioPath + '1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1614;&#1575;'},
{key: 2, en: 'baa', ar: 'بُ',   audio: require(alifLongVowelsAudioPath + '2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1614;&#1575;'},
{key: 3, en: 'taa', ar: 'تُ',   audio: require(alifLongVowelsAudioPath + '3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1614;&#1575;'},
{key: 4, en: 'thaa', ar: 'ثُ',  audio: require(alifLongVowelsAudioPath + '4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1614;&#1575;'},
{key: 5, en: 'jaa', ar: 'جُ',  audio: require(alifLongVowelsAudioPath + '5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;&#1575;'},
{key: 6, en: 'Haa', ar: 'ُح',  audio: require(alifLongVowelsAudioPath + '6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1614;&#1575;'},
{key: 7, en: 'khaa', ar: 'ُخ',  audio: require(alifLongVowelsAudioPath + '7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1614;&#1575;'},
{key: 8, en: 'daa', ar: 'ُد',  audio: require(alifLongVowelsAudioPath + '8.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1614;&#1575;'},
{key: 9, en: 'dhaa', ar: 'ُذ',  audio: require(alifLongVowelsAudioPath + '9.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;&#1614;&#1575;'},
{key: 10, en: 'raa', ar: 'رُ',  audio: require(alifLongVowelsAudioPath + '10.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1614;&#1575;'},
{key: 11, en: 'zaa', ar: 'زُ',  audio: require(alifLongVowelsAudioPath + '11.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1614;&#1575;'},
{key: 12, en: 'saa', ar: 'ُس',  audio: require(alifLongVowelsAudioPath + '12.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;&#1575;', showImg: true, img: require(imgPathL10 + 'saa.png')},
{key: 13, en: 'shaa', ar: 'شُ',  audio: require(alifLongVowelsAudioPath + '13.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;&#1575;', showImg: true, img: require(imgPathL10 + 'shaa.png')},
{key: 14, en: 'Saa', ar: 'صُ',  audio: require(alifLongVowelsAudioPath + '14.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1614;&#1575;', showImg: true, img: require(imgPathL10 + 'saa1.png')},
{key: 15, en: 'Daa', ar: 'ضُ',  audio: require(alifLongVowelsAudioPath + '15.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1614;&#1575;', showImg: true, img: require(imgPathL10 + 'Daa.png')},
{key: 16, en: 'Taa', ar: 'ُط',  audio: require(alifLongVowelsAudioPath + '16.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1614;&#1575;'},
{key: 17, en: 'Dhaa', ar: 'ُظ',  audio: require(alifLongVowelsAudioPath + '17.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1614;&#1575;'},
{key: 18, en: 'a’a', ar: 'عُ',  audio: require(alifLongVowelsAudioPath + '18.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1614;&#1575;'},
{key: 19, en: 'ghaa', ar: 'غُ',  audio: require(alifLongVowelsAudioPath + '19.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1614;&#1575;'},
{key: 20, en: 'faa', ar: 'فُ',  audio: require(alifLongVowelsAudioPath + '20.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;&#1575;'},
{key: 21, en: 'qaa', ar: 'قُ',  audio: require(alifLongVowelsAudioPath + '21.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1614;&#1575;'},
{key: 22, en: 'kaa', ar: 'ُك',  audio: require(alifLongVowelsAudioPath + '22.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;&#1575;'},
{key: 23, en: 'laa', ar: 'لُ',  audio: require(alifLongVowelsAudioPath + '23.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;&#1575;'},
{key: 24, en: 'maa', ar: 'مُ',  audio: require(alifLongVowelsAudioPath + '24.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1614;&#1575;'},
{key: 25, en: 'naa', ar: 'نُ',  audio: require(alifLongVowelsAudioPath + '25.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1614;&#1575;'},
{key: 26, en: 'haa', ar: 'ُه',  audio: require(alifLongVowelsAudioPath + '26.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1614;&#1575;'},
{key: 27, en: 'waa', ar: 'وُ',  audio: require(alifLongVowelsAudioPath + '27.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1614;&#1575;'},
{key: 28, en: 'yaa', ar: 'يُ',  audio: require(alifLongVowelsAudioPath + '28.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1614;&#1575;'}
];

// BASIC ARABIC ALPHABET LONG VOWELS WITH WAW
export const ARABIC_LONG_VOWELS_WITH_WAW = [
{key: 1, en: 'uu', ar: 'اُ', audio: require(wawLongVowelsAudioPath + '1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1615;&#1608;'+Constant.SUKUN},
{key: 2, en: 'buu', ar: 'بُ',   audio: require(wawLongVowelsAudioPath + '2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1615;&#1608;'+Constant.SUKUN},
{key: 3, en: 'tuu', ar: 'تُ',   audio: require(wawLongVowelsAudioPath + '3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1615;&#1608;'+Constant.SUKUN},
{key: 4, en: 'thuu', ar: 'ثُ',  audio: require(wawLongVowelsAudioPath + '4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1615;&#1608;'+Constant.SUKUN},
{key: 5, en: 'juu', ar: 'جُ',  audio: require(wawLongVowelsAudioPath + '5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1615;&#1608;'+Constant.SUKUN},
{key: 6, en: 'Huu', ar: 'ُح',  audio: require(wawLongVowelsAudioPath + '6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1615;&#1608;'+Constant.SUKUN},
{key: 7, en: 'khuu', ar: 'ُخ',  audio: require(wawLongVowelsAudioPath + '7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1615;&#1608;'+Constant.SUKUN},
{key: 8, en: 'duu', ar: 'ُد',  audio: require(wawLongVowelsAudioPath + '8.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1615;&#1608;'+Constant.SUKUN},
{key: 9, en: 'dhuu', ar: 'ُذ',  audio: require(wawLongVowelsAudioPath + '9.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;&#1615;&#1608;'+Constant.SUKUN},
{key: 10, en: 'ruu', ar: 'رُ',  audio: require(wawLongVowelsAudioPath + '10.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1615;&#1608;'+Constant.SUKUN},
{key: 11, en: 'zuu', ar: 'زُ',  audio: require(wawLongVowelsAudioPath + '11.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1615;&#1608;'+Constant.SUKUN},
{key: 12, en: 'suu', ar: 'ُس',  audio: require(wawLongVowelsAudioPath + '12.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1615;&#1608;'+Constant.SUKUN},
{key: 13, en: 'shuu', ar: 'شُ',  audio: require(wawLongVowelsAudioPath + '13.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1615;&#1608;'+Constant.SUKUN},
{key: 14, en: 'Suu', ar: 'صُ',  audio: require(wawLongVowelsAudioPath + '14.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1615;&#1608;'+Constant.SUKUN},
{key: 15, en: 'Duu', ar: 'ضُ',  audio: require(wawLongVowelsAudioPath + '15.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1615;&#1608;'+Constant.SUKUN, showImg: true, img: require(imgPathL11 + 'Duu.png')},
{key: 16, en: 'Tuu', ar: 'ُط',  audio: require(wawLongVowelsAudioPath + '16.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1615;&#1608;'+Constant.SUKUN},
{key: 17, en: 'Dhuu', ar: 'ُظ',  audio: require(wawLongVowelsAudioPath + '17.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1615;&#1608;'+Constant.SUKUN},
{key: 18, en: 'u’u', ar: 'عُ',  audio: require(wawLongVowelsAudioPath + '18.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1615;&#1608;'+Constant.SUKUN},
{key: 19, en: 'ghuu', ar: 'غُ',  audio: require(wawLongVowelsAudioPath + '19.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1615;&#1608;'+Constant.SUKUN},
{key: 20, en: 'fuu', ar: 'فُ',  audio: require(wawLongVowelsAudioPath + '20.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1615;&#1608;'+Constant.SUKUN},
{key: 21, en: 'quu', ar: 'قُ',  audio: require(wawLongVowelsAudioPath + '21.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1615;&#1608;'+Constant.SUKUN},
{key: 22, en: 'kuu', ar: 'ُك',  audio: require(wawLongVowelsAudioPath + '22.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1615;&#1608;'+Constant.SUKUN},
{key: 23, en: 'luu', ar: 'لُ',  audio: require(wawLongVowelsAudioPath + '23.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1615;&#1608;'+Constant.SUKUN},
{key: 24, en: 'muu', ar: 'مُ',  audio: require(wawLongVowelsAudioPath + '24.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1615;&#1608;'+Constant.SUKUN},
{key: 25, en: 'nuu', ar: 'نُ',  audio: require(wawLongVowelsAudioPath + '25.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1615;&#1608;'+Constant.SUKUN},
{key: 26, en: 'huu', ar: 'ُه',  audio: require(wawLongVowelsAudioPath + '26.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1615;&#1608;'+Constant.SUKUN},
{key: 27, en: 'wuu', ar: 'وُ',  audio: require(wawLongVowelsAudioPath + '27.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1615;&#1608;'+Constant.SUKUN},
{key: 28, en: 'yuu', ar: 'يُ',  audio: require(wawLongVowelsAudioPath + '28.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1615;&#1608;'+Constant.SUKUN}
];


// BASIC ARABIC ALPHABET LONG VOWELS WITH YAA &#1615;&#1608;
export const ARABIC_LONG_VOWELS_WITH_YAA = [
{key: 1, en: 'ee', ar: 'اُ', audio: require(yaaLongVowelsAudioPath + '1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1616;&#1610;'+Constant.SUKUN},
{key: 2, en: 'bee', ar: 'بُ',   audio: require(yaaLongVowelsAudioPath + '2.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1616;&#1610;'+Constant.SUKUN},
{key: 3, en: 'tee', ar: 'تُ',   audio: require(yaaLongVowelsAudioPath + '3.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1616;&#1610;'+Constant.SUKUN},
{key: 4, en: 'thee', ar: 'ثُ',  audio: require(yaaLongVowelsAudioPath + '4.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1616;&#1610;'+Constant.SUKUN},
{key: 5, en: 'jee', ar: 'جُ',  audio: require(yaaLongVowelsAudioPath + '5.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1616;&#1610;'+Constant.SUKUN},
{key: 6, en: 'Hee', ar: 'ُح',  audio: require(yaaLongVowelsAudioPath + '6.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1616;&#1610;'+Constant.SUKUN},
{key: 7, en: 'khee', ar: 'ُخ',  audio: require(yaaLongVowelsAudioPath + '7.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;&#1610;'+Constant.SUKUN},
{key: 8, en: 'dee', ar: 'ُد',  audio: require(yaaLongVowelsAudioPath + '8.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1616;&#1610;'+Constant.SUKUN},
{key: 9, en: 'dhee', ar: 'ُذ',  audio: require(yaaLongVowelsAudioPath + '9.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;&#1616;&#1610;'+Constant.SUKUN},
{key: 10, en: 'ree', ar: 'رُ',  audio: require(yaaLongVowelsAudioPath + '10.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1616;&#1610;'+Constant.SUKUN},
{key: 11, en: 'zee', ar: 'زُ',  audio: require(yaaLongVowelsAudioPath + '11.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1616;&#1610;'+Constant.SUKUN},
{key: 12, en: 'see', ar: 'ُس',  audio: require(yaaLongVowelsAudioPath + '12.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1616;&#1610;'+Constant.SUKUN},
{key: 13, en: 'shee', ar: 'شُ',  audio: require(yaaLongVowelsAudioPath + '13.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1616;&#1610;'+Constant.SUKUN},
{key: 14, en: 'See', ar: 'صُ',  audio: require(yaaLongVowelsAudioPath + '14.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1616;&#1610;'+Constant.SUKUN},
{key: 15, en: 'Dee', ar: 'ضُ',  audio: require(yaaLongVowelsAudioPath + '15.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1616;&#1610;'+Constant.SUKUN},
{key: 16, en: 'Tee', ar: 'ُط',  audio: require(yaaLongVowelsAudioPath + '16.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1616;&#1610;'+Constant.SUKUN},
{key: 17, en: 'Dhee', ar: 'ُظ',  audio: require(yaaLongVowelsAudioPath + '17.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1616;&#1610;'+Constant.SUKUN},
{key: 18, en: 'i’e', ar: 'عُ',  audio: require(yaaLongVowelsAudioPath + '18.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1616;&#1610;'+Constant.SUKUN},
{key: 19, en: 'ghee', ar: 'غُ',  audio: require(yaaLongVowelsAudioPath + '19.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1616;&#1610;'+Constant.SUKUN},
{key: 20, en: 'fee', ar: 'فُ',  audio: require(yaaLongVowelsAudioPath + '20.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1616;&#1610;'+Constant.SUKUN},
{key: 21, en: 'qee', ar: 'قُ',  audio: require(yaaLongVowelsAudioPath + '21.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1616;&#1610;'+Constant.SUKUN},
{key: 22, en: 'kee', ar: 'ُك',  audio: require(yaaLongVowelsAudioPath + '22.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1616;&#1610;'+Constant.SUKUN},
{key: 23, en: 'lee', ar: 'لُ',  audio: require(yaaLongVowelsAudioPath + '23.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;&#1610;'+Constant.SUKUN},
{key: 24, en: 'mee', ar: 'مُ',  audio: require(yaaLongVowelsAudioPath + '24.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1616;&#1610;'+Constant.SUKUN},
{key: 25, en: 'nee', ar: 'نُ',  audio: require(yaaLongVowelsAudioPath + '25.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1616;&#1610;'+Constant.SUKUN},
{key: 26, en: 'hee', ar: 'ُه',  audio: require(yaaLongVowelsAudioPath + '26.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1616;&#1610;'+Constant.SUKUN},
{key: 27, en: 'wee', ar: 'وُ',  audio: require(yaaLongVowelsAudioPath + '27.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1616;&#1610;'+Constant.SUKUN},
{key: 28, en: 'yee', ar: 'يُ',  audio: require(yaaLongVowelsAudioPath + '28.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1616;&#1610;'+Constant.SUKUN}
];