/**
*
* utils.js
* Declare all application utils
*
* @author - Faizal
* @date   - 20 April 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { Alert, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import NetInfo from "@react-native-community/netinfo";
import { Html5Entities } from 'html-entities'; 
import Sound from 'react-native-sound';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL SHARED FILES
import { styles  } from './stylesheet';
import { Colors } from './colors';
import * as Constant from './constant';
import * as Storage from './storage';

// ALL DATA FILES
import * as Common from '../data/common';

// LOCAL OBJECT DECLARE
const entities  = new Html5Entities();

/**
* Feature used to convert URL to html tags
*
* @input  String content
* @return String Formatted content url to anchor tag
*/
export const isInternetConnected = () => {
    return new Promise((resolve, reject) => {
      NetInfo.fetch().then(state => {
        // UPDATING THE NETWORK STATUS
        resolve(state.isConnected);
      }); 
    });
};

/**
* Feature used to convert URL to html tags
*
* @input  String content
* @return String Formatted content url to anchor tag
*/
export const shuffleMaxWords = (originalData, maxWord) => {
    let data = originalData.map(a => ({...a}));
    // SHUFFLE
    data.sort(() => Math.random() - 0.5);
    // RESTRICT
    data = data.slice(0, maxWord);
    // SHUFFLE DATA
    data.sort(() => Math.random() - 0.5);
    return data;
};  


/**
* Feature used to convert code to arabic
*
* @input  String content
* @return String Formatted content url to anchor tag
*/
export const codeToArabic = (code) => {
    return entities.decode(code)
};


/**
* Check minimum pass mark
*
* @input  Integer received mark
* @input  Integer minimum pass mark
* @return Boolean 
*/
export const isPassed = (mark, minPass) => {
    return (mark < minPass) ? false : true;
};


/**
* Feature used to show arabic
*
* @input  Object item
* @return String 
*/
export const convert2Arabic = (item, avoidImg = false) => {
    return item.showImg && !avoidImg ? '' : (item.enableUnicode ? entities.decode(item.unicode) : item.ar);
};


/**
* Feature used to show arabic
*
* @input  Object item
* @return String 
*/
export const convert2ArabicLang = (item, is4Letter = false) => {
  let uniCode = is4Letter ? item.unicode + Constant.GENERIC.F_LETTER_C : item.unicode;
    return item.enableUnicode ? entities.decode(uniCode) : item.ar;
};
/**
* Feature used to convert String to date
*
* @input  String date
* @return String Formatted date
*/
export const stringToDate = (value) => {
  let dateTime = value.split(" ");
  let date     = dateTime[0].split("-");
  let time     = dateTime[1].split(":");
  return new Date(date[0],(date[1]-1),date[2],time[0],time[1],time[2]);
};

/**
* Feature used to find message by key
*
* @input  Object data
* @return String 
*/
export const messageByKey = (data) => {
    let message = Constant.MESSAGE[data.output];
    // CHECK WHETHER ITS HAS PARAM
    if (data.params) {
      let params = data.params;
      message = eval('`'+message+'`');
    }
    return message;
};

/**
* Feature used to check empty
*
* @input  String  content
* @return Boolean 
*/
export const isNotEmpty = (content) => {
    return (content === undefined || content === null || typeof content === 'undefined' || !content || content === '') ? false : true; 
};

