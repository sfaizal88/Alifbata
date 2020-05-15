/**
*
* stylesheet.js
* Declare all style details.
*
* @author - Faizal
* @date   - 20 April 2020
*
***/
// REACT NATIVE IMPORT
import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// ALL SHARED FILES
import { Colors } from './colors';
import { Setting } from './setting';

/* LAYOUT - STARTS */
const layoutStyle ={
	container: {
    	flex: 1,
    	backgroundColor: Colors.white
	},
	safeViewContainer: {
    	flex: 1,
    	backgroundColor: Colors.blueDarkest//Colors.primary
	},
	body: {
		flex: 1,
		paddingTop: 10,
		paddingBottom: 10,
		paddingHorizontal: 10,
        flexDirection: 'column',
    	backgroundColor: Colors.white,//Colors.appBg
    	marginHorizontal: 10,
    	borderTopRightRadius: 20,
 		borderTopLeftRadius: 20,
    	borderBottomRightRadius: 20,
 		borderBottomLeftRadius: 20,
 		overflow: 'hidden'

	},
	safeViewAvoid: {
		backgroundColor: Colors.white,
	},
	headerContainer: {
	    height: 70,
	    alignItems: 'center',
	    justifyContent: 'center',
	    backgroundColor: Colors.primary
	},
	headerExtraConatiner: {
	    height: 110,
		paddingBottom: 70
	},
	headerInnerContainer: {
	    shadowColor: 'transparent',
	    paddingHorizontal: 15, 
		color: Colors.grayDarkest,
		backgroundColor: Colors.primary,
		alignItems:'center',
	},
	stackheaderLeftContainer: {
		left: 15,
		top: 0
	},
	headerTitle: {
		fontSize: Setting.sTextSize,
		fontWeight: '700',
		textTransform: 'uppercase',
		alignItems:'center',
		letterSpacing: 2,
		color: Colors.white,
		fontFamily: 'System',//Colors.white*/
		textShadowColor: Colors.black,
  		textShadowOffset: {width: -1, height: 1},
  		textShadowRadius: 2
	},
	headerSubTitle: {
		paddingTop: 5,
		fontSize: Setting.xxsTextSize,
		fontWeight: '500',
		textTransform: 'uppercase',
		textAlign: 'center',
		letterSpacing: 2,
		color: Colors.white,
		fontFamily: 'System',//Colors.white
		textShadowColor: Colors.black,
  		textShadowOffset: {width: -1, height: 1},
  		textShadowRadius: 2
	},
	lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
   	},
	stackHeader: {
		backgroundColor: Colors.primary,
	},
	subheaderContainer: {
		//backgroundColor: Colors.subheaderBg,
		height: 25,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 5
	},
	subheaderTitle: {
		color: Colors.subheaderBgTitle,
		fontSize: Setting.sxTextSize,
		fontWeight: 'bold',
		paddingHorizontal: 7,
		textTransform: 'uppercase',
		//letterSpacing: 1,
		fontWeight: '600'
	},
	centerContainer: {
		flex: 1,
		flexDirection: 'row', 
		alignItems: 'center'
	}
}
/* LAYOUT - ENDS */
/* NAVIGATION BAR - STARTS */
const navBarStyle ={
 	mainNavBar: {
 		backgroundColor: Colors.white, 
 		paddingBottom: 0, 
 		width: '70%',
 		//marginBottom: -25,
 		height: 'auto', 
 		paddingTop: 0, 
 		justifyContent: 'center',
 		borderTopColor: Colors.borderColor,
 		borderTopWidth: 1
 	},
 	mainNavBarText: {
 		fontSize: Setting.usTextSize,
 		fontWeight: '600',
 		textTransform: 'uppercase'
 	},
 	topTabContainer: {
 		backgroundColor: Colors.primary,
 		borderBottomColor: Colors.primary,
 		borderBottomWidth: 1
 	},
 	topTabLabel: {
 		fontSize: Setting.xxsTextSize,
 		fontWeight: '500',
 		padding: 0,
 	},
 	topTab: {
 		paddingTop: 0,
 		width: 'auto',
 		height: 45
 	},
 	topTabIndicator: {
 		backgroundColor: Colors.white
 	},
}
/* NAVIGATION BAR - ENDS */
/* ERROR - STARTS */
const errorStyle = {
	emptyContainer: {
		flex: 1,
		flexDirection: 'column',
		paddingTop: '48%',
		paddingHorizontal: 30,
		alignItems: "center",
		justifyContent: "center"
	},
	emptyTitle: {
		color: Colors.grayLight,
		fontSize: Setting.h5TextSize,
		alignSelf: 'center',
		marginTop: 5,
		marginBottom: 5
	},
	emptyDescr: {
		color: Colors.grayLight,
		fontSize: Setting.TextSize,
		alignSelf: 'center'

	},
	emptyIcon: {
		color: Colors.grayLight

	},
}
/* ERROR - ENDS */
/* SPECIAL ICONS - STARTS */
const specialIconStyle = {
	loaderContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		//backgroundColor: 'rgba(0, 0, 0, 0.6)',
		zIndex: 1
		//backgroundColor: `rgba(0,0,0,${dimLights})`
	},
	subLoaderContainer: {
		padding: 20,
		backgroundColor: Colors.white,
		borderRadius: 13,
		alignItems: "center",
		justifyContent: "center",
		zIndex: 2
	},
	statusBar: {
    	height: Setting.STATUSBAR_HEIGHT,
    	top: 0,
    	left: 0,
    	width: '100%',
    	backgroundColor: Colors.white
  	},
  	poweredBy: {
  		color: Colors.grayM,
  		fontSize: Setting.sTextSize,
  		fontWeight: '400',
  		alignSelf: 'center',
  		marginTop: 15
  	},
  	actionMenuIcon: {
  		paddingHorizontal: 15
  	},
  	selectFieldIcon: {
  		right: 23,
  		top: 12
  	},
  	noBorder: {
  		borderWidth: 0,
  		borderBottomWidth:0,
  	},
  	redoLabel: {
  		fontWeight: '500',
  		marginTop: 20,
        color: Colors.grayDarkest,
        fontSize: Setting.h6TextSize,
        fontWeight: '500',
        marginRight: 20,
        textAlign: 'center'
  	},
  	nextLessonLabel: {
  		fontWeight: '500',
  		marginTop: 20,
        color: Colors.grayDarkest,
        fontSize: Setting.h6TextSize,
        fontWeight: '500',
        marginLeft: 20
  	},
  	circleIcon: {
  		backgroundColor: Colors.borderColor,
  		padding: 15,
  		paddingHorizontal: 18,
  		borderRadius: 40
  	},
  	score: {
  		fontSize: Setting.scoreSize,
  		fontWeight: '700',
  		color: Colors.grayDarkest
  	},
  	darkHigh: {
  		fontWeight: 'bold',
  		color: Colors.grayDarkest
  	},
  	noContainer: {
  		position: 'absolute',
  		right: 10,
  		top: 10,
  		padding: 10,
  		paddingHorizontal: 15,
  		backgroundColor: Colors.primary,
  		borderRadius: 30
  	},
  	qno: {
  		fontSize: 17,
  		fontWeight: '700', 
  		color: Colors.white
  	},
  	overflowV: {
 		overflow: 'visible'
  	},
  	disableOverlay: {
  		position: 'absolute',
  		top: 0,
  		bottom: RFPercentage(11),
  		left: 0,
  		right: 0,
  		width: '100%',
  		backgroundColor: 'rgba(0, 0, 0, 0.4)',
  		opacity: 0.7,
  		borderRadius: 100,
  		borderTopRightRadius: 0,
  		borderTopLeftRadius: 0,
  		alignItems: 'center',
		justifyContent: 'center'
  	},
  	disableOverlayLabel: {
  		position: 'absolute',
  		fontSize: RFValue(50),
  		top: '5%',
  		color: Colors.white,
		fontWeight: 'bold',
		justifyContent: 'center',
		alignItems: 'center'
  	}
}
/* SPECIAL ICONS - ENDS */

