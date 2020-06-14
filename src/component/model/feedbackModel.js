
/**
*
* introModel.js
* Basic model popup
*
* @author - Faizal
* @date   - 18 May 2020
*
***/
'use strict';
// REACT NATIVE IMPORT
import React, {useState, useEffect} from 'react';
import {Text, View, TouchableHighlight, Modal, Image, FlatList, TextInput, KeyboardAvoidingView} from 'react-native';
import { Icon, Input } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useIsFocused } from '@react-navigation/native';

// ICONS
import MedalIcon from '../../../assets/img/medal.png';
import WinnerIcon from '../../../assets/img/winner.png';
import StarIcon from '../../../assets/img/star.png';

// ALL SHARED FILES
import { Loader  } from '../complex/loader';
import { styles  } from '../../shared/stylesheet';
import { Colors } from '../../shared/colors';
import * as Data from '../../shared/data';
import * as Constant from '../../shared/constant';
import * as Storage from '../../shared/storage';
import * as Utils from '../../shared/utils';
import * as API from '../../service/api';

export const FeedbackModel = (props) => {

  // DECLARE STATE VARIABLE
  const [state, setState] = useState({name: '', email_id: '', message: ''});
  const [screenIsWaiting, setScreenIsWaiting] = useState(true);

  useEffect(() => {
    setScreenIsWaiting(false);
    setState({...state, name: '', email_id: '', message: ''})
  }, [props.show])
  /**
  * Feature use to check completed lesson
  *
  * @input  NA
  * @return NA
  */
  const close = () => {
    // CLOSE POPUP
    props.handleClose();
  }

  /**
  * Update state value
  *
  * @input  String value
  * @return String field name
  */
  const updateState = (text, name) => {
    setState({...state, [name]: text});
  };

  /**
  * Feature used to submit customer form
  *
  * @input  NA
  * @return NA
  */
  const submitForm = () => {
    setScreenIsWaiting(true);
    // UPDATE USER PROCESS
    API.post({URL: Constant.URL.SEND_FEEDBACK, body: {...state}}).then((result) => {
      setScreenIsWaiting(false);
      // ALERT POPUP
      Utils.alert('Success', 'Successfully feedback sent, we will respond to you as soon possible.', ['Ok'], 
        [() => close()], ['cancel']);
    }).catch((error) => {
      setScreenIsWaiting(false);
      // HIDE LOADER AND PULL DOWN LOADER TAG
      console.log(error);
    });
  }

  // RENDER HTML
  return (
    <>
      <Loader show={screenIsWaiting} />
      <Modal animationType="slide" transparent={false} visible={props.show}>
        <KeyboardAvoidingView style={[styles.modelCenteredView]} behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <Icon name="x" color={Colors.grayDarkest} containerStyle={[styles.modelClose, {zIndex: 2}]} size={40} type='octicon' onPress={() => close()} />
           <View style={[styles.modalView]}>

            <View  style={styles.modelTitleContainer}>
              <Text style={styles.modelTitle}>Feedback Form</Text>
            </View>

            <View style={[styles.modellBody]}>

              <Text style={[styles.modellText, styles.tCenter, styles.pb40]}>Assalamu Alaikum, Do drop us a note (by filling the below form) if you need any help or to give us your feedback and suggestions.</Text>
              <Input maxLength={Constant.GENERIC.NAME_MAX_LENGTH} label='Name' labelStyle={styles.textfieldLabel} placeholder='Name' value={state.name}  name='name' onChangeText={(text) => updateState(text, 'name')}
              inputContainerStyle={styles.textfieldContainer} inputStyle={styles.textfield} containerStyle={styles.inputContainer}/>
              <Input maxLength={Constant.GENERIC.EMAIL_MAX_LENGTH} label='Email Id' labelStyle={styles.textfieldLabel} placeholder='Email Id' value={state.email_id}  name='email_id' onChangeText={(text) => updateState(text, 'email_id')}
              inputContainerStyle={styles.textfieldContainer} inputStyle={styles.textfield} containerStyle={styles.inputContainer}/>
              <Text style={[styles.textfieldLabel, styles.textfieldLabelExtra]}>Message</Text>
              <TextInput maxLength={Constant.GENERIC.MESSAGE_MAX_LENGTH} value={state.message} name='message' style={[styles.textarea]} underlineColorAndroid="transparent"
              placeholder="Type your message here..."  multiline={true} onChangeText={text => updateState(text, 'message')}/>
            
              <View style={styles.rowDirection}>
                <View style={[styles.flex1, styles.alignE]}>
                  <TouchableHighlight underlayColor="transparent" onPress={() => close()} style={[styles.btn, styles.secondaryBtn, {width: 100}]}>
                    <Text style={[styles.darkBtnText, {textAlign: 'center'}]}>Close</Text>
                  </TouchableHighlight>
                </View>
                <View style={[styles.flex1, styles.alignS]}>
                  <TouchableHighlight underlayColor="transparent" onPress={() => submitForm()} style={[styles.btn, styles.primaryBtn, {width: 100}]}>
                    <Text style={[styles.lightBtnText, {textAlign: 'center'}]}>Send</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>

          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
    );
} 
