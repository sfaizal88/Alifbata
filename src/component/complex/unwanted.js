/*
Details.js
<View style={[styles.flex1, styles.centerViewRight]}><Icon name="refresh" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={() => randomGame(item)} containerStyle={[styles.mh20]}/></View>
            
*/


/**
* WHEN USER CLICK RETRY BUTTON ON RANDOM TYPE QUESTION
* GET RANDOM OBJECT
*
* @input  OBJECTS - ALL THE PASSED OBJECTS
* @return NA
*/
//const randomGame = (item) => {
// GET THE RANDOM NUMBER USING DATA LENGTH
//let num        = Math.floor((Math.random() * (item.data.length - 1)) + 1);
// FIND SINGLE OBJECT USING RANDOM NUMBER
//let randomItem = item.data[num];
// CHECK WHEATHER ITS NOT UNDEFINED
//if (typeof randomItem === 'undefined') {
  // RETRY THE RANDOM ITEM
  //randomGame(item);
//} else {
  // SET THE SELECTED OBJECT INTO THE ITEM
  //setActiveState(randomItem);
//}
// CALL THE GENERATE ITEM AGAIN
//generateItem({item})
//ss}

/*
<View style={[styles.slideImageContainer, styles.rowDirection, styles.mt15]}>
  <View style={[styles.flex1, styles.centerViewRight]}>
    <View style={styles.centerView}>
      <Icon name="refresh" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={redoTest} containerStyle={[styles.mh20]}/>
      <Text style={[styles.redoLabel, styles.mt0, styles.mr0]} onPress={redoLesson}>Replay Game</Text>
    </View>
  </View>
  <View style={[styles.flex1, styles.centerViewLeft]}>
    <View style={styles.centerView}>
      <Icon name="chevron-right" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={() => nextSlide(index)} containerStyle={[styles.mh20]}/>
      <Text style={[styles.nextLessonLabel, styles.mt0, styles.mr0]}  onPress={() => nextSlide(index)} >Next</Text>
    </View>
  </View>
</View>
*/

/*
<View style={[styles.slideImageContainer, styles.rowDirection, styles.mt15]}>
  <View style={[styles.flex1, styles.centerViewRight]}>
    <View style={styles.centerView}>
      <Icon name="refresh" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={redoTest} containerStyle={[styles.mh20]}/>
      <Text style={[styles.redoLabel, styles.mt0, styles.mr0]} onPress={redoLesson}>Replay Game</Text>
    </View>
  </View>
  <View style={[styles.flex1, styles.centerViewLeft]}>
    <View style={styles.centerView}>
      <Icon name="chevron-right" color={Colors.primary} size={40} type="font-awesome" underlayColor="transparent" onPress={() => nextSlide(index)} containerStyle={[styles.mh20]}/>
      <Text style={[styles.nextLessonLabel, styles.mt0, styles.mr0]}  onPress={() => nextSlide(index)} >Next Game</Text>
    </View>
  </View>
</View>
<View style={styles.slideType3ImageContainer}><Image source={WinnerIcon} style={styles.slideType3Image}/></View>
*/

// DASHBOARD TOP
/*

*/

// BOTTOM

/*
<View style={[styles.rowDirection, styles.mt40]}>
    <TouchableOpacity style={[styles.boxtypeLeft]} onPress={() => navigation.navigate('Chapter')}>
    <View style={[styles.rowDirection]}>
        <View style={[styles.flex2, styles.centerView, styles.alignS, styles.pl15]}>
        <Text style={[styles.dbBDesc, styles.whiteText]}>All Chapter</Text>
        <Text style={[styles.dbDesc, styles.whiteText]}>Start Learning</Text>
        </View>
        <View style={[styles.flex1, styles.centerView, styles.alignS, styles.pl10]}>
          <Icon name="book" color={Colors.white} size={30}  type='octicon'/>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.boxtypeRight]} onPress={() => navigation.navigate('Quiz')}>
    <View style={[styles.rowDirection]}>
        <View style={[styles.flex1, styles.centerView]}>
          <Icon name="light-bulb" color={Colors.white} size={30} type='octicon'/>
        </View>
        <View style={[styles.flex2, styles.centerView, styles.alignS]}>
        <Text style={[styles.dbBDesc, styles.whiteText]}>Quiz Game</Text>
        <Text style={[styles.dbDesc, styles.whiteText]}>Islamic Test</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
  <View style={[styles.rowDirection, styles.mt20]}>
    <TouchableOpacity style={[styles.boxtypeLeft]} onPress={() => navigation.navigate('Badge')}>
    <View style={[styles.rowDirection]}>
        <View style={[styles.flex2, styles.centerView, styles.alignS, styles.pl15]}>
        <Text style={[styles.dbBDesc, styles.whiteText]}>Badges</Text>
        <Text style={[styles.dbDesc, styles.whiteText]}>All Rewards</Text>
        </View>
        <View style={[styles.flex1, styles.centerView, styles.alignS, styles.pl10]}>
          <Icon name="gift" color={Colors.white} size={30} type='octicon'/>
        </View>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.boxtypeRight]} onPress={() => navigation.navigate('Quiz')}>
    <View style={[styles.rowDirection]}>
        <View style={[styles.flex1, styles.centerView]}>
          <Icon name="broadcast" color={Colors.white} size={30} type='octicon'/>
        </View>
        <View style={[styles.flex2, styles.centerView, styles.alignS]}>
        <Text style={[styles.dbBDesc, styles.whiteText]}>Knowledge</Text>
        <Text style={[styles.dbDesc, styles.whiteText]}>About Islam</Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
*/