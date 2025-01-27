import {View, Text, StyleSheet, Pressable, TextInput, Keyboard, FlatList} from "react-native"
import {prismaClient} from "../../services/db"
import { TaskList } from "./list"
import React from "react"

export function Tasks({filter}: {filter: boolean}){
    
    const tasks = prismaClient.task.useFindMany({
        where: {
            completed: filter
        }
    })
    
    return(
        <>
            <FlatList
              data={tasks}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => <TaskList data={item}/>}
            />
        </>
    )
}

const styles = StyleSheet.create({
    
})