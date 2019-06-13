import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, ActivityIndicator } from 'react-native-paper';
import { iOSColors, systemWeights, iOSUIKit } from 'react-native-typography';

import logo from '../../assets/logo.png';

class OrderStatusScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    const { navigation } = this.props;
    const time = navigation.getParam('time');
    return (
      <View style={{ flex: 1, padding: 7 }}>
        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={logo} style={{ width: 150, height: 150 }} />
          <Text style={styles.title}>Pedido enviado!</Text>
          <Text style={styles.time}>{`Tiempo estimado: ${time}min aprox.`}</Text>
          <Text style={styles.status}>Esperando confirmación...</Text>
          <ActivityIndicator animating color="#FBCB33" />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
            onPress={() => this.props.navigation.navigate('Main')} 
            style={{ backgroundColor: '#FBCB33' }} 
            color="#4a4a4a"
          >
            Regresar al inicio
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    ...iOSUIKit.largeTitleEmphasized,
    ...systemWeights.bold,
  },
  status: {
    color: iOSColors.gray,
    marginTop: 20,
  },
  time: {
    color: iOSColors.gray,
    ...iOSUIKit.subheadEmphasized,
  }
});

export default OrderStatusScreen;
