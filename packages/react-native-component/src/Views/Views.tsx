import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Views = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.regular]}>Regular</Text>
      <Text style={[styles.text, styles.bold]}>Bold</Text>
      <Text style={[styles.text, styles.medium]}>Medium</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    width: 300,
    height: 300,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginVertical: 10,
  },
  regular: {
    fontFamily: 'NotoSansCJKkr-Regular',
  },
  medium: {
    fontFamily: 'NotoSansCJKkr-Medium',
  },
  bold: {
    fontFamily: 'NotoSansCJKkr-Bold',
  },
});

export default Views;
