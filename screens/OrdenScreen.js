import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class OrdenScreen extends React.Component {
  static navigationOptions = {
    title: 'Mi lista de pedido',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Mi lista de pedidos</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});