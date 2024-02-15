import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {GestureResponderEvent, StyleSheet} from 'react-native';

const ButtonComponent: FC<{
  children: JSX.Element;
  onClick?: (event: GestureResponderEvent) => void;
}> = ({children, onClick}) => {
  const styles = useStyles();
  return <Pressable style={styles.btn} children={children} onPress={onClick} />;
};

export default ButtonComponent;

const useStyles = () =>
  StyleSheet.create({
    btn: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 66,
      paddingVertical: 16,
      width: 160,
      borderRadius: 24,
    },
  });
