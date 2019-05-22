import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import { Icon } from 'expo';

const Category = ({ name, color, icon }) => (
  <View style={styles.container}>
    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{
        backgroundColor: color, width: 80, height: 70, borderRadius: 100, flex: 1, alignItems: 'center', justifyContent: 'center'
      }}
      >
        <Icon.Ionicons
          name={icon}
          size={40}
          style={{ opacity: 0.5 }}
        />
      </View>
    </View>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ color: '#4a4a4a' }}>{name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
});

export default Category;
