/**
*
* riverJannah.js
* 8 gate details
*
* @author - Faizal
* @date   - 18 May 2020
***/
// ALL SHARED FILES
import * as Constant from '../../../shared/constant';
import * as Generate from '../../../shared/generate';
import * as Utils from '../../../shared/utils';
import { styles  } from '../../../shared/stylesheet';

// ALL CHAPTER
let imgURL = '../../../../assets/img/steps/majorSin/'
export const data = [
	{
		id: 1,
		title: "SIN 1",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Shirk',
		img: require(imgURL + '1.png'),
		details: 'Associating partners with Allah.',
		moreDetails: 'Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills. And he who associates others with Allah has certainly gone far astray. (Surah An-Nisa Verse 116).',
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "SIN 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Committing murder',
		img: require(imgURL + '2.png'),
		details: 'Killing a believer intentionally.',
		moreDetails: "But whoever kills a believer intentionally - his recompense is Hell, wherein he will abide eternally, and Allah has become angry with him and has cursed him and has prepared for him a great punishment. (Surah An-Nisa Verse 93)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "SIN 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Practicing\nblack magic',
		img: require(imgURL + '3.png'),
		details: 'Sorcery is a major sin because the sorcerer must necessarily disbelieve and the accursed Devil has no other motive for teaching a person witchcraft than that he might thereby ascribe associates to Allah.',
		moreDetails: "And they followed [instead] what the devils had recited during the reign of Solomon. It was not Solomon who disbelieved, but the devils disbelieved, teaching people magic and that which was revealed to the two angels at Babylon, Harut and Marut. But the two angels do not teach anyone unless they say, 'We are a trial, so do not disbelieve [by practicing magic].'' And [yet] they learn from them that by which they cause separation between a man and his wife. But they do not harm anyone through it except by permission of Allah . And the people learn what harms them and does not benefit them. But the Children of Israel certainly knew that whoever purchased the magic would not have in the Hereafter any share. And wretched is that for which they sold themselves, if they only knew. (Surah Al-Baqarah Verse 102)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "SIN 4",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Missing prayers',
		img: require(imgURL + '4.png'),
		details: 'Not Performing The Prayer.',
		moreDetails: "But there came after them successors who neglected prayer and pursued desires; so they are going to meet evil. (Surah Maryam Verse 59)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "SIN 5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Zakat Evasion',
		img: require(imgURL + '5.png'),
		details: 'Those who do not pay the Zakat are called "Idolators".',
		moreDetails: "Those who do not give zakah, and in the Hereafter they are disbelievers. (Surah Fussilat Verse 7)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 6,
		title: "SIN 6",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Not Fasting',
		img: require(imgURL + '6.png'),
		details: "Breaking One's Fast During Ramadan Without An Excuse.",
		moreDetails: "[Fasting for] a limited number of days. So whoever among you is ill or on a journey [during them] - then an equal number of days [are to be made up]. And upon those who are able [to fast, but with hardship] - a ransom [as substitute] of feeding a poor person [each day]. And whoever volunteers excess - it is better for him. But to fast is best for you, if you only knew. (Surah Al-Baqarah Verse 184)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 7,
		title: "SIN 7",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Not Performing Hajj',
		img: require(imgURL + '7.png'),
		details: 'Not performing Hajj (while being able to do so).',
		moreDetails: "Pilgrimage thereto is a duty, men owe to Allah those who can afford the journey; but if any deny faith, Allah stands not in need of any of his creatures. (Surah Al-Imran Verse 97)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 8,
		title: "SIN 8",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Breaking Relationship',
		img: require(imgURL + '8.png'),
		details: "Severing the Ties of One's Relatives.",
		moreDetails: "The severer of the tie of kinship would not get into Paradise. (Sahih Muslim 2556 b)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 9,
		title: "SIN 9",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Zina',
		img: require(imgURL + '9.png'),
		details: 'Committing Adultery / Zina.',
		moreDetails: "And do not approach unlawful sexual intercourse. Indeed, it is ever an immorality and is evil as a way. (Surah Al-Isra Verse 32)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 10,
		title: "SIN 10",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Homosexuality',
		img: require(imgURL + '10.png'),
		details: 'Committing Sodomy / homosexuality',
		moreDetails: "Indeed, you approach men with desire, instead of women. Rather, you are a transgressing people. (Surah A'raf Verse 81)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 11,
		title: "SIN 11",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Riba',
		img: require(imgURL + '11.png'),
		details: 'Taking or paying interest (Riba)',
		moreDetails: "And [for] their taking of usury while they had been forbidden from it, and their consuming of the people's wealth unjustly. And we have prepared for the disbelievers among them a painful punishment. (Surah Nisa Verse 161)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 12,
		title: "SIN 12",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Illegal Property',
		img: require(imgURL + '12.png'),
		details: 'Consuming the property of an orphan',
		moreDetails: "Indeed, those who devour the property of orphans unjustly are only consuming into their bellies fire. And they will be burned in a Blaze. (Surah Nisa Verse 10)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 13,
		title: "SIN 13",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Unjust Leader',
		img: require(imgURL + '13.png'),
		details: 'The Leader Who Misleads His Followers, The Tyrant And The Oppressor.',
		moreDetails: "The cause is only against the ones who wrong the people and tyrannize upon the earth without right. Those will have a painful punishment. (Surah Al-Shura Verse 42)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 14,
		title: "SIN 14",
		titleType: Constant.GENERIC.NUMBER,
		desc: "Disrespecting\nOne's Parents",
		img: require(imgURL + '14.png'),
		details: "Showing Disrespect to One's Parents",
		moreDetails: "And We have enjoined upon man [care] for his parents. His mother carried him, [increasing her] in weakness upon weakness, and his weaning is in two years. Be grateful to Me and to your parents; to Me is the [final] destination. (Surah Luqman Verse 14)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 15,
		title: "SIN 15",
		titleType: Constant.GENERIC.NUMBER,
		desc: "Lying About The Prophet",
		img: require(imgURL + '15.png'),
		details: "Who told lies about the Prophets and the Allah (SAW).",
		moreDetails: "And on the Day of Resurrection you will see those who lied about Allah [with] their faces blackened. Is there not in Hell a residence for the arrogant? (Surah Az-Zummar Verse 60)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 16,
		title: "SIN 16",
		titleType: Constant.GENERIC.NUMBER,
		desc: "Arrogance & Pride.",
		img: require(imgURL + '16.png'),
		details: "Arrogance, Pride, Conceit, Vanity And Haughtiness.",
		moreDetails: "But Moses said, 'Indeed, I have sought refuge in my Lord and your Lord from every arrogant one who does not believe in the Day of Account.' (Surah Ghafir Verse 27)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 17,
		title: "SIN 17",
		titleType: Constant.GENERIC.NUMBER,
		desc: "Bearing\nFalse Witness",
		img: require(imgURL + '17.png'),
		details: "Bearing False Witness.",
		moreDetails: "And [they are] those who do not testify to falsehood, and when they pass near ill speech, they pass by with dignity. (Surah AI-Furqan Verse 72). The one who bears false witness will not move away (on the Day of Resurrection) until Allah condemns him to Hell.' (Sunan Ibn Majah 2373).",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 18,
		title: "SIN 18",
		titleType: Constant.GENERIC.NUMBER,
		desc: "Drinking Alcohol\nand Gambling",
		img: require(imgURL + '18.png'),
		details: "Drinking Alcohol and Gambling is forbidden in Islam.",
		moreDetails: "O you who have believed, indeed, intoxicants, gambling, [sacrificing on] stone alters [to other than Allah ], and divining arrows are but defilement from the work of Satan, so avoid it that you may be successful. (Surah Al-Ma'idah Verse 90)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 19,
		title: "SIN 19",
		titleType: Constant.GENERIC.NUMBER,
		desc: "Theft",
		img: require(imgURL + '19.png'),
		details: "Theft is Haraam (forbidden) according to the Quran and Sunnah.",
		moreDetails: "[As for] the thief, the male and the female, amputate their hands in recompense for what they committed as a deterrent [punishment] from Allah . And Allah is Exalted in Might and Wise. (Surah Al-Ma'idah Verse 38)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 20,
		title: "SIN 20",
		titleType: Constant.GENERIC.NUMBER,
		desc: "Suicide",
		img: require(imgURL + '20.png'),
		details: "Suicide is forbidden in Islam.",
		moreDetails: "O you who have believed, do not consume one another's wealth unjustly but only [in lawful] business by mutual consent. And do not kill yourselves [or one another]. Indeed, Allah is to you ever Merciful. And whoever does that in aggression and injustice - then We will drive him into a Fire. And that, for Allah, is [always] easy. (Surah An-Nisa Verse 29-30)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	},
	{
		id: 21,
		title: "SIN 21",
		titleType: Constant.GENERIC.NUMBER,
		desc: "Spy / Backbite",
		img: require(imgURL + '21.png'),
		details: "Listening To People's Private Conversations or Backbite each other.",
		moreDetails: "O you who have believed, avoid much [negative] assumption. Indeed, some assumption is sin. And do not spy or backbite each other. Would one of you like to eat the flesh of his brother when dead? You would detest it. And fear Allah ; indeed, Allah is Accepting of repentance and Merciful. (Surah Al-Hujurat Verse 12)",
		imgStyle: styles.img150,
		topStyle: styles.topPattern
	}
]