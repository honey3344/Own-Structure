import { StyleSheet, Text, View, Modal, StatusBar } from 'react-native'
import React, { createContext, useState } from 'react'
export const Context = createContext()
export default function Provider({ children }) {
    const [loader, setLoader] = useState(false)
    return (
        <Context.Provider value={{ loader, setLoader }}>
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