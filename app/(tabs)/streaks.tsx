import React from "react"
import { View, Text, StyleSheet } from "react-native"


export default function StreaksScreen() {
    return (
        <View style ={styles.view}>
        <Text>This is the login screen</Text>
        </View>
    )
} const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})