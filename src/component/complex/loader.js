/**
*
* loader.js
* Page loader
*
* @author - Faizal
* @date   - 4 May 2020
*
***/
// REACT NATIVE IMPORT
import React, {useEffect, useState} from "react";
import { ActivityIndicator, StyleSheet, View, Modal } from "react-native";

// ALL SHARED FILES
import { Colors } from '../../shared/colors';
import { styles  } from '../../shared/stylesheet';

export const Loader = (props) => {

  // LOCAL VARIABLE DECLARATION
  const[showLoader, setShowLoader] = useState(props.show);
  
  // WHEN EVER SHOW PROPS CHANGES
  useEffect(() => {
    setShowLoader(props.show);
  }, [props.show]);
  
  // RENDER HTML
  return (
    <Modal transparent={true} animationType="none" visible={showLoader}>
      <View style={styles.loaderContainer}>
        <View style={styles.subLoaderContainer}>
          <ActivityIndicator animating={true} color={Colors.grayDark} size="large" />
        </View>
      </View>
    </Modal>
  );
}