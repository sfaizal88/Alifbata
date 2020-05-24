/**
*
* questions.js
* Question data
*
* @author - Faizal
* @date   - 6 May 2020
*
***/
// ALL SHARED FILES
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';

export const data = [
	{
		question: 'At what age did Prophet Muhammad become a prophet?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: '25'},
			{id: 2, option: '35'},
			{id: 3, option: '40'},
			{id: 4, option: '47'}
		])
	},
	{
		question: 'Prophet Dawud (as) is famously known for the story of Dawud (David) Vs?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'The Beast'},
			{id: 2, option: 'The monster'},
			{id: 3, option: 'The dragon'},
			{id: 4, option: 'Goliath'}
		])
	},
	{
		question: 'Who was the 1st person to accept Islam during prophet Muhammad‘s life?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Bakr'},
			{id: 2, option: 'Khadijah'},
			{id: 3, option: 'Bilal'},
			{id: 4, option: 'Umar'}
		])
	},
	{
		question: 'How many brothers did Prophet Yusuf (as) have?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: '11'},
			{id: 2, option: '6'},
			{id: 3, option: '14'},
			{id: 4, option: '10'}
		])
	},
	{
		question: 'Prophet Yusuf (as) possesed half the worlds?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Wealth'},
			{id: 2, option: 'Resources (oil/food)'},
			{id: 3, option: 'Knowledge'},
			{id: 4, option: 'Beauty'}
		])
	},
	{
		question: 'Who was prophet Yusuf‘s (as) father?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Ayyub (as)'},
			{id: 2, option: 'Prophet Yaqoob (as)'},
			{id: 3, option: 'Prophet Musa (as)'},
			{id: 4, option: 'Prophet Ibrahim (as)'}
		])
	},
	{
		question: 'How many names does Allah (swt) have?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: '101'},
			{id: 2, option: '100'},
			{id: 3, option: '99'},
			{id: 4, option: '102'}
		])
	},
	{
		question: 'How many daily prayers did Allah originally ordain upon Prophet Muhammad‘s (pbuh) ummah?',
		answer: 4,
		options: [
			{id: 1, option: '5'},
			{id: 2, option: '25'},
			{id: 3, option: '18'},
			{id: 4, option: '50'}
		]
	},
	{
		question: 'What was the name of Prophet Muhammad‘s (pbuh) 1st wife?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Aisha'},
			{id: 2, option: 'Kulsum'},
			{id: 3, option: 'Mariam'},
			{id: 4, option: 'Khadijah'}
		])
	},
	{
		question: 'What was the name of Prophet Muhammad (pbuh) babysitter/ wet nurse as a child?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Kulsuma'},
			{id: 2, option: 'Zalika'},
			{id: 3, option: 'Hannah'},
			{id: 4, option: 'Halimah'}
		])
	},
	{
		question: 'What is the name of Prophet Muhammad (pbuh) Father?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Abdullah'},
			{id: 2, option: 'Abdur Rahman'},
			{id: 3, option: 'Abu Talib'},
			{id: 4, option: 'Abd al-Muttalib'}
		])
	},
	{
		question: 'What prophet had a dream of seeing 11 stars, the sun and the moon bow to him?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Muhammad (pbuh)'},
			{id: 2, option: 'Prophet Adam (as)'},
			{id: 3, option: 'Prophet Ibrahim (as)'},
			{id: 4, option: 'Prophet Yusuf (as)'}
		])
	},
	{
		question: 'What prophet was Musa (as) father in law?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Ayyub (as)'},
			{id: 2, option: 'Ibrahim (as)'},
			{id: 3, option: 'Shuaib (as)'},
			{id: 4, option: 'Yusuf (as)'}
		])
	},
	{
		question: 'When Prophet Musa (as) parted the sea, what did he strike it with?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'His hand'},
			{id: 2, option: 'A Staaf'},
			{id: 3, option: 'Nothing, he made a dua & it opened'},
			{id: 4, option: 'His leg'}
		])
	},
	{
		question: 'What tribe did Prophet Muhammad (pbuh) belong to?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'The tribe of Makkah'},
			{id: 2, option: 'The Quraish'},
			{id: 3, option: 'The Al Aswad tribe'},
			{id: 4, option: 'The Kahlan'}
		])
	},
	{
		question: 'Where is Prophet Muhammad (pbuh) buried?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Makkah'},
			{id: 2, option: 'Mina'},
			{id: 3, option: 'Arafat'},
			{id: 4, option: 'Madinah'}
		])
	},
	{
		question: 'What is the reward of reciting Surah Ikhlas 3 times?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'A house in Jannah'},
			{id: 2, option: 'All sins of the day are forgiven'},
			{id: 3, option: 'A years sins are washed aways'},
			{id: 4, option: 'The reward of reciting the entire Quran'}
		])
	},
	{
		question: 'If you recite Surah Mulk daily, what does this protect you from?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'The Jinn'},
			{id: 2, option: 'Depression'},
			{id: 3, option: 'The fire of hell'},
			{id: 4, option: 'Punishment of the grave'}
		])
	},
	{
		question: 'What is the virtue of reciting Ayatul Kursi before bed?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Takes away hunger'},
			{id: 2, option: 'Gives you strength'},
			{id: 3, option: 'You are protected from harm till sunrise'},
			{id: 4, option: 'Takes away sorrow'}
		])
	},
	{
		question: 'Name the longest Surah in the Quran?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Surah Yasin'},
			{id: 2, option: 'Surah Ali Imrah'},
			{id: 3, option: 'Surah Mulk'},
			{id: 4, option: 'Surah Baqarah'}
		])
	},
	{
		question: 'In how many days did Allah create the Heavens and the Earth?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '7 days'},
			{id: 2, option: '11 days'},
			{id: 3, option: '3 days'},
			{id: 4, option: '6 days'}
		])
	},
	{
		question: 'Why did Shaytan not bow down to Adam (as) when asked by Allah ?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Because Shaytan was scared'},
			{id: 2, option: 'Because Shaytan was unable to'},
			{id: 3, option: 'Due to pride'},
			{id: 4, option: 'Due to sorrow'}
		])
	},
	{
		question: 'Name the shortest surah in the Quran?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Surah Ikhlas'},
			{id: 2, option: 'Surah Nas'},
			{id: 3, option: 'Surah Al Kawther'},
			{id: 4, option: 'Surah Mulk'}
		])
	},
	{
		question: 'What surah was revealed first to Prophet Muhammad (pbuh)?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Surah Fatiha'},
			{id: 2, option: 'Surah Baqara'},
			{id: 3, option: 'Surah Alaqa'},
			{id: 4, option: 'Surah Nas'}
		])
	},
	{// noanswer
		question: 'What is the final surah in the Quran?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Surah Al Nas'},
			{id: 2, option: 'Surah Al Asr'},
			{id: 3, option: 'Surah Al Nasr'},
			{id: 4, option: 'Surah Fatiha'}
		])
	},
	{// noanswer
		question: 'What was the last Surah revealed to Prophet Muhammad (pbuh)?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Sural Al Nas'},
			{id: 2, option: 'Sural Ikhlas'},
			{id: 3, option: 'Surah Al Nasr'},
			{id: 4, option: 'Surah Al Asr'}
		])
	},
	{
		question: 'What is a hadith?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Verses from the Quran'},
			{id: 2, option: 'Saying and or traditions of Prophet Muhammad (pbuh)'},
			{id: 3, option: 'Books'},
			{id: 4, option: 'Notes'}
		])
	},
	{
		question: 'Linguistically what does Shariah mean?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Islamic Law'},
			{id: 2, option: 'Death penalty'},
			{id: 3, option: 'A water source'},
			{id: 4, option: 'Holy Quran'}
		])
	},
	{
		question: 'Which Angel will blow the horn to signal the final days?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Jibraeel'},
			{id: 2, option: 'Mikaeel'},
			{id: 3, option: 'Mailk ul Moat'},
			{id: 4, option: 'Israfeel'}
		])
	},
	{
		question: 'Name prophet Sulaiman (as) father?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Ibrahim (as)'},
			{id: 2, option: 'Prophet Lukman (as)'},
			{id: 3, option: 'Prophet Dawud (as)'},
			{id: 4, option: 'Prophet Yahya (as)'}
		])
	},
	{
		question: 'Who built the Kaabah?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Issac (as)'},
			{id: 2, option: 'Prophet Ibrahim & Prophet Ishmaeel (as)'},
			{id: 3, option: 'Prophet Ibrahim & Prophet Ishaq (as)'},
			{id: 4, option: 'Prophet Ibrahim (as)'}
		])
	},
	{
		question: 'What does Zam Zam mean?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Holy water'},
			{id: 2, option: 'Water well'},
			{id: 3, option: 'To drink'},
			{id: 4, option: 'Stop'}
		])
	},
	{
		question: 'What did Prophet Nuh (as) build?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Ship'},
			{id: 2, option: 'House'},
			{id: 3, option: 'Mosque'},
			{id: 4, option: 'Cave'}
		])
	},
	{
		question: 'What is the name of Prophet Isa (as) grandmother?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Maryam'},
			{id: 2, option: 'Saarah'},
			{id: 3, option: 'Husnara'},
			{id: 4, option: 'Hanna'}
		])
	},
	{
		question: 'Prophet Isa (as) had a cousin of a similar age who was a prophet too, can you name him?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Muhammad (pbuh)'},
			{id: 2, option: 'Dawud'},
			{id: 3, option: 'Musa'},
			{id: 4, option: 'Yahya'}
		])
	},
	{
		question: 'How old was Prophet Muhammad at the time of death?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: '61'},
			{id: 2, option: '63'},
			{id: 3, option: '62'},
			{id: 4, option: '59'}
		])
	},
	{
		question: 'Over how many years was the Quran revealed?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: '21'},
			{id: 2, option: '23'},
			{id: 3, option: '18'},
			{id: 4, option: '26'}
		])
	},
	{
		question: 'Name the 2nd prophet?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Nuh (as)'},
			{id: 2, option: 'Prophet Idris (as)'},
			{id: 3, option: 'Prophet Enoch (as)'},
			{id: 4, option: 'Prophet Moosa (as)'}
		])
	},
	{
		question: 'What significant world event happened during Prophet Nuh‘s (as) life time?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Earthquake'},
			{id: 2, option: 'Plague'},
			{id: 3, option: 'Flood'},
			{id: 4, option: 'Sound'}
		])
	},
	{
		question: 'Where was the Quran 1st revealed to Prophet Muhammad (Pbuh)?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'In his house'},
			{id: 2, option: 'In the mosque'},
			{id: 3, option: 'In the desert'},
			{id: 4, option: 'In cave'}
		])
	},
	{
		question: 'Name the prophet who was swallowed by a whale?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Ayyub (as)'},
			{id: 2, option: 'Shuaib (as)'},
			{id: 3, option: 'Yunus (as)'},
			{id: 4, option: 'Yaqub (as)'}
		])
	},
	{
		question: 'Name the prophet who was thrown into fire by his own people but did not burn?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Ibrahim (as)'},
			{id: 2, option: 'Muhammad (as)'},
			{id: 3, option: 'Lukman (as)'},
			{id: 4, option: 'Lut (as)'}
		])
	},
	{
		question: 'Which prophet had control of the Jinn and was able to talk to animals?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Dawud (as)'},
			{id: 2, option: 'Muhammad (pbuh)'},
			{id: 3, option: 'Sulaiman (as)'},
			{id: 4, option: 'Yunus (as)'}
		])
	},
	{
		question: 'Who was Prophet Ibrahim‘s grandson?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Yunus (As)'},
			{id: 2, option: 'Yaqub (As)'},
			{id: 3, option: 'Harun (As)'},
			{id: 4, option: 'Ishaq (As)'}
		])
	},
	{
		question: 'What revelation was revealed to Prophet Isa (as) ?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Quran'},
			{id: 2, option: 'PSALMS (Zaboor)'},
			{id: 3, option: 'Injeel (Bible)'},
			{id: 4, option: 'Torah (Taurat)'}
		])
	},
	{
		question: 'What revelation was revealed to Prophet Musa (as)?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Quran'},
			{id: 2, option: 'Bible (Injeel)'},
			{id: 3, option: 'Torah ( Taurat)'},
			{id: 4, option: 'Dead Sea scrolls'}
		])
	},
	{
		question: 'What revelation was revealed to Dawud (as) ?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'PSALMS (Zuboor)'},
			{id: 2, option: 'Bible (Injeel)'},
			{id: 3, option: 'Dead Sea scrolls (Kitab)'},
			{id: 4, option: 'Torah (Taurat)'}
		])
	},
	{
		question: 'Name the angel who revealed the Quran to Muhammad (pbuh)?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Angel Mikaeel'},
			{id: 2, option: 'Israfeel'},
			{id: 3, option: 'Gibraeel'},
			{id: 4, option: 'Mailk ul Moat'}
		])
	},
	{
		question: 'How many verses are there in the Quran?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: '6,236'},
			{id: 2, option: '7,859'},
			{id: 3, option: '3,200'},
			{id: 4, option: '4,390'}
		])
	},
	{
		question: 'What does the word Islam mean?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Religion'},
			{id: 2, option: 'Muslim'},
			{id: 3, option: 'Peace'},
			{id: 4, option: 'A person that submits to God'}
		])
	},
	{
		question: 'What does the word Muslim mean?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'A peaceful person'},
			{id: 2, option: 'A religious person'},
			{id: 3, option: 'A follower of the religion of Islam'},
			{id: 4, option: 'Other'}
		])
	},
	{
		question: 'What does the word Quran mean?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Book'},
			{id: 2, option: 'Religious text'},
			{id: 3, option: 'Recite'},
			{id: 4, option: 'Notes'}
		])
	},
	{
		question: 'Muslims pray towards the Kaaba (Qibla), but what was the Qibla before the Kaabah?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Madinah'},
			{id: 2, option: 'Qibla Masjid'},
			{id: 3, option: 'Al Aqsa'},
			{id: 4, option: 'Cheramaan Juma Mosque'}
		])
	},
	{
		question: 'How many years was their between Prophet Muhammad (pbuh) and Prophet Isa (as)?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: '1000'},
			{id: 2, option: '400'},
			{id: 3, option: '600'},
			{id: 4, option: '750'}
		])
	},
	{
		question: 'Prophet Musa had a brother, what was his name?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Sulaiman'},
			{id: 2, option: 'Harun'},
			{id: 3, option: 'Shuaib'},
			{id: 4, option: 'Danyaal'}
		])
	},
	{
		question: 'Who was the enemy at the time of Musa?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Lahab'},
			{id: 2, option: 'Romans'},
			{id: 3, option: 'Pharoah'},
			{id: 4, option: 'The Quraish'}
		])
	},
	{
		question: 'What sea did Prophet Musa part?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Red sea'},
			{id: 2, option: 'The Nile'},
			{id: 3, option: 'The Caspian Sea'},
			{id: 4, option: 'The dead sea'}
		])
	},
	{
		question: 'Prophet Muhammad (pbuh) beat the Makkah/Arabian champion of what discipline of self defense/ sport?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Boxing'},
			{id: 2, option: 'Sword Fighting'},
			{id: 3, option: 'Wrestling'},
			{id: 4, option: 'Horse Riding'}
		])
	},
	{
		question: 'What creation is Shaytaan?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Human'},
			{id: 2, option: 'Angel'},
			{id: 3, option: 'Animal'},
			{id: 4, option: 'Jinn'}
		])
	},
	{
		question: 'How many years ago was Prophet Muhammad (pbuh) alive?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: '1500'},
			{id: 2, option: '1420'},
			{id: 3, option: '1441'},
			{id: 4, option: '1250'}
		])
	},
	{
		question: 'How many prophets existed?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '25'},
			{id: 2, option: '67'},
			{id: 3, option: '250'},
			{id: 4, option: '124,000'}
		])
	},
	{
		question: 'At what age did Prophet Isa (as) talk?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '14'},
			{id: 2, option: '3'},
			{id: 3, option: '5'},
			{id: 4, option: 'At birth'}
		])
	}
]