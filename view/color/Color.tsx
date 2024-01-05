import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './Color.style';

const Color = () => {
  return (
    <>
      <SafeAreaView style={styles.safe} />
      <View style={styles.container}>
        <Text>Color</Text>
      </View>
    </>
  );
};

export default Color;
