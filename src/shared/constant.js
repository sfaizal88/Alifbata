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
	TYPE1_RANDOMQ_COUNT: 4,
	TYPE1_COMPLEX_RANDOMQ_COUNT: 10,
	TYPE1_CHOSE_COUNT: 4,
	TYPE1_COMPLEX_CHOSE_COUNT: 10,
	QUIZ_COUNT: 10,
	ALPHABET_ORDER: [4, 5, 4, 4, 4, 4, 3],
	BG_COLORS: [
	'#c0392b', '#27ae60', '#16a085', '#8e44ad', '#2c3e50', 
	'#f39c12', '#78e08f', '#60a3bc', '#B33771', '#BDC581', 
	'#34ace0', '#ffb142', '#6ab04c', '#eb4d4b', '#f53b57', 
	'#ff793f', '#596275', '#e66767', '#f5cd79', '#f19066', 
	'#EAB543', '#55E6C1', '#CAD3C8', '#3B3B98', '#58B19F', 
	'#82589F', '#778ca3', '#2d98da', '#b8e994', '#079992', ]
};

// DECLARE STORAGE CONSTANT
export const STORAGE = {
	COMPLETED_LESSON: 'completedLesson',
	COMPLETED_STARS:  'completedStars'
};

// SUKUN
export const SUKUN = '&#1618;';//2303