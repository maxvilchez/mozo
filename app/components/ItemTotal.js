import React from 'react';
import { Text, View, } from 'react-native';

const ItemTotal = ({ name, number }) => (
  <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
    <View style={{ flex: 3, justifyContent: 'center', }}>
      <Text>{name}</Text>
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text>{`S/. ${number}`}</Text>
    </View>
  </View>
);

export default ItemTotal;
