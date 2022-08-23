import { StyleSheet, Text, View, Modal, StatusBar } from 'react-native'

import React, { createContext, useState } from 'react'

import axios from 'axios'

export const Context = createContext()

export default function Provider({ children }) {

    const [loader, setLoader] = useState(false)

    const BASH_URL = "https://jsonplaceholder.typicode.com/"

    const instance = axios.create({

        baseURL: BASH_URL,

    });


    const Request = {
        Get: async (route, success) => {
            setLoader(true)
            try {
                const Data = await instance.get(route)
                success(Data)
            } catch (error) {
                console.error(error);
            }
            setLoader(false)
        }

    }


    const { Get } = Request


    const Routrequest = {

        Login: (success, params) => Get("comments", success)

    }

    return (
        <Context.Provider value={{ loader, setLoader, Routrequest }}>
            <Loader loader={loader} setLoader={setLoader} />
            {children}
        </Context.Provider>
    )
}


const Loader = ({ loader, setLoader }) => (
    <Modal
        statusBarTranslucent
        animationType="fade"
        transparent={true}
        visible={loader}
        onRequestClose={() => setLoader(!loader)}
    >
        <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
    </Modal>
)
const styles = StyleSheet.create({})