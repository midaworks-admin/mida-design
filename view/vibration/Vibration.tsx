import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './Vibration.style';

const Vibration = () => {
  return (
    <>
      <SafeAreaView style={styles.safe} />
      <View style={styles.container}>
        <Text>Vibration</Text>
      </View>
    </>
  );
};

export default Vibration;