/* SPACING - STARTS */
const spacingStyle = {
	p0: {
		padding: 0,
		paddingTop: 0,
		paddingBottom: 0,
		paddingHorizontal: 0,
	},
	phb0: {
		paddingHorizontal: 0,
		paddingBottom: 0
	},
	ph0: {
		paddingHorizontal: 0
	},
	ph20: {
		paddingHorizontal: 20
	},
	ph30: {
		paddingHorizontal: 30
	},
	pt0: {
		paddingTop: 0
	},
	pt5: {
		paddingTop: 5
	},
	pt15: {
		paddingTop: 15
	},
	pt20: {
		paddingTop: 20
	},
	pt30: {
		paddingTop: 30
	},
	pt40: {
		paddingTop: 40
	},
	pb0: {
		paddingBottom: 0
	},
	pb5: {
		paddingBottom: 5
	},
	pb10: {
		paddingBottom: 10
	},
	pb15: {
		paddingBottom: 15
	},
	pb30: {
		paddingBottom: 30
	},
	pb40: {
		paddingBottom: 40
	},
	pb50: {
		paddingBottom: 50
	},
	ptb0: {
		paddingTop: 0,
		paddingBottom: 0
	},
	pl5: {
		paddingLeft: 5
	},
	pl10: {
		paddingLeft: 10
	},
	pl20: {
		paddingLeft: 20
	},
	pl30: {
		paddingLeft: 30
	},
	pr5: {
		paddingRight: 5
	},
	mt0: {
		marginTop: 0
	},
	mt5: {
		marginTop: 5
	},
	mt10: {
		marginTop: 10
	},
	mt15: {
		marginTop: 15
	},
	mt20: {
		marginTop: 20
	},
	mt40: {
		marginTop: 40
	},
	mt50: {
		marginTop: 50
	},
	mr0: {
		marginRight: 0
	},
	mr10: {
		marginRight: 10
	},
	ml10: {
		marginLeft: 10
	},
	mb0: {
		marginBottom: 0
	},
	mb5: {
		marginBottom: 5
	},
	mb10: {
		marginBottom: 10
	},
	mb15: {
		marginBottom: 15
	},
	mb20: {
		marginBottom: 20
	},
	mb40: {
		marginBottom: 40
	},
	mh20: {
		marginHorizontal: 20
	}
}
/* SPACING - ENDS */

