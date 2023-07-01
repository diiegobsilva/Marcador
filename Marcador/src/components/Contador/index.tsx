import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Contador({valor}:any) {

    const [ pontos, setPontos ] = useState(0)

    const alterarValor = (sinal:string) => {
        if(sinal === "-" && pontos != 0){
            let valor = pontos - 1  
            setPontos(valor)
        }
        else if(sinal === "+"){
            let valor = pontos + 1  
            setPontos(valor)
        }
        
    }

    return (

        <View style={styles.viewEsquerda}>
            <Text style={styles.text}>{pontos}</Text>
          <View style={styles.coluna}>
            <TouchableOpacity onPress={() => alterarValor("-")}>
                <Image style={styles.naipeOuros} source={require("../../assets/ouros.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alterarValor("+")}>
                <Image style={styles.naipeEspada} source={require("../../assets/espada.png")} />
            </TouchableOpacity>
          </View>
        </View>

    )
}