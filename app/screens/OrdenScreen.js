import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class OrdenScreen extends React.Component {
  static navigationOptions = {
    title: 'Mi lista de pedido'
  };

  state = {}

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={{ flex: 1, alignSelf: 'center' }}>Mi lista de pedidos</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});
