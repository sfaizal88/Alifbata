/**
*
* quran.js
* No. in Quran
*
* @author - Faizal
* @date   - 24 May 2020
***/
// ALL SHARED FILES
import { Html5Entities } from 'html-entities'; 
import * as Constant from '../../../shared/constant';
import * as Generate from '../../../shared/generate';
import * as Utils from '../../../shared/utils';

// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

export const data = [
	{
		id: 1,
		title: "Subhanallah",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#c0392b',
		desc: 'Start by saying\n“Subhanallah” 33 times',
		imgText: '33',
		details: "Subhanallah means “Glory be to Allah.” You can keep track of how many times you say Subhanallah by using your hand or a misbaha, a string of prayer beads."
	},
	{
		id: 2,
		title: "Alhamdhulillah",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#049991',
		desc: 'Say “Alhamdhulillah”\n33 times',
		imgText: '33',
		details: "Alhamdhulillah means “Praise be to Allah.” As soon as you finish saying Subhanallah for the 33rd time, begin saying Alhamdhulillah."
	},
	{
		id: 3,
		title: "Allahu Akbar",
		titleType: Constant.GENERIC.TEXT,
		imgType: Constant.GENERIC.NUMBER,
		bgColor: '#60a3bc',
		desc: 'Finish by saying\n“Allahu Akbar” 34 times.',
		imgText: '34',
		details: 'Allahu Akbar means Allah is the greatest.”',
	}
]