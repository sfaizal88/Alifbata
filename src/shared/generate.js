/**
*
* generate.js
* Used to create chapters
*
* @author - Faizal
* @date   - 20 April 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from 'react';
import { Alert, AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from "@react-native-community/netinfo";
import { Html5Entities } from 'html-entities'; 
import { Icon } from 'react-native-elements';

// ALL SHARED FILES
import { Colors } from './colors';
import { styles  } from './stylesheet';
import * as Constant from './constant';
import * as Utils from './utils';

// ALL DATA FILES
import * as Common from '../data/common';


// LOCAL OBJECT DECLARE
const entities = new Html5Entities();

/**
* Feature used to generate type 1 slide
*
* @input  Array   Array of Object 
* @input  String  Chapter1, Chapter2...
* @return Array   
*/
export const generateChapter = (lessonData, chapter, totalLByLesson = 6, isShuffle = false, totalWords) => {
  // ORIGINAL DATA FORMAT
  let data          = lessonData.map(a => ({...a}));
  // ORIGINAL DATA
  let originalData  = lessonData.map(a => ({...a}));
  // SHUFFLE AND FIXED LENGTH
  if (isShuffle) {
    // SHUFFLE
    data.sort(() => Math.random() - 0.5);
    // RESTRICT
    data = data.slice(0, totalWords);
    // SHUFFLE DATA
    data.sort(() => Math.random() - 0.5);
    // ORIGINAL DATA
    originalData  = data.map(a => ({...a}));
  }
  // FIND THE REMAINING NUMBER
  let reminder = (Array.isArray(totalLByLesson)) ? 0 : (data.length) % totalLByLesson;
  // REMOVE THE REMINING ITEM FROM AN ARRAY
  let formattedData = (Array.isArray(totalLByLesson)) ? data : data.slice(0 , data.length - reminder);
  // EMPTY OUTPUT DECLARE
  let output = [];
  // TOTAL LESSON
  let totalLesson = (Array.isArray(totalLByLesson)) ? totalLByLesson.length : formattedData.length / totalLByLesson;
  //HACK ARRAY EMPTY
  let totalArray = Array.apply(null, Array(totalLesson));
  // START INDEX
  let step = 0;
  let loop = 0;
  // LOOP THE ARRAY
  totalArray.forEach((item, index) => {
    // I INDEX
    let i = 0;
    // FINDING WHEATHER DEFAULT LOOP OR DYNAMIC LOOP
    loop = (Array.isArray(totalLByLesson)) ? loop + totalLByLesson[index] : loop + totalLByLesson;//6, 12
    // DECLARING EMPTY CONTENT ARRAY
    let contentArry = [];
    // CREATING DATA ARRAY FOR EACH LESSON
    for (let dataIndex = step; dataIndex < loop; dataIndex++) {
      contentArry.push(data[(step + i)]);
      ++i;
    }
    // CHANGING THE STEP
    step = loop;
    // GENERATE LESSON
    let lessonObj = generateLesson(contentArry, index, chapter, data);
    // PUSHING INTO THE MAIN LESSON
    output.push(lessonObj);
  });

  // CHECKING WHETHER REMINDER EXISTS OR NOT
  if (reminder > 0) {
    let contentArry = [];
    let startIndex = data.length - reminder;
    for (let step = 0; step < reminder; step++) {
      contentArry.push(data[(step + startIndex)]);
    }
    let lessonObj = generateLesson(contentArry, output.length, chapter, data);
    output.push(lessonObj);
  }

  // ADDING THE FINALO EXERCISE SCREEN
  output.push(
    generateExercise(originalData, output.length, chapter)
  );
  return output;
}

/**
* Feature used to generate lesson
*
* @input  Array    Specific Lesson array of object
* @input  Integer  Lesson No.
* @input  Array    Chapter No.
* @return Object   
*/
const generateExercise = (originalData, lessonNo, chapter) => {
  return {
      id: parseInt(lessonNo) + 1,
      title: 'Exercise',
      desc: 'Test what you learned',
      get pageTitle() { return this.title +': '+ this.desc},
      isExercise: true,
      chapter,
      bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
      value: originalData,
      data: [
      Common.COMMON_SECTION[11],
      ...Utils.createRandomQ(originalData, Constant.GENERIC.TYPE1_COMPLEX_RANDOMQ_COUNT, originalData, chapter),
      ...Utils.createChoseQ(originalData, Constant.GENERIC.TYPE1_COMPLEX_CHOSE_COUNT, originalData, chapter),
      Common.COMMON_SECTION[8]
      ]
  };
}
export const generateExerciseUI = (originalData, lessonNo, chapter) => {
  return generateExercise(originalData, lessonNo, chapter);
}

