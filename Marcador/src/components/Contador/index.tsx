import React, { useContext, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { useContexto } from "../../hook";

export default function Contador({valor}:any) {

    const { pontuacao, setPontuacao, setTruco } = useContexto()
    const [ pontos, setPontos ] = useState(0)

    console.log(pontuacao);
    
    const alterarValor = (sinal:string) => {
        if(sinal === "-" && pontos != 0){
            let valor = pontos - pontuacao  
            setPontos(valor)
        }
        else if(sinal === "+" && pontos < 12){
            let valor = pontos + pontuacao  
            setPontos(valor)
        }
        setPontuacao(1)
        setTruco("Truco")
        
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