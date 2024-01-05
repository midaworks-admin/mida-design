import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './Icon.style';

const Icon = () => {
  return (
    <>
      <SafeAreaView style={styles.safe} />
      <View style={styles.container}>
        <Text>Icon</Text>
      </View>
    </>
  );
};

export default Icon;
