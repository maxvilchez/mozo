import React from 'react';
import {
  StyleSheet, Text, View, ImageBackground
} from 'react-native';
import {
  iOSColors,
  iOSUIKit
} from 'react-native-typography';

import Layout from '../constants/Layout';

const CardFood = ({
  name, time, img, price, horizontal
}) => (
  <ImageBackground source={{ uri: img }} style={[{ height: 160, marginBottom: 20, }, horizontal ? { width: (Layout.window.width - 60), marginRight: 10 } : { width: '100%' }]} borderRadius={12}>
    <View style={styles.container}>
      <View>
        <Text style={[iOSUIKit.title3Emphasized, { color: iOSColors.white }]}>{name}</Text>
        <Text style={[iOSUIKit.footnoteEmphasized, { color: iOSColors.lightGray }]}>
          {`${time} min apróx.`}
        </Text>
      </View>
      <View style={{
        width: 50, height: 50, borderRadius: 50, backgroundColor: '#FBCB33', alignItems: 'center'
      }}
      >
        <Text>S/.</Text>
        <Text style={iOSUIKit.subheadEmphasized}>{price}</Text>

      </View>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
  },
});

export default CardFood;
