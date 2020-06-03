/**
*
* missingLetter.js
* Missing letter game
*
* @author - Faizal
* @date   - 26 May 2020
*
***/
// ALL SHARED FILES
import * as Utils from '../../shared/utils';

let imgURL = '../../../assets/img/'

const words = [
{ word: 'Musa', content: 'Prophet who holds out his staff and the Red Sea is parted by Allah SAW?', img: '', audio: ''},
{ word: 'Muhammed', content: 'Last Prophet?', img: '', audio: ''},
{ word: 'Yunus', content: '', img: require(imgURL + 'steps/prophetnames/21.png'), audio: ''},
{ word: 'Yusuf', content: '11 brothers?', img: '', audio: ''},
{ word: 'Adam', content: 'First Human?', img: '', audio: ''},
{ word: 'Isa', content: 'Prophet who brough Injeel?', img: '', audio: ''},
{ word: 'Allah', content: '', img: require(imgURL + 'steps/pillars/1.png'), audio: ''},
{ word: 'Quran', content: 'Revealed to Prophet Muhammad (pbuh)?', img: '', audio: ''},
{ word: 'Surah', content: '', img: '', audio: ''},
{ word: 'Faith', content: '', img: require(imgURL + 'steps/pillars/1.png'), audio: ''},
{ word: 'Prayer', content: 'One of the pillar in Islam?', img: '', audio: ''},
{ word: 'Zakath', content: '', img: require(imgURL + 'steps/pillars/3.png'), audio: ''},
{ word: 'Fasting', content: 'One of the pillar in Islam?', img: '', audio: ''},
{ word: 'Haji', content: 'One of the pillar in Islam?', img: '', audio: ''},
{ word: 'AngelJibril', content: 'Angel of Revelation?', img: '', audio: ''},
{ word: 'AngelIsrafil', content: 'Angel who blows the trumpet?', img: '', audio: ''},
{ word: 'AngelMikail', content: 'The Angel of Mercy?', img: '', audio: ''},
{ word: 'AngelMalik', content: 'The Angel of Death?', img: '', audio: ''},
{ word: 'Khaba', content: 'Build by Ibrahim (a.s) & Ismail (a.s)', img: '', audio: ''},
{ word: 'Mecca', content: 'Birth place of Prophet Muhammed (pbuh)?', img: '', audio: ''},
{ word: 'Al-Aqsa', content: 'Al-Aqsa', img: '', audio: ''},
{ word: 'Dajjal', content: 'False Messiah', img: '', audio: ''},
{ word: 'Heaven', content: 'Final believer place.', img: '', audio: ''},
{ word: 'Hell', content: 'Non-believer will be in?', img: '', audio: ''},
{ word: 'Honey', content: 'One of the favourite food of Prophet Muhammed (phub).', img: '', audio: ''},
{ word: 'Fig', content: 'One of the favourite food of Prophet Muhammed (phub).', img: '', audio: ''},
{ word: 'PrayerMat', content: '', img: require(imgURL + 'mat.png'), audio: ''},
{ word: 'Juz', content: 'Quran split into 30?', img: '', audio: ''},
{ word: 'Jinn', content: 'Made of fire?', img: '', audio: ''},
{ word: 'Angel', content: 'Made of light?', img: '', audio: ''},
{ word: 'Human', content: 'Made of clay?', img: '', audio: ''},
{ word: 'Muslim', content: 'Who we are?', img: '', audio: ''},
{ word: 'Peace', content: '', img: require(imgURL + 'steps/prophetnames/17.png'), audio: ''},
{ word: 'AllahuAkbar', content: 'Allah is most great', img: '', audio: ''},
{ word: 'MashaAllah', content: "Word used when you see something good and don't want to give the evil eye.", img: '', audio: ''},
{ word: 'Injeel', content: 'Revealed to Prophet Isa (a.s)?', img: '', audio: ''},
{ word: 'Light', content: 'Angel made of?', img: '', audio: ''},
{ word: 'Fire', content: 'Jinn made of?', img: '', audio: ''},
{ word: 'Clay', content: 'Human made of?', img: '', audio: ''},
{ word: 'Pilgrimage', content: 'One of the pillar in Islam?', img: '', audio: ''},
{ word: 'Belief', content: '', img: require(imgURL + 'steps/pillars/1.png'), audio: ''},
{ word: 'Madinah', content: 'Place where Prophet Muhammed (pbuh) buired?', img: '', audio: ''},
{ word: 'Imam', content: 'People who lead the prayer?', img: '', audio: ''},
{ word: 'Mina', content: '', img: require(imgURL + 'mina.png'), audio: ''},
{ word: 'Adhaan', content: 'Call for prayer?', img: '', audio: ''},
{ word: 'Salah', content: 'One of the pillar in Islam?', img: '', audio: ''},
{ word: 'Suhoor', content: 'Before starting the fasting', img: '', audio: ''},
{ word: 'Walima', content: 'Feast given by groom side on marriage?', img: '', audio: ''},
{ word: 'Taraweeh', content: 'Prayer name during Ramadhan month?', img: '', audio: ''},
{ word: 'Baqara', content: 'Longest surah?', img: '', audio: ''},
{ word: 'Camel', content: 'Miracle of Prophet Saleh (a.s)', img: '', audio: ''},
{ word: 'Giraffe', content: 'Longest neck', img: '', audio: ''},
{ word: 'Sheep', content: 'Animal sacrifice on Eid ul Adha?', img: '', audio: ''},
{ word: 'Fatimah', content: 'Daughter of Prophet Muhammed (pbuh)', img: '', audio: ''},
{ word: 'Maryam', content: 'Mother of Prophet Isa (a.s)', img: '', audio: ''},
{ word: 'Khadijah', content: 'First wife of Prophet Muhammed (pbuh)', img: '', audio: ''},
{ word: 'Jerusalem', content: 'Place of Al-Aqsa', img: '', audio: ''},
{ word: 'Iblees', content: 'Made of fire?', img: '', audio: ''},
{ word: 'Hafiz', content: 'Someone who has completely memorized the Quran.', img: '', audio: ''},
];

const generateKey = (list) => {
	list = list.map((item, index) => {
		return {...item, key: (index + 1)}
	});
	return list;
}

export const data = generateKey(words);