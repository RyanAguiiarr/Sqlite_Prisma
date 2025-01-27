import { Tasks } from "../../../components/tasks"
import {FormTask} from "../../../components/form"
import {Actions} from "../../../components/actio"
import React, { useState } from "react"
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native"

export function Home(){

    const [filter, setFilter] = useState(false)

    return(
        <>
            <StatusBar backgroundColor="#0f172a" barStyle="light-content"/>

            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Easy Notes</Text>
                <Text style={styles.text}>Crie e gerencie suas tarefas</Text>

                <FormTask/>

                <Actions filter={filter} setFilter={(status) => setFilter(status)}/>

                {filter && (
                    <Tasks filter={filter}/>
                )}

                {!filter && (
                    <Tasks filter={filter}/>
                )}

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f172a",
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 14
    },
    title: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold"
    },
    text: {
        color: "#e4e4e7"
    }
})