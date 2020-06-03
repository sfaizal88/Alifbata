/**
*
* common.js
* Store all basic Arabic letter
*
* @author - Faizal
* @date   - 4 May 2020
* https://central-mosque.com/index.php/Arabic/rules-of-tajweed.html
* https://www.key-shortcut.com/en/writing-systems/%EF%BA%95%EF%BA%8F%D8%A2-arabic-alphabet
* Covert mp4 to mp3 https://audio.online-convert.com/convert/mp4-to-mp3 https://online-audio-converter.com/
* https://onlinepngtools.com/create-transparent-png
***/
// ALL SHARED FILES
import * as Constant from '../shared/constant';

// LOCAL VARIABLE DECLARATION
const alphabetAudioPath   = '../../assets/data/audio/alphabet/';
const fathaAudioPath      = '../../assets/data/audio/fatha/';
const kasrahAudioPath     = '../../assets/data/audio/kasrah/';
const dammaAudioPath      = '../../assets/data/audio/damma/';
const fathatainAudioPath  = '../../assets/data/audio/fathatain/';
const kasratainAudioPath  = '../../assets/data/audio/kasratain/';
const dummatainAudioPath  = '../../assets/data/audio/dummatain/';
const imgPathL2             = '../../assets/img/missing/lesson2/';
const imgPathL3             = '../../assets/img/missing/lesson3/';
const imgPathL4             = '../../assets/img/missing/lesson4/';
const imgPathL5             = '../../assets/img/missing/lesson5/';
const imgPathL6             = '../../assets/img/missing/lesson6/';
const imgPathL7             = '../../assets/img/missing/lesson7/';

// COMMON PAGE
export const COMMON_SECTION = [
	{id: 9950 ,key: 9950, en: '', ar: '', type: Constant.GENERIC.LESSON_COMPLETED}, // 0
	{id: 9951 ,key: 9951, en: '', ar: '', type: Constant.GENERIC.RANDOM_QUESTION_INTRO}, // 1
	{id: 9952 ,key: 9952, en: '', ar: '', type: Constant.GENERIC.CHOOSE_BEST_INTRO}, // 2
	{id: 9953 ,key: 9953, en: '', ar: '', type: Constant.GENERIC.RANDOM_QUESTION_SCORE}, // 3
	{id: 9954 ,key: 9954, en: '', ar: '', type: Constant.GENERIC.CHOOSE_BEST_SCORE}, // 4
	{id: 9955 ,key: 9955, en: '', ar: '', type: Constant.GENERIC.QUIZ_INTRO}, // 5
	{id: 9956 ,key: 9956, en: '', ar: '', type: Constant.GENERIC.QUIZ_SCORE}, // 6
	{id: 9957 ,key: 9957, en: '', ar: '', type: Constant.GENERIC.QUIZ_COMPLETE}, // 7
	{id: 9958 ,key: 9958, en: '', ar: '', type: Constant.GENERIC.CHAPTER_COMPLETE}, // 8
	{id: 9959 ,key: 9959, en: '', ar: '', type: Constant.GENERIC.FOUR_LETTER_INTRO}, // 9
	{id: 9960 ,key: 9960, en: '', ar: '', type: Constant.GENERIC.FOUR_LETTER_INTRO_DETAILS}, // 10
	{id: 9961 ,key: 9961, en: '', ar: '', type: Constant.GENERIC.EXERCISE_INTRO}, // 11
	{id: 9962 ,key: 9962, en: '', ar: '', type: Constant.GENERIC.FOUR_LETTER_LESSON_COMPLETE}, // 12
];

