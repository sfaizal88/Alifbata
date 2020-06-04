/**
*
* revelation.js
* 4 revelation in Islam revelation
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
let imgURL = '../../../assets/img/steps/revelation/'

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Quran",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Revealed to\nProphet Muhammad (PBUH)',
		img: require(imgURL + '1.png'),
		details: 'Quran, the last revelation of Allah SWT, was revealed to Prophet Muhammad (PBUH) by Angel Jibril over a period of 23 years (from 610-632 C.E.). It was first revealed in the Cave of Hira (Mecca) on Laylat al-Qadr (Night of Power) in the Islamic month of Ramadhan.',
	},
	{
		id: 2,
		title: "Injeel",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Revealed to\nProphet Isa (A.S)',
		img: require(imgURL + '2.png'),
		details: 'Injeel was revealed to Prophet Isa (A.S). The word Injeel appears twelve times in the Holy Quran.',
	},
	{
		id: 3,
		title: "Zabur",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Revealed to\nProphet Dawud (A.S)',
		img: require(imgURL + '3.png'),
		details: 'Zabur was revealed to Prophet Dawud (A.S). The word Zabur appears three times in the Holy Quran.',
	},
	{
		id: 4,
		title: "Torah",
		titleType: Constant.GENERIC.TEXT,
		desc: 'Revealed to\nProphet Musa (A.S)',
		img: require(imgURL + '4.png'),
		details: "Torah was revealed to Prophet Musa (A.S). The word Torah appears eighteen times in the Holy Quran.",
	}
]