import React, { useState } from "react";
import {View, Text} from "react-native"
import styles from "./style"

import Titulo from "../Titulo";
import Botao from "../Botao";

export default function Main(){

    return(
        <View style={styles.boxTitle}>
            <View style={styles.titulo}> 
                <Titulo  style={styles.tituloDireita} titulo={"Eles"}/>
                <Titulo  style={styles.tituloEsquerda} titulo={"Nós"}/>
            </View>
            <Botao/>
        </View>
    )
}