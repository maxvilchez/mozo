import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { iOSColors, systemWeights } from 'react-native-typography';

import { Icon } from 'expo';

const Category = ({ name, color, icon }) => (
  <View style={styles.container}>
    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
      <View style={[styles.icon, { backgroundColor: color }]}>
        <Icon.Ionicons
          name={icon}
          size={36}
          style={{ opacity: 0.5 }}
        />
      </View>
    </View>
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={[{ color: iOSColors.gray }, systemWeights.regular]}>{name}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100, 
    height: 100, 
  },
  icon: {
    width: 70, 
    height: 70, 
    borderRadius: 70,
    alignItems: 'center', 
    justifyContent: 'center',
  }
});

export default Category;
