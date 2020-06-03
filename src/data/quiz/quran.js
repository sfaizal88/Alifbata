/**
*
* quran.js
* The holy quran questions Questions
*
* @author - Faizal
* @date   - 18 May 2020
*
***/
// ALL SHARED FILES
import * as Utils from '../../shared/utils';

export const data = [
{
question: "How many verses are there in the Quran?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: '6,236'},
{id: 2, option: '7,859'},
{id: 3, option: '3,200'},
{id: 4, option: '4,390'}
])
},
{
question: "Over how many years was the Quran revealed?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: '21'},
{id: 2, option: '23'},
{id: 3, option: '18'},
{id: 4, option: '26'}
])
},
{
question: "What does the word Quran mean?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: 'Book'},
{id: 2, option: 'Religious text'},
{id: 3, option: 'Recite'},
{id: 4, option: 'Notes'}
])
},
{
question: "Name the shortest surah in the Quran?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: 'Surah Ikhlas'},
{id: 2, option: 'Surah Nas'},
{id: 3, option: 'Surah Al Kawther'},
{id: 4, option: 'Surah Mulk'}
])
},
{
question: "What surah was revealed first to Prophet Muhammad (pbuh)?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: 'Surah Fatiha'},
{id: 2, option: 'Surah Baqara'},
{id: 3, option: 'Surah Alaqa'},
{id: 4, option: 'Surah Nas'}
])
},
{// noanswer
question: "What is the final surah in the Quran?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: 'Surah Al Nas'},
{id: 2, option: 'Surah Al Asr'},
{id: 3, option: 'Surah Al Nasr'},
{id: 4, option: 'Surah Fatiha'}
])
},
{// noanswer
question: "What was the last Surah revealed to Prophet Muhammad (pbuh)?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: 'Sural Al Nas'},
{id: 2, option: 'Sural Ikhlas'},
{id: 3, option: 'Surah Al Nasr'},
{id: 4, option: 'Surah Al Asr'}
])
},
{
question: "What is the reward of reciting Surah Ikhlas 3 times?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: 'A house in Jannah'},
{id: 2, option: 'All sins of the day are forgiven'},
{id: 3, option: 'A years sins are washed aways'},
{id: 4, option: "The reward of reciting the entire Quran"}
])
},
{
question: "If you recite Surah Mulk daily, what does this protect you from?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: 'The Jinn'},
{id: 2, option: 'Depression'},
{id: 3, option: 'The fire of hell'},
{id: 4, option: 'Punishment of the grave'}
])
},
{
question: "What is the virtue of reciting Ayatul Kursi before bed?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: 'Takes away hunger'},
{id: 2, option: 'Gives you strength'},
{id: 3, option: 'You are protected from harm till sunrise'},
{id: 4, option: 'Takes away sorrow'}
])
},
{
question: "Name the longest Surah in the Quran?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: 'Surah Yasin'},
{id: 2, option: 'Surah Ali Imrah'},
{id: 3, option: 'Surah Mulk'},
{id: 4, option: 'Surah Baqarah'}
])
},
{
question: "Who is the author of the Quran?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Almighty Allah"},
{id: 2, option: "Gabriel"},
{id: 3, option: "Jinn"},
{id: 4, option: "Prophet Muhammad (PBUH)"}
])
},
/*{
question: "In which language was the Holy Quran revealed?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Hebrew"},
{id: 2, option: "Greek"},
{id: 3, option: "Latin"},
{id: 4, option: "Arabic"}
])
},*/
{
question: "Who is mentioned in the Quran, who has the right to be worshiped?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "All deities"},
{id: 2, option: "The sun and the moon"},
{id: 3, option: "Fire and water"},
{id: 4, option: "Almighty Allah"}
])
},
{
question: "How many chapters does the glorious Quran contain?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "100"},
{id: 2, option: "125"},
{id: 3, option: "114"},
{id: 4, option: "90"}
])
},
{
question: "What is the first verse which was revealed to Prophet Muhammad (PBUH)?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Read in the name of your Lord who created - created man (Quran 96:1)"},
{id: 2, option: "All praise is due to Allah, Lord of the worlds (Quran 1:1)"},
{id: 3, option: "This is the Scripture whereof there is no doubt, a guidance unto those who ward off (evil) (Quran 2:2)"},
{id: 4, option: "Say: He is Allah, the One! (Quran 112:1)"}
])
},
{
question: "Through which angel were some of the verses of the Quran revealed?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Jibril"},
{id: 2, option: "Mika'il"},
{id: 3, option: "Israfil"},
{id: 4, option: "The Angel of Death"}
])
},
{
question: "Which of these animals is NOT mentioned in the Quran?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Giraffe"},
{id: 2, option: "Camel"},
{id: 3, option: "Elephant"},
{id: 4, option: "Donkey"}
])
},
{
question: "Which is the only month mentioned in the Quran?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Muharram"},
{id: 2, option: "Safar"},
{id: 3, option: "Rajab"},
{id: 4, option: "Ramadhan"}
])
},
{
question: "Who is the only woman to be mentioned in the Quran by name?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Khadijah"},
{id: 2, option: "'Aishah"},
{id: 3, option: "Fatimah"},
{id: 4, option: "Maryam"}
])
},
{
question: "Which is the only Surah in the Quran which does not start with 'Bismillah...'",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Surah Al-Ma'idah"},
{id: 2, option: "Surah Al-A'raf"},
{id: 3, option: "Surah At-Taubah"},
{id: 4, option: "Surah Yusuf"}
])
},
/*{
question: "Which Surah has the name 'Allah' in every verse?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Surah Al-Kahf"},
{id: 2, option: "Surah Al-A'raf"},
{id: 3, option: "Surah Yusuf"},
{id: 4, option: "Surah Al-Mujadilah"}
])
},*/
{
question: "Which surah is considered as one third (1/3) of the Quran?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Surah Ya Seen"},
{id: 2, option: "Surah Muhammad"},
{id: 3, option: "Surah Ikhlas"},
{id: 4, option: "Surah Ar-Rahman"}
])
},
{
question: "How many Manzils are there in the Quran?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "7"},
{id: 2, option: "21"},
{id: 3, option: "11"},
{id: 4, option: "17"}
])
},
{
question: "How many times did the blessed name Prohet Muhammad (pbuh) appear in the Quran?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "40"},
{id: 2, option: "4"},
{id: 3, option: "104"},
{id: 4, option: "27"}
])
},
{
question: "Which Pillar of Islam has a surah named after it?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Fasting"},
{id: 2, option: "Prayers"},
{id: 3, option: "Belief"},
{id: 4, option: "Pilgrimage"}
])
},
{
question: "In Surah Rahman, how many times ‘fabi ayye aalahi rabbikuma tukazziban’ is used?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "31"},
{id: 2, option: "30"},
{id: 3, option: "25"},
{id: 4, option: "26"}
])
},
{
question: "Which Surah is regarded as the Heart of the Quran?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Surah Yaseen"},
{id: 2, option: "Surah Muhammad"},
{id: 3, option: "Surah Ikhlas"},
{id: 4, option: "Surah Ar-Rahman"}
])
},
{
question: "Which Surah was revealed twice?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: 'Surah al-Fatiha'},
{id: 2, option: 'Surah Baqara'},
{id: 3, option: 'Surah Alaqa'},
{id: 4, option: 'Surah Nas'}
])
},
/*{
question: "On which day did the first revelation descend?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Friday"},
{id: 2, option: "Sunday"},
{id: 3, option: "Monday"},
{id: 4, option: "Saturday"}
])
},*/
{
question: "Where was the first Surah revealed?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Abu Dhabi"},
{id: 2, option: "Jerusalem"},
{id: 3, option: "Mecca"},
{id: 4, option: "Madina"}
])
},
{
question: "Where was the last Surah revealed?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Abu Dhabi"},
{id: 2, option: "Jerusalem"},
{id: 3, option: "Mecca"},
{id: 4, option: "Madina"}
])
},
{
question: "What is/are the other name(s) of the Quran according to the Quran itself?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Al-Furqaan"},
{id: 2, option: "Al-Kitaab"},
{id: 3, option: "Al-Zikr"},
{id: 4, option: "All of the options"}
])
},
{
question: "How many Para or Juz (parts) are there in the Quran?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "30"},
{id: 2, option: "114"},
{id: 3, option: "40"},
{id: 4, option: "100"}
])
},
{
question: "Name the Prophet whose name is mentioned and discussed most in the Quran?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: 'Musa (as)'},
{id: 2, option: 'Yusuf (as)'},
{id: 3, option: 'Yunus (as)'},
{id: 4, option: 'Yaqub (as)'}
])
},
{
question: "Who is the man about whom, Allah has said in the Quran that his body is kept as an admonishing example for future generations to come?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "Harun"},
{id: 2, option: "Firaun"},
{id: 3, option: "Qaabil"},
{id: 4, option: "Yam"}
])
},
{
question: "The Quran repeatedly warns of a certain day. Which day it is?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Yaumul Qiyamah"},
{id: 2, option: "Laylat al-Qadr"},
{id: 3, option: "Laylat al-Raghaib"},
{id: 4, option: "Laylat al-Miraj"}
])
},/*
{
question: "What is the scale or measure of one’s dignity according to the Quran?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "Wealth"},
{id: 2, option: "Piety"},
{id: 3, option: "Beauty"},
{id: 4, option: "Strength"}
])
},*/
{
question: "In which Surah (Chapter) of the Quran Bismillah is repeated twice?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: 'Surah An-Naml'},
{id: 2, option: 'Surah Al-Baqarah'},
{id: 3, option: 'Surah Alaqa'},
{id: 4, option: 'Surah Nas'}
])
},
{
question: "On which night was the Quran first revealed?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Night of Barat (Shab-e-Barat)"},
{id: 2, option: "Last night of the month of Ramadhan"},
{id: 3, option: "Night of Qadr (Laylat al-Qadr)"},
{id: 4, option: "First night of the month of Ramadhan"}
])
},
{
question: "What are the conditions for holding or touching the Quran?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Clean and recommended to be with Wudhu (ablution)"},
{id: 2, option: "Fasting"},
{id: 3, option: "None of the options"},
{id: 4, option: "Both the options"}
])
},
{
question: "How many Makki Surahs (chapters) are there in the Quran?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "114"},
{id: 2, option: "86"},
{id: 3, option: "28"},
{id: 4, option: "30"}
])
},
{
question: "How many Madani Surahs(chapters) are there in the Quran?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "114"},
{id: 2, option: "86"},
{id: 3, option: "28"},
{id: 4, option: "30"}
])
},
{
question: "How many Manzils (stages) are there in the Quran?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "7"},
{id: 2, option: "30"},
{id: 3, option: "114"},
{id: 4, option: "6236"}
])
},
{
question: "What is/are the different name(s) used for Satan or Devil in the Quran?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Iblees"},
{id: 2, option: "Ash-Shaitaan"},
{id: 3, option: "Both the options"},
{id: 4, option: "None of the options"}
])
},
{
question: "Which category of creature does the Quran put ‘Iblees’ into?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Jinn"},
{id: 2, option: "Angels"},
{id: 3, option: "Humans"},
{id: 4, option: "Prophets"}
])
},
{
question: "How many Surahs in the Quran have the titles named after different Prophets?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "30"},
{id: 2, option: "6"},
{id: 3, option: "17"},
{id: 4, option: "25"}
])
},
{
question: "In which Surah of the Quran do you find ‘Ayat-ul-Kursi’ verse?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: 'Surah An-Naml'},
{id: 2, option: 'Surah Al-Baqarah'},
{id: 3, option: 'Surah Alaqa'},
{id: 4, option: 'Surah Nas'}
])
},
/*
{
question: "What will be our condition on ‘The Day of the Judgement’ according to the Quran?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "State of relief"},
{id: 2, option: "State of anxiety"},
{id: 3, option: "State of happiness"},
{id: 4, option: "State of surprise"}
])
},
{
question: "According to the Quran who is “khaatamun Nabiyyeen” (the last of the Prophets)?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: 'Dajjal'},
{id: 2, option: 'Muhammad (as)'},
{id: 3, option: 'Sulaiman (as)'},
{id: 4, option: 'Yusuf (as)'}
])
},
{
question: "In the Quran what other name is given to the city of Makkah?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Bakkah"},
{id: 2, option: "Baladul Ameen"},
{id: 3, option: "Ummul Qura"},
{id: 4, option: "All of the options"}
])
},*/
{
question: "Whose Generation is known as “Bani Israeel” according to the Quran?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: 'Yunus (as)'},
{id: 2, option: 'Yaqub (as)'},
{id: 3, option: 'Harun (as)'},
{id: 4, option: 'Ishaq (as)'}
])
},
{
question: "What is the term used by Muslims for people who have completely memorized the Holy Quran?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Hafiz"},
{id: 2, option: "Imam"},
{id: 3, option: "Sahabi"},
{id: 4, option: "Ummah"}
])
},
{
question: "What is the term used in the Quran to refer to the message that Prophet Muhammad (as) get from Allah?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Wahy"},
{id: 2, option: "Present"},
{id: 3, option: "Wealth"},
{id: 4, option: "Knowledge"}
])
},
{
question: "How many skies does Quran mention about?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "7"},
{id: 2, option: "6"},
{id: 3, option: "3"},
{id: 4, option: "8"}
])
},
{
question: "How many aayaths does Surah Al-Fathihah contain",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "4"},
{id: 2, option: "7"},
{id: 3, option: "9"},
{id: 4, option: "6"}
])
},/*
{
question: "Prophet Muhammad (pbuh) said one who wants to know about the Day of Judgement as if he/she has seen it with his/her own eyes should read this/these Surah(s).",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Surah Al-Haaqah"},
{id: 2, option: "Surah Al-Qiyamah"},
{id: 3, option: "Surah Al-Inshiqaq"},
{id: 4, option: "Surah Al-Fathihah"}
])
},*/
{
question: "Which of these mosques are mentioned in the Quran?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Masjid Al-Zirar"},
{id: 2, option: "Masjid Al-Haram and Al-Nabi"},
{id: 3, option: "Masjid Al-Aqsa and Quba"},
{id: 4, option: "All of the options"}
])
},/*
{
question: "What was the interval between the 1st and 2nd revelation to Prophet Muhammad (as)?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "2 years and 6 months"},
{id: 2, option: "2 years and 3 months"},
{id: 3, option: "6 months"},
{id: 4, option: "3 months"}
])
}*/
	{
		question: "What is the Arabic term used for the interpretation of the Quran?",
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "Al Baqarah"},
			{id: 2, option: "Notes"},
			{id: 3, option: "Hadith"},
			{id: 4, option: "Tafseer"}
		])
	},
	{
		question: "Who is the first Caller of Azan in Islam?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Bilal ibn Rabah"},
			{id: 2, option: "Abu Bakr RA"},
			{id: 3, option: "Prophet Muhammad (PBUH)"},
			{id: 4, option: "Musailamah Kazzab"}
		])
	},
	{
		question: "Which Surah (chapter) of the Quran is recited in every rakath of salah (prayers)?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Al-Fatihah (chapter 1)"},
			{id: 2, option: "Al-Ikhlas (chapter 112)"},
			{id: 3, option: "An-Nas (chapter 114)"},
			{id: 4, option: "Al-Ala (chapter 87)"}
		])
	},
	{
		question: "Which prayer does Allah mention in the Holy Quran to especially guard?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Fajr Salah"},
			{id: 2, option: "Asar Salah"},
			{id: 3, option: "Zuhr Salah"},
			{id: 4, option: "Maghrib prayers"}
		])
	},

];

