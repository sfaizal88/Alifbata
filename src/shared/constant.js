/**
*
* constants.js
* Declare all Constant variable
*
* @author - Faizal
* @date   - 14 April 2020
*
***/
// REACT NATIVE IMPORT
import React from 'react';

// DECLARE TYPE CONSTANT
export const TYPE = {
	UPDATE_APP_CONTEXT: 'UPDATE_APP_CONTEXT'
};

// DECLARE GENERIC CONSTANT
export const GENERIC = {
	COMPLETED: 1,
	SUCCESS: 0,
	FAILED:  -1,
	TRUE:  1,
	FALSE:  0,
	OFFLINE_TYPE_GET: 'GET',
	OFFLINE_TYPE_SUCCESS: 'SUCCESS',
	OFFLINE_TYPE_FAIL: 'FAIL',
	APP_CLOSED: 'unknown',
	AUDIO_PATH: '../../assets/data/audio/',
	LESSON_COMPLETED: 'C_M',
	LETTER_LESSON: 'L',
	FOUR_LETTER_EXERCISE: '4L',
	RANDOM_QUESTION_INTRO: 'RI',
	RANDOM_QUESTION_EXERCISE: 'R',
	RANDOM_QUESTION_SCORE: 'RS',
	CHOOSE_BEST_INTRO: 'CBI',
	CHOOSE_BEST_EXERCISE: 'CBQ',
	CHOOSE_BEST_SCORE: 'CBS',
	QUIZ_INTRO: 'QI',
	QUIZ_EXERCISE: 'QE',
	QUIZ_SCORE: 'QS',
	QUIZ_COMPLETE: 'QC',
	FOUR_LETTER_INTRO: '4LI',
	FOUR_LETTER_INTRO_DETAILS: '4LID',
	FOUR_LETTER_LESSON_COMPLETE: '4LC',
	FOUR_LETTER_CHAPTER_COMPLETE: '4CC',
	EXERCISE_INTRO: 'EXI',
	TYPE1_RANDOMQ_COUNT: 2,
	TYPE1_COMPLEX_RANDOMQ_COUNT: 10,
	TYPE1_CHOSE_COUNT: 2,
	TYPE1_COMPLEX_CHOSE_COUNT: 10,
	QUIZ_COUNT: 15,
	ALPHABET_ORDER: [4, 5, 4, 4, 4, 4, 3],
	PER_LESSON: 8,
	TOTAL_LETTER_CHAPTER: 6,
	BG_COLORS: [
	'#c0392b', '#27ae60', '#16a085', '#8e44ad', '#2c3e50', 
	'#f39c12', '#78e08f', '#60a3bc', '#B33771', '#BDC581', 
	'#34ace0', '#ffb142', '#6ab04c', '#eb4d4b', '#f53b57', 
	'#ff793f', '#596275', '#e66767', '#f5cd79', '#f19066', 
	'#EAB543', '#55E6C1', '#CAD3C8', '#3B3B98', '#58B19F', 
	'#82589F', '#778ca3', '#2d98da', '#b8e994', '#079992',],
	SCORE_AUDIO: require('../../assets/audio/winner.mp3'),//winnerfinal
	QUIZ_AUDIO: require('../../assets/audio/shorttick.mp3'),// quiz for long
	WRONG_AUDIO: require('../../assets/audio/wrongdrum.mp3'),// wrong wrongdrum wrongsoft
	CORRECT_AUDIO: require('../../assets/audio/correct.mp3'),// wrong wrongdrum wrongsoft
	COMPLETE_AUDIO: require('../../assets/audio/yay.mp3'),
	SCORE_SAD_AUDIO: require('../../assets/audio/incomplete.mp3'),//
	MENU_CLICK_AUDIO: require('../../assets/audio/menu-sparkle-clicked.mp3'),// menu-sparkle-clicked menu-clicked
	NUMBER: 'N',
	TEXT: 'T',
	F_LETTER_C: '&#1614;',
	F_START: '&#1576;&#1614;',
	F_END: '&#1576;&#1615;',
	F_M_START: '&#1576;&#1614;',
	F_M_END: '&#1576;&#1615;',

};

// DECLARE STORAGE CONSTANT
export const STORAGE = {
	COMPLETED_LESSON: 'completedLesson',
	COMPLETED_STARS:  'completedStars',
	VISITED: 'visited'
};

// SUKUN
export const SUKUN = '&#1618;';//2303