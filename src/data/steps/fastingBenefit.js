/**
*
* fastingBenefit.js
* Benefit of fasting
*
* @author - Faizal
* @date   - 24 May 2020
***/
// ALL SHARED FILES
import { Html5Entities } from 'html-entities'; 
import * as Constant from '../../shared/constant';
import * as Generate from '../../shared/generate';
import * as Utils from '../../shared/utils';

// ALL CHAPTER
let imgURL = '../../../assets/img/steps/fastingBenefit/'

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Benefit 1",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Detoxifies Body',
		img: require(imgURL + '1.png'),
		details: 'Fasting serves as a healthy way of detoxing especially when you keep yourself hydrated and consume fruits and light vegetables.',
	},
	{
		id: 2,
		title: "Benefit 2",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Improves Metabolisam',
		img: require(imgURL + '2.png'),
		details: "Fasting prompts the liver’s enzymes to break down cholesterol and fats, ultimately stimulating faster metabolism.",
	},
	{
		id: 3,
		title: "Benefit 3",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Weight Loss',
		img: require(imgURL + '3.png'),
		details: 'When the body undergoes the starvation process when refraining from food and drinks, the body burns fats and any stored energy first.',
	},
	{
		id: 4,
		title: "Benefit 4",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Lowers Cholesterol',
		img: require(imgURL + '4.png'),
		details: "A decrease in the body’s salt intake and loss of salt through urine lowers the body’s blood pressure.",
	},
	{
		id: 5,
		title: "Benefit 5",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Mental Health',
		img: require(imgURL + '5.png'),
		details: "Due to the reduced-calorie, sugar, and salt intake, fasting strengthens the mind, sharpens focus, and provides mental clarity."
	},
	{
		id: 6,
		title: "Benefit 6",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Healthier Brain\nand Cognitive Function',
		img: require(imgURL + '6.png'),
		details: 'During the fasting process, blood in the human body is filled with more endorphins, which in turn, gives you a feeling of well-being and great mental health.'
	},
	{
		id: 7,
		title: "Benefit 7",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Strengthens Faith',
		img: require(imgURL + '7.png'),
		details: 'Fasting brings us closer to Allah SWT by enabling you to concentrate more on the spiritual world when you consciously give up worldly pleasures.'
	}
]