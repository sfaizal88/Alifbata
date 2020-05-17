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
question: "How many verses are there in the Qur'an?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: '6,236'},
{id: 2, option: '7,859'},
{id: 3, option: '3,200'},
{id: 4, option: '4,390'}
])
},
{
question: "Over how many years was the Qur'an revealed?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: '21'},
{id: 2, option: '23'},
{id: 3, option: '18'},
{id: 4, option: '26'}
])
},
{
question: "What does the word Qur'an mean?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: 'Book'},
{id: 2, option: 'Religious text'},
{id: 3, option: 'Recite'},
{id: 4, option: 'Notes'}
])
},
{
question: "Name the shortest surah in the Qur'an?",
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
question: "What is the final surah in the Qur'an?",
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
{id: 4, option: "The reward of reciting the entire Qur'an"}
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
question: "Name the longest Surah in the Qur'an?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: 'Surah Yasin'},
{id: 2, option: 'Surah Ali Imrah'},
{id: 3, option: 'Surah Mulk'},
{id: 4, option: 'Surah Baqarah'}
])
},
{
question: "Who is the author of the Qur'an?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Almighty Allah"},
{id: 2, option: "Gabriel"},
{id: 3, option: "Jinn"},
{id: 4, option: "Prophet Muhammad (PBUH)"}
])
},
{
question: "In which language was the Holy Qur'an revealed?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Hebrew"},
{id: 2, option: "Greek"},
{id: 3, option: "Latin"},
{id: 4, option: "Arabic"}
])
},
{
question: "Who is mentioned in the Qur'an, who has the right to be worshiped?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "All deities"},
{id: 2, option: "The sun and the moon"},
{id: 3, option: "Fire and water"},
{id: 4, option: "Almighty Allah"}
])
},
{
question: "How many chapters does the glorious Qur'an contain?",
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
{id: 1, option: "Read in the name of your Lord who created - created man (Qur'an 96:1)"},
{id: 2, option: "All praise is due to Allah, Lord of the worlds (Qur'an 1:1)"},
{id: 3, option: "This is the Scripture whereof there is no doubt, a guidance unto those who ward off (evil) (Qur'an 2:2)"},
{id: 4, option: "Say: He is Allah, the One! (Qur'an 112:1)"}
])
},
{
question: "Through which angel were some of the verses of the Qur'an revealed?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Jibril"},
{id: 2, option: "Mika'il"},
{id: 3, option: "Israfil"},
{id: 4, option: "The Angel of Death"}
])
},
{
question: "Which of these animals is NOT mentioned in the Qurʾan?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Giraffe"},
{id: 2, option: "Camel"},
{id: 3, option: "Elephant"},
{id: 4, option: "Donkey"}
])
},
{
question: "Which is the only month mentioned in the Qurʾan?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Muharram"},
{id: 2, option: "Safar"},
{id: 3, option: "Rajab"},
{id: 4, option: "Ramadhan"}
])
},
{
question: "Who is the only woman to be mentioned in the Qurʾan by name?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Khadijah"},
{id: 2, option: "'Aishah"},
{id: 3, option: "Fatimah"},
{id: 4, option: "Maryam"}
])
},
{
question: "Which is the only Surah in the Qur'an which does not start with 'Bismillah...'",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Surah Al-Ma'idah"},
{id: 2, option: "Surah Al-A'raf"},
{id: 3, option: "Surah At-Taubah"},
{id: 4, option: "Surah Yusuf"}
])
},
{
question: "Which Surah has the name 'Allah' in every verse?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Surah Al-Kahf"},
{id: 2, option: "Surah Al-A'raf"},
{id: 3, option: "Surah Yusuf"},
{id: 4, option: "Surah Al-Mujadilah"}
])
}
];

