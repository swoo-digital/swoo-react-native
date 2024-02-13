import { Text, View } from 'react-native'
import React from 'react'
import { ViewModel } from '../viewmodel/CountDown'
import CountButton from '../../Components/CountButton'
import { styles } from '../style/CountDown'
import { LocalString } from '../../Utility/string'

const CountDown = () => {
    const countDownViewModel = ViewModel()

    return (
        <View style={styles.container}>
            <CountButton titleValue={LocalString.negative_title} onPress={() => {
                countDownViewModel?.onPressCount(0)
            }} />
            <Text style={styles.count_container}>{countDownViewModel?.count}</Text>
            <CountButton titleValue={LocalString.positive_title} onPress={() => {
                countDownViewModel?.onPressCount(1)
            }} />
        </View>
    )
}

export default CountDown
