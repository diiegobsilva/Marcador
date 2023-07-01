import React from "react";
import {View, TouchableOpacity, Text} from "react-native"
import styles from "./style"

export default function Botao(){
    return(
        <View style={styles.viewBotao} >
            <TouchableOpacity style={styles.buttonTruco}>
                <Text style={styles.textButton} >Truco</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoZerar}>
                <Text style={styles.textButtonZerar} >Zerar Truco</Text> 
            </TouchableOpacity>
        </View>
    )
}