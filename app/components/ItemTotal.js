import React from 'react';
import { Text, View, } from 'react-native';
import { iOSColors, iOSUIKit, systemWeights } from 'react-native-typography';

const ItemTotal = ({ name, number }) => (
  <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
    <View style={{ flex: 3, justifyContent: 'center', paddingLeft: 15 }}>
      <Text style={[{ color: iOSColors.gray }, iOSUIKit.bodyEmphasized]}>{name}</Text>
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text style={[iOSUIKit.title3Emphasized, systemWeights.bold]}>{`S/. ${number}`}</Text>
    </View>
  </View>
);

export default ItemTotal;