// BASIC ARABIC ALPHABET
export const ARABIC_ALPHABET = [
{key: 1, en: 'alif', ar: 'ا', audio: require(alphabetAudioPath + 'alif.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;'},
{key: 2, en: 'ba', ar: 'ب',   audio: require(alphabetAudioPath + 'ba.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;'},
{key: 3, en: 'ta', ar: 'ت',   audio: require(alphabetAudioPath + 'ta.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;'},
{key: 4, en: 'tha', ar: 'ث',  audio: require(alphabetAudioPath + 'tha.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;'},
{key: 5, en: 'jeem', ar: 'ج',  audio: require(alphabetAudioPath + 'jeem.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;'},
{key: 6, en: 'Ha', ar: 'ح',  audio: require(alphabetAudioPath + 'hha.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;'},
{key: 7, en: 'kha', ar: 'خ',  audio: require(alphabetAudioPath + 'kha.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;'},
{key: 8, en: 'daal', ar: 'د',  audio: require(alphabetAudioPath + 'dal.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;'},
{key: 9, en: 'dhaal', ar: 'ذ',  audio: require(alphabetAudioPath + 'thal.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;'},
{key: 10, en: 'ra', ar: 'ر',  audio: require(alphabetAudioPath + 'ra.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;'},
{key: 11, en: 'zay', ar: 'ز',  audio: require(alphabetAudioPath + 'zay.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;'},
{key: 12, en: 'seen', ar: 'س',  audio: require(alphabetAudioPath + 'seen.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;'},
{key: 13, en: 'sheen', ar: 'ش',  audio: require(alphabetAudioPath + 'sheen.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;'},
{key: 14, en: 'Saad', ar: 'ص',  audio: require(alphabetAudioPath + 'saad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;'},
{key: 15, en: 'Daad', ar: 'ض',  audio: require(alphabetAudioPath + 'daad.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;'},
{key: 16, en: 'Ta', ar: 'ط',  audio: require(alphabetAudioPath + 'toh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;'},
{key: 17, en: 'Dha', ar: 'ظ',  audio: require(alphabetAudioPath + 'thoh.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;'},
{key: 18, en: 'ayn', ar: 'ع',  audio: require(alphabetAudioPath + 'ayn.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;'},
{key: 19, en: 'ghayn', ar: 'غ',  audio: require(alphabetAudioPath + 'ghayn.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;'},
{key: 20, en: 'fa', ar: 'ف',  audio: require(alphabetAudioPath + 'fa.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;'},
{key: 21, en: 'qaaf', ar: 'ق',  audio: require(alphabetAudioPath + 'qaf.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;'},
{key: 22, en: 'kaaf', ar: 'ك',  audio: require(alphabetAudioPath + 'kaf.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;'},
{key: 23, en: 'laam', ar: 'ل',  audio: require(alphabetAudioPath + 'lam.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;'},
{key: 24, en: 'meem', ar: 'م',  audio: require(alphabetAudioPath + 'meem.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;'},
{key: 25, en: 'noon', ar: 'ن',  audio: require(alphabetAudioPath + 'noon.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;'},
{key: 26, en: 'ha', ar: 'ه',  audio: require(alphabetAudioPath + 'ha.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;'},
{key: 27, en: 'waaw', ar: 'و',  audio: require(alphabetAudioPath + 'wow.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;'},
{key: 28, en: 'ya', ar: 'ي',  audio: require(alphabetAudioPath + 'ya.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;'}
];

// ARABIC LETTERS WITH FATHA
export const ARABIC_FATHA = [
{key: 1, en: 'a', ar: 'اَ', audio: require(fathaAudioPath + 'aa.mp3'), type: 'L'},
{key: 2, en: 'ba', ar: 'بَ',   audio: require(fathaAudioPath + 'ba.mp3'), type: 'L'},// redo sound like pa
{key: 3, en: 'ta', ar: 'تَ',   audio: require(fathaAudioPath + 'ta.mp3'), type: 'L'},
{key: 4, en: 'tha', ar: 'ثَ',  audio: require(fathaAudioPath + 'tha.mp3'), type: 'L'},
{key: 5, en: 'ja', ar: 'َج',  audio: require(fathaAudioPath + 'ja.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1614;'},
{key: 6, en: 'Ha', ar: 'حَ',  audio: require(fathaAudioPath + 'ha.mp3'), type: 'L'},
{key: 7, en: 'kha', ar: 'خَ',  audio: require(fathaAudioPath + 'kha.mp3'), type: 'L'},
{key: 8, en: 'da', ar: 'دَ',  audio: require(fathaAudioPath + 'da.mp3'), type: 'L'},
{key: 9, en: 'dha', ar: 'ذَ',  audio: require(fathaAudioPath + 'dha.mp3'), type: 'L'},
{key: 10, en: 'ra', ar: 'رَ',  audio: require(fathaAudioPath + 'ra.mp3'), type: 'L'},
{key: 11, en: 'za', ar: 'زَ',  audio: require(fathaAudioPath + 'za.mp3'), type: 'L'},
{key: 12, en: 'sa', ar: 'سَ',  audio: require(fathaAudioPath + 'sa.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1614;', showImg: true, img: require(imgPathL2 + 'sa.png')},
{key: 13, en: 'sha', ar: 'شَ',  audio: require(fathaAudioPath + 'sha.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1614;', showImg: true, img: require(imgPathL2 + 'sha.png')},
{key: 14, en: 'Sa', ar: 'صَ',  audio: require(fathaAudioPath + 'sa1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1614;', showImg: true, img: require(imgPathL2 + 'Sa1.png')},
{key: 15, en: 'Da', ar: 'ضَ',  audio: require(fathaAudioPath + 'da1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1614;', showImg: true, img: require(imgPathL2 + 'Da.png')},
{key: 16, en: 'Ta', ar: 'طَ',  audio: require(fathaAudioPath + 'ta1.mp3'), type: 'L'},
{key: 17, en: 'Dha', ar: 'َظ',  audio: require(fathaAudioPath + 'za1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1614;'},// redo
{key: 18, en: 'a‘', ar: 'عَ',  audio: require(fathaAudioPath + 'aa1.mp3'), type: 'L'},
{key: 19, en: 'gha', ar: 'َغ',  audio: require(fathaAudioPath + 'gha.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1614;'},
{key: 20, en: 'fa', ar: 'فَ',  audio: require(fathaAudioPath + 'fa.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1614;', showImg: true, img: require(imgPathL2 + 'fa.png')},
{key: 21, en: 'qa', ar: 'َق',  audio: require(fathaAudioPath + 'qa.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1614;'},
{key: 22, en: 'ka', ar: 'كَ',  audio: require(fathaAudioPath + 'ka.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1614;'},
{key: 23, en: 'la', ar: 'لَ',  audio: require(fathaAudioPath + 'la.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1614;', showImg: true, img: require(imgPathL2 + 'la.png')},
{key: 24, en: 'ma', ar: 'مَ',  audio: require(fathaAudioPath + 'ma.mp3'), type: 'L'},
{key: 25, en: 'na', ar: 'نَ',  audio: require(fathaAudioPath + 'na.mp3'), type: 'L'},
{key: 26, en: 'ha', ar: 'هَ',  audio: require(fathaAudioPath + 'ha1.mp3'), type: 'L'},
{key: 27, en: 'wa', ar: 'وَ',  audio: require(fathaAudioPath + 'wa.mp3'), type: 'L'},
{key: 28, en: 'ya', ar: 'يَ',  audio: require(fathaAudioPath + 'ya.mp3'), type: 'L'}
];

// ARABIC LETTERS WITH KASRAH
export const ARABIC_KASRAH = [
{key: 1, en: 'i', ar: 'اِ', audio: require(kasrahAudioPath + 'ie.mp3'), type: 'L'},
{key: 2, en: 'bi', ar: 'بِ',   audio: require(kasrahAudioPath + 'bi.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1616;'},
{key: 3, en: 'ti', ar: 'تِ',   audio: require(kasrahAudioPath + 'ti.mp3'), type: 'L'},
{key: 4, en: 'thi', ar: 'ثِ',  audio: require(kasrahAudioPath + 'thi.mp3'), type: 'L'},
{key: 5, en: 'ji', ar: 'ِج',  audio: require(kasrahAudioPath + 'ji.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#x0650;', showImg: true, img: require(imgPathL3 + 'ji.png')},
{key: 6, en: 'Hi', ar: 'حِ',  audio: require(kasrahAudioPath + 'hi.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#x0650;', showImg: true, img: require(imgPathL3 + 'Hi.png')},
{key: 7, en: 'khi', ar: 'خِ',  audio: require(kasrahAudioPath + 'khi.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1616;', showImg: true, img: require(imgPathL3 + 'khi.png')},
{key: 8, en: 'di', ar: 'د',  audio: require(kasrahAudioPath + 'di.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1616;'},// sound like thi
{key: 9, en: 'dhi', ar: 'ذِ',  audio: require(kasrahAudioPath + 'dhi.mp3'), type: 'L'},
{key: 10, en: 'ri', ar: 'رِ',  audio: require(kasrahAudioPath + 'ri.mp3'), type: 'L'},
{key: 11, en: 'zi', ar: 'زِ',  audio: require(kasrahAudioPath + 'zi.mp3'), type: 'L'},
{key: 12, en: 'si', ar: 'سِ',  audio: require(kasrahAudioPath + 'si.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1616;', showImg: true, img: require(imgPathL3 + 'si.png')},
{key: 13, en: 'shi', ar: 'شِ',  audio: require(kasrahAudioPath + 'shi.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1616;', showImg: true, img: require(imgPathL3 + 'shi.png')},
{key: 14, en: 'Si', ar: 'صِ',  audio: require(kasrahAudioPath + 'si1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1616;', showImg: true, img: require(imgPathL3 + 'si1.png')},
{key: 15, en: 'Di', ar: 'ضِ',  audio: require(kasrahAudioPath + 'di1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1616;', showImg: true, img: require(imgPathL3 + 'Di.png')},
{key: 16, en: 'Ti', ar: 'طِ',  audio: require(kasrahAudioPath + 'ti1.mp3'), type: 'L'},
{key: 17, en: 'Dhi', ar: 'ظِ',  audio: require(kasrahAudioPath + 'zi1.mp3'), type: 'L'},
{key: 18, en: 'i‘', ar: 'ِع',  audio: require(kasrahAudioPath + 'ie1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1616;', showImg: true, img: require(imgPathL3 + 'i.png')},
{key: 19, en: 'ghi', ar: 'غِ',  audio: require(kasrahAudioPath + 'ghi.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1616;', showImg: true, img: require(imgPathL3 + 'ghi.png')},
{key: 20, en: 'fi', ar: 'فِ',  audio: require(kasrahAudioPath + 'fi.mp3'), type: 'L', showImg: true, img: require(imgPathL3 + 'fi.png')},
{key: 21, en: 'qi', ar: 'ِق',  audio: require(kasrahAudioPath + 'qi.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1616;'},
{key: 22, en: 'ki', ar: 'كِ',  audio: require(kasrahAudioPath + 'ki.mp3'), type: 'L'},
{key: 23, en: 'li', ar: 'ِل',  audio: require(kasrahAudioPath + 'li.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1616;', showImg: true, img: require(imgPathL3 + 'li.png')},
{key: 24, en: 'mi', ar: 'ِم',  audio: require(kasrahAudioPath + 'mi.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1616;'},
{key: 25, en: 'ni', ar: 'نِ',  audio: require(kasrahAudioPath + 'ni.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1616;', showImg: true, img: require(imgPathL3 + 'ni.png')},
{key: 26, en: 'hi', ar: 'هِ',  audio: require(kasrahAudioPath + 'hi1.mp3'), type: 'L'},
{key: 27, en: 'wi', ar: 'وِ',  audio: require(kasrahAudioPath + 'wi.mp3'), type: 'L'},
{key: 28, en: 'yi', ar: 'يِ',  audio: require(kasrahAudioPath + 'ye.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1616;'}
];


// BASIC ARABIC ALPHABET WITH DAMMA
export const ARABIC_DAMMA = [
{key: 1, en: 'u', ar: 'اُ', audio: require(dammaAudioPath + 'uu.mp3'), type: 'L'},
{key: 2, en: 'bu', ar: 'بُ',   audio: require(dammaAudioPath + 'bu.mp3'), type: 'L'},
{key: 3, en: 'tu', ar: 'تُ',   audio: require(dammaAudioPath + 'tu.mp3'), type: 'L'},
{key: 4, en: 'thu', ar: 'ثُ',  audio: require(dammaAudioPath + 'thu.mp3'), type: 'L'},
{key: 5, en: 'ju', ar: 'جُ',  audio: require(dammaAudioPath + 'ju.mp3'), type: 'L'},
{key: 6, en: 'Hu', ar: 'ُح',  audio: require(dammaAudioPath + 'hu.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1615;'},
{key: 7, en: 'khu', ar: 'ُخ',  audio: require(dammaAudioPath + 'khu.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1615;'},
{key: 8, en: 'du', ar: 'ُد',  audio: require(dammaAudioPath + 'du.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1615;'},
{key: 9, en: 'dhu', ar: 'ُذ',  audio: require(dammaAudioPath + 'dhu.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;&#1615;'},
{key: 10, en: 'ru', ar: 'رُ',  audio: require(dammaAudioPath + 'ru.mp3'), type: 'L'},
{key: 11, en: 'zu', ar: 'زُ',  audio: require(dammaAudioPath + 'zu.mp3'), type: 'L'},
{key: 12, en: 'su', ar: 'ُس',  audio: require(dammaAudioPath + 'su.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1615;', showImg: true, img: require(imgPathL4 + 'su.png')},
{key: 13, en: 'shu', ar: 'شُ',  audio: require(dammaAudioPath + 'shu.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1615;', showImg: true, img: require(imgPathL4 + 'shu.png')},
{key: 14, en: 'Su', ar: 'صُ',  audio: require(dammaAudioPath + 'su1.mp3'), type: 'L', showImg: true, img: require(imgPathL4 + 'su1.png')},
{key: 15, en: 'Du', ar: 'ضُ',  audio: require(dammaAudioPath + 'du1.mp3'), type: 'L', showImg: true, img: require(imgPathL4 + 'Du.png')},
{key: 16, en: 'Tu', ar: 'ُط',  audio: require(dammaAudioPath + 'tu1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1615;'},
{key: 17, en: 'Dhu', ar: 'ُظ',  audio: require(dammaAudioPath + 'zu1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1615;'},
{key: 18, en: 'u‘', ar: 'عُ',  audio: require(dammaAudioPath + 'uu1.mp3'), type: 'L'},
{key: 19, en: 'ghu', ar: 'غُ',  audio: require(dammaAudioPath + 'ghu.mp3'), type: 'L'},
{key: 20, en: 'fu', ar: 'فُ',  audio: require(dammaAudioPath + 'fu.mp3'), type: 'L', showImg: true, img: require(imgPathL4 + 'fu.png')},
{key: 21, en: 'qu', ar: 'قُ',  audio: require(dammaAudioPath + 'qu.mp3'), type: 'L'},// Someone coughing behind
{key: 22, en: 'ku', ar: 'ُك',  audio: require(dammaAudioPath + 'ku.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1615;'},// Redo
{key: 23, en: 'lu', ar: 'لُ',  audio: require(dammaAudioPath + 'lu.mp3'), type: 'L'},
{key: 24, en: 'mu', ar: 'مُ',  audio: require(dammaAudioPath + 'mu.mp3'), type: 'L'},
{key: 25, en: 'nu', ar: 'نُ',  audio: require(dammaAudioPath + 'nu.mp3'), type: 'L'},
{key: 26, en: 'hu', ar: 'ُه',  audio: require(dammaAudioPath + 'hu1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1615;'},
{key: 27, en: 'wu', ar: 'وُ',  audio: require(dammaAudioPath + 'wu.mp3'), type: 'L'},
{key: 28, en: 'yu', ar: 'يُ',  audio: require(dammaAudioPath + 'yu.mp3'), type: 'L'}
];


// BASIC ARABIC ALPHABET WITH FATHA-TAIN
export const ARABIC_FATHATAIN = [
{key: 1, en: 'an', ar: 'اُ', audio: require(fathatainAudioPath + 'an.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1611;'},
{key: 2, en: 'ban', ar: 'بُ',   audio: require(fathatainAudioPath + 'ban.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1611;'},
{key: 3, en: 'tan', ar: 'تُ',   audio: require(fathatainAudioPath + 'tan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1611;'},
{key: 4, en: 'than', ar: 'ثُ',  audio: require(fathatainAudioPath + 'than.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1611;'},
{key: 5, en: 'jan', ar: 'جُ',  audio: require(fathatainAudioPath + 'jan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1611;'},
{key: 6, en: 'Han', ar: 'ُح',  audio: require(fathatainAudioPath + 'hun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1611;'},//missing
{key: 7, en: 'khan', ar: 'ُخ',  audio: require(fathatainAudioPath + 'khun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1611;'},
{key: 8, en: 'dan', ar: 'ُد',  audio: require(fathatainAudioPath + 'dan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1611;'},
{key: 9, en: 'dhan', ar: 'ُذ',  audio: require(fathatainAudioPath + 'zhun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;&#1611;'},
{key: 10, en: 'ran', ar: 'رُ',  audio: require(fathatainAudioPath + 'run.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1611;'},
{key: 11, en: 'zan', ar: 'زُ',  audio: require(fathatainAudioPath + 'zun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1611;'},
{key: 12, en: 'san', ar: 'ُس',  audio: require(fathatainAudioPath + 'sun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1611;', showImg: true, img: require(imgPathL5 + 'san.png')},
{key: 13, en: 'shan', ar: 'شُ',  audio: require(fathatainAudioPath + 'shun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1611;', showImg: true, img: require(imgPathL5 + 'shan.png')},
{key: 14, en: 'San', ar: 'صُ',  audio: require(fathatainAudioPath + 'suon.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1611;', showImg: true, img: require(imgPathL5 + 'san1.png')},
{key: 15, en: 'Dan', ar: 'ضُ',  audio: require(fathatainAudioPath + 'duon.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1611;', showImg: true, img: require(imgPathL5 + 'Dan.png')},
{key: 16, en: 'Tan', ar: 'ُط',  audio: require(fathatainAudioPath + 'tuon.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1611;'},
{key: 17, en: 'Dhan', ar: 'ُظ',  audio: require(fathatainAudioPath + 'zun1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1611;'},
{key: 18, en: 'a‘n', ar: 'عُ',  audio: require(fathatainAudioPath + 'uun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1611;'},
{key: 19, en: 'ghan', ar: 'غُ',  audio: require(fathatainAudioPath + 'ghun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1611;'},
{key: 20, en: 'fan', ar: 'فُ',  audio: require(fathatainAudioPath + 'fun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1611;', showImg: true, img: require(imgPathL5 + 'fan.png')},
{key: 21, en: 'qan', ar: 'قُ',  audio: require(fathatainAudioPath + 'qun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1611;'},// Someone coughing behind
{key: 22, en: 'kan', ar: 'ُك',  audio: require(fathatainAudioPath + 'kun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1611;'},// Redo
{key: 23, en: 'lan', ar: 'لُ',  audio: require(fathatainAudioPath + 'lan.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1611;', showImg: true, img: require(imgPathL5 + 'lan.png')},
{key: 24, en: 'man', ar: 'مُ',  audio: require(fathatainAudioPath + 'mun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1611;'},
{key: 25, en: 'nan', ar: 'نُ',  audio: require(fathatainAudioPath + 'nun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1611;'},
{key: 26, en: 'han', ar: 'ُه',  audio: require(fathatainAudioPath + 'hun1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1611;'},
{key: 27, en: 'wan', ar: 'وُ',  audio: require(fathatainAudioPath + 'wun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1611;'},
{key: 28, en: 'yan', ar: 'يُ',  audio: require(fathatainAudioPath + 'yun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1611;'}
];

// BASIC ARABIC ALPHABET WITH KASRAH-TAIN
export const ARABIC_KASRAHTAIN = [
{key: 1, en: 'in', ar: 'اٍ', audio: require(kasratainAudioPath + 'in.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1613;'},
{key: 2, en: 'bin', ar: 'بٍ',   audio: require(kasratainAudioPath + 'bin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1613;'},
{key: 3, en: 'tin', ar: 'تٍ',   audio: require(kasratainAudioPath + 'tin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1613;'},
{key: 4, en: 'thin', ar: 'ثٍ',  audio: require(kasratainAudioPath + 'sin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1613;'},
{key: 5, en: 'jin', ar: 'جٍ',  audio: require(kasratainAudioPath + 'jin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1613;', showImg: true, img: require(imgPathL6 + 'jin.png')},
{key: 6, en: 'Hin', ar: 'حٍ',  audio: require(kasratainAudioPath + 'hin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1613;', showImg: true, img: require(imgPathL6 + 'Hin.png')},
{key: 7, en: 'khin', ar: 'خٍ',  audio: require(kasratainAudioPath + 'hhuin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1613;', showImg: true, img: require(imgPathL6 + 'khin.png')},
{key: 8, en: 'din', ar: 'دٍ',  audio: require(kasratainAudioPath + 'din.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1613;'},
{key: 9, en: 'dhin', ar: 'ٍذ',  audio: require(kasratainAudioPath + 'dhin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;&#1613;'},//Not said properly redo
{key: 10, en: 'rin', ar: 'رُ',  audio: require(kasratainAudioPath + 'rin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1613;'},
{key: 11, en: 'zin', ar: 'زُ',  audio: require(kasratainAudioPath + 'zin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1613;'},
{key: 12, en: 'sin', ar: 'ُس',  audio: require(kasratainAudioPath + 'sin1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1613;', showImg: true, img: require(imgPathL6 + 'sin.png')},
{key: 13, en: 'shin', ar: 'شُ',  audio: require(kasratainAudioPath + 'shin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1613;', showImg: true, img: require(imgPathL6 + 'shin.png')},
{key: 14, en: 'Sin', ar: 'صُ',  audio: require(kasratainAudioPath + 'suin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1613;', showImg: true, img: require(imgPathL6 + 'sin1.png')},
{key: 15, en: 'Din', ar: 'ضُ',  audio: require(kasratainAudioPath + 'duin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1613;', showImg: true, img: require(imgPathL6 + 'din.png')},//Not said properly redo
{key: 16, en: 'Tin', ar: 'ُط',  audio: require(kasratainAudioPath + 'tin1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1613;'},//Not said properly redo
{key: 17, en: 'Dhin', ar: 'ُظ',  audio: require(kasratainAudioPath + 'zuin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1613;'},//Not said properly redo
{key: 18, en: 'i‘n', ar: 'عُ',  audio: require(kasratainAudioPath + 'ayin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1613;', showImg: true, img: require(imgPathL6 + 'in.png')},
{key: 19, en: 'ghin', ar: 'غُ',  audio: require(kasratainAudioPath + 'ghin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1613;', showImg: true, img: require(imgPathL6 + 'ghin.png')},
{key: 20, en: 'fin', ar: 'فُ',  audio: require(kasratainAudioPath + 'fin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1613;'},
{key: 21, en: 'qin', ar: 'قُ',  audio: require(kasratainAudioPath + 'qin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1613;'},
{key: 22, en: 'kin', ar: 'ُك',  audio: require(kasratainAudioPath + 'kin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1613;'},
{key: 23, en: 'lin', ar: 'لُ',  audio: require(kasratainAudioPath + 'lin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1613;', showImg: true, img: require(imgPathL6 + 'lin.png')},
{key: 24, en: 'min', ar: 'مُ',  audio: require(kasratainAudioPath + 'min.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1613;'},
{key: 25, en: 'nin', ar: 'نُ',  audio: require(kasratainAudioPath + 'nin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1613;', showImg: true, img: require(imgPathL6 + 'nin.png')},
{key: 26, en: 'hin', ar: 'ُه',  audio: require(kasratainAudioPath + 'huin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1613;'},
{key: 27, en: 'win', ar: 'وُ',  audio: require(kasratainAudioPath + 'win.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1613;'},
{key: 28, en: 'yin', ar: 'يُ',  audio: require(kasratainAudioPath + 'yin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1613;'}
];


// BASIC ARABIC ALPHABET WITH DAMMA-TAIN
export const ARABIC_DAMMATAIN = [
{key: 1, en: 'un', ar: 'اُ', audio: require(dummatainAudioPath + 'uu.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1612;'},
{key: 2, en: 'bun', ar: 'بُ',   audio: require(dummatainAudioPath + 'bun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1612;'},
{key: 3, en: 'tun', ar: 'تُ',   audio: require(dummatainAudioPath + 'tun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1612;'},
{key: 4, en: 'thun', ar: 'ثُ',  audio: require(dummatainAudioPath + 'shun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1612;'},
{key: 5, en: 'jun', ar: 'جُ',  audio: require(dummatainAudioPath + 'jaun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1612;'},
{key: 6, en: 'Hun', ar: 'ُح',  audio: require(dummatainAudioPath + 'hun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1612;'},
{key: 7, en: 'khun', ar: 'ُخ',  audio: require(dummatainAudioPath + 'khun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1612;'},
{key: 8, en: 'dun', ar: 'ُد',  audio: require(dummatainAudioPath + 'dhun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1612;'},
{key: 9, en: 'dhun', ar: 'ُذ',  audio: require(dummatainAudioPath + 'Zhun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;&#1612;'},
{key: 10, en: 'run', ar: 'رُ',  audio: require(dummatainAudioPath + 'ron.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1612;'},
{key: 11, en: 'zun', ar: 'زُ',  audio: require(dummatainAudioPath + 'zun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1612;'},
{key: 12, en: 'sun', ar: 'ُس',  audio: require(dummatainAudioPath + 'sun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1612;', showImg: true, img: require(imgPathL7 + 'sun.png')},
{key: 13, en: 'shun', ar: 'شُ',  audio: require(dummatainAudioPath + 'shun1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1612;', showImg: true, img: require(imgPathL7 + 'shun.png')},
{key: 14, en: 'Sun', ar: 'صُ',  audio: require(dummatainAudioPath + 'soun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1612;', showImg: true, img: require(imgPathL7 + 'sun1.png')},
{key: 15, en: 'Dun', ar: 'ضُ',  audio: require(dummatainAudioPath + 'dun1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1612;', showImg: true, img: require(imgPathL7 + 'Dun.png')},
{key: 16, en: 'Tun', ar: 'ُط',  audio: require(dummatainAudioPath + 'tun1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1612;'},// Wrongly said, redo
{key: 17, en: 'Dhun', ar: 'ُظ',  audio: require(dummatainAudioPath + 'zun1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1612;'},
{key: 18, en: 'u‘n', ar: 'عُ',  audio: require(dummatainAudioPath + 'uun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1612;'},
{key: 19, en: 'ghun', ar: 'غُ',  audio: require(dummatainAudioPath + 'ghun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1612;'},
{key: 20, en: 'fun', ar: 'فُ',  audio: require(dummatainAudioPath + 'fun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1612;', showImg: true, img: require(imgPathL7 + 'fun.png')},
{key: 21, en: 'qun', ar: 'قُ',  audio: require(dummatainAudioPath + 'qun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1612;'},// Redo
{key: 22, en: 'kun', ar: 'ُك',  audio: require(dummatainAudioPath + 'kun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1612;'},// Redo
{key: 23, en: 'lun', ar: 'لُ',  audio: require(dummatainAudioPath + 'lun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1612;', showImg: true, img: require(imgPathL7 + 'lun.png')},
{key: 24, en: 'mun', ar: 'مُ',  audio: require(dummatainAudioPath + 'mun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1612;'},
{key: 25, en: 'nun', ar: 'نُ',  audio: require(dummatainAudioPath + 'nun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1612;'},
{key: 26, en: 'hun', ar: 'ُه',  audio: require(dummatainAudioPath + 'hun1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1612;'},
{key: 27, en: 'wun', ar: 'وُ',  audio: require(dummatainAudioPath + 'wun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1612;'},
{key: 28, en: 'yun', ar: 'يُ',  audio: require(dummatainAudioPath + 'yun.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1612;'}
];


// FOUR TYPE ACROSS ONE LETTER
export const ARABIC_4_TYPE = [
	{...ARABIC_ALPHABET[0], key: 1, message: 'Isolated'}, // ISOATED
	{...ARABIC_ALPHABET[0], key: 2, ar: 'ا', message: 'Beginning', isPosition: true, isStart: true, audio: ''}, // START
	{...ARABIC_ALPHABET[0], key: 3, ar: 'ـا', message: 'Middle', isPosition: true, isMiddle: true, audio: ''}, // MIDDLE
	{...ARABIC_ALPHABET[0], key: 4, ar: 'ـا', message: 'End', isPosition: true, isEnd: true, audio: ''}, // END

	{...ARABIC_ALPHABET[1], key: 5, message: 'Isolated'},
	{...ARABIC_ALPHABET[1], key: 6, ar: 'بـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[1], key: 7, ar: 'ـبـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[1], key: 8, ar: 'ـب', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[2], key: 9, message: 'Isolated'},
	{...ARABIC_ALPHABET[2], key: 10, ar: 'تـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[2], key: 11, ar: 'ـتـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[2], key: 12, ar: 'ـت', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[3], key: 13, message: 'Isolated'},
	{...ARABIC_ALPHABET[3], key: 14, ar: 'ثـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[3], key: 15, ar: 'ـثـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[3], key: 16, ar: 'ـث', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[4], key: 17, message: 'Isolated'},
	{...ARABIC_ALPHABET[4], key: 18, ar: 'جـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[4], key: 19, ar: 'ـجـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[4], key: 20, ar: 'ـج', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[5], key: 21, message: 'Isolated'},
	{...ARABIC_ALPHABET[5], key: 22, ar: 'حـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[5], key: 23, ar: 'ـحـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[5], key: 24, ar: 'ـح', message: 'End', isPosition: true, isEnd: true, audio: ''},


	{...ARABIC_ALPHABET[6], key: 25, message: 'Isolated'},
	{...ARABIC_ALPHABET[6], key: 26, ar: 'خـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[6], key: 27, ar: 'ـخـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[6], key: 28, ar: 'ـخ', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[7], key: 29, message: 'Isolated'},
	{...ARABIC_ALPHABET[7], key: 30, ar: 'د', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[7], key: 31, ar: 'ـد', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[7], key: 32, ar: 'ـد', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[8], key: 33, message: 'Isolated'},
	{...ARABIC_ALPHABET[8], key: 34, ar: 'ذ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[8], key: 35, ar: 'ـذ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[8], key: 36, ar: 'ـذ', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[9], key: 37, message: 'Isolated'},
	{...ARABIC_ALPHABET[9], key: 38, ar: 'ر', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[9], key: 39, ar: 'ـر', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[9], key: 40, ar: 'ـر', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[10], key: 41, message: 'Isolated'},
	{...ARABIC_ALPHABET[10], key: 42, ar: 'ز', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[10], key: 43, ar: 'ـز', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[10], key: 44, ar: 'ـز', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[11], key: 45, message: 'Isolated'},
	{...ARABIC_ALPHABET[11], key: 46, ar: 'سـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[11], key: 47, ar: 'سـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[11], key: 48, ar: 'ـس', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[12], key: 49, message: 'Isolated'},
	{...ARABIC_ALPHABET[12], key: 50, ar: 'شـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[12], key: 51, ar: 'شـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[12], key: 52, ar: 'ـش', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[13], key: 53, message: 'Isolated'},
	{...ARABIC_ALPHABET[13], key: 54, ar: 'صـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[13], key: 55, ar: 'ـصـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[13], key: 56, ar: 'ـص', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[14], key: 57, message: 'Isolated'},
	{...ARABIC_ALPHABET[14], key: 58, ar: 'ضـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[14], key: 59, ar: 'ـضـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[14], key: 60, ar: 'ـض', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[15], key: 61, message: 'Isolated'},
	{...ARABIC_ALPHABET[15], key: 62, ar: 'ط', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[15], key: 63, ar: 'ـطـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[15], key: 64, ar: 'ـط', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[16], key: 65, message: 'Isolated'},
	{...ARABIC_ALPHABET[16], key: 66, ar: 'ظ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[16], key: 67, ar: 'ـظـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[16], key: 68, ar: 'ـظ', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[17], key: 69, message: 'Isolated'},
	{...ARABIC_ALPHABET[17], key: 70, ar: 'عـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[17], key: 71, ar: 'ـعـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[17], key: 72, ar: 'ـع', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[18], key: 73, message: 'Isolated'},
	{...ARABIC_ALPHABET[18], key: 74, ar: 'غـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[18], key: 75, ar: 'ـغـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[18], key: 76, ar: 'ـغ', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[19], key: 77, message: 'Isolated'},
	{...ARABIC_ALPHABET[19], key: 78, ar: 'فـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[19], key: 79, ar: 'ـفـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[19], key: 80, ar: 'ـف', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[20], key: 81, message: 'Isolated'},
	{...ARABIC_ALPHABET[20], key: 82, ar: 'قـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[20], key: 83, ar: 'ـقـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[20], key: 84, ar: 'ـق', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[21], key: 85, message: 'Isolated'},
	{...ARABIC_ALPHABET[21], key: 86, ar: 'كـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[21], key: 87, ar: 'ـكـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[21], key: 88, ar: 'ـك', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[22], key: 89, message: 'Isolated'},
	{...ARABIC_ALPHABET[22], key: 90, ar: 'لـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[22], key: 91, ar: 'ـلـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[22], key: 92, ar: 'ـل', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[23], key: 93, message: 'Isolated'},
	{...ARABIC_ALPHABET[23], key: 94, ar: 'مـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[23], key: 95, ar: 'ـمـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[23], key: 96, ar: 'ـم', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[24], key: 97, message: 'Isolated'},
	{...ARABIC_ALPHABET[24], key: 98, ar: 'نـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[24], key: 99, ar: 'ـنـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[24], key: 100, ar: 'ـن', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[25], key: 101, message: 'Isolated'},
	{...ARABIC_ALPHABET[25], key: 102, ar: 'هـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[25], key: 103, ar: 'ـهـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[25], key: 104, ar: 'ـه', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[26], key: 105, message: 'Isolated'},
	{...ARABIC_ALPHABET[26], key: 106, ar: 'و', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[26], key: 107, ar: 'ـو', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[26], key: 108, ar: 'ـو', message: 'End', isPosition: true, isEnd: true, audio: ''},

	{...ARABIC_ALPHABET[27], key: 109, message: 'Isolated'},
	{...ARABIC_ALPHABET[27], key: 110, ar: 'يـ', message: 'Beginning', isPosition: true, isStart: true, audio: ''},
	{...ARABIC_ALPHABET[27], key: 111, ar: 'ـيـ', message: 'Middle', isPosition: true, isMiddle: true, audio: ''},
	{...ARABIC_ALPHABET[27], key: 112, ar: 'ـي', message: 'End', isPosition: true, isEnd: true, audio: ''}
];

// BASIC ARABIC ALPHABET
export const ARABIC_4_VARIATION = [
{...ARABIC_ALPHABET[0], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[0],ARABIC_4_TYPE[1],ARABIC_4_TYPE[2],ARABIC_4_TYPE[3]]},
{...ARABIC_ALPHABET[1], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[4],ARABIC_4_TYPE[5],ARABIC_4_TYPE[6],ARABIC_4_TYPE[7]]},
{...ARABIC_ALPHABET[2], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[8],ARABIC_4_TYPE[9],ARABIC_4_TYPE[10],ARABIC_4_TYPE[11]]},
{...ARABIC_ALPHABET[3], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[12],ARABIC_4_TYPE[13],ARABIC_4_TYPE[14],ARABIC_4_TYPE[15]]},
{...ARABIC_ALPHABET[4], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[16],ARABIC_4_TYPE[17],ARABIC_4_TYPE[18],ARABIC_4_TYPE[19]]},
{...ARABIC_ALPHABET[5], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[20],ARABIC_4_TYPE[21],ARABIC_4_TYPE[22],ARABIC_4_TYPE[23]]},
{...ARABIC_ALPHABET[6], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[24],ARABIC_4_TYPE[25],ARABIC_4_TYPE[26],ARABIC_4_TYPE[27]]},
{...ARABIC_ALPHABET[7], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[28],ARABIC_4_TYPE[29],ARABIC_4_TYPE[30],ARABIC_4_TYPE[31]]},
{...ARABIC_ALPHABET[8], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[32],ARABIC_4_TYPE[33],ARABIC_4_TYPE[34],ARABIC_4_TYPE[35]]},
{...ARABIC_ALPHABET[9], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[36],ARABIC_4_TYPE[37],ARABIC_4_TYPE[38],ARABIC_4_TYPE[39]]},
{...ARABIC_ALPHABET[10], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[40],ARABIC_4_TYPE[41],ARABIC_4_TYPE[42],ARABIC_4_TYPE[43]]},
{...ARABIC_ALPHABET[11], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[44],ARABIC_4_TYPE[45],ARABIC_4_TYPE[46],ARABIC_4_TYPE[47]]},
{...ARABIC_ALPHABET[12], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[48],ARABIC_4_TYPE[49],ARABIC_4_TYPE[50],ARABIC_4_TYPE[51]]},
{...ARABIC_ALPHABET[13], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[52],ARABIC_4_TYPE[53],ARABIC_4_TYPE[54],ARABIC_4_TYPE[55]]},
{...ARABIC_ALPHABET[14], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[56],ARABIC_4_TYPE[57],ARABIC_4_TYPE[58],ARABIC_4_TYPE[59]]},
{...ARABIC_ALPHABET[15], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[60],ARABIC_4_TYPE[61],ARABIC_4_TYPE[62],ARABIC_4_TYPE[63]]},
{...ARABIC_ALPHABET[16], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[64],ARABIC_4_TYPE[65],ARABIC_4_TYPE[66],ARABIC_4_TYPE[67]]},
{...ARABIC_ALPHABET[17], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[68],ARABIC_4_TYPE[69],ARABIC_4_TYPE[70],ARABIC_4_TYPE[71]]},
{...ARABIC_ALPHABET[18], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[72],ARABIC_4_TYPE[73],ARABIC_4_TYPE[74],ARABIC_4_TYPE[75]]},
{...ARABIC_ALPHABET[19], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[76],ARABIC_4_TYPE[77],ARABIC_4_TYPE[78],ARABIC_4_TYPE[79]]},
{...ARABIC_ALPHABET[20], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[80],ARABIC_4_TYPE[81],ARABIC_4_TYPE[82],ARABIC_4_TYPE[83]]},
{...ARABIC_ALPHABET[21], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[84],ARABIC_4_TYPE[85],ARABIC_4_TYPE[86],ARABIC_4_TYPE[87]]},
{...ARABIC_ALPHABET[22], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[88],ARABIC_4_TYPE[89],ARABIC_4_TYPE[90],ARABIC_4_TYPE[91]]},
{...ARABIC_ALPHABET[23], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[92],ARABIC_4_TYPE[93],ARABIC_4_TYPE[94],ARABIC_4_TYPE[95]]},
{...ARABIC_ALPHABET[24], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[96],ARABIC_4_TYPE[97],ARABIC_4_TYPE[98],ARABIC_4_TYPE[99]]},
{...ARABIC_ALPHABET[25], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[100],ARABIC_4_TYPE[101],ARABIC_4_TYPE[102],ARABIC_4_TYPE[103]]},
{...ARABIC_ALPHABET[26], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[104],ARABIC_4_TYPE[105],ARABIC_4_TYPE[106],ARABIC_4_TYPE[107]]},
{...ARABIC_ALPHABET[27], type: Constant.GENERIC.FOUR_LETTER_EXERCISE, data:[ARABIC_4_TYPE[108],ARABIC_4_TYPE[109],ARABIC_4_TYPE[110],ARABIC_4_TYPE[111]]},
];

// BASIC ARABIC ALPHABET WITH SHADDAH
export const ARABIC_SHADDAH = [
{key: 1, en: 'in', ar: 'اٍ', audio: require(kasratainAudioPath + 'in.mp3'), type: 'L', enableUnicode: true, unicode: '&#1575;&#1613;'},
{key: 2, en: 'Bin', ar: 'بٍ',   audio: require(kasratainAudioPath + 'bin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1576;&#1613;'},
{key: 3, en: 'Tin', ar: 'تٍ',   audio: require(kasratainAudioPath + 'tin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1578;&#1613;'},
{key: 4, en: 'Sin', ar: 'ثٍ',  audio: require(kasratainAudioPath + 'sin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1579;&#1613;'},
{key: 5, en: 'Jin', ar: 'جٍ',  audio: require(kasratainAudioPath + 'jin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1580;&#1613;'},
{key: 6, en: 'Hin', ar: 'حٍ',  audio: require(kasratainAudioPath + 'hin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1581;&#1613;'},
{key: 7, en: 'Hhuin', ar: 'خٍ',  audio: require(kasratainAudioPath + 'hhuin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1582;&#1613;'},
{key: 8, en: 'Din', ar: 'دٍ',  audio: require(kasratainAudioPath + 'din.mp3'), type: 'L', enableUnicode: true, unicode: '&#1583;&#1613;'},
{key: 9, en: 'Dhin', ar: 'ٍذ',  audio: require(kasratainAudioPath + 'dhin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1584;&#1613;'},//Not said properly redo
{key: 10, en: 'Ruin', ar: 'رُ',  audio: require(kasratainAudioPath + 'rin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1585;&#1613;'},
{key: 11, en: 'Zin', ar: 'زُ',  audio: require(kasratainAudioPath + 'zin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1586;&#1613;'},
{key: 12, en: 'Sin1', ar: 'ُس',  audio: require(kasratainAudioPath + 'sin1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1587;&#1613;'},
{key: 13, en: 'Shin', ar: 'شُ',  audio: require(kasratainAudioPath + 'shin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1588;&#1613;'},
{key: 14, en: 'Suin', ar: 'صُ',  audio: require(kasratainAudioPath + 'suin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1589;&#1613;'},
{key: 15, en: 'Duin', ar: 'ضُ',  audio: require(kasratainAudioPath + 'duin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1590;&#1613;'},//Not said properly redo
{key: 16, en: 'Tin1', ar: 'ُط',  audio: require(kasratainAudioPath + 'tin1.mp3'), type: 'L', enableUnicode: true, unicode: '&#1591;&#1613;'},//Not said properly redo
{key: 17, en: 'Zuin', ar: 'ُظ',  audio: require(kasratainAudioPath + 'zuin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1592;&#1613;'},//Not said properly redo
{key: 18, en: 'Ayin', ar: 'عُ',  audio: require(kasratainAudioPath + 'ayin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1593;&#1613;'},
{key: 19, en: 'Ghin', ar: 'غُ',  audio: require(kasratainAudioPath + 'ghin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1594;&#1613;'},
{key: 20, en: 'Fin', ar: 'فُ',  audio: require(kasratainAudioPath + 'fin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1601;&#1613;'},
{key: 21, en: 'Qin', ar: 'قُ',  audio: require(kasratainAudioPath + 'qin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1602;&#1613;'},
{key: 22, en: 'Kin', ar: 'ُك',  audio: require(kasratainAudioPath + 'kin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1603;&#1613;'},
{key: 23, en: 'Lin', ar: 'لُ',  audio: require(kasratainAudioPath + 'lin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1604;&#1613;'},
{key: 24, en: 'Min', ar: 'مُ',  audio: require(kasratainAudioPath + 'min.mp3'), type: 'L', enableUnicode: true, unicode: '&#1605;&#1613;'},
{key: 25, en: 'Nin', ar: 'نُ',  audio: require(kasratainAudioPath + 'nin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1606;&#1613;'},
{key: 26, en: 'Huin', ar: 'ُه',  audio: require(kasratainAudioPath + 'huin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1607;&#1613;'},
{key: 27, en: 'Win', ar: 'وُ',  audio: require(kasratainAudioPath + 'win.mp3'), type: 'L', enableUnicode: true, unicode: '&#1608;&#1613;'},
{key: 28, en: 'Yin', ar: 'يُ',  audio: require(kasratainAudioPath + 'yin.mp3'), type: 'L', enableUnicode: true, unicode: '&#1610;&#1613;'}
];