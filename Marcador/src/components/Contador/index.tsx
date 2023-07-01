import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Contador({valor}:any) {
    return (

        <View style={styles.viewEsquerda}>
            <Text style={styles.text}>{valor}</Text>
          <View style={styles.coluna}>
            <TouchableOpacity onPress={() => {console.log("oi")}}>
                <Image style={styles.naipeOuros} source={require("../../assets/ouros.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {console.log("oi")}}>
                <Image style={styles.naipeEspada} source={require("../../assets/espada.png")} />
            </TouchableOpacity>
          </View>
        </View>

    )
}