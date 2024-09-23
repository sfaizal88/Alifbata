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
import { Fonts } from './fonts';
import  * as Utils from './utils';

/* LAYOUT - STARTS */
const layoutStyle ={
	container: {
    	flex: 1,
    	backgroundColor: Colors.white
	},
	safeViewContainer: {
    	flex: 1,
    	backgroundColor: Colors.blueDarkest,//Colors.primary
    	//zIndex: 1
	},
	body: {
		flex: 1,
		paddingTop: Utils.isIpad() ? RFValue(10) : 10,
		paddingBottom: Utils.isIpad() ? RFValue(10) : 300,
		paddingHorizontal: Utils.isIpad() ? RFValue(5) : 5,
        flexDirection: 'column',
    	backgroundColor: Colors.white,//Colors.appBg
    	marginHorizontal: 10,
    	borderTopRightRadius: 20,
 		borderTopLeftRadius: 20,
    	borderBottomRightRadius: 20,
 		borderBottomLeftRadius: 20,
 		overflow: 'hidden',

	},
	headerContainer: {
	    height: RFValue(55),
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
		left: Utils.isAndroid() ?  0 : 15,
		top: Utils.isAndroid() ?  0 : RFValue(20),
		zIndex: 6
	},
	headerTitle: {
		...Setting.fontWeight700,
		fontSize: Setting.sTextSize,
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
		...Setting.fontWeight500,
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
	}
}
/* LAYOUT - ENDS */
/* NAVIGATION BAR - STARTS */
const navBarStyle ={
 	mainNavBar: {
 		backgroundColor: Colors.white, 
 		paddingBottom: 0, 
 		width: '100%',
 		//marginBottom: -25,
 		height: 'auto', 
 		paddingTop: 0, 
 		justifyContent: 'center',
 		borderTopColor: Colors.borderColor,
 		borderTopWidth: 1
 	},
 	mainNavBarText: {
 		fontSize: Setting.usTextSize,
 		...Setting.fontWeight600,
 		textTransform: 'uppercase'
 	}
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
	borderRadiusZero: {
		borderTopRightRadius: 0,
 		borderTopLeftRadius: 0,
    	borderBottomRightRadius: 0,
 		borderBottomLeftRadius: 0,
	},
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
  		...Setting.fontWeight400,
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
  		...Setting.fontWeight500,
  		marginTop: 20,
        color: Colors.grayDarkest,
        fontSize: Setting.h6TextSize,
        ...Setting.fontWeight500,
        marginRight: 20,
        textAlign: 'center'
  	},
  	nextLessonLabel: {
  		...Setting.fontWeight500,
  		marginTop: 20,
        color: Colors.grayDarkest,
        fontSize: Setting.h6TextSize,
        ...Setting.fontWeight500,
        marginLeft: 20
  	},
  	circleIcon: {
  		backgroundColor: Colors.borderColor,
  		padding: 15,
  		paddingHorizontal: 18,
  		borderRadius: RFValue(40)
  	},
  	score: {
  		fontSize: Setting.scoreSize,
  		...Setting.fontWeight700,
  		color: Colors.grayDarkest
  	},
  	darkHigh: {
  		...Setting.fontWeightBold,
  		color: Colors.grayDarkest
  	},
  	noContainer: {
  		position: 'absolute',
  		right: 10,
  		top: 10,
  		padding: RFValue(10),
  		paddingHorizontal: RFValue(15),
  		backgroundColor: Colors.primary,
  		borderRadius: RFValue(30)
  	},
  	qno: {
  		fontSize: RFValue(17),
  		...Setting.fontWeight700, 
  		color: Colors.white,
        fontSize: Setting.sTextSize,
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
  		borderRadius: RFValue(100),
  		borderTopRightRadius: 0,
  		borderTopLeftRadius: 0,
  		alignItems: 'center',
		justifyContent: 'center'
  	},
  	disableOverlayHide: {
  		width: 0,
  		opacity: 0,
  		backgroundColor: 'rgba(0, 0, 0, 0)',
  	},
  	disableOverlayLabel: {
  		position: 'absolute',
  		top: '5%',
		justifyContent: 'center',
		alignItems: 'center'
  	},
  	fLetter: {
  		color: Colors.red
  	},
  	imgText: {
  		...Setting.fontWeight700, 
  		color: Colors.grayDarkest,
 		fontSize: RFValue(50),
 		top: RFValue(-40)
  	},
  	imgNo: {
 		fontSize: RFValue(30),
  	},
  	stepNoContainer: {
  		backgroundColor: Colors.primary, 
  		paddingTop: RFValue(10), 
    	paddingBottom: RFValue(10), 
    	borderRadius: RFValue(10), 
    	marginHorizontal: RFValue(20),
    	paddingHorizontal: RFValue(30), 
  	},
  	stepNo: {
		fontSize: Setting.nTextSize,
        ...Setting.fontWeight600,
        color: Colors.white,
		textAlign: 'center',
		paddingBottom: 0,
  	},
  	noBRBottom: {
  		borderBottomRightRadius: 0,
  		borderBottomLeftRadius: 0
  	}
}
/* SPECIAL ICONS - ENDS */

