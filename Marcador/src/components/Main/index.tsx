import React, { useState } from "react";
import {View, Text, Image} from "react-native"
import styles from "./style"

import Titulo from "../Titulo";
import Botao from "../Botao";
import Contador from "../Contador";

export default function Main(){

    return(
        <View style={styles.boxTitle}>
            <Image  style={{width: 50, height: 50}}  source={require('../../assets/logo.png')} />
            <View style={styles.titulo}> 
                <Titulo  style={styles.tituloDireita} titulo={"Eles"}/>
                <Titulo  style={styles.tituloEsquerda} titulo={"Nós"}/>
            </View>
            <Contador />
            <Botao/>
        </View>
    )
}