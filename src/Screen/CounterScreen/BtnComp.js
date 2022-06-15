import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"

const BtnComp = (props) => {
    const { compID, buttonColor, labelColor, label, 
        onPress } = props

    return (
        <TouchableOpacity testID={compID} style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => props.onPress()}>
            <Text style={[styles.btnText, { color: labelColor }]}>{label}</Text>
        </TouchableOpacity>
    )
}

export default BtnComp