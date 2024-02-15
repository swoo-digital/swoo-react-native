import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const Layout: FC<{children: any}> = ({children}) => {
  const style = useStyles();
  return (
    <ScrollView contentContainerStyle={style.containerStyle}>
      {children}
    </ScrollView>
  );
};

export default Layout;

const useStyles = () =>
  StyleSheet.create({
    containerStyle: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#004761',
    },
  });
