import React from 'react';
import useCounter from '../hooks/counter';
import Layout from '../Layouts';
import Button from '../components/Button';
import Text from '../components/Text';
import {StyleSheet, View} from 'react-native';

const Home = () => {
  const {counter, increment, decrement} = useCounter();
  return (
    <Layout>
      <View style={styles.mainScreen}>
        <View style={styles.button}>
          <Button onClick={increment}>
            <Text style={styles.txt}>+1</Text>
          </Button>
        </View>
        <Text style={styles.text}>{counter}</Text>
        <View style={styles.button}>
          <Button onClick={decrement}>
            <Text style={styles.txt}>-1</Text>
          </Button>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    marginTop: 210,
    marginBottom: 220,
    backgroundColor: '#004761',
    marginHorizontal: 'auto',
  },
  text: {
    fontSize: 64,
    textAlign: 'center',
    marginVertical: 104,
    fontWeight: '700',
    color: '#8CD6BD',
  },
  txt: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '700',
    textAlign: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Home;
