import {View, Text, StyleSheet, Pressable, TextInput, Keyboard, FlatList} from "react-native"
import {prismaClient} from "../../services/db"
import React, { useState } from "react"

interface Props{
    filter: boolean,
    setFilter: (status: boolean) => void
}

export function Actions({filter, setFilter}: Props){

    const [status, setStatus] = useState(filter)

    function handleAction(item: boolean){
        setStatus(item)
        setFilter(item)
    }

    return(
        <View>
            <Pressable style={[styles.buttons, !status && {backgroundColor: "#22c55e"}]} onPress={() => handleAction(true)}>
                <Text style={styles.buttonText}>ABERTAS</Text>
            </Pressable>
            <Pressable style={[styles.buttons, status && {backgroundColor: "#22c55e"}]} onPress={() => handleAction(false)}>
                <Text style={styles.buttonText}>ENCERRADAS</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    buttons: {
        flexDirection: "row",
        gap: 8,
        marginTop: 14,
        marginBottom: 8
    },
    button: {
        padding: 4,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4
    },
    buttonText: {
        color: "#fff"
    }
})