/* LIST - STARTS */
 const listStyle = {
 	listType1Container: {
 		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		height: 70,
		margin: 0,
		padding: 0,
		paddingTop: 5,
		paddingBottom: 5,
		marginBottom: 10,
		backgroundColor: Colors.white,
		borderColor: Colors.borderColor,
		borderWidth: 1,
		shadowOffset:{  width: 0.5,  height: 0.5 },
		shadowColor: Colors.fBorderColor,
		shadowOpacity: 0.8,
		borderLeftWidth: 5,
		borderLeftColor: Colors.primary,
		borderRadius: 5
 	},
	listType1LeftContainer: {
		width: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	listType1LeftLabel: {
		color: Colors.grayDarkest,
		fontSize: Setting.lTextSize,
		fontWeight: 'bold'
	},
	listType1RightContainer: {
		width: 60,
		alignItems: 'center',
		justifyContent: 'center'
	},
	listType1Content: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 5,
	},
	listType1Title: {
		fontSize: Setting.h6TextSize,
		fontWeight: '500',
		paddingBottom: 3,
		color: Colors.grayDarkest,
		textTransform: 'capitalize'
	},
	listType1Descr: {
		fontSize: Setting.sxTextSize,
		fontWeight: '500',
		color: Colors.grayDark
	},
	listType2Container: {
 		flex: 1,
 		flexDirection: 'row',
 		backgroundColor: Colors.white,
		padding: 0,
 		borderBottomColor: Colors.borderColor,
 		borderBottomWidth: 1,
 		marginHorizontal: 0,
 		paddingHorizontal: 5,
 		paddingTop: 9,
 		paddingBottom: 9
 	},
	listType2LeftIcon: {
		width: 60,
		alignItems: 'center',
		justifyContent: 'center'
	},
	listType2Content: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 5
	},
	listType2Title: {
		fontSize: Setting.sxTextSize,
		fontWeight: '600',
		paddingBottom: 3,
		color: Colors.grayDarkest,
		textTransform: 'uppercase'
	},
	listType2Descr: {
		fontSize: Setting.xxsTextSize,
		fontWeight: '400',
		color: Colors.grayDarkest
	},
 	listType2RightIcon: {
		width: 35, 
		justifyContent: 'center', 
		alignItems: 'center',
 		fontSize: Setting.nTextSize,
 		color: Colors.grayDarkest,
 	},
 }
/* LIST FIELDS - ENDS */
/* BOX - STARTS */
 const boxStyle = {
 	containerBox: {
 		borderColor: Colors.fBorderColor,
 		borderWidth: 1,
 		borderRadius: 5,
 		padding: 5,
 		paddingTop: 20,
 		margin: 10,
 		marginBottom: 20
 	},
 	containerBoxTitle: {
 		fontSize: Setting.xxsTextSize,
 		fontWeight: '600',
 		textTransform: 'uppercase',
 		color: Colors.grayDarkest,
		position: 'absolute',
		zIndex: 1,
		top: -8,
		left: 10,
		backgroundColor: Colors.white
 	},
	offlineBox: {
		backgroundColor: Colors.red,
		height: 40 + Setting.STATUSBAR_HEIGHT,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Setting.STATUSBAR_HEIGHT
	},
	offlineBoxText: {
		color: Colors.white,
		textAlign: 'center',
		flex: 1,
		lineHeight: 30,
		fontWeight: '600',
		fontSize: Setting.nTextSize

	},
	contentBody: {
		borderTopWidth: 0,
		borderTopColor: Colors.borderColor,
		paddingTop: 30,
		marginTop: 10,
	},
	contentBodyText: {
		color: Colors.grayDarkest,
		fontSize: Setting.nTextSize,
		lineHeight: 18,
		paddingBottom: 20,
		fontWeight: '400',
		paddingHorizontal: 20
	},
	contentBodyTitle: {
		color: Colors.grayDarkest,
		fontSize: Setting.nTextSize,
		fontWeight: '500',
		lineHeight: 20,
		paddingBottom: 10,
		paddingTop: 20
	},
	greensBox: {
		backgroundColor: Colors.green,
		paddingTop: 3,
		paddingBottom: 3,
		paddingHorizontal: 5,
		borderRadius: 5,
		color: Colors.white,
		fontSize: Setting.xxsTextSize,
		fontWeight: '700',
		marginBottom: 5,
		overflow: 'hidden'
	},
	redsBox: {
		backgroundColor: Colors.red,
		padding: 5,
		borderRadius: 5,
		color: Colors.white,
		fontSize: Setting.xxsTextSize,
		fontWeight: '700',
		marginBottom: 5,
		overflow: 'hidden'
	},
	loginContainer: {
		paddingHorizontal: '10%',
		marginTop: '-10%'
	},
	boxtypeLeft: {
		backgroundColor: Colors.primary,//Colors.gold,
		borderRadius: 10,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		paddingTop: 10,
		paddingBottom: 10,
		width: '50%',
		borderWidth: 1,
		borderColor: Colors.primary,//Colors.gold,
		borderLeftWidth: 0,
		left: -10,
		top: -33
	},
	boxtypeRight: {
		backgroundColor: Colors.primary,//Colors.gold,
		borderRadius: 10,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		paddingTop: 10,
		paddingBottom: 10,
		width: '50%',
		borderWidth: 1,
		borderColor: Colors.primary,//Colors.gold,
		borderRightWidth: 0,
		right: -10
	},
	boxtypeLeft2: {
		backgroundColor: '#c44569',
		borderColor: '#c44569'
	},
	whiteText: {
		color: Colors.white
	},
	darkText: {
		color: Colors.grayDarkest
	}

 }
