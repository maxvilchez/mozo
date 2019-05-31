import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { systemWeights, iOSColors, iOSUIKit } from 'react-native-typography';

const CardFood = ({ name, time, photo, details, price }) => (
  <Card onPress={details} style={styles.card}>
    <Card.Cover source={{ uri: photo }} />
    <Card.Content>
      <Text style={[systemWeights.bold, iOSUIKit.bodyEmphasized, { marginTop: 3 }]}>
        { ((name).length > 25) 
          ? (`${(name).substring(0, 25 - 3)}...`) 
          : name }
      </Text>
      <Text style={styles.timeText}>{`${time} min apróx.`}</Text>
      <View style={styles.price}>
        <Text style={styles.priceText}>{`S/.${price}`}</Text>
      </View>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    margin: 4,
  },
  price: {
    width: 50, 
    height: 50, 
    borderRadius: 50, 
    backgroundColor: '#FBCB33',
    alignItems: 'center', 
    flex: 1, 
    justifyContent: 'center', 
    position: 'absolute', 
    right: 10, 
    top: 2,
  },
  priceText: {
    ...systemWeights.bold
  },
  timeText: {
    color: iOSColors.gray,
    ...systemWeights.regular
  }
});

export default CardFood;
