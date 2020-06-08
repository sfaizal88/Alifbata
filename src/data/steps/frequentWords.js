/**
*
* frequentWords.js
* Frequently used words and their meaning
*
* @author - Faizal
* @date   - 24 May 2020
***/
// ALL SHARED FILES
import { Html5Entities } from 'html-entities'; 
import * as Constant from '../../shared/constant';
import * as Generate from '../../shared/generate';
import * as Utils from '../../shared/utils';
import { styles  } from '../../shared/stylesheet';

// ALL CHAPTER
let imgURL = '../../../assets/img/steps/words/'

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Bismillah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'In the name\nof Allah',
		topStyle: styles.topPattern,
		img: require(imgURL + '1.png'),
		details: 'We say "Bismillah" before beginning any action or speech to consciously ask Allah SWT to be with us throughout. Receive a blessing from Allah SWT. It is a powerful phrase that completes our actions and adds immense reward and Barakah to everything that follows it.',
		moreDetails: "Don't start any work or conversation directly, instead Say 'Bismillah' and start."
	},
	{
		id: 2,
		title: "Alhamdhulillah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Praise be\nto Allah',
		topStyle: styles.topPattern,
		img: require(imgURL + '2.png'),
		details: 'We say "Alhamdhulillah" to express our gratitude for Allah SWT’s blessings and goodness. It means all praise to Allah alone. Alhamdhulillah is usually used when something good happens but we should also remember to say Alhamdhulillah during difficult times. By doing so, we shift focus to the goodness and place reliance on Allah SWT, as He knows best.',
		moreDetails: "Don't say 'I am fine', Say 'Alhamdhulillah'."
	},
	{
		id: 3,
		title: "Subhanallah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Glory be\nto Allah',
		topStyle: styles.topPattern,
		img: require(imgURL + '3.png'),
		details: 'We say "Subhanallah" to express our amazement. It is often used during prayer, supplication, and sermon to praise Allah SWT or to exclaim in awe at His attributes, bounties, or creation.',
		moreDetails: "Don't say 'wow'. Say 'Subhanallah'."
	},
	{
		id: 4,
		title: "Astaghfirullah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'I seek forgiveness\nfrom Allah',
		topStyle: styles.topPattern,
		img: require(imgURL + '4.png'),
		details: 'We say "Astaghfirullah" when we want to seek Allah SWT’s forgiveness for a sin we committed or when we feel disappointed, disturbed, anxious, or frustrated.',
		moreDetails: "Don't say 'oh noo or any bad words'. Say 'Astaghfirullah'."
	},
	{
		id: 5,
		title: "Allahu Akbar",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Allah is the greatest',
		topStyle: styles.topPattern,
		img: require(imgURL + '5.png'),
		details: 'We say "Allahu Akbar" to express excitement and to remind ourselves that Allah SWT is the Supreme being.',
		moreDetails: "Don't say 'I did or praise yourself'. Say 'Allahu Akbar'."
	},
	{
		id: 6,
		title: "Assalammu Alaikum",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Peace be upon you',
		topStyle: styles.topPattern,
		img: require(imgURL + '6.png'),
		details: 'We say "Assalammu Alaikkum" to greet a fellow Muslim or when bidding farewell. Assalammu Alaikum means "Peace be up on you".',
		moreDetails: "Don't say 'Hello'. Say 'Assalammu Alaikum'."
	},
	{
		id: 7,
		title: "Wa Alaikkum Assalam",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Peace be up on you too',
		topStyle: styles.topPattern,
		img: require(imgURL + '7.png'),
		details: "We say 'Wa Alaikkum Assalam' in response to a fellow Muslim’s greeting (i.e. Assalammu Alaikum). Walaikum Assalam means 'Peace be upon you too'.",
		moreDetails: "To greet back don't say 'Hello'. Say 'Walaikum Assalam'."
	},
	{
		id: 8,
		title: "Fi Amanillah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'I leave you in\nthe custody of Allah.',
		topStyle: styles.topPattern,
		img: require(imgURL + '8.png'),
		details: "When two people are about to be spread apart long distances and don’t know when they will see each other again, they wish it to each other as Fi Amanillah. Fi Amanillah means 'I leave you in\nthe custody of Allah'.",
		moreDetails: "Don't say 'Bye'. Say 'Fi Amanillah'."
	},
	{
		id: 9,
		title: "Insha Allah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'If Allah wills',
		topStyle: styles.topPattern,
		img: require(imgURL + '9.png'),
		details: "Insha Allah is commonly used to refer to events that one hopes will happen in the future if Allah wills.",
		moreDetails: "Don't say '0k', Say 'Insha Allah'."
	},
	{
		id: 10,
		title: "Barakallah Fik",
		titleType: Constant.GENERIC.TEXT,
		desc: 'The blessings of\nAllah upon you',
		topStyle: styles.topPattern,
		img: require(imgURL + '10.png'),
		details: "Barakallah Fik is often said as a way to express thanks to another person. Its literal meaning is not thank you. It’s an expression to show gratitude and direct blessings of Allah SAW towards that person. ",
		moreDetails: "Don't say 'Thank you', Say 'Barakallah Fik'."
	},
	{
		id: 11,
		title: "Masha Allah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Allah has willed it',
		topStyle: styles.topPattern,
		img: require(imgURL + '11.png'),
		details: "Masha Allah is used to expressing appreciation, joy, praise, or thankfulness for an event or when you see something good and don't want to give the evil eye.",
		moreDetails: "Don't say 'great', Say 'Masha Allah'."
	}
]