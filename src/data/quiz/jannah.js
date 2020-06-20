/**
*
* jannah.js
* All Jannah Questions
*
* @author - Faizal
* @date   - 18 May 2020
* Gates - https://www.learnreligions.com/doors-of-jannah-2004342
* Missing - Rawdah, Heavne names
***/
// ALL SHARED FILES
import * as Utils from '../../shared/utils';

export const data = [
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
		question: "Which angel guards the gates of Heaven?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Angel Mikaeel'},
			{id: 2, option: 'Riḍwan'},
			{id: 3, option: 'Gibraeel'},
			{id: 4, option: 'Mailk ul Moat'}
		])
	},
	{
		question: "How many levels are there in heaven?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "7"},
			{id: 2, option: "8"},
			{id: 3, option: "5"},
			{id: 4, option: "6"}
		])
	},
	{
		question: "How many gates are there in Jannah?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "8"},
			{id: 2, option: "7"},
			{id: 3, option: "6"},
			{id: 4, option: "9"}
		])
	},
	{
		question: "What is the first question asked to the dead in their graves?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Who is your Lord?"},
			{id: 2, option: "What is your religion?"},
			{id: 3, option: "Who is your prophet?"},
			{id: 4, option: "What is the name of your Holy Book?"}
		])
	},
	{
		question: "Which prophet died in heaven?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Ibrahim (as)'},
			{id: 2, option: 'Idris (as)'},
			{id: 3, option: 'Lukman (as)'},
			{id: 4, option: 'Lut (as)'}
		])
	},
	{
		question: "Where did Prophet Idris (as) pass away?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: '4th Heaven'},
			{id: 2, option: 'Mosque'},
			{id: 3, option: 'Mecca'},
			{id: 4, option: '2nd Heaven'}
		])
	},
	{
		question: "Those who were punctual and focused on their prayers (salaat) will be granted entry through which door in Jannah?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Baab As-Salaat'},
			{id: 2, option: 'Baab Al-Jihad'},
			{id: 3, option: 'Baab As-Sadaqah'},
			{id: 4, option: 'Baab Ar-Rayyaan'}
		])
	},
	{
		question: "Those who have died in the defense of Islam (jihad) will be granted entry through which door in Jannah?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Baab As-Salaat'},
			{id: 2, option: 'Baab Al-Jihad'},
			{id: 3, option: 'Baab As-Sadaqah'},
			{id: 4, option: 'Baab Ar-Rayyaan'}
		])
	},
	{
		question: "Those who frequently give to charity (sadaqah), whether to parents, orphans, the helpless, travelers in need, or others, will be admitted into Jannah through which door in Jannah?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Baab As-Sadaqah'},
			{id: 2, option: 'Baab Al-Hajj'},
			{id: 3, option: 'Baab As-Jihad'},
			{id: 4, option: 'Baab Ar-Salaat'}
		])
	},
	{
		question: "The people who constantly observed fasting (especially during Ramadan) to obtain the blessings of Allah will be granted entry through which door in Jannah?",
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Baab As-Sadaqah'},
			{id: 2, option: 'Baab Al-Hajj'},
			{id: 3, option: 'Baab As-Salaat'},
			{id: 4, option: 'Baab Ar-Rayyaan'}
		])
	},
	{
		question: "Those who observe the hajj pilgrimage will be admitted through which door in Jannah?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Baab As-Sadaqah'},
			{id: 2, option: 'Baab Al-Hajj'},
			{id: 3, option: 'Baab As-Sadaqah'},
			{id: 4, option: 'Bāb al-Kāẓimīn al-Ghayẓ wa-al-‘Āfīn ‘an al-Nās'}
		])
	},
	{
		question: "Which door in Jannah is particularly reserved for those who suppress or control their anger toward other Muslims and are forgiving toward other everyone?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Bāb al-Kāẓimīn al-Ghayẓ wa-al-‘Āfīn ‘an al-Nās'},
			{id: 2, option: 'Baab Al-Hajj'},
			{id: 3, option: 'Baab As-Sadaqah'},
			{id: 4, option: 'Baab Ar-Rayyaan'}
		])
	},
	{
		question: "Which door in Jannah is reserved for the entry for those who have sincere faith and trust in Allah and who strive to follow Allah's commands?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Baab Ar-Rayyaan'},
			{id: 2, option: 'Baab Al-Iman'},
			{id: 3, option: 'Baab As-Sadaqah'},
			{id: 4, option: 'Bāb al-Kāẓimīn al-Ghayẓ wa-al-‘Āfīn ‘an al-Nās'}
		])
	},
	{
		question: "Those who constantly and excessively remember Allah(SWT) through dhikr will be admitted through which door in Jannah?",
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Baab As-Sadaqah'},
			{id: 2, option: 'Baab Al-Iman'},
			{id: 3, option: 'Baab Al-Dhikr'},
			{id: 4, option: 'Bāb al-Kāẓimīn al-Ghayẓ wa-al-‘Āfīn ‘an al-Nās'}
		])
	},
	/*{
		question: "In which heaven is made of silver and is the home of Prophet Adam (A.S) and Eve?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: '1st Heaven'},
			{id: 2, option: '2nd Heaven'},
			{id: 3, option: '3rd Heaven'},
			{id: 4, option: '5th Heaven'}
		])
	},
	{
		question: "In which heaven is made of gold and the home of Prophet Yahya (A.S) and Prophet Isa (A.S)?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: '1st Heaven'},
			{id: 2, option: '2nd Heaven'},
			{id: 3, option: '3rd Heaven'},
			{id: 4, option: '4th Heaven'}
		])
	},
	{
		question: "In which heaven is Prophet Musa (A.S) can be found?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: '6th Heaven'},
			{id: 2, option: '2nd Heaven'},
			{id: 3, option: '1st Heaven'},
			{id: 4, option: '4th Heaven'}
		])
	},*/
	{
		question: "Which is the highest heaven?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Jannat-ul-Firdous'},
			{id: 2, option: 'Jannat-ul-Naeem'},
			{id: 3, option: 'Darul Maqaam'},
			{id: 4, option: 'Darul Khuld'}
		])
	},
	/*{
		question: "In which heaven is made of pearls and other dazzling stones and where Prophet Yusuf (A.S) and Azrael are resident?",
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: '1st Heaven'},
			{id: 2, option: '2nd Heaven'},
			{id: 3, option: '3rd Heaven'},
			{id: 4, option: '4th Heaven'}
		])
	},*/
	{
		question: "What age will everyone be in Jannah?",
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: '20'},
			{id: 2, option: '33'},
			{id: 3, option: '50'},
			{id: 4, option: '18'}
		])
	},
	{
		question: "What do u say when someone dies in Islam?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Inna lillahi wa inna ilayhi raji'un"},
			{id: 2, option: 'Masha Allah'},
			{id: 3, option: 'Insha Allah'},
			{id: 4, option: 'Bismillah'}
		])
	},
	{
		question: "What is the only unforgivable sin in Islam?",
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "Missing Prayer"},
			{id: 2, option: 'Zina'},
			{id: 3, option: 'Adultary'},
			{id: 4, option: 'Shirk'}
		])
	},
	{
		question: 'Which bridge every human must pass on the Day of Judgment to enter Paradise?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "As-Sirat"},
			{id: 2, option: 'Jannat-ul-Firdous'},
			{id: 3, option: 'Darul Maqaam'},
			{id: 4, option: 'Darul Khuld'}
		])
	},
	{
		question: 'How many rivers in heaven ?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: "8"},
			{id: 2, option: '3'},
			{id: 3, option: '4'},
			{id: 4, option: '5'}
		])
	},
	{
		question: 'Who is the first martyr of Islam?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Sumayya"},
			{id: 2, option: 'Khadijah'},
			{id: 3, option: 'Mariam'},
			{id: 4, option: 'Zalika'}
		])
	},
	{
		question: 'Which angel guard the gates of heaven?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Angel Jibril"},
			{id: 2, option: 'Angel Ridwan'},
			{id: 3, option: 'Angel Malik'},
			{id: 4, option: 'Angel Israfil'}
		])
	},
	{
		question: 'How many questions asked in the grave?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "3"},
			{id: 2, option: '5'},
			{id: 3, option: '2'},
			{id: 4, option: '6'}
		])
	},
	{
		question: 'In which hand will the pious people receive their book of deeds on the day of Qiyaamah?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "Won't receive the book"},
			{id: 2, option: 'Both Hand'},
			{id: 3, option: 'Left Hand'},
			{id: 4, option: 'Right Hand'}
		])
	},
	{
		question: 'What will be the first food in Jannah?', // (Sahih Bukhari, Hadith: 3329 and Sahih Muslim, Hadith: 315)
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Fish liver"},
			{id: 2, option: 'Dates'},
			{id: 3, option: 'Honey'},
			{id: 4, option: 'Mutton'}
		])
	},
	{
		question: 'Which river of Jannah is on Earth?', 
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: "Saihan"},
			{id: 2, option: 'Jaihan'},
			{id: 3, option: 'Furat'}, //Euphrates
			{id: 4, option: 'None of the Options'}
		])
	},
	{
		question: 'Which river of Jannah is on Earth?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: "Saihan"}, // (Syr Darya)
			{id: 2, option: 'Jaihan'}, // Amu Darya
			{id: 3, option: 'Nil'}, // Nile
			{id: 4, option: 'None of the Options'}
		])
	},
	{
		question: 'Which river of Jannah is not in Earth?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Saihan"}, // (Syr Darya)
			{id: 2, option: 'Furat'}, // Euphrates
			{id: 3, option: 'Nil'}, // Nile
			{id: 4, option: 'None of the Options'}
		])
	},
	{
		question: 'Which river of Jannah is not in Earth?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: "Nil"}, // Nile
			{id: 2, option: 'Furat'}, // Euphrates
			{id: 3, option: 'Jaihan'}, // Saihan
			{id: 4, option: 'None of the Options'}
		])
	},
	{
		question: 'How many rivers of Jannah is on Earth?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "4"}, 
			{id: 2, option: '3'},
			{id: 3, option: '2'}, 
			{id: 4, option: 'None of the Options'}
		])
	},
	{
		question: 'Which dates are from Jannah?', // Sunan Ibn Majah Vol. 1, Book 31, Hadith 3453and Tirmidhee (2068) classed as hasan Saheeh and it was authenticated by Shaikh al-Albaani
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: "Halawy dates"}, 
			{id: 2, option: 'Ajwa dates'},
			{id: 3, option: 'Khadrawy dates'}, 
			{id: 4, option: 'None of the Options'}
		])
	},
	{
		question: 'Which mountain is from Jannah (Paradise)?', 
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Mount Uhud"}, 
			{id: 2, option: 'Mount Sawda'},
			{id: 3, option: 'Mount Fifa'}, 
			{id: 4, option: 'Mount Madha'}
		])
	},
	{
		question: 'How many people will enter Jannah without reckoning or torment?', // shahi bukhari (book 71.volumn 7, hadith606)
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: "1000"}, 
			{id: 2, option: '1,00,000'},
			{id: 3, option: '7000'}, 
			{id: 4, option: '70,000'}
		])
	},
	{
		question: 'What will be the spoken language in paradise? ', 
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: "English"}, 
			{id: 2, option: 'Urdu'},
			{id: 3, option: 'Arabic'}, 
			{id: 4, option: 'Yiddish'}
		])
	},
	{
		question: 'Which group(s) of people are more likely to be in Jannah?', 
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: "Rich People"}, 
			{id: 2, option: 'Western People'},
			{id: 3, option: 'Poor People'}, 
			{id: 4, option: 'Old People'}
		])
	},





]