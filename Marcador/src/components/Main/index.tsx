import React, { useState } from "react";
import {View, Text, Image} from "react-native"
import styles from "./style"

import Titulo from "../Titulo";
import Botao from "../Botao";
import Contador from "../Contador";

export default function Main(){

    return(
        <View style={styles.boxTitle}>
            <View style={styles.titulo}> 
                <Titulo  style={styles.tituloDireita} titulo={"Eles"}/>
                <Titulo  style={styles.tituloEsquerda} titulo={"Nós"}/>
            </View>
            <View style={styles.container}>
                <Contador valor={6} />
                <View style={styles.linhaPontilhada} />
                <Contador valor={11}/>
            </View>
            <Botao/>
        </View>
    )
}