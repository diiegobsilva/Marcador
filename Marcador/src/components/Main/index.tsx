import React from "react";
import {View, ImageBackground} from "react-native"
import styles from "./style"

import Titulo from "../Titulo";
import Botao from "../Botao";

export default function Main(){
    return(
        <View style={styles.boxTitle}>
            <Titulo titulo={"Eles"}/>
            <Titulo titulo={"Nós"}/>
            <Botao/>
        </View>
    )
}