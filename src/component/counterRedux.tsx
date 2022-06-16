import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../action/index';

const counterRedux = () => {

    const { counter } = useSelector((state: any) => state?.counter);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#004761"
                translucent={false}
            />
            <View style={styles.itemContainer}>
                <TouchableOpacity style={styles.viewDecrement}
                    activeOpacity={1}
                    onPress={() => {
                        if (counter < 1) {
                            return
                        }
                        dispatch(decrement())
                    }}>
                    <Text style={styles.txtPlus}>{'-1'}</Text>
                </TouchableOpacity>
                <Text style={styles.txtCounter}>{counter}</Text>
                <TouchableOpacity style={styles.viewDecrement}
                    activeOpacity={1}
                    onPress={() => { dispatch(increment()) }}>
                    <Text style={styles.txtPlus}>{'+1'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: '#004761',
        justifyContent: 'center'
    },
    itemContainer: {
        alignSelf: 'center',
        flexDirection: 'column'
    },
    viewDecrement: {
        width: 130,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    txtCounter: {
        fontSize: 62,
        textAlign: 'center',
        marginVertical: 60,
        color: '#8cd6bd'
    },
    txtPlus: {
        fontSize: 24,
        textAlign: 'center',
        color: '#000',
        alignSelf: 'center'
    }
});

export default counterRedux;

