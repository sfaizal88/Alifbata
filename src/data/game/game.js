/**
*
* game.js
* Static data of all Game
*
* @author - Faizal
* @date   - 26 May 2020
* Covert mp4 to mp3 https://audio.online-convert.com/convert/mp4-to-mp3
* https://www.remove.bg/upload Remove background
***/
// ALL SHARED FILES
import * as Constant from '../../shared/constant';
import * as Generate from '../../shared/generate';
import * as Utils from '../../shared/utils';

//STEPS
import * as SpinnerGame from './spinner';
import * as MissingLetterGame from './missingLetter';
import * as Headsup from './headsup';

import { Colors } from '../../shared/colors';


// ALL CHAPTER

export const data = [
	{
		id: 1,
		title: 'Spy Word',
		showHowtoPlay: true,
		modelType: 'SL',
		data: MissingLetterGame.data,
		desc: '',
		bgColor: '#34495e',
		path: 'MissingLetter',
		active: true,
		img: require('../../../assets/img/game/2.png'),
		details: 'Find the missing letters of the given word. For instructions, click on “How to Play” below.',
	},
	{
		id: 2,
		title: 'Charades',
		data: Headsup.data,
		showHowtoPlay: true,
		modelType: 'HU',
		desc: '',
		bgColor: '#60a3bc',
		path: 'HeadsupGame',
		active: true,
		img: require('../../../assets/img/game/3.png'),
		details: 'Act out the word shown without saying anything. For instructions, click on “How to Play” below.',
	}/*,
	{
		id: 3,
		title: 'Spinner',
		data: SpinnerGame.data,
		desc: 'Rotate the spinner\nto receive the rewards',
		bgColor: '#049991',
		path: 'HeadsupGame',
		active: false,
		img: require('../../../assets/img/game/1.png'),
		details: "Prophets are individuals who were sent by Allah to various communities to serve as examples of ideal human behavior and to spread God's message on Earth. ",
	},*/
]


export const headsupData = 
{
	id: 1,
	title: 'Charades',
	data: Headsup.data,
	desc: 'Act and\nfind the word',
	bgColor: '#60a3bc',
	path: 'HeadsupGame',
	active: true,
	img: require('../../../assets/img/game/3.png'),
	details: 'Fasting develops the quality of righteousness (taqwa) by making Muslims abstain from sinful deeds and training them to control our thoughts and desires.',
}