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
let imgURL = '../../../assets/img/steps/sunnah/'
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
export const data = [
	{
		id: 1,
		title: "Sunnah 1",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Be gentle\nwith your wife',
		img: require(imgURL + '1.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 2,
		title: "Sunnah 2",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Walk to the Masjid',
		img: require(imgURL + '2.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 3,
		title: "Sunnah 3",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Keep in touch with\nyour relatives and friends',
		img: require(imgURL + '3.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 4,
		title: "Sunnah 4",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Look after\nyour neighbour',
		img: require(imgURL + '4.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 5,
		title: "Sunnah 5",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Give gifts',
		img: require(imgURL + '5.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 6,
		title: "Sunnah 6",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Be nice to\nyour parents',
		img: require(imgURL + '6.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 7,
		title: "Sunnah 7",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Learn Quran\nand teach it',
		img: require(imgURL + '7.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 8,
		title: "Sunnah 8",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Always smell\ngood',
		img: require(imgURL + '8.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 9,
		title: "Sunnah 9",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Be silent if you\ndont like the food',
		img: require(imgURL + '9.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 10,
		title: "Sunnah 10",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Forgive the person\nwho cause you grief',
		img: require(imgURL + '10.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 11,
		title: "Sunnah 11",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Make Wudu\nbefore sleeping',
		img: require(imgURL + '11.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 12,
		title: "Sunnah 12",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'qwqwqw',
		img: require(imgURL + '12.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 13,
		title: "Sunnah 13",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Help build\na Masjid',
		img: require(imgURL + '13.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 14,
		title: "Sunnah 14",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Try to calm\nyourself when angry',
		img: require(imgURL + '14.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 15,
		title: "Sunnah 15",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Meet your brother\nwith a smile',
		img: require(imgURL + '15.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 16,
		title: "Sunnah 16",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'qwqwqw',
		img: require(imgURL + '16.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 17,
		title: "Sunnah 17",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Clean your bed\nbefore going to sleep',
		img: require(imgURL + '17.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 18,
		title: "Sunnah 18",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Speak what is\ngood or keep silent',
		img: require(imgURL + '18.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 19,
		title: "Sunnah 19",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Plant a tree\nor sow seed',
		img: require(imgURL + '19.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 20,
		title: "Sunnah 20",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Show kindness\nto animals',
		img: require(imgURL + '20.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 21,
		title: "Sunnah 21",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Give charity',
		img: require(imgURL + '21.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 22,
		title: "Sunnah 22",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Pray istikhara\nwhen making a decision',
		img: require(imgURL + '22.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 23,
		title: "Sunnah 23",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Keep yourself\nclean',
		img: require(imgURL + '23.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 24,
		title: "Sunnah 24",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Look\nafter orphans',
		img: require(imgURL + '24.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 25,
		title: "Sunnah 25",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Get married',
		img: require(imgURL + '25.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 26,
		title: "Sunnah 26",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Hide the\nfault of others',
		img: require(imgURL + '26.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 27,
		title: "Sunnah 27",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Love for\nyour brother',
		img: require(imgURL + '27.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 28,
		title: "Sunnah 28",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Sleep on\nyour right side',
		img: require(imgURL + '28.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 29,
		title: "Sunnah 29",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Show mercy\nto youngsters',
		img: require(imgURL + '29.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 30,
		title: "Sunnah 30",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Smile',
		img: require(imgURL + '30.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	{
		id: 31,
		title: "Sunnah 31",
		titleType: Constant.GENERIC.NUMBER,
		desc: 'Avoid wasting\nwater',
		img: require(imgURL + '31.png'),
		details: 'qeqreqr',
		imgStyle: styles.img200,
		//topStyle: styles.topPattern
	},
	
]