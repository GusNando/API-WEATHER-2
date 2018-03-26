import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.backHeader}>
      <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
    backHeader: {
      flex: 1,
      backgroundColor: '#E91E63',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    textStyle: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center'
    }
});

export default Header;
