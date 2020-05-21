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
}
]