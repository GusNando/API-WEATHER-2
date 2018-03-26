import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Footer = (props) => {
  return (
    <View style={styles.backFooter}>
      <Text style={styles.textStyle}>{props.footerText}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
    backFooter: {
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

export default Footer;
