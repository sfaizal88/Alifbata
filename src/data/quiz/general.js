/**
*
* general.js
* All General Questions
*
* @author - Faizal
* @date   - 18 May 2020
*
***/
// ALL SHARED FILES
import * as Utils from '../../shared/utils';

export const data = [
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
	question: "Can Muslims eat Pork?",
	answer: 2,
	options: Utils.shuffle([
	{id: 1, option: "Yes"},
	{id: 2, option: "No"},
	{id: 3, option: "Sometimes"},
	{id: 4, option: "Depends"}
	])
	},
	{
	question: "What is the name of the Angel of Death?",
	answer: 4,
	options: Utils.shuffle([
	{id: 1, option: "Jibril"},
	{id: 2, option: "Mika'il"},
	{id: 3, option: "Israfil"},
	{id: 4, option: 'Mailk ul Maut'}
	])
	},
	{
	question: "Who was the 4th Khalifa of Islam?",
	answer: 1,
	options: Utils.shuffle([
	{id: 1, option: "Ali ibn Abi Talib"},
	{id: 2, option: "Umar ibn Al-Khattab"},
	{id: 3, option: "Uthman ibn Affan"},
	{id: 4, option: "Muhammad (pbuh)"}
	])
	},
	{
	question: "Who was the mother of Fatima (RA)?",
	answer: 2,
	options: Utils.shuffle([
	{id: 1, option: "Aisha bint Abu Bakr"},
	{id: 2, option: "Khadijah bint Khuwaylid"},
	{id: 3, option: "Sawda bint Zamʿa"},
	{id: 4, option: "Rayhana bint Zayd"}
	])
	},
	{
	question: "What are the angels on our shoulders called?",
	answer: 3,
	options: Utils.shuffle([
	{id: 1, option: "Naziat and Nashitat"},
	{id: 2, option: "Harut and Marut"},
	{id: 3, option: "Raqib and Atid"},
	{id: 4, option: "Munkar and Nakir"}
	])
	},
	{
	question: "How many Fard (obligatory) Rakats are there in Fajr?",
	answer: 1,
	options: Utils.shuffle([
	{id: 1, option: "2"},
	{id: 2, option: "3"},
	{id: 3, option: "4"},
	{id: 4, option: "8"}
	])
	},
	{
	question: "What do we say when we sneeze?",
	answer: 2,
	options: Utils.shuffle([
	{id: 1, option: "Allahu Akbar"},
	{id: 2, option: "Alhamdulillah"},
	{id: 3, option: "Masha Allah"},
	{id: 4, option: "Subhanallah"}
	])
	},
	{
	question: "Which angels test the faith of the dead in their graves?",
	answer: 4,
	options: Utils.shuffle([
	{id: 1, option: "Naziat and Nashitat"},
	{id: 2, option: "Harut and Marut"},
	{id: 3, option: "Raqib and Atid"},
	{id: 4, option: "Munkar and Nakir"}
	])
	},
	{
	question: "Who is Dajjal?",
	answer: 2,
	options: Utils.shuffle([
	{id: 1, option: "A Prophet"},
	{id: 2, option: "A false messiah, liar, the deceiver."},
	{id: 3, option: "The redeemer of Islam"},
	{id: 4, option: "An angel"}
	])
	},
	{
	question: "How many days will Dajjal stay?",
	answer: 1,
	options: Utils.shuffle([
	{id: 1, option: "40"},
	{id: 2, option: "90"},
	{id: 3, option: "13"},
	{id: 4, option: "7"}
	])
	},
	{
	question: "Who was the first man in the world?",
	answer: 3,
	options: Utils.shuffle([
	{id: 1, option: "Idris (as)"},
	{id: 2, option: "Qabil"},
	{id: 3, option: "Habil"},
	{id: 4, option: "Adam (as)"}
	])
	},
	{
	question: "What is the Arabic word for “book”?",
	answer: 1,
	options: Utils.shuffle([
	{id: 1, option: "Kitab"},
	{id: 2, option: "Injeel"},
	{id: 3, option: "Zabur"},
	{id: 4, option: "Torah"}
	])
	},
	{
	question: "What are the angels made from?",
	answer: 1,
	options: Utils.shuffle([
	{id: 1, option: "Light"},
	{id: 2, option: "Fire"},
	{id: 3, option: "Clay"},
	{id: 4, option: "None of the options"}
	])
	},
	{
		question: "There are groups of people that are not questioned by the angels in their graves. Who are they?",
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: "Prophets"},
			{id: 2, option: "Martyrs"},
			{id: 3, option: "All of the options"},
			{id: 4, option: "Non-pubescent children"}
		])
	},
	{
		question: "Who freed Bilal RA from slavery?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Abu Bakr RA"},
			{id: 2, option: "Prophet Muhammad (PBUH)"},
			{id: 3, option: "Khadijah"},
			{id: 4, option: "Umar Ibn Al-Khattab RA"}
		])
	},
	{
		question: "In which year the Islamic calendar began? ",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "622 AD"},
			{id: 2, option: "720 AD"},
			{id: 3, option: "689 AD"},
			{id: 4, option: "801 AD"}
		])
	},
	{
		question: "Who introduced the Islamic calendar?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Abu Bakr RA"},
			{id: 2, option: "Umar Ibn Al-Khattab"},
			{id: 3, option: "Prophet Muhammad (PBUH)"},
			{id: 4, option: "Bilal"}
		])
	},
	{
		question: "Who built the first Islamic navy? ",
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "Abu Bakr RA"},
			{id: 2, option: "Umar Ibn Al-Khattab"},
			{id: 3, option: "Prophet Muhammad (PBUH)"},
			{id: 4, option: "Uthman Ibn Affan RA"}
		])
	},
	{
		question: "Who first gave the idea for the call for prayer, known as Adhan, in the first year of Hijrah?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Abu Bakr RA"},
			{id: 2, option: "Umar Ibn Al-Khattab"},
			{id: 3, option: "Prophet Muhammad (PBUH)"},
			{id: 4, option: "Uthman Ibn Affan RA"}
		])
	},
	{
		question: "Who was the Christian ruler of Abyssinia who showed kindness to the Muslim immigrants from Makkah at the time of the Prophet?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Heraclius"},
			{id: 2, option: "Negus (Najjashi)"},
			{id: 3, option: "Khosrow II"},
			{id: 4, option: "Karl Marx"}
		])
	},
	{
		question: "Who was the first child who embraced Islam?",
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "Sufiyan"},
			{id: 2, option: "Uthman RA"},
			{id: 3, option: "Ismail"},
			{id: 4, option: "Ali RA"}
		])
	},
	{
		question: "Who was the first man who embraced Islam? ",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Abu Sufiyan"},
			{id: 2, option: "Abu Bakr RA"},
			{id: 3, option: "Umar Ibn Al-Khattab"},
			{id: 4, option: "Ismail RA"}
		])
	},
	{
		question: "What is the name of the cave in which Prophet Muhammad (pbuh) used to meditate and in which he was chosen as a Prophet of Allah?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Badir"},
			{id: 2, option: "Hira"},
			{id: 3, option: "Sawda"},
			{id: 4, option: "Madinah"}
		])
	},
	{
		question: "Give another word for Ka`bah, which means “Sacred Sanctuary” whose priests and custodians were Quraysh in the pre-Islamic days?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Haram"},
			{id: 2, option: "Zam Zam"},
			{id: 3, option: "Madinah"},
			{id: 4, option: "Allah Place"}
		])
	},
	{
		question: "What is the alternative to ablution, when either water is not available or there is a serious danger to health?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Purified sand or dust"},
			{id: 2, option: "Air"},
			{id: 3, option: "Purified cloth"},
			{id: 4, option: "None of the options"}
		])
	},
	{
		question: "What is the first month of the Islamic calendar?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Safar"},
			{id: 2, option: "Muharram"},
			{id: 3, option: "Rajab"},
			{id: 4, option: "Jumada al-thani"}
		])
	},
	{
		question: "What is the first month of the Islamic calendar?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Rabi' al-awwal"},
			{id: 2, option: "Dhu al-Hijjah"},
			{id: 3, option: "Shawwal"},
			{id: 4, option: "Ramadan"}
		])
	},
	{
		question: "Value of Salah in Masjidul Aqsa?",
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: "100,000"},
			{id: 2, option: "5000"},
			{id: 3, option: "500"},
			{id: 4, option: "1000"}
		])
	},
	{
		question: "What is the term for the breaking of the Fast?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Taraweeh"},
			{id: 2, option: "Iftaar"},
			{id: 3, option: "Sahoor"},
			{id: 4, option: "Tayammum"}
		])
	},
	{
		question: "Value of Salah in Al-Haram (in Mecca)?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "100,000"},
			{id: 2, option: "50,000"},
			{id: 3, option: "500"},
			{id: 4, option: "1000"}
		])
	},
	{
		question: "Value of Salah in Al-Masjid an-Nabawi (Medina)?",
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "100,000"},
			{id: 2, option: "5000"},
			{id: 3, option: "500"},
			{id: 4, option: "1000"}
		])
	},
	{
		question: "What is the most blessed month? ",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Ramadan"},
			{id: 2, option: "Shawwal"},
			{id: 3, option: "Safar"},
			{id: 4, option: "Muharram"}
		])
	},
	{
		question: "How many letters have 2 dots around them in arabic?",
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "5"},
			{id: 2, option: "2"},
			{id: 3, option: "4"},
			{id: 4, option: "3"}
		])
	},
	{
		question: "How many letters have 3 dots around them? ",
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "1"},
			{id: 2, option: "5"},
			{id: 3, option: "4"},
			{id: 4, option: "2"}
		])
	},
	{
		question: "What do you understand by the word 'Mashbooh'?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Doubtful"},
			{id: 2, option: "Forbidden"},
			{id: 3, option: "Permissible"},
			{id: 4, option: "None of the options"}
		])
	},
	{
		question: "What do you understand by the word Halal'?",
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: "Doubtful"},
			{id: 2, option: "Forbidden"},
			{id: 3, option: "Permissible"},
			{id: 4, option: "None of the options"}
		])
	},
	{
		question: "What do you understand by the word 'Haraam'?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Doubtful"},
			{id: 2, option: "Forbidden"},
			{id: 3, option: "Permissible"},
			{id: 4, option: "None of the options"}
		])
	},
	{
		question: "What should Muslims perform before offering salah (prayers)?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Wearing of skull-cap"},
			{id: 2, option: "Wudu (ablution)"},
			{id: 3, option: "Wearing of perfume"},
			{id: 4, option: "Clipping of nails"}
		])
	},
	{
		question: "How do Muslims begin their prayers?",
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "By Saying Bismillah (In the Name of Allah)"},
			{id: 2, option: "By Saying Subhanallah (Glory be to Allah)"},
			{id: 3, option: "By Saying Alhamdulillah (All praise is due to Allah)"},
			{id: 4, option: "By Saying Allahu Akbar (By pronouncing the greatness of Almighty Allah)"}
		])
	},
	{
		question: 'How many Angels will carry the Throne of Allah Subhanah on the Day of Judgment?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: '8'},
			{id: 2, option: '100'},
			{id: 3, option: '700'},
			{id: 4, option: '999'}
		])
	},
	{
		question: 'Who will return to defeat the dajjal on the day of judgement?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Musa (A.S)'},
			{id: 2, option: 'Prophet Isa (A.S)'},
			{id: 3, option: 'Prophet Ibrahim (A.S)'},
			{id: 4, option: 'Prophet Musa (A.S)'}
		])
	},
	{
		question: 'Who will come from Mecca and work together with Prophet Isa (A.S) to unite the Muslims?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Isa (A.S)'},
			{id: 2, option: 'The Mahdi'},
			{id: 3, option: 'Dajjal'},
			{id: 4, option: 'None of the options'}
		])
	},
	{
		question: 'After the Mahdi arrives, smoke or fog will cloud the skies for how long?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: '7 years'},
			{id: 2, option: '1 month'},
			{id: 3, option: '40 days'},
			{id: 4, option: '12 hours'}
		])
	},
	{
		question: "According to Islam, on the day of judgment, you will have to speak about how you spent your lifetime. But it isn't you who will do most of the talking! So who does?",
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Fingers'},
			{id: 2, option: 'Skin'},
			{id: 3, option: 'Limbs'},
			{id: 4, option: 'All the options'}
		])
	},
	{
		question: 'The Mahdi (the rightly guided caliph) will appear before the end of time. How long will he reign on this Earth before his death?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: '12-14 years'},
			{id: 2, option: '7-9 years'},
			{id: 3, option: '10-12 years'},
			{id: 4, option: '4-6 years'}
		])
	},
	{
		question: 'What does the word "Dajjal" mean in English?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'The great war'},
			{id: 2, option: 'The beast'},
			{id: 3, option: 'The deceiver'},
			{id: 4, option: 'Gog and Magog'}
		])
	},
	{
		question: 'How many times will the trumpet be blown at the end of time?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: '1'},
			{id: 2, option: '2'},
			{id: 3, option: '4'},
			{id: 4, option: '3'}
		])
	},
	{
		question: 'What was the first sin on Earth in Islam?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Adultery'},
			{id: 2, option: 'Theft'},
			{id: 3, option: 'Murder'},
			{id: 4, option: 'Falsehood'}
		])
	},
	{
		question: 'Which of the following does Islam prohibit?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Watching television'},
			{id: 2, option: 'Playing games'},
			{id: 3, option: 'The drinking of alcohol'},
			{id: 4, option: 'Driving car'}
		])
	},
	{
		question: 'What kind of food is a follower of Islam forbidden to eat?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Halal'},
			{id: 2, option: 'Haram'},
			{id: 3, option: 'Kosher'},
			{id: 4, option: 'No foods are banned'}
		])
	},
	{
		question: 'Eating which of the following animals is allowed according to Sunni Islam?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Lions'},
			{id: 2, option: 'Rabbits'},
			{id: 3, option: 'Cats'},
			{id: 4, option: 'Dogs'}
		])
	},
	{
		question: 'Islam forbids which of the following meat to be eaten?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Crow'},
			{id: 2, option: 'Snake'},
			{id: 3, option: 'Mouse'},
			{id: 4, option: 'All the Options'}
		])
	},
	{
		question: 'What is a common meat that Muslims are not allowed to eat?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Turkey'},
			{id: 2, option: 'Fish'},
			{id: 3, option: 'Pigeon'},
			{id: 4, option: 'Pork'}
		])
	},
	{
		question: 'What does La Ilaha Illa La mean?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'In the name of Allah, most Merciful most Kind'},
			{id: 2, option: 'Allah controls everything'},
			{id: 3, option: 'There is no God but Allah'},
			{id: 4, option: 'All in the heavens and earth belongs to Allah'}
		])
	},
	{
		question: 'What does Bismillah mean?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "In Allah's light"},
			{id: 2, option: 'Praise be to Allah'},
			{id: 3, option: 'Lord of the Worlds'},
			{id: 4, option: 'In the name of Allah'}
		])
	},
	{
		question: 'What is the belief in the "oneness of God" termed?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Tawheed'},
			{id: 2, option: 'Aqeeda'},
			{id: 3, option: 'Shirk'},
			{id: 4, option: 'Tajweed'}
		])
	},
	{
		question: 'Which important event, mentioned in the Quran occured one year before Hijrah in Makkah?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Miraj'},
			{id: 2, option: 'Umrah'},
			{id: 3, option: 'Hajj'},
			{id: 4, option: 'None of the options'}
		])
	},
	{
		question: 'Which sahabi is known as As-Siddiq?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Bakr'},
			{id: 2, option: "Ali ibn Abi Talib"},
			{id: 3, option: "Umar ibn Al-Khattab"},
			{id: 4, option: "Uthman ibn Affan"},
		])
	},
	{
		question: 'Which sahabi was the fourth Kalifah?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Bakr (RA)'},
			{id: 2, option: 'Ali (RA)'},
			{id: 3, option: 'Umar ibn Al-Khattab (RA)'},
			{id: 4, option: 'Uthman ibn Affan (RA)'}
		])
	},
	{
		question: 'Which sahabi was the second Kalifah?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Bakr (RA)'},
			{id: 2, option: 'Ali (RA)'},
			{id: 3, option: 'Umar ibn Al-Khattab (RA)'},
			{id: 4, option: 'Uthman ibn Affan (RA)'}
		])
	},
	{
		question: 'Which sahabi was the first Kalifah?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Bakr (RA)'},
			{id: 2, option: 'Ali (RA)'},
			{id: 3, option: 'Umar ibn Al-Khattab (RA)'},
			{id: 4, option: 'Uthman ibn Affan (RA)'}
		])
	},
	{
		question: 'Which sahabi was the third Kalifah?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Bakr (RA)'},
			{id: 2, option: 'Ali (RA)'},
			{id: 3, option: 'Umar ibn Al-Khattab (RA)'},
			{id: 4, option: 'Uthman ibn Affan (RA)'}
		])
	},
	{
		question: 'Who led the salah when the Prophet became very ill during his last days?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Bakr (RA)'},
			{id: 2, option: 'Ali (RA)'},
			{id: 3, option: 'Umar ibn Al-Khattab (RA)'},
			{id: 4, option: 'Uthman ibn Affan (RA)'}
		])
	},
	{
		question: 'This sahabi was among the richest youth of Makkah but he gave up everything for Islam?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Bakr (RA)'},
			{id: 2, option: 'Musaib bin Umair (RA)'},
			{id: 3, option: 'Umar ibn Al-Khattab (RA)'},
			{id: 4, option: 'Uthman ibn Affan (RA)'}
		])
	},
	{
		question: 'Who was the blessed sahabi in whose house the Prophet stayed upon migrating to Madinah?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Ayyub Al Ansari (RA)'},
			{id: 2, option: 'Musaib bin Umair (RA)'},
			{id: 3, option: 'Umar ibn Al-Khattab (RA)'},
			{id: 4, option: 'Uthman ibn Affan (RA)'}
		])
	},
	{
		question: 'Which sahabi was sent to Madinah to invite people to Islam before hijrah?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Ayyub Al Ansari (RA)'},
			{id: 2, option: 'Musaib bin Umair (RA)'},
			{id: 3, option: 'Abu Bakr (RA)'},
			{id: 4, option: 'Uthman ibn Affan (RA)'}
		])
	},
	{
		question: 'Which sahabi transmitted thousands of hadith to the later generation?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Ayyub Al Ansari (RA)'},
			{id: 2, option: 'Musaib bin Umair (RA)'},
			{id: 3, option: 'Abu Bakr (RA)'},
			{id: 4, option: 'Abu Hurayrah (RA)'}
		])
	},
	{
		question: 'Which uncle of the Prophet died in Uhud?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Abu Talib'},
			{id: 2, option: 'Hamza bin-Abdul Mutalib'},
			{id: 3, option: 'Abbas ibn Abd al-Muttalib'},
			{id: 4, option: 'Abu Lahab'}
		])
	},
	{
		question: 'From whom did humans learn about making graves?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Crow'},
			{id: 2, option: 'Sheep'},
			{id: 3, option: 'Angel'},
			{id: 4, option: 'Human'}
		])
	},
	{
		question: 'What was the name of the woman because of whom the first human was killed on earth?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Aqleema'},
			{id: 2, option: 'Hawaa'},
			{id: 3, option: 'Fathimah'},
			{id: 4, option: 'Khadhija'}
		])
	},
	{
		question: 'Which Prophet (as) did our Prophet Muhammed (pbuh) meet on the first sky?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Muhammad (pbuh)'},
			{id: 2, option: 'Prophet Adam (as)'},
			{id: 3, option: 'Prophet Ibrahim (as)'},
			{id: 4, option: 'Prophet Yusuf (as)'}
		])
	},
	{
		question: 'Where and when did Hazrat Adam and Hazrat Hawa (alaihimas salaam) meet?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'On the 9th of Zulhijjah at Arafaat'},
			{id: 2, option: 'On the 5th of Zulhijjah at Arafaat'},
			{id: 3, option: 'On the 6th of Zulhijjah at Arafaat'},
			{id: 4, option: 'On the 7th of Zulhijjah at Arafaat'}
		])
	},
	{
		question: 'Which Prophet first introduced measures and weight?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Muhammad (pbuh)'},
			{id: 2, option: 'Prophet Adam (as)'},
			{id: 3, option: 'Prophet Idris (as)'},
			{id: 4, option: 'Prophet Yusuf (as)'}
		])
	},
	{
		question: 'Who first introduced sewing?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Muhammad (pbuh)'},
			{id: 2, option: 'Prophet Adam (as)'},
			{id: 3, option: 'Prophet Idris (as)'},
			{id: 4, option: 'Prophet Yusuf (as)'}
		])
	},
	{
		question: 'Which Prophet (as) propagated religion for more then 950 years?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Prophet Muhammad (pbuh)'},
			{id: 2, option: 'Prophet Nuh (as)'},
			{id: 3, option: 'Prophet Idris (as)'},
			{id: 4, option: 'Prophet Yusuf (as)'}
		])
	},
	{
		question: 'A prophet is called .......... in Arabic?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Nabi'},
			{id: 2, option: 'Rasul'},
			{id: 3, option: 'Wahi'},
			{id: 4, option: 'None of the Options'}
		])
	},
	{
		question: 'Allah (s.w.t.) has?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'A son'},
			{id: 2, option: 'A partner'},
			{id: 3, option: 'A daughter'},
			{id: 4, option: 'No partner'}
		])
	},
	{
		question: "How many Allah (s.w.t.)'s are there ?",
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Three'},
			{id: 2, option: 'Two'},
			{id: 3, option: 'One'},
			{id: 4, option: 'Zero'}
		])
	},
	{
		question: 'What do you say when you sneeze ?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Yarhamukallah'},
			{id: 2, option: 'Ya Allah'},
			{id: 3, option: 'Alhamdu lillah'},
			{id: 4, option: 'La Ilaha Illal Lah'}
		])
	},
	{
		question: 'What is Salat?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Fasting'},
			{id: 2, option: 'Giving to the poor'},
			{id: 3, option: 'Praying'},
			{id: 4, option: 'Pilgrimage'}
		])
	},
	{
		question: 'Believing in Allah (s.w.t.) , in His angels, in His books, in His messengers, in the last day, in destiny and in life after death means a Muslim has?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Ihsan'},
			{id: 2, option: 'Taqwa'},
			{id: 3, option: 'Islam'},
			{id: 4, option: 'Iman'}
		])
	},
	{
		question: 'The house of Allah (s.w.t.) in Makkah is called?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Church'},
			{id: 2, option: 'Masjid Al-Aqsa'},
			{id: 3, option: 'Kaaba'},
			{id: 4, option: 'Masjid An-Nabawi'}
		])
	},
	{
		question: 'Prophet Muhammad (pbuh) was born into the noble tribe of Quraysh in Makkah in?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: '571 CE'},
			{id: 2, option: '610 CE'},
			{id: 3, option: '630 CE'},
			{id: 4, option: '632 CE'}
		])
	},
	{
		question: 'People who disobey Allah (s.w.t.) will be terribly punished by sending them to?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Prison'},
			{id: 2, option: 'Paradise'},
			{id: 3, option: 'Hell'},
			{id: 4, option: 'Court'}
		])
	},
	{
		question: 'How many areas did Abu Bakr (r.a.) had to send armies to at the same time to take care of the rebellion against Islam ?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: '15'},
			{id: 2, option: '11'},
			{id: 3, option: '9'},
			{id: 4, option: '6'}
		])
	},
	{
		question: 'It is neither a trade nor a profit but it is a means of exploitation and concentration of wealth. What is its Quranic term ?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Zakah'},
			{id: 2, option: 'Riba'},
			{id: 3, option: 'Haram'},
			{id: 4, option: 'Shura'}
		])
	},
	{
		question: 'Which one of the statement is correct about Hajj ?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'It is obligated on all able bodied men and women'},
			{id: 2, option: 'It is obligated only on those who can afford to make it'},
			{id: 3, option: 'It is optional to those who can afford it'},
			{id: 4, option: 'All the options'}
		])
	},
	{
		question: 'First masjid built by Prophet Muhamed (pbuh)?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Masjid ul Nabwi'},
			{id: 2, option: 'Masjid ul Haram'},
			{id: 3, option: 'Masjid ul Aqsa'},
			{id: 4, option: 'Masjid ul Quba'}
		])
	},
	{
		question: 'In what year was the direction of the qibla changed from Masjid ul Aqsa to Masjid ul Haram?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: '15 AD'},
			{id: 2, option: '2 AH'},
			{id: 3, option: '100 AD'},
			{id: 4, option: '20 AH'}
		])
	},
	{
		question: 'How many daughters did Prophet Muhamed (pbuh) have?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: '4'},
			{id: 2, option: '5'},
			{id: 3, option: '1'},
			{id: 4, option: '2'}
		])
	},
	{
		question: 'Second masjid built by Prophet Muhamed (pbuh)',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Masjid ul Nabwi'},
			{id: 2, option: 'Masjid ul Haram'},
			{id: 3, option: 'Masjid ul Aqsa'},
			{id: 4, option: 'Masjid ul Quba'}
		])
	},
	{
		question: 'Which prophet muhammed (pbuh) companion had the nickname "The Roman?"',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Suhayb'},
			{id: 2, option: 'Bilal'},
			{id: 3, option: 'Suliman'},
			{id: 4, option: 'Umar'}
		])
	},
	{
		question: 'One companion was sick on his bed and wanted to give all his money to charity, the Prophet only allowed him to give 1/3, who was he?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Muath ibn Jabal'},
			{id: 2, option: "Sa'd ibn Abi Waqqas"},
			{id: 3, option: 'Said ibn Muath'},
			{id: 4, option: 'Abu Bakr'}
		])
	},
	{
		question: 'Who was the first Sahabi to recite Quran aloud to Quraysh?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Abdullah ibn Masud'},
			{id: 2, option: 'Abu Bakr'},
			{id: 3, option: 'Umar ibn Khattab'},
			{id: 4, option: 'Said ibn Muath'}
		])
	},
	{
		question: 'Who is the first imam?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Imam Ali (A.S.)'},
			{id: 2, option: 'Imam Mehdi (A.T.F.)'},
			{id: 3, option: 'Imam Hasan Mujtaba (A.S.)'},
			{id: 4, option: 'Imam Ali Naqi (A.S.)'}
		])
	},
	{
		question: 'Which is the Holy Month in Islam?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Rajab'},
			{id: 2, option: 'Ramadan'},
			{id: 3, option: 'Shaban'},
			{id: 4, option: 'Muharram'}
		])
	},
	{
		question: 'How many Eids are there in a Islamic calendar year?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Two'},
			{id: 2, option: 'Three'},
			{id: 3, option: 'One'},
			{id: 4, option: 'Four'}
		])
	},
	{
		question: 'What was revealed during the month of Ramadan?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Torah'},
			{id: 2, option: 'Quran'},
			{id: 3, option: 'Hadith'},
			{id: 4, option: 'Injeel'}
		])
	},
	{
		question: 'In Ramadan you must also abstain from?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Bad Temper'},
			{id: 2, option: 'Speaking'},
			{id: 3, option: 'Working'},
			{id: 4, option: 'None of the options'}
		])
	},
	{
		question: 'What is the plural of hadith?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Hadiths'},
			{id: 2, option: 'AHadith'},
			{id: 3, option: 'Lots of Hadith'},
			{id: 4, option: 'None of the options'}
		])
	},
	{
		question: 'Ahadith were collected on paper by?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Later generations'},
			{id: 2, option: 'Prophet Muhammed (pbuh)'},
			{id: 3, option: 'Abu Bakr'},
			{id: 4, option: 'Umar'}
		])
	},
	{
		question: 'Dhul Qarnain built a wall to protect people from who?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Caesar'},
			{id: 2, option: 'Dajjal'},
			{id: 3, option: 'Pharoah'},
			{id: 4, option: 'Yajuj and Majuj'}
		])
	},
	{
		question: 'Which King built a wall to protect people from Yajuj and Majuj?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Dhul Qarnain'},
			{id: 2, option: 'Prophet Muhammed (pbuh)'},
			{id: 3, option: 'Umar'},
			{id: 4, option: 'Abu Bakr'}
		])
	},
	{
		question: 'When did the Islamic Calendar begin?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'From the birth of The Prophet Muhammad (pbuh)'},
			{id: 2, option: 'From the death of The Prophet Muhammad (pbuh)'},
			{id: 3, option: 'From the start of the migration to Madina'},
			{id: 4, option: 'From the start of the revelation of the Quran'}
		])
	},
	{
		question: 'Who invented the Islamic Calendar begin?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Umar (ra)'},
			{id: 2, option: 'Bilal (ra)'},
			{id: 3, option: 'Abu Bakr (ra'},
			{id: 4, option: 'Khadijah (ra'}
		])
	},
	{
		question: 'How many Companions of the Prophet (pbuh) were promised Jannah?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '6'},
			{id: 2, option: '7'},
			{id: 3, option: '5'},
			{id: 4, option: '10'}
		])
	},
	{
		question: 'The successors of the Prophet (pbuh) were known as?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Khulafa'},
			{id: 2, option: 'Sahaba'},
			{id: 3, option: 'None of the options'},
			{id: 4, option: 'All the options'}
		])
	},/*
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},*/
]