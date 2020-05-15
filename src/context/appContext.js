/**
*
* appContext.js
* Declare application context
*
* @author - Faizal
* @date   - 28 April 2020
*
***/
// REACT NATIVE IMPORT
import {createContext} from 'react';

// ALL SHARED FILES
import { Colors } from '../shared/colors';

const AppContext = createContext({
	chapter: '',
	lesson: '',
	updateAppContext: (data) => {}
});

export default AppContext;