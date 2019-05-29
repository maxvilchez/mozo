import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { IconButton, } from 'react-native-paper';

const ItemCart = ({ item, callback }) => (
  <View key={item.id} style={styles.item}>
    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', }}>
      <IconButton
        icon="delete-forever"
        onPress={() => callback(item.id, item.price)}
      />
    </View>
    <View style={{ flex: 3, justifyContent: 'center', }}>
      <Text>{item.name}</Text>
      <Text>{`${15} min. aprox.`}</Text>
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text>{`S/. ${item.price}`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1
  },
});

export default ItemCart;