/**
* Feature used to convert first leter to capital
*
* @input  String value
* @return String Formatted value with first letter as capital
*/
export const convertToCapitalize = (name) => {
	// FETCHING ALL SAVED PLACE IDS AND CHECKING WHETHER ITS UNDEFINED OR NOT
	return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
* Feature used to join arabic with space
*
* @input  Array value
* @return String 
*/
export const joinArabic = (arr) => {
  let output = "";
  // MAKING CLONE
  let joinWords = arr.map(a => ({...a}));
  // REVERSE THE ARRAY
  joinWords.reverse();
  // LOOP THE ARRAY
  joinWords.forEach((item, index) => {
    // CHECKING WHEATHER UNICODE IS ON
    let letter = (item.enableUnicode) ? entities.decode(item.unicode) : item.ar;
    // JOINING THE OUTPUT
    output = output.concat(" ",letter);
  });
  return output;
}

/**
* Alert pop 
*
* @input  String title
* @input  String message
* @input  Array  labels
* @input  Array  functions
* @input  Array  styles
* @return NA
*/
export const alert = (title, message, labels, functions, styles) => {
  // GENERATE BUTTON
  let btns = labels.map((item, index) => {
    return {text: item, onPress: functions[index], style: styles[index] ? styles[index] : ''};
  });
  setTimeout( () => {
    Alert.alert(title, message, btns, {cancelable: false});
  }, 200)
}

/**
* Feature used to create random question
*
* @input  Array   Array of Object 
* @input  Integer Count
* @return Array   
*/
export const createRandomQ = (data, count = 5, originalData, chapter) => {
  // CHOSE THE ANSWER
  let answerIndex = -1;
  // PREVIOUS ANSWER
  let previousAnswer = '';
  // LOOPING ARRAY
  let output = Array.apply(null, Array(count)).map((item, index) => {
    // SELECTED OPTIONS
    let selectedOptions = [];
    // ALL OPTIONS WITH CLONE
    let allOptionsData  = data.map(a => ({...a}));
    // LOOPING FOUR TIMES
    for(let i = 0; i < 4; i++) { 
      // CHOSING THE OPTION INDEX FROM MAIN DATA LIST
      let optionIndex = (allOptionsData.length === 1) ? 0 : Math.floor((Math.random() * (allOptionsData.length - 1)) + 1);
      // REMOVING SELECTED INDEX FROM MAIN OPTION
      let option = allOptionsData.splice(optionIndex, 1);
      // PUSHING INOT MAIN OPTIONS
      selectedOptions.push(...option);
    }
    // REMOVING THE PREVIOUS ANSWER
    if (previousAnswer) {
        // REMOVED PREVIOUS OPTION BEFORE SELECTED ANSWER
        selectedOptions = selectedOptions.filter(item => {
          return item.key !== previousAnswer.key && item.en !== previousAnswer.en;
        });
    }
    // SHUFFLE OPTIONS
    selectedOptions.sort(() => Math.random() - 0.5);
    // CHOSE THE ANSWER
    answerIndex = (selectedOptions.length === 1) ? 1 : Math.floor((Math.random() * (selectedOptions.length - 1)) + 1);
    // ADDING THE PREVIOUS ANSWER INTO THE ARRAY
    if (previousAnswer && selectedOptions.length < 4) {
        selectedOptions.push(previousAnswer);
    }
    // SAVING THE PREVIOUS ANSWER
    previousAnswer = selectedOptions[answerIndex];
    // ADD EXTRA
    if (selectedOptions.length < 4) {
      // TAKING EXTRA NEEDED COUNT
      let extraOptionCount = 4 - selectedOptions.length;
      // OPTIONS ARRAY ID
      let optionsArray = selectedOptions.map(item => {
        return item.key;
      });
      // ALL OPTIONS WITH CLONE
      let extraAllData = originalData.map(a => ({...a}));
      // REMOVE OPTION VALUE FROM EXTRA DATA
      extraAllData = extraAllData.filter(item => {
        return optionsArray.indexOf(item.key) === -1
      })
      // LOOPING EXTRA NEEDED COUNT
      for (let i = 0; i < extraOptionCount; i++) { 
        // CHOSING THE OPTION INDEX FROM MAIN DATA LIST
        let optionIndex = Math.floor((Math.random() * (extraAllData.length - 1)) + 1);
        // REMOVING SELECTED INDEX FROM MAIN OPTION
        let option      = extraAllData.slice(optionIndex, optionIndex + 1);
        // PUSHING INOT MAIN OPTIONS
        selectedOptions.push(...option);
      }
    }
    return {
      key:    'RANDOM_' + index, 
      type:   Constant.GENERIC.RANDOM_QUESTION_EXERCISE, 
      answer: selectedOptions[answerIndex], 
      data:   selectedOptions
    }
  });
  // ADDING INTRO SCREEN
  output.unshift(Common.COMMON_SECTION[1]);
  // ADDING RANDOM GAME SCORE CARD
  output.push(Common.COMMON_SECTION[3]);
  return output;
}

/**
* Feature used to create chose the best question
*
* @input  Array   Array of Object 
* @input  Integer Count
* @return Array   
*/
export const createChoseQ = (data, count = 5, originalData, chapter) => {
  // CHOSE THE ANSWER
  let answerIndex = -1;
  // PREVIOUS ANSWER
  let previousAnswer = '';
  // LOOPING ARRAY
  let output = Array.apply(null, Array(count)).map((item, index) => {
    // SELECTED OPTIONS
    let selectedOptions = [];
    // ALL OPTIONS WITH CLONE
    let allOptionsData  = data.map(a => ({...a}));
    // LOOPING FOUR TIMES
    for(let i = 0; i < 4; i++) { 
      // CHOSING THE OPTION INDEX FROM MAIN DATA LIST
      let optionIndex = (allOptionsData.length === 1) ? 1 : Math.floor((Math.random() * (allOptionsData.length - 1)) + 1);
      // REMOVING SELECTED INDEX FROM MAIN OPTION
      let option      = allOptionsData.splice(optionIndex, 1);
      // PUSHING INOT MAIN OPTIONS
      selectedOptions.push(...option);
    }
    // REMOVING THE PREVIOUS ANSWER
    if (previousAnswer) {
        // REMOVED PREVIOUS OPTION BEFORE SELECTED ANSWER
        selectedOptions = selectedOptions.filter(item => {
          return item.key !== previousAnswer.key && item.en !== previousAnswer.en;
        });
    }
    // SHUFFLE OPTIONS
    selectedOptions.sort(() => Math.random() - 0.5);
    // CHOSE THE ANSWER
    answerIndex = (selectedOptions.length === 1) ? 1 : Math.floor((Math.random() * (selectedOptions.length - 1)) + 1);
    // ADDING THE PREVIOUS ANSWER INTO THE ARRAY
    if (previousAnswer && selectedOptions.length < 4) {
        selectedOptions.push(previousAnswer);
    }
    // SAVING THE PREVIOUS ANSWER
    previousAnswer = selectedOptions[answerIndex];
    // ADD EXTRA
    if (selectedOptions.length < 4) {
      // TAKING EXTRA NEEDED COUNT
      let extraOptionCount = 4 - selectedOptions.length;
      // OPTIONS ARRAY ID
      let optionsArray = selectedOptions.map(item => {
        return item.key;
      });
      // ALL OPTIONS WITH CLONE
      let extraAllData = originalData.map(a => ({...a}));
      // REMOVE OPTION VALUE FROM EXTRA DATA
      extraAllData = extraAllData.filter(item => {
        return optionsArray.indexOf(item.key) === -1
      })
      // LOOPING EXTRA NEEDED COUNT
      for (let i = 0; i < extraOptionCount; i++) { 
        // CHOSING THE OPTION INDEX FROM MAIN DATA LIST
        let optionIndex = Math.floor((Math.random() * (extraAllData.length - 1)) + 1);
        // REMOVING SELECTED INDEX FROM MAIN OPTION
        let option      = extraAllData.slice(optionIndex, optionIndex + 1);
        // PUSHING INOT MAIN OPTIONS
        selectedOptions.push(...option);
      }
    }
    
    return {
      key:    'CHOSE_' + index, 
      type:   Constant.GENERIC.CHOOSE_BEST_EXERCISE, 
      answer: selectedOptions[answerIndex], 
      data:   selectedOptions
    }
  });
  // ADDING INTRO SCREEN
  output.unshift(Common.COMMON_SECTION[2]);
  // ADDING RANDOM GAME SCORE CARD
  output.push(Common.COMMON_SECTION[4]);
  return output;
}

/**
* Feature used to save stars
*
* @input  String  Chapter.
* @input  Integer Lesson no.
* @input  Integer No. of stars
* @return Array   
*/
export const saveStars = (chapter, lesson, stars) => {
  // GET ALL STARS
  Storage._retrieveData(Constant.STORAGE.COMPLETED_STARS).then(item => {
    // CHECK THE VALUES
    item = (item) ? JSON.parse(item) : 0;
    // UPDATE THE COINS
    item = item + stars;
    Storage._storeData(Constant.STORAGE.COMPLETED_STARS, JSON.stringify(item));
  });
}

/**
* Feature check wheather chapter completed
*
* @input  Array   Array of completed chapters.
* @input  Integer Currenct chapter Id
* @return Boolean   
*/
export const chapterCompleted = (completedChapters, currenctChapterId) => {
  return completedChapters.indexOf(currenctChapterId) > -1
}

/**
* Feature check wheather to unlock the chapter
*
* @input  Integer Chapter index.
* @input  Array   Array of completed chapters.
* @input  Integer Currenct chapter Id
* @return Boolean   
*/
export const unlockChapter = (index, completedChapters, currenctChapterId) => {
  let lastCompletedChapterId = (completedChapters) ? completedChapters[completedChapters.length - 1] : '';
  let nextChapterToUnlock    = '';
  if (lastCompletedChapterId) {
     nextChapterToUnlock = "chapter".concat(parseInt(lastCompletedChapterId.replace("chapter", "")) + 1);
  }
  return true;//(index <= 0 || completedChapters.indexOf(currenctChapterId) > -1 || currenctChapterId === nextChapterToUnlock)
}


/**
* Feature check wheather lesson completed
*
* @input  Array   Array of completed lessons.
* @input  Integer Currenct lesson Id
* @return Boolean   
*/
export const lessonCompleted = (completedLesson, currenctLessonId) => {
  return completedLesson.indexOf(currenctLessonId) > -1
}


/**
* Feature shuffle array of objects
*
* @input  Array Array of options / question
* @return Array   
*/
export const shuffle = (list) => {
  list.sort(() => Math.random() - 0.5);
  return list;
}

/**
* Feature used to find total completed chapter
*
* @input  Array - Array of saved items
* @input  Array - Array of all chapters
* @return Array   
*/
export const totalCompletedChapter = (item, allChapter) => {
  // DECLARE LOCAL VARIABLE
  let completedChapter = 0;
  // CHECK THE VALUES
  item = item ? JSON.parse(item) : {};
  // LOOPING THE MAIN ALL CHPATER DATAS
  allChapter.forEach((chapter, chapterIndex) => {
    // BY DEFAULT CHAPTER COMPLETED FLAG IS TRUE
    let chapterCompleted = true;
    // LOOPING THE LESSON
    allChapter[chapterIndex].data.forEach((lesson, lessonIndex) => {
      // CHECKING WHETHER LESSON ID EXIST IN THE COMPLETED LESSON STORAGE
      if (typeof item[chapter.id] === 'undefined' || (item[chapter.id] && item[chapter.id].indexOf(lesson.id) === -1)) {
        chapterCompleted = false;
      }
    });
    // IF ALL THE LESSON COMPLETED
    if (chapterCompleted) {
        completedChapter = completedChapter + 1;
    }
  });
  return completedChapter;
}


/**
* Feature used to find total completed lessons
*
* @input  Array - Array of saved items
* @input  Array - Array of all chapters
* @return Array   
*/
export const totalCompletedLessons = (item, allChapter) => {
  // DECLARE LOCAL VARIABLE
  let completedLesson = 0;
  // CHECK THE VALUES
  item = item ? JSON.parse(item) : {};
  // LOOPING THE MAIN ALL CHAPTERS DATAS
  allChapter.forEach((chapter, chapterIndex) => {
    // COUNTING MEDALS
    completedLesson = (item[chapter.id]) ? completedLesson +  item[chapter.id].length : completedLesson;
  });
  return completedLesson
}

/**
* Feature check wheather to unlock the lesson
*
* @input  Integer Lesson index.
* @input  Array   Array of completed lessons.
* @input  Integer Currenct lesson Id
* @return Boolean    
*/
export const unlockLesson = (index, completedLesson, currenctLessonId) => {
  // FIND THE LAST COMPLATED LESSON ID
  let lastCompletedLessonId = (completedLesson) ? completedLesson[completedLesson.length - 1] : '';
  // CHECK WHEATHER LAST LESSON AND TOTAL LESSON ARE EQUAL
  if (completedLesson.length > 0 && lastCompletedLessonId !== completedLesson.length) {
    //console.log('Completed lesson - ' + completedLesson);
    //console.log('Not equal lastCompletedLessonId - ' + lastCompletedLessonId + ', completedLesson.length - ' + completedLesson.length);
    //console.log('Unlock next lesson before - ' + (parseInt(lastCompletedLessonId) + 1));
    // REMOVE UNWATED LESSON
    completedLesson = removeUnwantedLesson(completedLesson);
    lastCompletedLessonId = completedLesson.length;
    //console.log('Unlock next lesson after - ' + (parseInt(lastCompletedLessonId) + 1));
  }
  // DECLARE LOCAL VARIABLE
  let nextLessonToUnlock    = '';
  // CHECK WHEATHER TO UNLOCK
  if (lastCompletedLessonId) {
    // CREATING NEXT LESSON ID TO UNLOCK
    nextLessonToUnlock = parseInt(lastCompletedLessonId) + 1 ;
  }
  return /*true;*/(index === 0 || completedLesson.indexOf(currenctLessonId) > -1 || currenctLessonId === nextLessonToUnlock)
}

const removeUnwantedLesson = (completedLesson) => {
  completedLesson = completedLesson.filter(item => {
    if (item > completedLesson.length) {
      console.log('Remove the item - ' + item);
    }
    return item <= completedLesson.length;
  });

  //SORTING THE ARRAY ONCE
  completedLesson.sort();
  return completedLesson;
}

  /**
  * RIGHT ARROW CUSTOMISE BUTTON
  *
  * @input  NA
  * @return NA
    <View>
      <Icon name="angle-right" color={Colors.silver} iconStyle={styles.buttonNext} size={80} type="font-awesome" underlayColor="transparent"></Icon>
    </View>
  */
  export const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="angle-right" iconStyle={styles.nextBtn} size={RFValue(28)} type="font-awesome" underlayColor="transparent"></Icon>
      </View>
    );
  }

  /**
  * LEFT ARROW CUSTOMISE BUTTON
  *
  * @input  NA
  * @return NA
    <View>
      <Icon name="angle-left" color={Colors.silver}  iconStyle={styles.buttonPrev}  size={80} type="font-awesome" underlayColor="transparent"></Icon>
    </View>
  */
  export const renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="angle-left" iconStyle={styles.prevBtn}  size={RFValue(28)} type="font-awesome" underlayColor="transparent"></Icon>
      </View>
    );
  }

  /**
  * PLAY AUDIO WHEN CLICK PLAY BUTTON
  *
  * @input  NA
  * @return NA
  */
  export const playAudio = (path, volume = 1) => {
    // LOAD AUDIO BY URL
    let soundActive = new Sound(path,
      (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        // WHEN LOADED FULLY, PLAY THE AUDIO
        soundActive.setVolume(volume).play(() => {
          soundActive.release();
        });
      });
    }