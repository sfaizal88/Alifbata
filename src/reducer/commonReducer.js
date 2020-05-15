/**
*
* commonReducer.js
* 
* @author - Faizal
* @date   - 28 April 2020
*
***/
// REACT NATIVE IMPORT
import React from 'react';

// ALL SHARED FILES
import { Colors } from '../shared/colors';
import * as Constant from '../shared/constant';

export const reducer = (state, action) => {
	switch (action.type) {
		case Constant.TYPE.UPDATE_APP_CONTEXT:
			return {
				...state,
				chapter: action.payload.chapter,
				lesson: action.payload.lesson
			}
		default:
			return state;
	}
}