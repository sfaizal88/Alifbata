/**
*
* wudu.js
* How to perform Wudu data
*
* @author - Faizal
* @date   - 18 May 2020
***/
// ALL SHARED FILES
import * as Constant from '../../shared/constant';
import * as Generate from '../../shared/generate';
import * as Utils from '../../shared/utils';

// ALL CHAPTER
let imgURL = '../../../assets/img/steps/prophetnames/'
// 1. Be gentle with your wife.
// 2. Laugh, play and joke with your wife.
// 3. Keep in touch with your relatives and friends.
// 4. Look after your neighbour.
// 5. Give gifts
// 6. Be nice to your parents.
// 7. Learn Quran and teach it
// 8. Always smell good.
// 9 Be silent if you dont like the food.
// 10. Forgive the person who cause you grief.
// 11. Make Wudu before sleeping
// 12. Climb up say Allahu Akbar , stepping down say Subhan Allah.
// 13. Help build a Masjid.
// 14. Try to calm yourself when angry.
// 15. Meet your brother with a smile.
// 16. In a gathering of three or more, dont whisper.
// 17. Clean your bed before going to sleep
// 18. Speak what is good or keep silent.
// 19. Plant a tree or sow seed
// 20. Show kindness to animals
// 21. Give charity.
// 22. Pray istikhara when making a decision.
// 23. Keep yourself clean
// 24. Look after orphans
// 25. Get married
// 26. Hide the fault of others
// 27. Love for your brother what you love for yourself.
// 28. Sleep on your right side and with wudhu
// 29. Show mercy to youngsters
// 30. Smile
// 31. Avoid wasting water
export const data = [
	{
		id: 1,
		title: "Prophet Adam (A.S)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'First Human',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '1.png'),
		details: 'Adam (A.S) was the first human being created by Allah SWT. Adam was taught the names of all things, language, speech and the ability to communicate. Hawwa was created from Adam’s (A.S) rib as his partner.',
	},
	{
	id: 2,
	title: "Prophet Idris (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Trustworthy, Patient\n& Knowledgeable',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '2.png'),
	details: 'Allah SWT gave Idris (A.S) some incredible talents, such as writing, numeracy, and sewing.',
	},
	{
	id: 3,
	title: "Prophet Nuh (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Built an Ark',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '3.png'),
	details: 'Allah SWT instructed Nuh (A.S) to build an Ark and onboard the believers onto it. Heavy floods were sent as a punishment for the non-believers. The believers were saved by the Ark.',
	},
	{
	id: 4,
	title: "Prophet Hud (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'A warning to people of ‘Ad',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '4.png'),
	details: "The people of ‘Ad worshipped idols, despite Hud’s (A.S) warnings and admonitions. Allah SWT sent a drought to punish them. Even after the drought, the people did not relent, so they were destroyed in a large storm from which only Hud and a few believers emerged.",
	},
	{
	id: 5,
	title: "Prophet Saleh (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Miracle of a Pregnant\nShe-Camel',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '5.png'),
	details: 'Saleh (A.S) called the people of Thamud to worship one God and let go of their idol worshipping. To prove the greatness of God, they asked Saleh (A.S) to make a pregnant she-camel appear from the mountains. By the will of Allah SWT, Saleh (A.S) performed this miracle. However, the people continued as disbelievers and some of them killed the camel. As a punishment, Allah SWT destroyed them with sound waves.',
	},
	{
	id: 6,
	title: "Prophet Ibrahim (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Unharmed by the Fire',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '6.png'),
	details: "Ibrahim (A.S) preached to his people to give up idolatry. They wanted to punish him by throwing him into the fire for mocking their idols. By the will of Allah SWT, Ibrahim (A.S) was unharmed by the fire.",
	},
	{
	id: 7,
	title: "Prophet Ismail (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'The Greatest Sacrifice',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '7.png'),
	details: 'As a test of his faith, Ibrahim (A.S) was commanded by Allah SWT’s (through a dream) to sacrifice his son, Ismail (A.S). Ismail (A.S) was taken to a place and laid down for sacrifice. Since both Ibrahim (A.S) and Ismail (A.S) submitted to Allah SWT’s will, a sheep was sent for sacrifice in place of Ibrahim (A.S).',
	},
	{ 
	id: 8, 
	title: "Prophet Ishaq (A.S)", 
	titleType: Constant.GENERIC.TEXT, 
	desc: 'Twin Births', 
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)], 
	img: require(imgURL + '8.png'), 
	details: "Prophet Ishaq's (A.S) wife was a barren woman. However, through his prayers and the will of Allah SWT, his wife finally gave birth to twins - Iishuu (ancestor of the Romans) and Yaqub (ancestor of the Children of Israel.)", 
	}, 

	{ 
	id: 9, 
	title: "Prophet Lut (A.S)", 
	titleType: Constant.GENERIC.TEXT, 
	desc: 'Dealt with Deviant Behavior', 
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)], 
	img: require(imgURL + '9.png'), 
	details: 'Lut (A.S) preached to the people of Sodom to abandon their homosexual acts but to no avail. Allah SWT punished them in the form of a great earthquake accompanied by rain rocks and strong winds that ultimately destroyed the city’s population, leaving behind Lut (A.S) and his believing followers.', 
	}, 

	{ 
	id: 10, 
	title: "Prophet Yaqub (A.S)", 
	titleType: Constant.GENERIC.TEXT, 
	desc: 'Separation from Son\nfor 30+ years', 
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)], 
	img: require(imgURL + '10.png'), 
	details: "Yaqub (A.S) had 12 children, one of whom was Prophet Yusuf (A.S). He was separated from Yusuf (A.S) for 30+ years as a test of his faith. Before his death, Yaqub (A.S) had a will to his sons to worship and submit only to the Almighty Allah SWT. This is stated in Surah Al-Baqarah (2:133).", 
	}, 

	{ 
	id: 11, 
	title: "Prophet Yusuf (A.S)", 
	titleType: Constant.GENERIC.TEXT, 
	desc: 'Beauty & Dream Interpreter', 
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)], 
	img: require(imgURL + '11.png'), 
	details: 'Yusuf (A.S) was his father’s favourite as he was blessed with beauty and prophethood by Allah SWT. The 10 older half-brothers became jealous of him and threw him into the well. Although Yusuf’s (A.S) life was filled with difficulties, he always sought refuge in Allah SWT and was blessed with exceptional knowledge, wisdom and dream interpretation skills.', 
	}, 

	{ 
	id: 12, 
	title: "Prophet Shuaib (A.S)", 
	titleType: Constant.GENERIC.TEXT, 
	desc: 'Saved from the Calamity\nof the Midian People', 
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)], 
	img: require(imgURL + '12.png'), 
	details: 'Shuaib (A.S) belonged to the people of Midian. They were bandits and robbers, deceiving one another. Many were atheists, whilst others worshipped woodland or nature gods. They did not listen to Shuaib’s (A.S) warning, and were hence punished by Allah SWT with a hot storm, the coming of black clouds, lightning, and earthquake.', 
	},   

	{
	id: 13,
	title: "Prophet Ayyub (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Patience',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '13.png'),
	details: 'Allah SWT tested Ayyub (A.S) by taking away his wealth, 14 children and health. Despite this, his love and gratitude towards Allah SWT only grew. For his patience, Allah SWT gave him back his good health, wealth and blessed him with 28 children.',
	},
	{
	id: 14,
	title: "Prophet Musa (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Split the Red sea',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '14.png'),
	details: "Musa (A.S) was born at the time of Fir'awn (a tyrant Egyptian ruler) and grew up in the royal courts. The Holy Torah was revealed to him. Fir'awn did not like Musa's (A.S) preaching of monotheism and chased Musa (A.S) & his followers to the Red Sea. Musa (A.S) split the sea with his stick to escape. Fir'awn and his army followed but the waters of the seas closed on them and killed them.",
	},
	{
	id: 15,
	title: "Prophet Harun (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Fellow Leader Accompanying\nMusa (A.S)',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '15.png'),
	details: "Harun (A.S) was Musa's (A.S) brother, who was tasked to lead the children of Israel in Musa's (A.S) absence.",
	},
	{
	id: 16,
	title: "Prophet Dhu'l-kifl (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Patience & Generosity',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '16.png'),
	details: "Dhu'l-kifl (A.S) is the messenger of Allah SWT famous for his patience and generosity.",
	},
	{
	id: 17,
	title: "Prophet Dawud (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Ability to Speak with Birds',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '17.png'),
	details: 'Dawud (A.S) understands the language of birds and has the ability to soften iron using his bare hands. The Zabur (Psalms) was revealed to him.',
	},
	{
	id: 18,
	title: "Prophet Sulaiman (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Ability to Speak with beasts,\ncontrol Jinn and Wind',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '18.png'),
	details: 'Sulaiman (A.S) has the ability to speak and understand the language of beasts. He can also control the Jinns and the wind to obey his will.',
	},
	{
	id: 19,
	title: "Prophet Ilias (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: "A Warning against\nWorshippers of Ba'al",
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '19.png'),
	details: "The people of Israel worshipped a statue named Ba'al. Although Ilias (A.S) preached the people to not engage in idol worshiping, they did not listen to him. Hence, Allah SWT punished them with prolonged drought & rain that could not touch the earth.",
	},
	{
	id: 20,
	title: "Prophet Al-Yasa (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Reviving the Dead',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '20.png'),
	details: 'Al-Yasa (A.S) is described to be the best servant of Allah SWT and was given the power to revive the deceased.',
	},
	{
	id: 21,
	title: "Prophet Yunus (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Saved from Whale',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '21.png'),
	details: "Yunus (A.S) was thrown overboard while sailing on a ship. He was swallowed by a whale and lived in its belly for three days. He kept praying to Allah SWT and eventually came out of the whale's mouth.",
	},
	{
	id: 22,
	title: "Prophet Zakariyya (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Barren Woman\nwho Gave Birth',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '8.png'),
	details: "Zakariyya's (A.S) wife was a barren woman. He was old and prayed to Allah SWT for a child and Allah SWT finally granted him with Prophet Yahya (A.S) as his son.",
	},
	{
	id: 23,
	title: "Prophet Yahya (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Exemplary Justice',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '2.png'),
	details: "Allah SWT gifted Yahya (A.S) with the ability to comprehend the Shariah (Islamic religious law) at a young age. Yahya (A.S) was an exemplary judge, who gave unbiased judgments on the parties, regardless of their race, language, religion, tribe, wealth, or any other characteristics. He never made any concessions in his implementation of justice, even when handling difficult people.",
	},
	{
	id: 24,
	title: "Prophet Isa (A.S)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'Healing the Blind \nand Reviving the Dead',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '24.png'),
	details: 'Isa (A.S) was granted the ability to heal the blind and revive the dead. He was crucified by the Jews and lifted to the heavens by Allah SWT.',
	},
	{
	id: 25,
	title: "Prophet Muhammad (PBUH)",
	titleType: Constant.GENERIC.TEXT,
	desc: 'The Last Prophet in Islam',
	bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
	img: require(imgURL + '25.png'),
	details: "Prophet Muhammad (PBUH) was brought to earth, to perfect the teachings brought by the previous prophets and earlier apostles. The Holy Quran was revealed to Muhammad (PBUH).",
	}
]