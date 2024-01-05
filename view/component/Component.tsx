import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './Component.style';

const Component = () => {
  return (
    <>
      <SafeAreaView style={styles.safe} />
      <View style={styles.container}>
        <Text>Component</Text>
      </View>
    </>
  );
};

export default Component;
