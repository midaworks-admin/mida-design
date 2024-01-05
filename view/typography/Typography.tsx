import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './Typography.style';

const Typography = () => {
  return (
    <>
      <SafeAreaView style={styles.safe} />
      <View style={styles.container}>
        <Text>Typography</Text>
      </View>
    </>
  );
};

export default Typography;
