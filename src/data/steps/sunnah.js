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
import { styles  } from '../../shared/stylesheet';

// ALL CHAPTER
let imgURL = '../../../assets/img/steps/sunnah/';
let total = "/34";
// 1. Be gentle with your wife.
// 2. Walk to the Masjid.
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
// 32. Visit the Sick
export const data = [
	{
		id: 1,
		title: "Sunnah 1"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Be gentle\nwith your wife',
		img: require(imgURL + '1.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, The best among you are those who treat their wives well (Al-Tirmidhi 628).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "Sunnah 2"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Walk to the Masjid',
		img: require(imgURL + '2.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Give glad tiding to those who walk to the Masajid in the dark, of a complete light on the Day of Resurrection (Al-Tirmidhi 223).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "Sunnah 3"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Keep in touch with\nyour relatives and friends',
		img: require(imgURL + '3.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, The person who severs the bond of kinship will not enter Paradise (Al-Bukhari 5984).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "Sunnah 4"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Look after\nyour neighbour',
		img: require(imgURL + '4.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Gabriel continued to recommend me about treating the neighbors Kindly and politely so much so that I thought he would order me to make them as my heirs (Al-Bukhari 6014).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "Sunnah 5"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Give gifts',
		img: require(imgURL + '5.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Give gifts and you will love one another (Al-Adab Al-Mufrad 594).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 6,
		title: "Sunnah 6"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Be nice to\nyour parents',
		img: require(imgURL + '6.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Prayer at its proper time, kindness to the parents and jihad in the cause of Allah are the deeds nearer to Paradise (Muslim 85 b).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 7,
		title: "Sunnah 7"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Learn Quran\nand teach it',
		img: require(imgURL + '7.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, The best of you are those who learn the Quran and teach it (Al-Bukhari 4739).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 8,
		title: "Sunnah 8"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Always smell\ngood',
		img: require(imgURL + '8.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Anyone who takes a bath on Friday and cleans himself as much as he can and puts oil (on his hair) or scents himself; and then proceeds for the prayer... all his sins in between the present and the last Friday will be forgiven (Al-Bukhari 910).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 9,
		title: "Sunnah 9"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Be silent if you\ndont like the food',
		img: require(imgURL + '9.png'),
		moreDetails: 'Abu Huraira reported that Prophet Muhammed (pbuh) never found fault with food (served to him). If he liked anything, he ate it and if he did not like it he left it (Muslim 2064 a).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 10,
		title: "Sunnah 10"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Forgive the person\nwho gives you grief',
		img: require(imgURL + '10.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Be merciful to others and you will receive mercy. Forgive others and Allah will forgive you. (Musnad Ahmad 7001)',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 11,
		title: "Sunnah 11"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Perform Wudu\nbefore sleeping',
		img: require(imgURL + '11.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Whoever retired for the night in a state of purity, an angel will reside with him in his bed. He will not awaken for an hour in the night but that the angel says: O Allah, forgive this servant of yours, for he retired in a state of purity (Al-Da’wat Al-Kabir 358).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 12,
		title: "Sunnah 12"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: "Say ‘Allahu Akbar’ when climbing up and ‘Subhanallah’ when stepping down",
		img: require(imgURL + '12.png'),
		moreDetails: 'Jabir reported that Prophet Muhammed (pbuh) Whenever we went up a place we would say Takbir, and whenever we went down we would say, Subhan Allah (Al-Bukhari 2994).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 13,
		title: "Sunnah 13"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Help build\na Masjid',
		img: require(imgURL + '13.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Whoever builds a Masjid for (the sake of) Allah, be it small or large, then Allah will build a house for him in Paradise (At-Tirmidhi 319).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 14,
		title: "Sunnah 14"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Try to calm\nyourself when angry',
		img: require(imgURL + '14.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, The strong are not the best wrestlers. Verily, the strong are only those who control themselves when they are angry (Muslim 2609 b).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 15,
		title: "Sunnah 15"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Greet your brother\nwith a smile',
		img: require(imgURL + '15.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Every good deed is charity. Verily, it is a good deed to meet your brother with a cheerful face, and to pour what is left from your bucket into the vessel of your brother (Al-Tirmidhi 1970).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 16,
		title: "Sunnah 16"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'In a gathering of three\nor more, dont whisper.',
		img: require(imgURL + '16.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Whenever there are three of you, then let two not converse in exclusion of their companion (Sunan Al-Tirmidhi 2825).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 17,
		title: "Sunnah 17"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Clean your bed\nbefore going to sleep',
		img: require(imgURL + '17.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, When anyone of you go to bed, he should shake out his bed with the inside of his waist sheet, for he does not know what has come on to it after him (Al-Bukhari 6320).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 18,
		title: "Sunnah 18"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Speak what is\ngood or keep silent',
		img: require(imgURL + '18.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, A Muslim is the one who avoids harming Muslims with his tongue and hands (Al-Bukhari 10).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 19,
		title: "Sunnah 19"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Plant a tree\nor sow seed',
		img: require(imgURL + '19.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, There is none amongst the Muslims who plants a tree or sows seeds, and then a bird, or a person or an animal eats from it, but is regarded as a charitable gift for him (Al-Bukhari 2320).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 20,
		title: "Sunnah 20"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Show kindness\nto animals',
		img: require(imgURL + '20.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, there is a reward for serving any animate (living being) (Al-Bukhari 2466).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 21,
		title: "Sunnah 21"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Give charity',
		img: require(imgURL + '21.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Every act of goodness is sadaqa (charity) (Muslim 1005). Even meeting your brother with a smiling face (At-Tirmidhi 1970).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 22,// NEED TO FIND THE HADITH
		title: "Sunnah 22"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Pray istikhara\nwhen making a decision',
		img: require(imgURL + '22.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, If any one of you is concerned about a decision he has to make, then let him pray two rakahs of non-obligatory prayer.',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 23,
		title: "Sunnah 23"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Keep yourself\nclean',
		img: require(imgURL + '23.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Anyone who takes a bath on Friday and cleans himself as much as he can and puts oil (on his hair) or scents himself; and then proceeds for the prayer... all his sins in between the present and the last Friday will be forgiven (Al-Bukhari 910).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 24,
		title: "Sunnah 24"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Look\nafter orphans',
		img: require(imgURL + '24.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, I and the person who looks after an orphan and provides for him, will be in Paradise like this, putting his index and middle fingers together (Al-Bukhari 6005).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 25,
		title: "Sunnah 25"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Get married',
		img: require(imgURL + '25.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Marriage is part of my sunnah, and whoever does not follow my sunnah has nothing to do with me. Get married, for I will boast of your great numbers before the nations. Whoever has the means, let him get married, and whoever does not, then he should fast for it will diminish his desire.(Sunan Ibn Majah 1846).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 26,
		title: "Sunnah 26"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Hide the\nfault of others',
		img: require(imgURL + '26.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Whoever conceals the faults of a Muslim, Allah will conceal his faults in this world and in the Hereafter... (Muslim 2699).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 27,
		title: "Sunnah 27"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Love\nyour brother',
		img: require(imgURL + '27.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, None of you will have faith till he wishes for his (Muslim) brother what he likes for himself (Al-Bukhari 13).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 28,
		title: "Sunnah 28"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Sleep on\nyour right side',
		img: require(imgURL + '28.png'),
		moreDetails: 'Aisha reported that Prophet Muhammed (pbuh) used to lie down on his right side, after offering two rakaat (Sunna) of the Fajr prayer (Al-Bukhari 1160).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 29,
		title: "Sunnah 29"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Show mercy\nto youngsters',
		img: require(imgURL + '29.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Whoever does not show mercy to the people, Allah will not show mercy to him (At-Tirmidhi 1922).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 30,
		title: "Sunnah 30"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Smile',
		img: require(imgURL + '30.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, Your smiling in the face of your brother is charity... (At-Tirmidhi 1956)',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 31, // DOUBT
		title: "Sunnah 31"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Avoid wasting\nwater',
		img: require(imgURL + '31.png'),
		moreDetails: 'Prophet Muhammed (pbuh) passed by Sa’d while he was performing ablution. The Prophet said, “What is this excess?” Sa’d said, “Is there excess with water in ablution?” The Prophet said, “Yes, even if you were on the banks of a flowing river.” (Sunan Ibn Majah 425)',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 32,
		title: "Sunnah 32"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Visit the Sick',
		img: require(imgURL + '32.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, He who visits the sick continues to remain in the fruit garden of Paradise until he returns (Muslim 2568 b).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 33,
		title: "Sunnah 33"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Help Family\n with housework',
		img: require(imgURL + '33.png'),
		moreDetails: 'Al-Aswad bin Yazid asked Aisha What did the Prophet use to do at home?" She said, "He used to work for his family, and when he heard the Adhan (call for the prayer), he would go out" (Al-Bukhari 5363).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	{
		id: 34,
		title: "Sunnah 34"+total,
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Eat with\nright hand',
		img: require(imgURL + '34.png'),
		moreDetails: 'Prophet Muhammed (pbuh) said, When one of you eats, let him eat with his right hand. When he drinks, let him drink with his right hand. Verily, the devil eats and drinks with his left hand (Muslim 2020 a).',
		imgStyle: styles.img200,
		topStyle: styles.topPattern
	},
	
]