/* BOX - ENDS */
/* ALIGN - STARTS */
const alignStyle = {
	row: {
		flex: 1,
		flexDirection: 'row',
	},
	rowDirection: {
		flexDirection: 'row'
	},
	column: {
		flex: 1,
		flexDirection: 'column'
	},
	columnDirection: {
		flexDirection: 'column'
	},
	rowAC: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: "center",
		alignItems: "center",
	},
	centerView: {
		alignItems: "center",
		justifyContent: "center"
	},
	centerViewV: {
		alignItems: "flex-end",
		justifyContent: "center"
	},
	centerViewT: {
		alignItems: "center",
		justifyContent: "flex-start"
	},
	centerViewLeft: {
		alignItems: "flex-start",
		justifyContent: "center"
	},
	centerViewRight: {
		alignItems: "flex-end",
		justifyContent: "center"
	},
	alignC: {
		alignItems: "center",
	},
	alignS: {
		alignItems: "flex-start",
	},
	alignE: {
		alignItems: "flex-end",
	},
	displayN: {
		display: 'none'
	},
	displayB: {
		display: 'flex'
	},
	selfC: {
		alignSelf: 'center',
	},
	selfS: {
		alignSelf: 'flex-start',
	},
	selfE: {
		alignSelf: 'flex-end',
	},
	w100: {
		width: '100%'
	},
	w75: {
		width: 75
	},
	w50: {
		width: 50
	},
	w200: {
		width: 200
	},	
}
/* ALIGN - ENDS */
/* FLEX - STARTS */
const flexStyle = {
	flex1: {
		flex: 1
	},
	flex2: {
		flex: 2
	},
	flex3: {
		flex: 3
	},
	flex4: {
		flex: 4
	},
	flex5: {
		flex: 5
	},
	flex6: {
		flex: 6
	},
	flex7: {
		flex: 7
	}
}
/* FLEX - ENDS */
/* GRID - STARTS */
const gridStyle = {
	grid: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    gridItem: {
        flexBasis: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
}
/* GRID - ENDS */
/* SLIDER - STARTS */
const sliderStyle = {
	slide: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
		shadowOffset:{  width: 2,  height: 2  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5,
    },
    slideTitle: {
        fontSize: 42,
        fontWeight: '700',
        color: Colors.grayDarkest,
		alignSelf: 'center',
		top: -50,
		textAlign: 'center',
		shadowOffset:{  width: 1,  height: 1  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5,
    },
    slideImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideImage: {
        height: 180,
        width: 180,
    },
    slideDesc: {
        fontSize: Setting.nTextSize,
        fontWeight: '500',
        color: Colors.grayDarkest,
		textAlign: 'center',
		top: 30,
		paddingHorizontal: 40,
		lineHeight: 25
    },
    slideType2: {
		backgroundColor: Colors.white
    },
    slideType2Title: {
    	top: -30,
        fontSize: 130,
        fontWeight: '700',
        //backgroundColor: '#ccc',
        textAlign: 'center',
  		textAlignVertical: 'center',
    },
    slideType2Label: {
		fontWeight: '600',
        color: Colors.grayDarkest,
        fontSize: Setting.h6TextSize,
    },
    slideType2Desc: {
        color: Colors.darkSilver,
        fontWeight: '700',
        fontSize: Setting.h2TextSize
    },
    slideType3: {
		backgroundColor: Colors.white
    },
    slideType3ImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideType3Image: {
        height: 180,
        width: 180,
    },
    slideType3Title: {
        fontSize: Setting.h4TextSize,
        fontWeight: '500',
        top: 0,
        color: Colors.grayDarkest,
		alignSelf: 'center',
		marginTop: 15, 
		marginBottom: 15
    },
    slideType3Desc: {
    	fontSize: Setting.h6TextSize,
        color: Colors.grayDarkest,
		textAlign: 'center',
		paddingHorizontal: 40,
		lineHeight: 25,
        color: Colors.grayDark,
        fontWeight: '400', 
        marginBottom: 15
    },
    topContainer: {
    	flex: 1,
    	width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-end',
    },
    slideLabel: {
		fontWeight: '500',
        color: Colors.grayDarkest,
        fontSize: Setting.nTextSize,
    },
    bottomContainer: {
    	flex: 1,
    	width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 20
    },
    bigArabLetter: {
        fontSize: RFValue(100),
        fontWeight: '700',
        color: Colors.grayDarkest,
		shadowOffset:{  width: 1,  height: 1  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5,
        width: '100%',
        textAlign: 'center',
		paddingTop: 30,
		paddingBottom: 30,
		paddingHorizontal: 20,
		top: 0,
    	bottom: 0,
    },
    mediumArabLetter: {
        fontSize: 40,
        fontWeight: '700',
        color: Colors.white,
		shadowOffset:{  width: 1,  height: 1  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5
    },
    slideSquare: {
    	width: 90,
    	height: 90,
    	borderWidth: 1,
    	backgroundColor: Colors.blueDark,
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: '600',
        color: Colors.grayDarkest,
        fontSize: Setting.h6TextSize,
        margin: 5,
        borderRadius: 10,
        borderColor: Colors.blueDarkest,
        shadowOffset:{  width: 0.5,  height: 0.5  },
        shadowColor: Colors.blueDarkest, 
        shadowOpacity: 0.5
    },
    wSlideLabel: {
		fontWeight: '500',
        color: Colors.white,
        fontSize: Setting.sTextSize,
    },
    squareContainer: {
    	top: -110
    },
    infoContainer: {
        margin: 0,
		paddingTop: 5,
		paddingBottom: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
		backgroundColor: Colors.white,
		borderColor: Colors.borderColor,
		borderWidth: 1,
		shadowOffset:{  width: 0.5,  height: 0.5 },
		shadowColor: Colors.fBorderColor,
		shadowOpacity: 0.8,
		borderRadius: 5,
		marginBottom: 10,
		flexDirection: 'row'
    },
    infoMessage: {
		fontSize: Setting.h6TextSize,
		fontWeight: '500',
		paddingBottom: 3,
		color: Colors.grayDarkest,
		textTransform: 'capitalize',
		fontSize: 15,
		paddingLeft: 10
    },
    infoIconContainer: {
    	width: 50
    },
    infoIcon: {
    	alignSelf: 'stretch',
    	flex: 1,
    	flexGrow:1,
	    height:null,
	    width:null,
	    alignItems: 'center',
	    justifyContent:'center',
	    top: -10
    },
    slideTitleQuestion: {
		fontSize: Setting.lTextSize,
		shadowOffset:{  width: 0,  height: 0  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0,
    },
    slideSubDesc: {
        fontSize: Setting.h6TextSize,
        fontWeight: '600',
        color: Colors.grayDarkest,
		textAlign: 'center',
		paddingHorizontal: 40,
    },
}
/* SLIDER - ENDS */
/* PAGE - STARTS */
const pageStyle = {
	cContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cbox: {
		width: 200,
		height: 200,
		marginLeft: 40,
		marginRight: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: Colors.borderColor,
		borderRadius: 10,
		shadowOffset:{  width: 2,  height: 2  },
		shadowColor: Colors.borderColor,
		shadowOpacity: 0.5,
	},
	cHeaderTitle: {
		fontSize: Setting.h2TextSize,
		fontWeight: '700',
		color: Colors.grayDarkest,
	},
	ctitle: {
		fontSize: 70,
		fontWeight: '300',
		color: Colors.grayDarkest,
	},
	csubtitle: {
		fontSize: Setting.nTextSize,
		fontWeight: '400',
		color: Colors.grayDark
	},
	csubtitlebig: {
		fontSize: Setting.h4TextSize,
	}
}
/* PAGE - ENDS */
/* FORM FIELDS - STARTS */
 const formFieldStyle = {
 	buttonNext: {
 		position: 'absolute',
 		bottom: (Setting.DEVICE_HEIGHT / 3) - 30,
 		right: 10,
 	},
 	buttonPrev: {
 		position: 'absolute',
 		bottom: (Setting.DEVICE_HEIGHT / 3) - 30,
 		left: 10
 	},
 	nextBtn: {
 		color: Colors.white,
 		fontWeight: '600',
 		left: 2,
 		alignItems: 'center'
 	},
 	prevBtn: {
 		color: Colors.white,
 		fontWeight: '600',
 		left: 0,
 		alignItems: 'center'
 	},
 	buttonCircle: {
		width: 40,
	    height: 40,
	    backgroundColor: Colors.primary,
	    opacity: 0.4,
	    borderRadius: 20,
	    justifyContent: 'center',
	    alignItems: 'center',
 	},
 	prevNext: {
 		fontSize: 80,
 		color: Colors.fBorderColor,
 		fontWeight: '500'
 	},
 	doneBtnLabel: {
 		color: Colors.green
 	},
 	doneBtnContainer: {
 		//backgroundColor: Colors.grayLightest,
 		padding: 10,
 		paddingHorizontal: 15,
 		borderRadius: 50
 	},
 	completedBtnContainer: {
 		//backgroundColor: Colors.grayLightest,
 		padding: 5,
 		paddingHorizontal: 9,
 		borderRadius: 50
 	},
 	btn: {
 		backgroundColor: Colors.primary,
 		paddingTop: 10,
 		paddingBottom: 10,
 		paddingHorizontal: 15,
 		borderRadius: 5,
 		marginHorizontal: 4
 	},
 	btnDisable: {
 		backgroundColor: Colors.primary,
 	},
 	primaryBtn: {
 		backgroundColor: Colors.primary,
 	},
 	successBtn: {
 		backgroundColor: Colors.green,
 	},
 	secondaryBtn: {
 		backgroundColor: Colors.borderColor,
 	},
 	lightBtnText: {
 		color: Colors.white,
 		fontSize: Setting.sTextSize,
 		fontWeight: '600'
 	},
 	disableBtnText: {
 		color: Colors.lightDisable
 	},
 	darkBtnText: {
 		color: Colors.grayDarkest,
 		fontSize: Setting.sTextSize,
 		fontWeight: '600'
 	},
 	selectedOption: {
 		backgroundColor: Colors.selectedOpt, 
 		borderColor: Colors.selectedOpt,
 	},
 	correcntOption: {
 		backgroundColor: Colors.green, 
 		borderColor: Colors.green,
 	},
 	wrongOption: {
 		backgroundColor: Colors.red, 
 		borderColor: Colors.red,
 	}
 }
/* FORM FIELDS - ENDS */

/* MODEL POPUP - STARTS */
 const modelStyle = {
	modelCenteredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	smashModalView: {
		margin: 20,
		padding: 35,
		alignItems: "center",
		elevation: 5
	},
	modelTitle: {
		fontSize: Setting.h4TextSize,
        fontWeight: '500',
        color: Colors.grayDarkest,
        textAlign: 'center',
	},
	modelTitleContainer: {
		paddingTop: 10,
		paddingBottom: 20
	},
	modelsBox: {
		width: 50,
		margin: 5,
		justifyContent: "flex-start",
		height: 50
	},
	modelmTitle: {
		fontSize: 50,
        fontWeight: '700',
        color: Colors.grayDarkest,
        textAlign: 'center',

	},
	modellTitle: {
		fontSize: 80,
	},
    modelLabel: {
		fontWeight: '600',
        color: Colors.grayDarkest,
        fontSize: Setting.nTextSize,
    },
}
/* MODEL POPUP - ENDS */

/* DATA LIST - STARTS */
 const dataListStyle = {
	dLType1: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: Colors.white,
		borderColor: Colors.borderColor,
		borderWidth: 1,
		shadowOffset:{  width: 1,  height: 1 },
		shadowColor: Colors.fBorderColor,
		shadowOpacity: 0.8,
		borderRadius: 20,
		paddingTop: 20,
		paddingBottom: 20,
		height: 75,
		marginBottom: 15
	},
	dLType1LeftContainer: {
		width: 70,
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 5,
		paddingTop: 20
	},
	dLType1LeftIconContainer: {
		padding: 10,
		backgroundColor: Colors.grayDark,
		borderRadius: 50,
	},
	dLType1LeftIconContainerActive: {
		padding: 10,
		backgroundColor: Colors.robinEggBlue,
		borderRadius: 50,
	},
 	dLType1CompletedBtnContainer: {
 		backgroundColor: Colors.green,
 		padding: 4,
 		paddingHorizontal: 7,
 		borderRadius: 30,
 		position: 'absolute',
 		right: -10,
 		top: -10
 	},
	dLType1LeftIcon: {
		width: 30,
		height: 30,
	},
	dLType1Content: {
		paddingLeft: 5,
		flex: 1
	},
	dLType1Title: {
		fontSize: Setting.nTextSize,
		fontWeight: '500',
		color: Colors.grayDarkest,
		textTransform: 'capitalize'
	},
	dLType1Desc: {
		fontSize: Setting.xxsTextSize,
		fontWeight: '500',
		color: Colors.grayDark
	},
	dLType1RightContainer: {
		width: 120,
		paddingRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	dLType1RightBtnContainer: {
		width: 100,
		paddingHorizontal: 0,
		marginHorizontal: 0
	},
	dLType1RightBtn: {
		backgroundColor: Colors.grayDark,
		borderRadius: 20,
		height: 40,
		paddingHorizontal: 0,
		marginHorizontal: 0
	},
	dLType1RightBtnActive: {
		backgroundColor: Colors.robinEggBlue,
	},
	dLType1RightBtnLabel: {
		fontSize: Setting.xxsTextSize,
		fontWeight: '600',
		paddingTop: 0,
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 2,
		textTransform: 'uppercase',
		color: Colors.white
	}
}
/* DATA LIST - ENDS */
/* DASHBOARD - STARTS */
 const dashboardStyle = {
 	dbContainer: {
 		paddingTop: 20,
 		paddingBottom: 20,
 		backgroundColor: Colors.white,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
		marginHorizontal: 20,
		marginBottom: 10,
		borderRadius: 10,
		shadowOffset:{  width: 0.5,  height: 0.5 },
		shadowColor: Colors.fBorderColor,
		shadowOpacity: 0.8,
 	},
	dbLabel: {
		fontSize: Setting.h5TextSize,
		fontWeight: '600',
		color: Colors.grayDarkest,
		marginTop: 10
	},
	dbDesc: {
		fontSize: Setting.sxTextSize,
		fontWeight: '500',
		color: Colors.grayDarkest
	},
	dbBDesc: {
		fontSize: Setting.sTextSize,
		fontWeight: '700',
		color: Colors.grayDarkest
	},
	dbTitle: {
		fontSize: Setting.vlTextSize,
		fontWeight: '300',
		color: Colors.grayDarkest
	},
	dashBox1: {
		backgroundColor: Colors.white,
		borderWidth: 5,
		padding: '10%',
		borderRadius: 40,
		paddingHorizontal: 12,
		shadowOffset:{  width: 0,  height: 0 },
		shadowColor: Colors.fBorderColor,
		shadowOpacity: 0.8,
		shadowRadius: 1,
		borderColor: Colors.borderColor,
		marginBottom: 20
	},
	dashBoxActiveRed: {
		backgroundColor: Colors.white,
		borderColor: Colors.red,
	},
	dashBoxActiveGreen: {
		backgroundColor: Colors.white,
		borderColor: Colors.green,
	},
	dashBoxActiveBlue: {
		backgroundColor: Colors.white,
		borderColor: Colors.robinEggBlue,
	}
}
/* DASHBOARD - ENDS */
/* PATTERN - STARTS */
 const patternStyle = {
 	halfbg: {
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: '#d6ffff',
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width,
 	},
 	headerHalfBend: {
 		backgroundColor: Colors.red,
 		position: 'absolute',
 		left: 0,
 		top: 0,
 		width: '100%',
 		height: 100,
 		borderBottomRightRadius: 100,
 		borderBottomLeftRadius: 100,
 		overflow: 'hidden'
 	},
 	appbg: {
 		flex: 1,
 		backgroundColor: Colors.primary
 	},
  	chapterLesOverlay: {
  		position: 'absolute',
  		top: 0,
  		bottom: RFPercentage(11),
  		left: 0,
  		right: 0,
  		width: '100%',
  		backgroundColor: '#ecf0f1',
  		opacity: 0.8,
  		borderRadius: 100,
  		borderTopRightRadius: 0,
  		borderTopLeftRadius: 0,
  		alignItems: 'center',
		justifyContent: 'center'
  	},
 }
/* PATTERN - STARTS */
/* CHAPTER SLIDER - STARTS */
const chapterSliderStyle = {
	cSlide: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        top: -20
    },
    cSlideTitle: {
        fontSize: RFValue(28),
        fontWeight: '500',
        color: Colors.grayDarkest,
		alignSelf: 'center',
		textAlign: 'center',
		textTransform: 'uppercase',
		textShadowColor: Colors.grayDark,
  		textShadowOffset: {width: -0.5, height: -0.5},
  		textShadowRadius: 1,
  		marginTop: '14%',
  		marginBottom: '2%',
  		letterSpacing: 2
    },
    cSlideSubTitle: {
        fontSize: RFValue(Setting.h6TextSize),
        fontWeight: '500',
        color: Colors.grayDarkest,
		alignSelf: 'center',
		textAlign: 'center',
		textTransform: 'uppercase',
		textShadowColor: Colors.grayDark,
  		textShadowOffset: {width: -0.5, height: -0.5},
  		textShadowRadius: 1,
  		marginTop: '5%',
  		marginBottom: '1%'
    },
    cCircleContainerOuter: {
  		borderWidth: 40,
        borderRadius: 130,
    },
    cCircleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
  		width: RFValue(140),
  		height: RFValue(140),
        borderRadius: 100,
  		opacity: 0.9,
		shadowOffset:{  width: 0,  height: 0 },
		shadowColor: Colors.fBorderColor,
		shadowOpacity: 0.8,
		shadowRadius: 20,
		borderWidth: 10,
    },
    cCircleContainerSmallOuter: {
  		borderWidth: 40,
        borderRadius: 110,
    },
    cCircleContainerSmall: {
  		width: RFValue(90),
  		height: RFValue(90),
    },
    cCircleNo: {
        fontSize: RFValue(70),
        color: Colors.white,
        fontWeight: 'bold',
		textShadowColor: Colors.grayDarkest,
  		textShadowOffset: {width: -2, height: -2},
  		textShadowRadius: 2,
    },
    cCircleNoSmall: {
        fontSize: RFValue(50),
    },
    cSlideDesc: {
        fontSize: Setting.h6TextSize,
        fontWeight: '600',
        color: Colors.white,
		textAlign: 'center',
		paddingHorizontal: 40,
		lineHeight: 25
    },
    cSlideDescContainer: {
    	borderRadius: 40,
    	borderWidth: 2,
    	backgroundColor: Colors.primary,
    	borderColor: Colors.primary,
    	paddingHorizontal: 0,
    	paddingTop: 10,
    	paddingBottom: 10,
  		marginTop: '4%'
    },
    cSlideChatLine: {
    	fontSize: Setting.sTextSize,
        fontWeight: '400',
        color: Colors.grayDark,
		textAlign: 'center',
		paddingHorizontal: 30
    },
    cSlideBtnContainer: {
		paddingHorizontal: 30,
		marginHorizontal: 0,
		marginTop: '4%'
    },
	cSlideBtn: {
		backgroundColor: Colors.grayDark,
		borderRadius: 30,
		height: 50,
		paddingHorizontal: 30,
		marginHorizontal: 0,
	},
	cSlideBtnActive: {
		backgroundColor: Colors.gold,
	},
	cSlideBtnLabel: {
		fontSize: Setting.nTextSize,
		fontWeight: '600',
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 2,
		textTransform: 'uppercase',
		color: Colors.white
	},
	cSlideBtnLabelLight: {
		color: Colors.grayDarkest
	},
 	cSlideCompletedIcon: {
 		backgroundColor: Colors.green,
 		padding: 4,
 		paddingHorizontal: 10,
 		borderRadius: 30,
 		position: 'absolute',
 		right: -30,
 		top: -30
 	},
 	cSlideCompletedBtn: {
		backgroundColor: Colors.green
 	}

}
/* CHAPTER SLIDER - ENDS */
/* PROGRESS BAR - STARTS */
const chartStyle = {
	progressBarTitle: {
		width: '100%',
		fontSize: Setting.h3TextSize,
		fontWeight: '500',
		paddingBottom: 30,
		color: Colors.grayDarkest,
		textTransform: 'uppercase',
		textAlign: 'center',
		letterSpacing: 1.5,
	},
	progressBarNo: {
		alignItems: "center",
		justifyContent: "center",
		position: 'absolute',
		width: '100%',
		textAlign: 'center',
		top: '47%',
		fontSize: RFValue(55),
		fontWeight: '600',
		color: Colors.grayDarkest
	},
	progressBar: {
		height: RFValue(210),
		marginBottom: 0,
	}
}
/* PROGRESS BAR - STARTS */
/* MENU - STARTS */
const menuStyle = {
	menuContainer: {
		alignItems: "center",
		justifyContent: "center",
		position: 'absolute',
		bottom: 17,
		marginHorizontal: 70,
		left: 0,
		right: 0
	},
	menus: {
		flexDirection: 'row',
		width: 200,
		backgroundColor: Colors.white,
		shadowOffset:{  width: 0.5,  height: 0.5 },
		shadowColor: Colors.grayDark,
		shadowOpacity: 0.8,
		borderRadius: 50,
		paddingTop: 10,
		paddingBottom: 10,
		paddingHorizontal: 5,
	},
	activeMenuItem: {
		color: Colors.green
	}
}
/* MENU - ENDS */
/* QUIZ - STARTS */
const quizStyle = {
	optionQuestion: {
		fontWeight: '500',
        color: Colors.grayDarkest,
        fontSize: Setting.h6TextSize,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        paddingHorizontal: '5%',
        top: '-5%'
	},
 	optionContainer: {
 		backgroundColor: Colors.primary,
 		paddingTop: 13,
 		paddingBottom: 13,
 		paddingHorizontal: 30,
 		borderRadius: 10,
 		marginHorizontal: 4,
 		marginBottom: 15,
		shadowOffset:{  width: 0.5,  height: 0.5 },
		shadowColor: Colors.grayDark,
		shadowOpacity: 0.8,
		minWidth: 200,
        textAlign: 'center',
        alignItems: "center",
		justifyContent: "center",
        marginHorizontal: '5%',
        top: '-5%'
 	},
}
/* QUIZ - ENDS */
/* BADGES - STARTS */
const budgesStyle = {
	badgeContainer: {
        textAlign: 'center',
        alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		backgroundColor: Colors.primary,
		borderColor: Colors.primary,
		marginHorizontal: '5%',
		borderRadius: 70,
		paddingTop: 10,
		paddingBottom: 10,
		opacity: 0.3
	},
	activeBadge: {
		opacity: 1
	},
	badgeLabel: {
		fontSize: Setting.xxsTextSize,
		fontWeight: '500',
		color: Colors.white
	},
	badge: {
		width: 45,
		height: 45,
		//tintColor: 'gray',
		//opacity: 0.3
	},

	badgeContainer1: {
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		opacity: 1
	},
	badge1: {
		width: 45,
		height: 45,
        textAlign: 'center',
        alignItems: "center",
		justifyContent: "center",
		//tintColor: 'gray',
	},
	circleBadge: {
		borderRadius: 70,
		paddingTop: 15,
		paddingBottom: 15,
		paddingHorizontal: 15,
		borderWidth: 2,
		backgroundColor: Colors.primary,
		borderColor: Colors.primary,
		opacity: 0.3
	},
	activeBadge1: {
		opacity: 1
	},
	badgeLabel1: {
		marginTop: 5,
		color: Colors.grayDarkest
	}
}
/* BADGES - ENDS */
export const styles = StyleSheet.create({
	...navBarStyle,
	...errorStyle,
	...layoutStyle,
	...formFieldStyle,
	...specialIconStyle,
	...spacingStyle,
	...listStyle,
	...boxStyle,
	...alignStyle,
	...gridStyle,
	...flexStyle,
	...sliderStyle,
	...pageStyle,
	...modelStyle,
	...dataListStyle,
	...dashboardStyle,
	...patternStyle,
	...chapterSliderStyle,
	...chartStyle,
	...menuStyle,
	...quizStyle,
	...budgesStyle
});
