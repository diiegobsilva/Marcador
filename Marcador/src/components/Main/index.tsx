import React from "react";
import {View, ImageBackground} from "react-native"
import styles from "./style"

export default function Main(){
    return(
        <View style={styles.boxTitle}>
          <ImageBackground source={require('../../assets/planoFundo.png')}  />
        </View>
    )
}