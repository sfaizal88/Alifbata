/**
*
* quiz.js
* Quiz data
*
* @author - Faizal
* @date   - 6 May 2020
*
***/
// ALL SHARED FILES
import * as Constant from '../shared/constant';
import * as Utils from '../shared/utils';
import * as Questions from './questions';
import * as Common from './common';
import * as Generate from '../shared/generate';

// QUIZ
export const generateQuiz = (data) => {
	return [
	Common.COMMON_SECTION[5],
	...Generate.generateQuiz(data, Constant.GENERIC.QUIZ_COUNT),
	Common.COMMON_SECTION[6]
	]
};