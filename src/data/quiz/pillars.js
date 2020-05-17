/**
*
* pillars.js
* Pillars of Islam Questions
*
* @author - Faizal
* @date   - 18 May 2020
*
***/
// ALL SHARED FILES
import * as Utils from '../../shared/utils';

export const data = [
{
question: "Which one of the Pillars is considered as the most important Pillar?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Fasting"},
{id: 2, option: "Prayers"},
{id: 3, option: "Belief"},
{id: 4, option: "Pilgrimage"}
])
},
{
question: "How many times does a Muslim perform Obligatory Prayers (Salaah) in a day?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "4"},
{id: 2, option: "5"},
{id: 3, option: "7"},
{id: 4, option: "3"}
])
},
{
question: "On what day of the week do many Muslims try to attend a mosque for Jummah prayer?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Friday"},
{id: 2, option: "Saturday"},
{id: 3, option: "Sunday"},
{id: 4, option: "Monday"}
])
},
{
question: "What is the percentage of Obligatory Charity (Zakaah) on Muslims?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "1.5%"},
{id: 2, option: "3.5%"},
{id: 3, option: "2%"},
{id: 4, option: "2.5%"}
])
},
{
question: "Muslims pray towards the Kaaba (Qibla), but what was the Qibla before the Kaabah?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Madinah"},
{id: 2, option: "Qibla Masjid"},
{id: 3, option: "Al Aqsa"},
{id: 4, option: "Al-Fateh"}
])
},
{
question: "How many times should a Muslim perform pilgrimage (Hajj) in his/her life?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "It is mandatory to perform once in a lifetime, if they have enough provisions."},
{id: 2, option: "It is mandatory to perform twice in a lifetime."},
{id: 3, option: "It is not mandatory at all for Muslims to perform pilgrimage."},
{id: 4, option: "It is mandatory for Muslims to perform at least five times."}
])
},
{
question: "What is Belief (Shahadah)?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Recitation of Quran"},
{id: 2, option: "Declaration of faith in a single God (Allah) and in Muhammad as his messenger"},
{id: 3, option: "Declaration that there is no God"},
{id: 4, option: "Recitation of Quran during Prayers"}
])
},
{
question: "When do Muslims observe fasting for a month?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Dul-Hijjah"},
{id: 2, option: "Rajjab"},
{id: 3, option: "Sha’ban"},
{id: 4, option: "Ramadhan"}
])
},
{
question: "Where do Muslims go for the Pilgrimage (Hajj)?",
answer: 4,
options: Utils.shuffle([
{id: 1, option: "Baitul Muqaddas (Al-Aqsa Mosque Palestine)"},
{id: 2, option: "Karbala (Iraq)"},
{id: 3, option: "Dubai (UAE)"},
{id: 4, option: "Makkah (Saudi Arabia)"}
])
},
{
question: "What are the Pillar of Islam called?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "Qadr ul Islam"},
{id: 2, option: "Arkanal Islam"},
{id: 3, option: "Yusuf Islam"},
{id: 4, option: "Fi Amanillah"}
])
},
{
question: "While performing rakats during Salat, why do Muslims face right and left?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "To show respect to the angels."},
{id: 2, option: "To show respect to Allah."},
{id: 3, option: "To show respect to fellow Muslims"},
{id: 4, option: "To show respect to oneself"}
])
},
{
question: "Who leads the prayer in a mosque?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "Imam"},
{id: 2, option: "Muezzin"},
{id: 3, option: "Children"},
{id: 4, option: "No one"}
])
},
{
question: "What does niyyah mean?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "A wedding contract"},
{id: 2, option: "An intention"},
{id: 3, option: "Prayer beads"},
{id: 4, option: "Prayer mat"}
])
},
{
question: "What is the adhan?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "A clock showing time for prayers in a mosque"},
{id: 2, option: "A call to prayer recited from a mosque"},
{id: 3, option: "A prayer mat in a mosque"},
{id: 4, option: "A story"}
])
},
{
question: "Is it permitted to drink water while Fasting?",
answer: 2,
options: Utils.shuffle([
{id: 1, option: "It is permitted to drink little water while fasting."},
{id: 2, option: "No, it is not permitted to eat or drink anything while fasting."},
{id: 3, option: "It is permitted to drink juice while fasting."},
{id: 4, option: "It is permitted to eat dates while fasting."}
])
},
{
question: "What is Salat?",
answer: 3,
options: Utils.shuffle([
{id: 1, option: "Fasting"},
{id: 2, option: "Giving to the poor"},
{id: 3, option: "Praying"},
{id: 4, option: "Pilgrimage"}
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
question: "How many pillars are there in Islam?",
answer: 1,
options: Utils.shuffle([
{id: 1, option: "5"},
{id: 2, option: "4"},
{id: 3, option: "6"},
{id: 4, option: "3"}
])
}
];