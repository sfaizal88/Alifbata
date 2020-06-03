/**
*
* jahannam.js
* All Jahannam Questions
*
* @author - Faizal
* @date   - 18 May 2020
*
***/
// ALL SHARED FILES
import * as Utils from '../../shared/utils';

export const data = [
	{
		question: 'Who is the Angel of Death?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Angel Azrael (Malak-ul Mawt)'},
			{id: 2, option: 'Angel Israfil'},
			{id: 3, option: 'Angel Jibril'},
			{id: 4, option: 'Angel Ridwan'}
		])
	},
	{
		question: 'Which angel administrate the Hellfire (Jahannam)?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Angel Jibril'},
			{id: 2, option: 'Angel Kiraman'},
			{id: 3, option: 'Angel Israfil'},
			{id: 4, option: 'Angel Malik'}
		])
	},
	{
		question: 'What is the only unforgivable sin?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Not Praying'},
			{id: 2, option: 'Shirk'},
			{id: 3, option: 'Saying lies'},
			{id: 4, option: 'Adultary'}
		])
	},
	{
		question: 'What is Jahannam means?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Heaven'},
			{id: 2, option: 'Hell'},
			{id: 3, option: 'None of the Options'},
			{id: 4, option: 'Earth'}
		])
	},
	{
		question: 'Which tree that "springs out of the bottom of Jahannam"?', //  17:60, 37:62-68, 44:43, and 56:52
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Zaqqoum'},
			{id: 2, option: 'Alstonia'},
			{id: 3, option: 'Indian Pulai'},
			{id: 4, option: 'Blackboard Tree'}
		])
	},
	{
		question: 'How many gates are there in Jahannam?', // 15:44
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: '5'},
			{id: 2, option: '7'},
			{id: 3, option: '8'},
			{id: 4, option: '6'}
		])
	},
	{
		question: 'What is the first gate name in Jahannam?', // 9:81 && 4:56
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Jahannam'},
			{id: 2, option: 'Latha'},
			{id: 3, option: 'Al-Hutamah'},
			{id: 4, option: 'Al-Jaheem'}
		])
	},
	{
		question: 'What is the second gate name in Jahannam?', // 70:15
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Sa’eer'},
			{id: 2, option: 'Latha'},
			{id: 3, option: 'Al-Hutamah'},
			{id: 4, option: 'Saqar'}
		])
	},
	{
		question: 'What is the third gate name in Jahannam?', // 74:26-30 && 74:40-47
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Saqar'},
			{id: 2, option: 'Al Haawiyah'},
			{id: 3, option: 'Al-Hutamah'},
			{id: 4, option: 'Al-Jaheem'}
		])
	},
	{
		question: 'What is the fourth gate name in Jahannam?', // 77: 32-33
		answer: 3, 
		options: Utils.shuffle([
			{id: 1, option: 'Jahannam'},
			{id: 2, option: 'Latha'},
			{id: 3, option: 'Al-Hutamah'},
			{id: 4, option: 'Al-Jaheem'}
		])
	},
	{
		question: 'What is the fifth gate name in Jahannam?', // 69: 30-34
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Jahannam'},
			{id: 2, option: 'Al-Jaheem'},
			{id: 3, option: 'Al-Hutamah'},
			{id: 4, option: 'Sa’eer'}
		])
	},
	{
		question: 'What is the sixth gate name in Jahannam?', //  67: 10-11
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Sa’eer'},
			{id: 2, option: 'Latha'},
			{id: 3, option: 'Saqar'},
			{id: 4, option: 'Al-Jaheem'}
		])
	},
	{
		question: 'What is the seventh gate name in Jahannam?', // 101: 8-11 && 96: 18
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Jahannam'},
			{id: 2, option: 'Latha'},
			{id: 3, option: 'Al Haawiyah'},
			{id: 4, option: 'Al-Hutamah'}
		])
	},
	{
		question: 'In which hand will the sinfull people will receive their book of deeds on the day of Qiyaamah?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: "Won't receive the book"},
			{id: 2, option: 'Both Hand'},
			{id: 3, option: 'Left Hand'},
			{id: 4, option: 'Right Hand'}
		])
	},
	{
		question: "Which Prophet's wife go to Jahannam?",
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: "Prophet Nuh (A.S)'s wife"},
			{id: 2, option: "Prophet Adam (A.S)'s wife"},
			{id: 3, option: "Prophet Hud (A.S)'s wife"},
			{id: 4, option: "Prophet Ismail (A.S)'s wife"}
		])
	},
	{
		question: 'Who will be in the lowest depths of the Fire. you will find no helper for them?', // 4: 145
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Polytheists'},
			{id: 2, option: 'People of the Book'},
			{id: 3, option: '1341341s'},
			{id: 4, option: 'Hypocrites'}
		])
	},
	{
		question: 'Who will be going to Jahannam without any questions?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Accidental death'},
			{id: 2, option: 'Commit Suicide'},
			{id: 3, option: 'Babies that died at birth'},
			{id: 4, option: 'Deaths in wars for Allah'}
		])
	},
	{
		question: 'How many inhabitants are there in Jahannam?', //https://www.islamcan.com/hell-jahannam/categories-of-its-inhabitants.shtml
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Six'},
			{id: 2, option: 'Two'},
			{id: 3, option: 'Five'},
			{id: 4, option: 'Eight'}
		])
	},
	{
		question: 'How many types of peoples whom Prophet Muhammed (pbuh) did not recognize because they did not exist at the time when he was alive?', //https://www.islamcan.com/hell-jahannam/categories-of-its-inhabitants.shtml
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Three'},
			{id: 2, option: 'One'},
			{id: 3, option: 'Five'},
			{id: 4, option: 'Two'}
		])
	},
	{
		question: 'What will be the Food of Jahannam?',// 88:6
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Water'},
			{id: 2, option: 'Poisonous thorny plant'},
			{id: 3, option: 'Snail'},
			{id: 4, option: 'Sand'}
		])
	},
	{
		question: 'Which of this drink will be given to the people of Jahannam?',
		answer: 1,
		options: Utils.shuffle([
			{id: 1, option: 'Boiling Water'},
			{id: 2, option: 'Cold Water'},
			{id: 3, option: 'Warm Water'},
			{id: 4, option: 'None of the options'}
		])
	},
	{
		question: 'Which of these drinks will not be given to the people of Jahannam?',//  47:15, 18:29, 14:16-17, 38:57
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Boiling Water'},
			{id: 2, option: 'Flowing pus from the flesh and skin of an unbeliever.'},
			{id: 3, option: 'Boiling murky oil'},
			{id: 4, option: 'Warm water'}
		])
	},
	{
		question: 'During which islamic month, the gates of hell are closed and the devils are chained?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Shawwal'},
			{id: 2, option: 'Ramadan'},
			{id: 3, option: 'Muharram'},
			{id: 4, option: 'Safar'}
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
		question: 'What is the Arabic word for the day of resurrection?',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: 'Qadr'},
			{id: 2, option: 'Salaam'},
			{id: 3, option: 'Nabaa'},
			{id: 4, option: 'Qiyamah'}
		])
	},
	{
		question: 'On the day of judgement there will be seven types or categories of people that will receive which of the following?',
		answer: 2,
		options: Utils.shuffle([
			{id: 1, option: 'Food'},
			{id: 2, option: 'Shade'},
			{id: 3, option: 'Water'},
			{id: 4, option: 'Honey'}
		])
	},
	{
		question: 'The Dajjal or anti-Christ will have one word written on his forehead. What is this word?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'Qiyamah'},
			{id: 2, option: 'Death'},
			{id: 3, option: 'Kufr'},
			{id: 4, option: 'Dajjal'}
		])
	},
	{
		question: 'What do you call the funeral prayer?',
		answer: 3,
		options: Utils.shuffle([
			{id: 1, option: 'There is no funeral prayer'},
			{id: 2, option: 'Qaza Salat'},
			{id: 3, option: 'Salat-al-Janazaa'},
			{id: 4, option: 'Salat-al-Death'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	},
	{
		question: '1341413413413413413413',
		answer: 4,
		options: Utils.shuffle([
			{id: 1, option: '1341341341'},
			{id: 2, option: '314134'},
			{id: 3, option: '1341341s'},
			{id: 4, option: '13413413'}
		])
	}]