import React, { useState } from "react";

import { View, Text, Modal, Alert, TextInput, Pressable, TouchableOpacity, Image } from "react-native";
import styles from "./style";


export default function ModalZerar({titulo, style}:any){

    const [modalVisible, setModalVisible] = useState(false);
    const [ title, setTitle ] = useState(titulo)
    const [ tituloo, setTituloo ] = useState(titulo)
    
    const name = (t:boolean) => {
        if(t != false && tituloo.length > 0){
            setTitle(tituloo)
        }
    }  

    return(
        <View style={style}>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible);
                
                }}>
                    <View style={styles.modalTitle}>
                        <Text style={styles.formLabel}>Digite o Nome:</Text>
                        <TextInput 
                            placeholder="Nome"
                            onChangeText={(e) => setTituloo(e)}
                            style={styles.input}
                            value={tituloo}
                        />
                        <View style={styles.botao}>
                            <TouchableOpacity
                                onPress={() => {
                                    setTituloo(title)
                                    setModalVisible(false)}}
                                style={styles.botaoFechar}
                            >
                                <Text style={styles.textButton}>Fechar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.botaoOk}
                                onPress={() => {
                                    name(true)
                                    setModalVisible(false)
                                }}
                            >
                                <Text style={styles.textButton}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
        
    )
}