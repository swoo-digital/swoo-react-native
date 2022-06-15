import React, { useContext } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import MyContext from '../../context/MyContext';
import { decrementCounter, incrementCounter } from '../../reducer/actions';
import { styles } from './styles'
import BtnComp from './BtnComp'

const CounterScreen = (props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const { themeColor } = useContext(MyContext)

  const doIncrement = () => {
    props.incrementCounter()
  }

  const doDecrement = () => {
    props.decrementCounter()
  }

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={[styles.container, { backgroundColor: themeColor.background }]}>
        <BtnComp compID="inc" buttonColor={themeColor.button}  labelColor={themeColor.btnText} onPress={() => doIncrement()} label={"+1"} />
        <Text style={[styles.valueTxt, { color: themeColor.valueText }]}>{props.data.counterValue}</Text>
        <BtnComp compID="dec" buttonColor={themeColor.button} labelColor={themeColor.btnText} onPress={() => doDecrement()} label={"-1"} />
      </View>
    </SafeAreaView>
  );
};


const mapStateToProps = (state) => {
  return {
    data: state.counterReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => { dispatch(incrementCounter()) },
    decrementCounter: () => { dispatch(decrementCounter()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
