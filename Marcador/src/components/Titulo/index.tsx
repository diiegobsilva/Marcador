import React, { useState } from "react";

import { View, Text, Modal, Alert, TextInput, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";


export default function Titulo({titulo}:any){

    const [modalVisible, setModalVisible] = useState(false);
    const [ title, setTitle ] = useState(titulo)
    

    return(
        <View>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                    <View style={styles.modalTitle}>
                        <TextInput 
                            placeholder="Nome"
                            onChangeText={(e) => setTitle(e)}
                            value={title}
                        />
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                        >
                            <Text>close</Text>
                        </TouchableOpacity>
                    </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
                <Text>{title}</Text>
            </Pressable>
        </View>
        
    )
}

