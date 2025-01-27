import {Home} from "./src/app/screen/home"
import {useEffect, useState} from "react"
import { initializeDb } from "./src/services/db"
import { SafeAreaView, Text } from "react-native"

export default function App(){

    const [dbinitialized, setDbInitialized] = useState(false)

    useEffect(() => {
        const setup = async () => {
            await initializeDb()
            setDbInitialized(true)
        }

        setup()
    }, [])

    if(!dbinitialized){
        return(
            <SafeAreaView>
                <Text>Carregando...</Text>
            </SafeAreaView>
        )
    }

    return(
        <Home/>
    )
}