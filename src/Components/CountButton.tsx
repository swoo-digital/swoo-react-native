import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { AppThemColor } from '../Utility/color'
import fonts from '../Utility/fonts'

const CountButton = ({ titleValue, onPress }: any) => {
    return (
        <TouchableHighlight style={styles.container} onPress={onPress} underlayColor={AppThemColor.lightgreen}>
            <Text style={styles.text_container}>{titleValue}</Text>
        </TouchableHighlight>
    )
}

export default CountButton

const styles = StyleSheet.create({
    container: { backgroundColor: AppThemColor.white, width: 160, paddingVertical: 16, borderRadius: 24, alignSelf: "center", justifyContent: "center", alignItems: "center" },
    text_container: { color: AppThemColor.black, fontFamily: fonts.Inter_B, fontSize: 24 },

})