import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Dialog, TouchableRipple, RadioButton, Subheading } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { iOSColors, iOSUIKit, systemWeights } from 'react-native-typography';

import { changePayment } from '../actions';

const API_URL = 'http://192.168.1.144:8080/ProyectoIntegrador';

class OrderCheckoutScreen extends React.Component {
  static navigationOptions = {
    title: 'Checkout',
    headerStyle: {
      backgroundColor: '#FFFFFF',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: '#4A4A4A',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    visible: false,
    payment: 'cash'
  }

  showDialog = () => this.setState({ visible: true });

  hideDialog = () => this.setState({ visible: false });

  selectMethod = () => {
    const { payment } = this.state;
    this.props.actions.changePayment(payment);
    this.setState({ visible: false });
  }

  sendOrder = () => {
    const { table, time, username } = this.props.order;
    const { cart, total } = this.props.cart;
    
    const order = {
      nombre_mesa: username,
      nro_mesa: table,
      total,
      detallePedido: cart
    };
    
    fetch(`${API_URL}/pedidos/`, {
      method: 'POST',
      headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(order)
    })
      .then(response => JSON.stringify(response.json())) 
      .then((responseData) => {
        console.log(`response: ${responseData}`);  
        this.props.navigation.navigate('OrderStatus', { time });
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    const { payment, table, time, username } = this.props.order;
    const { total } = this.props.cart;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 5, padding: 15 }}>
          <View style={styles.contentRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textLeft}># de Mesa</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.textRight}>{ table }</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textLeft}>Entrega estimada</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.textRight}>{ `${time} min.` }</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textLeft}>A nombre de</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.textRight}>{ username === '' ? 'Anonymous' : username }</Text>
            </View>
          </View>
          <View style={styles.contentRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textLeft}>Método de pago</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Button onPress={this.showDialog} color="#4A4A4A">Elegir...</Button>
            </View>
          </View>
          <View style={{ flex: 3, flexDirection: 'row', paddingTop: 20 }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textTotal}>Total a pagar</Text>
              {payment === 'cash' ? (<Text style={styles.textHelp}>Efectivo</Text>) : (<Text style={styles.textHelp}>Tarjeta de débito</Text>)}
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.price}>{`S/. ${total}`}</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button onPress={() => this.sendOrder()} style={{ backgroundColor: '#FBCB33' }} color="#4A4A4A">Enviar Pedido</Button>
        </View>
        <Dialog visible={this.state.visible} dismissable={false}>
          <Dialog.Title>Método de pago...</Dialog.Title>
          <Dialog.ScrollArea>

            <TouchableRipple
              onPress={() => this.setState({ payment: 'cash' })}
            >
              <View style={styles.row}>
                <View pointerEvents="none">
                  <RadioButton
                    color="#FBCB33"
                    value="cash"
                    status={this.state.payment === 'cash' ? 'checked' : 'unchecked'}
                  />
                </View>
                <Subheading style={styles.text}>Efectivo</Subheading>
              </View>
            </TouchableRipple>

            <TouchableRipple
              onPress={() => this.setState({ payment: 'debit' })}
            >
              <View style={styles.row}>
                <View pointerEvents="none">
                  <RadioButton
                    color="#FBCB33"
                    value="debit"
                    status={this.state.payment === 'debit' ? 'checked' : 'unchecked'}
                  />
                </View>
                <Subheading style={styles.text}>Tarjeta de débito</Subheading>
              </View>
            </TouchableRipple>

          </Dialog.ScrollArea>
          <Dialog.Actions>
            <Button onPress={this.hideDialog} color="#4A4A4A">Cancel</Button>
            <Button onPress={this.selectMethod} color="#4A4A4A">OK</Button>
          </Dialog.Actions>
        </Dialog>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  textHelp: {
    color: iOSColors.gray,
    ...systemWeights.regular,
  },
  textLeft: {
    ...iOSUIKit.bodyEmphasized,
  },
  textRight: {
    ...iOSUIKit.title3Emphasized,
    ...systemWeights.bold,
    color: iOSColors.gray,
  },
  textTotal: {
    ...iOSUIKit.title3Emphasized,
    ...systemWeights.bold,
  },
  price: {
    ...iOSUIKit.largeTitleEmphasized,
    ...systemWeights.bold,
  }
});

const mapStateToProps = state => ({
  cart: state.cart,
  order: state.order,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    changePayment: bindActionCreators(changePayment, dispatch),
  };
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderCheckoutScreen);
