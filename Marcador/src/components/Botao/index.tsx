import React, { useState } from "react";
import {View, TouchableOpacity, Text} from "react-native"
import styles from "./style"
import { useContexto } from "../../hook";

export default function Botao(){
    const { setPontuacao, truco, setTruco } = useContexto()


    const trucoSoma = () => {
        if(truco === "Truco"){
            setPontuacao(3)
            setTruco("6")
        }
        else if(truco === "6"){
            setPontuacao(6)
            setTruco("9")
        }
        else if(truco === "9"){
            setPontuacao(9)
            setTruco("12")
        }
        else if(truco === "12"){
            setPontuacao(12)
        }
    }

    return(
        <View style={styles.viewBotao} >
            <TouchableOpacity onPress={() => trucoSoma()} style={styles.buttonTruco}>
                <Text style={styles.textButton} >{truco}</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoZerar}>
                <Text style={styles.textButtonZerar} >Zerar Truco</Text> 
            </TouchableOpacity>
        </View>
    )
}