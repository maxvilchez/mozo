import React from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, TextInput, Divider } from 'react-native-paper';
import { iOSColors, iOSUIKit, systemWeights } from 'react-native-typography';
import { removeFromCart, emptyCart, addOrder } from '../actions';

import ItemCart from '../components/ItemCart';
import ItemTotal from '../components/ItemTotal';

class OrdenScreen extends React.Component {
  static navigationOptions = {
    title: 'Mi pedido',
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
    table: '',
    username: '',
    time: '',
  }

  checkoutOrder = () => {
    const { table } = this.state;

    if (table === '') {
      Alert.alert('Campo obligatorio!', 'Ingrese su número de mesa');
      return;
    }

    this.props.actions.addOrder(this.state);
    this.props.navigation.navigate('OrderCheckout');
  }    

  removeProduct = (id,) => {
    const { cart } = this.props.cart;
    const item = cart.filter(d => d.id === id);
    const product = {
      id,
      item: item[0],
    };
    this.props.actions.removeFromCart(product);
  }

  render() {
    const { cart, total } = this.props.cart;
    if (cart.length > 0) {
      return (
        <View style={styles.container}>
          <View style={{ flex: 5, }}>
            <ScrollView style={styles.contentScroll}>
              <TextInput
                mode="outlined"
                label="# de Mesa"
                value={this.state.table}
                onChangeText={table => this.setState({ table })}
                underlineColor="#4A4A4A"
                underlineColorAndroid="#4A4A4A"
                selectionColor="#4A4A4A"
                theme={{ colors: { primary: '#4A4A4A', underlineColor: '#4A4A4A', } }}
              />
              <TextInput
                mode="outlined"
                label="Nombre"
                value={this.state.username}
                onChangeText={username => this.setState({ username })}
                underlineColor="#4A4A4A"
                underlineColorAndroid="#4A4A4A"
                selectionColor="#4A4A4A"
                style={{ marginTop: 5 }}
                theme={{ colors: { primary: '#4A4A4A', underlineColor: '#4A4A4A', } }}
              />
              <View style={styles.contentDetail}>
                {cart.map(d => (
                  <ItemCart key={d.id} item={d} callback={this.removeProduct} />
                ))}
                <View style={{ marginTop: 10 }}>
                  <ItemTotal name="SubTotal" number={0} />
                  <Divider />
                  <ItemTotal name="IGV" number={0} />
                  <Divider />
                  <ItemTotal name="Total" number={total} />
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={[styles.contentFooter, { backgroundColor: '#ffffff' }]}>
            <Button onPress={() => this.checkoutOrder()} style={{ backgroundColor: '#FBCB33' }} color="#4A4A4A">Continuar</Button>
          </View>
        </View>
      );
    }
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={[systemWeights.bold, iOSUIKit.title3Emphasized, { color: iOSColors.gray }]}>Sin datos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  contentScroll: {
    flex: 1,
  },
  contentDetail: {
    marginBottom: 20,
    marginTop: 20,
    borderColor: '#cccccc',
    borderStyle: 'dashed',
    padding: 5,
    borderWidth: 1,
    borderRadius: 4
  },
  contentFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  data: state.dataDetail,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    removeFromCart: bindActionCreators(removeFromCart, dispatch),
    emptyCart: bindActionCreators(emptyCart, dispatch),
    addOrder: bindActionCreators(addOrder, dispatch),
  };
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdenScreen);