/* SPACING - STARTS */
const spacingStyle = {
	t0: {
		top: 0
	},
	t80n: {
		top: RFValue(-80)
	},
	t90n: {
		top: RFValue(-90)
	},
	t100n: {
		top: RFValue(-100)
	},
	t120n: {
		top: RFValue(-120)
	},
	t130nRF: {
		top: -130
	},
	t150nRF: {
		top: -150
	},
	t230nRF: {
		top: -230
	},
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
	ph5: {
		paddingHorizontal: 5
	},
	ph10: {
		paddingHorizontal: 10
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
	pt10: {
		paddingTop: 10
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
	pt50: {
		paddingTop: 50
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
	pb70: {
		paddingBottom: 70
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
	pl15: {
		paddingLeft: 15
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
	mh0: {
		marginHorizontal: 0
	},
	mh5: {
		marginHorizontal: 5
	},
	mh15: {
		marginHorizontal: 15
	},
	mh20: {
		marginHorizontal: 20
	}
}
/* SPACING - ENDS */

/* LIST - STARTS */
 const listStyle = {
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
		...Setting.fontWeight600,
		paddingBottom: 3,
		color: Colors.grayDarkest,
		textTransform: 'uppercase'
	},
	listType2Descr: {
		fontSize: Setting.xxsTextSize,
		...Setting.fontWeight400,
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
		...Setting.fontWeight600,
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
		...Setting.fontWeight400,
		paddingHorizontal: 20
	},
	contentBodyTitle: {
		color: Colors.grayDarkest,
		fontSize: Setting.nTextSize,
		...Setting.fontWeight500,
		lineHeight: 20,
		paddingBottom: 10,
		paddingTop: 20
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
		left: 0,
		top: -33,
		marginRight: 10
	},
	boxtypeRight: {
		backgroundColor: Colors.primary,//Colors.gold,
		borderRadius: RFValue(10),
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
		paddingTop: 10,
		paddingBottom: 10,
		width: '50%',
		borderWidth: 1,
		borderColor: Colors.primary,//Colors.gold,
		borderRightWidth: 0,
		right: 0,
		marginLeft: 10
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
	},
	sectionBoxContainer: {
		flexDirection: 'row',
		borderRadius: RFValue(10),
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 5,
		paddingBottom: 5,
		//height: Utils.isIpad() ? RFValue(120) : (Utils.isAndroid() ? RFValue(120) : 170),
		paddingHorizontal: 6,
		shadowOffset:{  width: 5,  height: 5  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.4,
		marginHorizontal: Utils.isAndroid() ? RFValue(7) : 15,
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.fBorderColor,
		marginBottom: 15
	},
	sectionBoxTitle: {
		fontSize: Setting.sTextSize,
		textTransform: 'capitalize',
		...Setting.fontWeight500,
		textAlign: 'left',
		color: Colors.grayDarkest,
		marginBottom: 5
	},
	sectionBoxDesc: {
		fontSize: Setting.xxsTextSize,
		...Setting.fontWeight400,
		color: Colors.grayDark,
		textTransform: 'capitalize'
	},
	sectionBoxDescH1: {
		fontSize: Setting.usTextSize,
		...Setting.fontWeight500,
		color: Colors.grayDark,
		textTransform: 'uppercase',
		alignSelf: 'center',
		textAlign: 'center'
	},
	sectionBoxDescN: {
		fontSize: Setting.h1TextSize,
		...Setting.fontWeightBold,
		color: Colors.red,
		textTransform: 'capitalize'
	},

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
	rowDirectionWrap: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	rowNoWrap: {
		flexWrap: 'wrap'
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
	vColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
	centerViewT: {
		alignItems: "center",
		justifyContent: "flex-start"
	},
	centerViewB: {
		alignItems: "center",
		justifyContent: "flex-end"
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
	tCenter: {
		textAlign: 'center'
	},
	displayN: {
		display: 'none'
	},
	displayB: {
		display: 'flex'
	},
	displayOpaN: {
		display: 'none',
		opacity: 0
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
		paddingTop: 20,
    },
    slideAndroid: {
    	flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
		shadowOffset:{  width: 2,  height: 2  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5,
		paddingTop: 20,
    },
    slideNoShadow: {
		shadowOffset:{  width: 0,  height: 0  },
		shadowColor: 'transparent',
		shadowOpacity: 0,
    },
    slideTitle: {
        fontSize: RFValue(42),
        ...Setting.fontWeight700,
        color: Colors.grayDarkest,
		alignSelf: 'center',
		top: -50,
		textAlign: 'center',
		shadowOffset:{  width: 1,  height: 1  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5,
    },
    slideTitleNoTop: {
        fontSize: RFValue(42),
        ...Setting.fontWeight700,
        color: Colors.grayDarkest,
		alignSelf: 'center',
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
        height: RFValue(180),
        width: RFValue(180),
    },
    slideDesc: {
        fontSize: Setting.nTextSize,
        ...Setting.fontWeight500,
        color: Colors.grayDarkest,
		textAlign: 'center',
		top: 30,
		paddingHorizontal: Utils.isIpad() ? 70 : 40,
		lineHeight: 25
    },
    slideType2: {
		backgroundColor: Colors.white
    },
    slideType2Title: {
    	top: -30,
        fontSize: RFValue(130),
        ...Setting.fontWeight700,
        //backgroundColor: '#ccc',
        textAlign: 'center',
  		textAlignVertical: 'center',
    },
    slideType2Label: {
		...Setting.fontWeight600,
        color: Colors.grayDarkest,
        fontSize: Setting.h6TextSize,
    },
    slideType2Desc: {
        color: Colors.darkSilver,
        ...Setting.fontWeight700,
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
        height: RFValue(180),
        width: RFValue(180),
    },
    slideType3Title: {
        fontSize: Setting.h4TextSize,
        ...Setting.fontWeight500,
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
        ...Setting.fontWeight400, 
        marginBottom: 15
    },
    topContainer: {
    	flex: 1,
    	width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-end',
    },
    slideLabel: {
		...Setting.fontWeight500,
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
        fontSize: Utils.isIpad() ? RFValue(80) : RFValue(100),
        ...Setting.fontWeight700,
        color: Colors.grayDarkest,
		shadowOffset:{  width: 1,  height: 1  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5,
        width: '100%',
        textAlign: 'center',
		paddingTop: Utils.isIpad() ? 40 : 30,
		paddingBottom: 30,
		paddingHorizontal: 20,
		top: 0,
    	bottom: 0,
    },
    arabicImg: {
		marginTop: 30,
		height: RFValue(120),
		width: RFValue(120),
		marginBottom: 30,
    },
    smallArabicImg: {
		marginTop: 0,
		height: RFValue(45),
		width: RFValue(45),
		marginBottom: 20,
		backgroundColor: 'transparent',
    },
    mediumArabLetter: {
        fontSize: RFValue(35),
        ...Setting.fontWeight700,
        color: Colors.white,
		shadowOffset:{  width: 1,  height: 1  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.5
    },
    whiteImage: {
    	tintColor: Colors.white
    },
    slideSquare: {
    	width: RFValue(90),
    	height: RFValue(90),
    	borderWidth: 1,
    	backgroundColor: Colors.blueDark,
		alignItems: 'center',
		justifyContent: 'center',
		...Setting.fontWeight600,
        color: Colors.grayDarkest,
        fontSize: Setting.h6TextSize,
        margin: 5,
        borderRadius: RFValue(10),
        borderColor: Colors.blueDarkest,
        shadowOffset:{  width: 0.5,  height: 0.5  },
        shadowColor: Colors.blueDarkest, 
        shadowOpacity: 0.5
    },
    wSlideLabel: {
		...Setting.fontWeight500,
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
		...Setting.fontWeight400,
		paddingBottom: 3,
		color: Colors.grayDarkest,
		textTransform: 'capitalize',
		fontSize: Setting.sTextSize,
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
        ...Setting.fontWeight600,
        color: Colors.grayDarkest,
		textAlign: 'center',
		paddingHorizontal: 40,
    },
    descM: {
    	padding: 40,
    	marginHorizontal: 70,
    	lineHeight: 40,
    }
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
		borderRadius: RFValue(10),
		shadowOffset:{  width: 2,  height: 2  },
		shadowColor: Colors.borderColor,
		shadowOpacity: 0.5,
	},
	cHeaderTitle: {
		fontSize: Setting.h2TextSize,
		...Setting.fontWeight700,
		color: Colors.grayDarkest,
	},
	ctitle: {
		fontSize: RFValue(70),
		...Setting.fontWeight300,
		color: Colors.grayDarkest,
	},
	csubtitle: {
		fontSize: Setting.nTextSize,
		...Setting.fontWeight400,
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
 		...Setting.fontWeightBold
 	},
 	buttonPrev: {
 		position: 'absolute',
 		bottom: (Setting.DEVICE_HEIGHT / 3) - 30,
 		left: 10,
 		...Setting.fontWeightBold
 	},
 	nextBtn: {
 		color: Colors.white,
 		...Setting.fontWeight600,
 		alignItems: 'center',
	    justifyContent: 'center',
		alignSelf: 'center',
 	},
 	prevBtn: {
 		color: Colors.white,
 		...Setting.fontWeight600,
 		alignItems: 'center',
	    justifyContent: 'center',
		alignSelf: 'center',
 	},
 	buttonCircle: {
		width: RFValue(35),
	    height: RFValue(35),
	    backgroundColor: Colors.primary,
	    opacity: Utils.isAndroid() ? 0.8 :0.4,
	    borderRadius: RFValue(20),
	    justifyContent: 'center',
	    alignItems: 'center',
	    bottom: Utils.isIpad() ? RFValue(10) : 0,
	    textAlign: 'center'
 	},
 	navDark: {
 		color: Colors.primary
 	},
 	buttonCircleLight: {
 		backgroundColor: Colors.white
 	},
 	buttonDone: {
	    borderRadius: RFValue(20),
	    width: 80,
 	},
 	prevNext: {
 		fontSize: RFValue(80),
 		color: Colors.fBorderColor,
 		...Setting.fontWeight500
 	},
 	doneBtn: {
 		fontSize: RFValue(16),
 		...Setting.fontWeight500
 	},
 	doneBtnLabel: {
 		color: Colors.green
 	},
 	doneBtnContainer: {
 		//backgroundColor: Colors.grayLightest,
 		padding: 10,
 		paddingHorizontal: 15,
 		borderRadius: RFValue(50)
 	},
 	completedBtnContainer: {
 		//backgroundColor: Colors.grayLightest,
 		padding: 5,
 		paddingHorizontal: 9,
 		borderRadius: RFValue(50)
 	},
 	btn: {
 		backgroundColor: Colors.primary,
 		paddingTop: RFValue(10),
 		paddingBottom: RFValue(10),
 		paddingHorizontal: RFValue(15),
 		borderRadius: RFValue(5),
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
 	dangerBtn: {
 		backgroundColor: Colors.red,
 	},
 	secondaryBtn: {
 		backgroundColor: Colors.borderColor,
 	},
 	lightBtnTextLarge: {
 		color: Colors.white,
 		fontSize: Setting.nTextSize,
 		...Setting.fontWeight600,
 	},
 	lightBtnText: {
 		color: Colors.white,
 		fontSize: Setting.sTextSize,
 		...Setting.fontWeight600,
 	},
 	disableBtnText: {
 		color: Colors.lightDisable
 	},
 	darkBtnText: {
 		color: Colors.grayDarkest,
 		fontSize: Setting.sTextSize,
 		...Setting.fontWeight600,
 	},
 	darkBtnTextLarge: {
 		color: Colors.grayDarkest,
 		fontSize: Setting.nTextSize,
 		...Setting.fontWeight600,
 	},
 	selectedOption: {
 		backgroundColor: Colors.selectedOpt, 
 		borderColor: Colors.selectedOpt,
 	},
 	correctOption: {
 		backgroundColor: Colors.green, 
 		borderColor: Colors.green,
 	},
 	wrongOption: {
 		backgroundColor: Colors.red, 
 		borderColor: Colors.red,
 	},
	textfieldLabel: {
		alignSelf: 'flex-start',
 		fontSize: Setting.xxsTextSize,
 		fontWeight: '600',
 		textTransform: 'uppercase',
 		color: Colors.grayDarkest,
		position: 'absolute',
		zIndex: 1,
		top: -4,
		left: 20,
		backgroundColor: Colors.white
	},
	textfieldContainer: {
		height: 45,
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.fBorderColor,
		borderRadius: 5,
		paddingHorizontal: 0,
		paddingBottom: 0,
		margin: 0,
		marginTop: 5
	},
	textfield: {
		padding: 12,
		fontSize: Setting.nTextSize,
	},
 	inputContainer: {
 		padding: 0,
 		marginBottom: 15,
 		marginTop: 10,
		justifyContent: "center",
		alignItems: "center"
 	},
	errorText: {
		padding: 0,
		marginBottom: 0,
		alignSelf: 'flex-start'
	},
	textfieldLabelExtra: {
		position: 'relative',
		top: 7,
	},
	textarea: {
		padding: 12,
		fontSize: 16,
		backgroundColor: Colors.white,
		borderWidth: 1,
		borderColor: Colors.fBorderColor,
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingBottom: 10,
		paddingTop: 10,
		marginHorizontal: 10,
		maxHeight: 120,
		marginBottom: 20
	},
 }
/* FORM FIELDS - ENDS */

/* MODEL POPUP - STARTS */
 const modelStyle = {
	modelCenteredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: RFValue(20),
		padding: 35,
		paddingLeft: 15,
		paddingRight: 20,
		alignItems: "center",
		/*shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,*/
		//elevation: 5
	},
	smashModalView: {
		margin: 20,
		padding: 35,
		alignItems: "center",
		elevation: 5
	},
	smashLabel: {
		fontSize: RFValue(80),
        ...Setting.fontWeightBolder,
        color: Colors.white
	},
	smashDesc: {
		fontSize: RFValue(16),
        ...Setting.fontWeightBolder,
        color: Colors.white
	},
	modelTitle: {
		fontSize: Setting.h4TextSize,
        ...Setting.fontWeight500,
        color: Colors.grayDarkest,
        textAlign: 'center',
	},
	modelTitleContainer: {
		paddingTop: 10,
		paddingBottom: 0
	},
	modelmTitle: {
		fontSize: RFValue(50),
        ...Setting.fontWeight700,
        color: Colors.grayDarkest,
        textAlign: 'center',

	},
	modellTitle: {
		fontSize: RFValue(80),
	},
	modellBody: {
		paddingTop: 5,
		paddingBottom: 10,
		paddingHorizontal: 10,
	},
	modellText: {
		...Setting.fontWeight400,
        color: Colors.grayDarkest,
        fontSize: Setting.sTextSize,
	},
	modellSubText: {
		...Setting.fontWeight500,
        color: Colors.grayDarkest,
        fontSize: Setting.sTextSize,
	},
    modelLabel: {
		...Setting.fontWeight600,
        color: Colors.grayDarkest,
        fontSize: Setting.nTextSize,
    },
    modelClose: {
    	position: 'absolute',
    	top: RFValue(20),
    	left: RFValue(20)
    },
    modelTable: {
  		backgroundColor: '#ecf0f1',
  		opacity: 0.8,
  		paddingTop: 8,
  		paddingBottom: 8,
  		paddingHorizontal: 10,
  		marginBottom: 8,
  		borderRadius: RFValue(10),
  		borderWidth: 1,
  		borderColor: Colors.borderColor
    },
    modelTableDark: {
  		backgroundColor: Colors.primary,
  		borderColor: Colors.primary
    }
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
		borderRadius: RFValue(20),
		paddingTop: 20,
		paddingBottom: 20,
		height: Utils.isIpad() ? RFValue(50) : 75,
		marginBottom: 15
	},
	dLType1LeftContainer: {
		width: Utils.isIpad() ? RFValue(50) : 70,
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 5,
		paddingTop: 20
	},
	dLType1LeftIconContainer: {
		padding: 10,
		backgroundColor: Colors.grayDark,
		borderRadius: RFValue(50),
	},
	dLType1LeftIconContainerActive: {
		padding: 10,
		backgroundColor: Colors.robinEggBlue,
		borderRadius: RFValue(50),
	},
 	dLType1CompletedBtnContainer: {
 		backgroundColor: Colors.green,
 		padding: 4,
 		paddingHorizontal: 7,
 		borderRadius: RFValue(30),
 		position: 'absolute',
 		right: -10,
 		top: -10
 	},
	dLType1LeftIcon: {
		width: Utils.isIpad() ? RFValue(25) : 30,
		height: Utils.isIpad() ? RFValue(25) : 30,
	},
	dLType1Content: {
		paddingLeft: 5,
		flex: 1
	},
	dLType1Title: {
		fontSize: Setting.nTextSize,
		...Setting.fontWeight500,
		color: Colors.grayDarkest,
		textTransform: 'capitalize'
	},
	dLType1Desc: {
		fontSize: Setting.xxsTextSize,
		...Setting.fontWeight500,
		color: Colors.grayDark,
		textAlign: 'left',
	},
	dLType1RightContainer: {
		width: RFValue(120),
		paddingRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: RFValue(11)
	},
	dLType1RightBtnContainer: {
		width: RFValue(100),
		paddingHorizontal: 0,
		marginHorizontal: 0
	},
	dLType1RightBtn: {
		backgroundColor: Colors.grayDark,
		borderRadius: RFValue(20),
		height: RFValue(35),
		paddingHorizontal: 0,
		marginHorizontal: 0
	},
	dLType1RightBtnActive: {
		backgroundColor: Colors.robinEggBlue,
	},
	dLType1RightBtnLabel: {
		fontSize: Setting.xxsTextSize,
		...Setting.fontWeight600,
		paddingTop: 0,
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 2,
		textTransform: 'uppercase',
		color: Colors.white
	},
	arabEn: {
		paddingTop: 50
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
		borderRadius: RFValue(10),
		shadowOffset:{  width: 0.5,  height: 0.5 },
		shadowColor: Colors.fBorderColor,
		shadowOpacity: 0.8,
 	},
	dbLabel: {
		fontSize: Setting.h5TextSize,
		...Setting.fontWeight600,
		color: Colors.grayDarkest,
		marginTop: 10
	},
	dbDesc: {
		fontSize: Setting.sxTextSize,
		...Setting.fontWeight500,
		color: Colors.grayDarkest
	},
	dbBDesc: {
		fontSize: Setting.sTextSize,
		...Setting.fontWeight700,
		color: Colors.grayDarkest
	},
	dbTitle: {
		fontSize: Setting.vlTextSize,
		...Setting.fontWeight300,
		color: Colors.grayDarkest
	},
	dashBox1: {
		padding: '12%',
		borderRadius: RFValue(100),
		width: RFValue(75),
		marginBottom: 20,
		backgroundColor: Colors.mainLightGray,
		borderWidth: 6,
		borderColor: '#f2f3f4',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: RFValue(15),
		paddingBottom: RFValue(15)
	},
	dashBoxSmall: {
		padding: '12%',
		borderRadius: RFValue(100),
		width: RFValue(70),
		marginBottom: 20,
		backgroundColor: Colors.mainLightGray,
		borderWidth: 6,
		borderColor: '#f2f3f4',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: RFValue(15),
		paddingBottom: RFValue(15)
	},
	dashBoxActive: {
		backgroundColor: Colors.primary,
		shadowColor: Colors.primary,
	},
	topDashboardText: {
		color: Colors.primary
	},
	dashboardTitle: {
		...Setting.fontWeight600,
		fontSize: Setting.h4TextSize,
		color: Colors.primary,
		marginHorizontal: 15
	},
	dashboardSubTitle: {
		textTransform: 'uppercase',
		...Setting.fontWeight600,
		fontSize: Setting.xxxsTextSize,
		color: Colors.grayLight,
		marginHorizontal: 15,
		marginBottom: 15
	},
	skillContainer: {
		marginBottom: 10,
		width: RFValue(120),
		borderRadius: RFValue(10),
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 30,
		paddingBottom: 20,
		height: Utils.isIpad() ? RFValue(150) : (Utils.isAndroid() ? RFValue(150) : 190),
		paddingHorizontal: 6,
		shadowOffset:{  width: 5,  height: 5  },
		shadowColor: Colors.grayDarkest,
		shadowOpacity: 0.4,
		marginHorizontal: Utils.isAndroid() ? RFValue(7) : 15
	},
	skillTitle: {
		fontSize: Setting.xxsTextSize,
		textTransform: 'uppercase',
		...Setting.fontWeightBold,
		marginTop: 20,
		textAlign: 'center'
	},
	skillDesc: {
		fontSize: Setting.xxsTextSize,
		...Setting.fontWeight500,
		marginTop: 5,
		textAlign: 'center'
	},
	skillImage: {
		width: RFValue(60),
		height: RFValue(60)
	},
	skillContainerType2: {
		borderWidth: 1,
		borderColor: Colors.borderColor
	},
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
  		opacity: Utils.isAndroid() ? 0.5 : 0.3,
  		borderRadius: RFValue(100),
  		borderTopRightRadius: 0,
  		borderTopLeftRadius: 0,
  		alignItems: 'center',
		justifyContent: 'center'
  	},
  	topPattern: {
  		justifyContent: Utils.isIpad() ? 'center' : 'flex-start',
  		paddingTop: Utils.isIpad() ? 0 : RFPercentage(10)
  	}
 }
/* PATTERN - STARTS */
/* CHAPTER SLIDER - STARTS */
const chapterSliderStyle = {
	cslideBottomHeight: {
		height: Utils.isAndroid() ? 70 : 80
	},
	cSlide: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        paddingTop: 20,
        //top: -20
    },
    cSlideAndroid: {
    	flexGrow: 1,
    	flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        paddingTop: 20,
    },
    cSlideTitle: {
        fontSize: RFValue(28),
        ...Setting.fontWeight500,
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
        ...Setting.fontWeight600,
        fontSize: Utils.isIpad() ? Setting.h6TextSize : Setting.nTextSize,
        color: Colors.grayDarkest,
		alignSelf: 'center',
		textAlign: 'center',
		textTransform: 'uppercase',
  		marginTop: '5%',
  		marginBottom: '1%'
    },
    cSlideMSubTitle: {        
    	fontSize: Setting.sTextSize,
    },
    cCircleContainerOuter: {
  		borderWidth: RFValue(40),
        borderRadius: RFValue(130),
    },
    cCircleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
  		width: RFValue(140),
  		height: RFValue(140),
        borderRadius: RFValue(100),
  		opacity: 0.9,
		shadowOffset:{  width: 0,  height: 0 },
		shadowColor: Colors.fBorderColor,
		shadowOpacity: 0.8,
		shadowRadius: 20,
		padding: 20,
		borderWidth: RFValue(10),
    },
    cCircleContainerAnimate: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFValue(100),
  		opacity: 0.9,
		shadowOffset:{  width: 0,  height: 0 },
		shadowColor: Colors.fBorderColor,
		shadowOpacity: 0.8,
		shadowRadius: 20,
		padding: 20,
		borderWidth: RFValue(20),
    },
    cCircleContainerSmallOuter: {
  		borderWidth: RFValue(40),
        borderRadius: RFValue(110),
    },
    cCircleContainerSmall: {
  		width: RFValue(90),
  		height: RFValue(90),
    },
    cCircleNo: {
        fontSize: RFValue(70),
        color: Colors.white,
        ...Setting.fontWeightBold,
		textShadowColor: Colors.grayDarkest,
  		textShadowOffset: {width: -2, height: -2},
  		textShadowRadius: 2,
    },
    cCircleNoSmall: {
        fontSize: RFValue(50),
    },
    cSlideDesc: {
        fontSize: Setting.h6TextSize,
        ...Setting.fontWeight600,
        color: Colors.white,
		textAlign: 'center',
		paddingHorizontal: 40,
		lineHeight: 25
    },
    cSlideDescContainer: {
    	borderRadius: RFValue(40),
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
        ...Setting.fontWeight400,
        color: Colors.grayDark,
		textAlign: 'center',
		paddingHorizontal: Utils.isIpad() ? 70 : 30
    },
    cSlideChatMinLineContainer: {
    	backgroundColor: Colors.primary, 
    	marginTop: 10,
    	paddingTop: 10, 
    	paddingBottom: 10, 
    	paddingHorizontal: 5, 
    	borderRadius: 10, 
    	marginHorizontal: RFPercentage(6)
    },
    cSlideChatMinLine: {
    	fontStyle: 'italic',
    	fontSize: Setting.sxTextSize,
        ...Setting.fontWeight400,
        color: Colors.grayDark,
		textAlign: 'center',
		paddingHorizontal: Utils.isIpad() ? 70 : 10
    },
    cSlideBtnContainer: {
		paddingHorizontal: 30,
		marginHorizontal: 0,
		marginTop: '4%'
    },
	cSlideBtn: {
		backgroundColor: Colors.grayDark,
		borderRadius: RFValue(30),
		height: RFValue(40),
		paddingHorizontal: RFValue(20),
		marginHorizontal: 0,
	},
	cSlideBtnActive: {
		backgroundColor: Colors.gold,
	},
	cSlideBtnLabel: {
		fontSize: Utils.isIpad() ? Setting.nTextSize : Setting.sTextSize,
		...Setting.fontWeight600,
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
 		borderRadius: RFValue(30),
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
		paddingBottom: 30,
		color: Colors.grayDarkest,
		textTransform: 'uppercase',
		textAlign: 'center',
		letterSpacing: 1.5,
		...Setting.fontWeight600,
		fontSize: Setting.h4TextSize,
	},
	progressBarNo: {
		alignItems: "center",
		justifyContent: "center",
		position: 'absolute',
		width: '100%',
		textAlign: 'center',
		top: '50%',//RFPercentage
		fontSize: RFValue(45),
		...Setting.fontWeight600,
		color: Colors.grayDarkest
	},
	progressBar: {
		height: RFValue(160),
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
		bottom: Utils.isIpad() ? RFValue(17) : 17,
		marginHorizontal: 70,
		left: 0,
		right: 0,
		zIndex: 2
	},
	menus: {
		flexDirection: 'row',
		width: RFValue(210),
		backgroundColor: Colors.white,
		shadowOffset:{  width: 0.5,  height: 0.5 },
		shadowColor: Colors.grayDark,
		shadowOpacity: 0.8,
		borderRadius: RFValue(50),
		paddingTop: 10,
		paddingBottom: 10,
		paddingHorizontal: 5,
		elevation: Utils.isAndroid() ? 2 : 1
		//borderWidth: 1,
		//borderColor: Colors.grayDark
	},
	activeMenuItem: {
		color: Colors.green
	}
}
/* MENU - ENDS */
/* QUIZ - STARTS */
const quizStyle = {
	optionQuestion: {
		...Setting.fontWeight500,
        color: Colors.grayDarkest,
        fontSize: Setting.h6TextSize,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: Utils.isIpad() ? RFValue(30) : 30,
        paddingHorizontal: RFPercentage(5),
        top: '-5%'
	},
 	optionContainer: {
 		backgroundColor: Colors.primary,
 		paddingTop: RFValue(13),
 		paddingBottom: RFValue(13),
 		paddingHorizontal: RFValue(30),
 		borderRadius: RFValue(10),
 		marginHorizontal: 4,
 		marginBottom: RFValue(15),
		shadowOffset:{  width: 0.5,  height: 0.5 },
		shadowColor: Colors.grayDark,
		shadowOpacity: 0.8,
		minWidth: RFValue(200),
        textAlign: 'center',
        alignItems: "center",
		justifyContent: "center",
        marginHorizontal: RFPercentage(5),
        top: '-5%'
 	},
}
/* QUIZ - ENDS */
/* BADGES - STARTS */
const budgesStyle = {
	badgeContainer: {
		flex: 1,
        textAlign: 'left',
        alignItems: "center",
		justifyContent: "center",
		borderWidth: 2,
		marginHorizontal: '5%',
		borderRadius: RFValue(70),
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: 'transparent',
		borderColor: 'transparent',
		opacity: 1
	},
	activeBadge: {
		opacity: 1,
		backgroundColor: Colors.primary,
		borderColor: Colors.primary,
	},
	badgeFlat: {
		height: Utils.isAndroid() ? '100%' : '100%'
	},
	badgeLabel: {
		fontSize: Setting.xxsTextSize,
		...Setting.fontWeight500,
		color: Colors.grayDarkest,
		marginTop: 5,
        textAlign: 'center',
	},
	badge: {
		width: RFPercentage(6),
		height: RFPercentage(6),
        alignItems: "center",
		justifyContent: "center",
		//tintColor: 'gray',
		//opacity: 0.3
	},
	circleBadge: {
		borderRadius: RFValue(70),
		paddingTop: RFValue(10),
		paddingBottom: RFValue(10),
		paddingHorizontal: RFValue(10),
		borderWidth: 2,
		backgroundColor: Utils.isAndroid() ? Colors.grayLightest : Colors.primary,
		borderColor: Utils.isAndroid() ? Colors.grayLightest : Colors.primary,
		opacity: Utils.isAndroid() ? 0.4 : 0.3
	},
	squareBadgeContainer: {
		flex: 1,
        textAlign: 'left',
        alignItems: "center",
		justifyContent: "center",
		margin: 5,
		marginBottom: 10,
		backgroundColor: 'transparent'
	},
	squareBadge: {
		flex: 1,
		width: '80%',
		borderRadius: 5,
		paddingTop: RFValue(20),
		paddingBottom: RFValue(20),
		paddingHorizontal: RFValue(20),
		borderWidth: 2,
		backgroundColor: Colors.primary,
		borderColor: Colors.primary,
        alignItems: "center",
		justifyContent: "center",
		borderRadius: 70,
	},
	squareBadgeImage: {
		width: RFPercentage(10),
		height: RFPercentage(10),
        alignItems: "center",
		justifyContent: "center",
	},
	badgeDown: {
		top: RFValue(20)
	}
}
/* BADGES - ENDS */
/* IMAGES - STARTS */
const imagesStyle = {
	img120: {
		width: RFValue(120),
		height: RFValue(120)
	},
	img150: {
		width: RFValue(150),
		height: RFValue(150)
	},
	img170: {
		width: RFValue(170),
		height: RFValue(170)
	},
	img80: {
		width: RFValue(80),
		height: RFValue(80)
	},
	img45: {
		width: RFPercentage(5),
		height: RFPercentage(5)
	},
	img25: {
		width: RFPercentage(4),
		height: RFPercentage(4)
	},
	img60: {
		width: RFValue(60),
		height: RFValue(60)
	},
	img200: {
		width: Utils.isIpad() ? RFValue(250) : RFValue(200),
		height: Utils.isIpad() ? RFValue(250) : RFValue(200),
	},
	img200R1: {
		height: Utils.isIpad() ? RFValue(300) : RFValue(200),
        aspectRatio: 1, // <-- this
        resizeMode: 'contain', //optional
	},
	img30: {
		width: RFValue(30),
		height: RFValue(30)
	}
}
/* IMAGES - ENDS */
/* HEADS UP GAME - STARTS */
const headsupGameStyle = {
	timeoutContainer: {
		width: RFValue(30),
		height: RFValue(30),
        justifyContent: 'center',
        alignItems: 'center',
		borderRadius: RFValue(20),
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		textAlign: 'center'
	},
	timeoutLabel: {
		color: Colors.white,
 		fontSize: Setting.h5TextSize,
 		...Setting.fontWeightBold,
	},
	headsupWord: {
		color: Colors.white,
 		fontSize: RFPercentage(10), //RFPercentage RFValue
 		...Setting.fontWeightBolder,
 		textAlign: 'center',
		alignSelf: 'center'
	},
	headsupWordM: {
 		fontSize: RFPercentage(8),
	},
	headsupWordContainer: {
		flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
	},
	headsupBorder: {
		flex: 1,
		borderWidth: 3,
		borderColor: Colors.white,
		marginTop: 20,
		borderRadius: 25,
		paddingTop: 5
	}
}
/* HEADS UP GAME - ENDS */
/* MISSING LETTER GAME - STARTS */
const mLetterGameStyle = {
	optionBox: {
		width: RFValue(40),
		height: RFValue(40),
        justifyContent: 'center',
        alignItems: 'center',
		borderRadius: RFValue(5),
		textAlign: 'center',
		backgroundColor: Colors.primary,
		borderColor: Colors.primary,
		borderWidth: 1,
		marginHorizontal: 3,
		marginBottom: 5,
		flexShrink: 1
	},
	optionBoxBig: {
		backgroundColor: Colors.gold,
		borderColor: '#e6ba0c',
		width: RFValue(50),
		height: RFValue(50)
	},
	answerBox: {
		backgroundColor: Colors.robinEggBlue,
		borderColor: Colors.robinEggBlue,
	},
	fillupBox: {
		backgroundColor: Colors.white,
		borderColor: '#e6ba0c',
	},
	filledBox: {
		backgroundColor: Colors.white,
		borderColor: Colors.gold,
 		textShadowColor: '#e6ba0c',
	},
	optionBoxLabel: {
		color: Colors.white,
 		fontSize: Setting.h5TextSize,
 		...Setting.fontWeightBold,
 		textTransform: 'uppercase'
	},
	optionBoxLabelBig: {
		color: Colors.grayDarkest,
 		...Setting.fontWeightBolder,
 		textTransform: 'uppercase',
 		fontSize: RFValue(38),
 		textShadowColor: '#e6ba0c',
 		textShadowOffset: {width: -1, height: 1},
 		textShadowRadius: 1
	},
	filledBoxLabel: {
		color: Colors.grayDarkest
	},
	helpContent: {
		color: Colors.white,
 		fontSize: Setting.h6TextSize,
 		...Setting.fontWeight600,
 		paddingHorizontal: 20,
 		textAlign: 'center',
 		paddingTop: RFValue(60)	
	},
	answerContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 10,
		paddingBottom: 10,
		paddingHorizontal: 10,
		borderRadius: 10,
		margin: 5
	},
	fillUpContainer: {
		backgroundColor: Colors.silver
	}
}
/* MISSING LETTER GAME - ENDS */
/* RUNNER GAME - STARTS */
const runnerGameStyle = {
	roadleft: {
		flex: 1,
		backgroundColor: Colors.road,
		textAlign: 'center',
		alignItems: "center",
		marginBottom: -5,
		marginTop: -5,
		borderStyle: 'dashed',
		borderWidth: 5,
		borderColor: Colors.white,
		marginRight: -2.5,
		zIndex: 2
	},
	roadRight: {
		flex: 1,
		backgroundColor: Colors.road,
		textAlign: 'center',
		alignItems: "center",
		marginBottom: -5,
		marginTop: -5,
		borderStyle: 'dashed',
		borderWidth: 5,
		borderColor: Colors.white,
		marginLeft: -2.5,
		zIndex: 2
	},
	grassField: {
		flex: 2,
		backgroundColor: '#d3d3d3',
		alignItems: "center",
		justifyContent: "center",
		zIndex: 1,
	},
	player1: {
		backgroundColor: Colors.red,
		width: RFValue(35),
		height: RFValue(35),
		borderRadius: 100,
		bottom: 0,
		position: 'absolute',
		textAlign: 'center',
		color: Colors.white,
		marginBottom: 20,
		zIndex: 2
	},
	player1Control: {
		backgroundColor: Colors.red,
		width: RFValue(120),
		height: RFValue(120),
		borderRadius: 150,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 0,
	},
	player2: {
		backgroundColor: Colors.robinEggBlue,
		width: RFValue(35),
		height: RFValue(35),
		borderRadius: 100,
		bottom: 0,
		position: 'absolute',
		textAlign: 'center',
		color: Colors.white,
		marginBottom: 20,
		zIndex: 2
	},
	player2Control: {
		backgroundColor: Colors.robinEggBlue,
		width: RFValue(120),
		height: RFValue(120),
		borderRadius: 150,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 0,
		//height: '100%'
	},
	mosque: {
		top: 0,
		textAlign: 'center',
	},
	winnerFlag: {
		width: '100%',
		zIndex: 1,
		marginTop: RFValue(55),
	},
	runnerIcon: {
		tintColor: Colors.white,
		width: RFValue(60),
		height: RFValue(60)
	},
	mosqueFlag: {
		backgroundColor: Colors.road,
		width: RFValue(60),
		zIndex: 3,
		position: 'absolute',
		height: 60,
		top: RFValue(35),
		left: RFValue(-30)
	}
}
/* RUNNER GAME - ENDS */
/* ANIMATED - STARTS */
const animatedStyle = {
	countdownTimer: {
		color: Colors.white,
 		fontSize: RFValue(1), 
 		...Setting.fontWeightBolder,
 		textAlign: 'center',
		alignSelf: 'center',
		paddingHorizontal: 15,
		paddingTop: 10,
		paddingBottom: 10,
		margin: 10,
		borderRadius: 5
	},
	answerLabel: {
		...Setting.fontWeight500,
		fontSize: Setting.h6TextSize,
		color: Colors.white
	}
}
/* ANIMATED - ENDS */
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
	...budgesStyle,
	...imagesStyle,
	...headsupGameStyle,
	...mLetterGameStyle,
	...animatedStyle,
	...runnerGameStyle
});
