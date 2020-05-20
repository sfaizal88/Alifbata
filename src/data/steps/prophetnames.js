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
export const data = [
	{	
		id: 1,
		title: "Prophet Adam A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'First Human',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '1.png'),
		details: 'The first human being to be created by Allah SWT. Taught Adam all knowledge, speech, and expression. Hawwa created from Prophet Adam A.S as a partner.',
	},
	{
		id: 2,
		title: "Prophet Idris A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Honesty, Intelligence & Skill.',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '2.png'),
		details: 'Allah SWT gives some miracles to the Prophet Idris AS in the form of honesty, intelligence, skill, and ability in creating things that can facilitate human activities, such as astrology, recognize the writing, numeracy, and sewing, even more, and more.',
	},
	{
		id: 3,
		title: "Prophet Nuh A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Build an Ark',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '3.png'),
		details: 'Build a very big Ark and boarded the believers to save their soul from the punishment of Allah SWT (flash floods that hit the people of Nuh the infidel).',
	},
	{
		id: 4,
		title: "Prophet Hud A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'The Prophet Hud A.S Warned His People',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '1.png'),
		details: "Many of the Hud's people worship of idols. Hence Allah (SWT) sent down Azab for them in the form of a prolonged drought & rain that could not touch the earth. Allah SWT brings a black cloud that is thought to be a grace in the form of rain for the people.",
	},
	{
		id: 5,
		title: "Prophet Salih A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'She Camel',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '5.png'),
		details: 'Female camel born from the crevices of stone as signs of the greatness of God for the samud, where the Holy Prophet is sent by Allah SWT to deliver his message.',
	},
	{
		id: 6,
		title: "Prophet Ibrahim A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Thrown into Fire',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '6.png'),
		details: "The miracle of Ibrahim's prophet is not burning in fire. And when his infidels burn it.",
	},
	{
		id: 7,
		title: "Prophet Ismail A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Salvation',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '7.png'),
		details: 'When his father (Prophet Ibrahim A.S) was about to sacrifice him as a sacrifice on the command of Allah SWT. When it was about to be slaughtered, Allah SWT replaced Prophet Ismail A.S with a sheep.',
	},
	{
		id: 8,
		title: "Prophet Ishaq (AS)",
		titleType: Constant.GENERIC.TEXT,
		desc: 'A barren woman gave Twin Birth',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '8.png'),
		details: "Prophet Isaac's wife is a barren woman, on the prayer that Prophet Ishaq told to Allah SWT, finally his wife can win & give birth to twins namely 'Iishuu which is the ancestor of the Romans and Ya'qub which is the ancestor of the Children of Israel.",
	},
	{
		id: 9,
		title: "Prophet Lut A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Abandon the deviant sexual behavior',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '9.png'),
		details: 'People who make deviant sexual behavior. Prophet Lut A.S Said for his people to abandon the act, he received the mistreatment of his people, and so Allah SAW also doomed the punishment for the people in the form of a great earthquake accompanied by rain rocks and strong winds that ultimately destroy and destroy the population in the city except for the Prophet Lut A.S and his believing followers.',
	},
	{
		id: 10,
		title: "Prophet Yaqub A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Separation from Yusuf 30+ years',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '10.png'),
		details: "Prophet Yaqub has 12 children, and before death, he had a will to his sons, where it is contained in Alquran sura Al-Baqarah verse 133.",
	},
	{
		id: 11,
		title: "Prophet Yousuf A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Beauty & Dream interpreter',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '11.png'),
		details: 'Prophet Yousuf A.S is blessed by Allah SWT with a handsome face and can interpret the dream.',
	},
	{
		id: 12,
		title: "Prophet Shuaib A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Saved which befell the Madyan',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '12.png'),
		details: 'Allah has saved the Prophet Syuaib & his followers from the punishment of Allah SWT which befell the Madyan, that is in the form of a hot storm, the coming of black clouds, lightning, & earthquake that destroyed the people.',
	},
	{
		id: 13,
		title: "Prophet Ayyub A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Most Patient',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '13.png'),
		details: 'The miracle of the Prophet Ayyub A.S is the messenger of Allah SWT who is considered most patient in facing temptation.',
	},
	{
		id: 14,
		title: "Prophet Moses A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Split the Red sea',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '14.png'),
		details: "Upon the help of Allah SWT through the stick, then Prophet Moses A.S could split the red sea so that he and his followers could be saved from Pharaoh's pursuit.",
	},
	{
		id: 15,
		title: "Prophet Harun A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Good Language',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '15.png'),
		details: 'The miracle of the Prophet Prophet Harun A.S is that Allah SWT has bestowed the ability of good language to the Prophet Harun.',
	},
	{
		id: 16,
		title: "Prophet Dhu'l-kifl A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Patience & Generosity',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '16.png'),
		details: "The miracle of the Prophet Dhu'l-kifl A.S is as the messenger of Allah SWT famous for his patience and generosity.",
	},
	{
		id: 17,
		title: "Prophet Dawud A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Speak with birds and Strong hand',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '17.png'),
		details: 'Ability to understand the language of birds, to have the wit of mind, and to have a sweet voice, and to soften iron with the use of bare hands.',
	},
	{
		id: 18,
		title: "Prophet Sulaiman A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Control Jin, Wind & Speak with the beast',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '18.png'),
		details: 'Ability to speak & understand the language of the beast, and be able to subdue Jin and the wind so that they would obey His will.',
	},
	{
		id: 19,
		title: "Prophet Ilias A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Prolonged drought & rain',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '19.png'),
		details: "People of Israel who love to worship a statue named Ba'al. But the people deny what is taught by him. Hence Allah (SWT) sent down Azab for them in the form of a prolonged drought & rain that could not touch the earth.",
	},
	{
		id: 20,
		title: "Prophet Al-Yasa A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Revive the deceased',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '1.png'),
		details: 'The miracle of the Prophet Al-Yasa A.S is that he is the best servant of Allah SWT, where he is given a miracle by Allah SWT can revive the deceased.',
	},
	{
		id: 21,
		title: "Prophet Yunus A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Saved from Whale',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '21.png'),
		details: 'The miracle of the Prophet Yunus A.S was that he could be saved when swallowed by a whale in some time when he left the Assyrians in Ninawa.',
	},
	{
		id: 22,
		title: "Prophet Zakariyya A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'A barren woman gave Birth',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '8.png'),
		details: 'Prophet Zakariyya wife is a barren woman, he is old & prayed to Allah SWT, and finally, Allah SWT grants him & sends the Prophet Yahya A.S as the son or descendant of Prophet Zakariyya A.S.',
	},
	{
		id: 23,
		title: "Prophet Yahya A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'At childhood, decide the human case',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '2.png'),
		details: "Allah SWT gifted the ability to know the Shari'a and decided the human case since he was a child. And then he is known for being very diligent and likes to read.",
	},
	{
		id: 24,
		title: "Prophet Isa A.S",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Heal the blind & revive the dead',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '24.png'),
		details: 'The miracle of Isa A.S was able to heal the blind, to revive the dead, and he was finally lifted to heaven by Allah SWT when the Jews tried to crucify him.',
	},
	{
		id: 25,
		title: "Prophet Muhammad SAW",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Quran',
		bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
		img: require(imgURL + '25.png'),
		details: 'Prophet Muhammad was brought to earth, to perfect the teachings brought by the prophets and earlier apostles.',
	}
]