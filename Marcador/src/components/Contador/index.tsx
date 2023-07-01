import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./style";

export default function Contador() {
    return (
        <View style={styles.container}>
        <View style={styles.viewEsquerda}>
          <Text style={styles.text}>6</Text>
          <View style={styles.coluna}>
            <Image style={styles.naipeOuros} source={require("../../assets/ouros.png")} />
            <Image style={styles.naipeEspada} source={require("../../assets/espada.png")} />
          </View>
        </View>
  
        <View style={styles.linhaPontilhada} />
  
        <View style={styles.viewDireita}>
          <Text style={styles.text}>11</Text>
          <View style={styles.coluna}>
            <Image style={styles.naipeOuros} source={require("../../assets/ouros.png")} />
            <Image style={styles.naipeEspada} source={require("../../assets/espada.png")} />
          </View>
        </View>
      </View>

    )
}