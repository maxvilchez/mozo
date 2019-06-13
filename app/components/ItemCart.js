import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { IconButton, } from 'react-native-paper';
import { iOSColors, iOSUIKit, systemWeights } from 'react-native-typography';

const ItemCart = ({ item, callback }) => (
  <View style={styles.item}>
    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', }}>
      <IconButton
        icon="delete-forever"
        onPress={() => callback(item.id, item.precio)}
      />
    </View>
    <View style={{ flex: 3, justifyContent: 'center', }}>
      <Text style={[systemWeights.bold, iOSUIKit.bodyEmphasized]}>{item.plato}</Text>
      <Text style={[systemWeights.regular, { color: iOSColors.gray }]}>{`${15} min. aprox.`}</Text>
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text style={[iOSUIKit.bodyEmphasized, systemWeights.bold]}>{`S/. ${item.precio}`}</Text>
      <Text style={[iOSUIKit.body, systemWeights.regular, { color: iOSColors.gray, fontSize: 12 }]}>(x{item.cantidad})</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginTop: 7,
    marginBottom: 7,
  },
});

export default ItemCart;