/**
* Feature used to generate lesson
*
* @input  Array    Specific Lesson array of object
* @input  Integer  Lesson No.
* @input  Array    Chapter No.
* @input  Integer  Entire Chapter details
* @return Object   
*/
const generateLesson = (contentArry, lessonNo, chapter, data) => {
  if (parseInt(lessonNo) === 0) {
      contentArry.unshift(Common.COMMON_SECTION[13]);
  }
  return {
    id: parseInt(lessonNo) + 1,
    title: 'Lesson ' + (lessonNo + 1),
    desc: Utils.joinArabic(contentArry),
    get pageTitle() { return this.title +': '+ this.desc},
    isExercise: false,
    chapter: chapter,
    bgColor: Constant.GENERIC.BG_COLORS[Math.floor((Math.random() * (Constant.GENERIC.BG_COLORS.length - 1)) + 1)],
    value: contentArry,
    allData: data,
    data: [
      ...contentArry, 
      // NEED MINIMUM 4 SIZE FO CONTENT ARRY
      ...Utils.createRandomQ(contentArry, Constant.GENERIC.TYPE1_RANDOMQ_COUNT, data, chapter),
      ...Utils.createChoseQ(contentArry, Constant.GENERIC.TYPE1_CHOSE_COUNT, data, chapter),
      // NEED MINIMUM 4 SIZE FO CHOSE THE BEST
      Common.COMMON_SECTION[0]
    ]
  };
}
export const generateLessonUI = (contentArry, lessonNo, chapter, data) => {
  lessonNo = parseInt(lessonNo) - 1;
  return generateLesson(contentArry, lessonNo, chapter, data);
}

/**
* Feature used to generate quiz
*
* @input  Array    Specific Lesson array of object
* @input  Integer  Lesson No.
* @input  Array    Chapter No.
* @input  Integer  Entire Chapter details
* @return Object   
*/
export const generateQuiz = (data, quizId, quizCount) => {
  // ORIGINAL DATA
  let originalData  = data.map(a => ({...a}));
  // EMPTY OUTPUT DECLARE
  let output = [];
  // FECTH NEW QUESTIONS
  let questions = fetchQuizQuestion(originalData, quizId, quizCount);
  // LOOP THE ARRAY
  questions.forEach((item, index) => {
    console.log('Question No. ' + (index + 1) + ', Question - ' + item.question);
    // LOCAL VARIABLE
    let quiz = {
      id:   index + 1,
      type: Constant.GENERIC.QUIZ_EXERCISE,
      ...questions[index]
    }
    // PUSHING INTO THE MAIN LESSON
    output.push(quiz);
  });
  // SHUFFLE
  output.sort(() => Math.random() - 0.5);
  return output;
}

/**
* Generate question limit and check wheather question or repeated or not
*
* @input  Array    All questions
* @input  Integer  Quid Id.
* @input  Integer  Start Index.
* @input  Integer  Question limit
* @return Object   
*/
const fetchQuizQuestion = (originalData, quizId, value, count = Constant.GENERIC.QUIZ_COUNT) => {

    console.log('------------------STARTS------------------');
    console.log('Original Data count - ' + originalData.length);
    // CHECK THE VALUES
    let item       = Utils.isNotEmpty(value) ? JSON.parse(value) : 0;
    let endIndex   = parseInt(item) + parseInt(count);
    //CHECK HERE ALSO ONCE
    item = ((originalData.length > endIndex) && originalData[endIndex - 1]) ? item : 0;
    endIndex   = parseInt(item) + parseInt(count);
    console.log('Quiz Start Index - ' + item);
    console.log('Quiz End Index - ' + endIndex);
    // SUBSTRING 
    let newQuestion    = originalData.slice(item, endIndex);
    let nextFinalIndex = endIndex + count;
    console.log('Total Question - ' + newQuestion.length);
    // CHECKING 
    endIndex = (originalData.length <= nextFinalIndex && originalData[nextFinalIndex - 1]) ? 0 : endIndex;
    // SAVE INTO THE MOBILE STORAGE
    AsyncStorage.setItem(Constant.STORAGE.QUIZ_QUESTION_COUNT + '_' + quizId, JSON.stringify(endIndex));
    //RETURN THE ARRAY
    return newQuestion;
};

/**
* Feature used to create lesson intro 
*
* @input  Array   Array of Object 
* @input  Integer Count
* @return Array   
*/
export const lesson5Intro = () => {
  return (
    <>
    <View>
    <Text>Arabic Short Vowel Fathatain</Text>
    </View>
    <View style={styles.columnDirection}>
      <View style={styles.flex1}>
        <Text>{entities.decode('&#1614;')}</Text>
      </View>
      <View style={styles.flex1}>
        <Text><Icon name="plus" type="font-awesome" underlayColor="transparent"/></Text>
      </View>
      <View style={styles.flex1}>
        <Text>{entities.decode('&#1614;')}</Text>
      </View>
      <View style={styles.flex1}>
        <Text>{entities.decode('&#8800;')}</Text>
      </View>
      <View style={styles.flex1}>
        <Text>{entities.decode('&#1611;')}</Text>
      </View>
    </View>
    </>
  )
}