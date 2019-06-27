import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { iOSColors, systemWeights, iOSUIKit } from 'react-native-typography';
import { Button, IconButton, Snackbar, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import StarRating from 'react-native-star-rating';
import RBSheet from 'react-native-raw-bottom-sheet';
import { fetchDataDetail, addToCart } from '../actions';

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detalles',
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
    quantity: 0,
    visibleSnackbar: false,
  }

  componentWillMount = () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    this.props.actions.fetchDataDetail(id);
  }

  addCart = () => {
    const { details } = this.props.products;
    const product = {
      id: details.id,
      plato: details.nombre,
      precio: details.precio_venta,
      cantidad: this.state.quantity,
      tiempo: details.tiempo_aprox
    };

    this.props.actions.addToCart(product);
    this.RBSheet.close();

    this.setState(state => ({ visibleSnackbar: !state.visibleSnackbar }));
  };

  addQuantity = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };

  removeQuantity = () => {
    const { quantity } = this.state;
    if (quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };

  render() {
    const { details } = this.props.products;
    return (
      <View style={styles.container}>

        <View style={{ flex: 2 }}>

          {!isEmpty(details) && (
          <Swiper>
            <View style={styles.slideContainer}>
              <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500' }}
              />
            </View>
          </Swiper>
          )}

        </View>
        <View style={{ padding: 10, flex: 3, }}>
          <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }}>

              <View style={{ flex: 1, }}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={details && details.valoracion}
                  fullStarColor="#FBCB33"
                  starSize={22}
                  emptyStar="ios-heart-empty"
                  fullStar="ios-heart"
                  halfStar="ios-heart-half"
                  iconSet="Ionicons"
                />
              </View>

              <View style={{ flex: 2, alignItems: 'flex-end', }}>
                <View style={styles.price}>
                  <Text style={styles.priceText}>{details && `S/.${details.precio_venta}`}</Text>
                </View>
              </View>

            </View>

            <View style={{ flex: 3 }}>

              <Text style={styles.recentlyTitle}>{details && details.nombre}</Text>
              <Text style={styles.time}>
                {details && details.tiempo_aprox}
                {' '}
                min. aprox.
              </Text>
              <Text style={[systemWeights.regular, { marginTop: 10 }]}>{details && details.descripcion}</Text>
              <Text style={[{ marginTop: 20, ...systemWeights.bold }, iOSUIKit.bodyEmphasized]}>Ingredientes:</Text>

              <View style={{ paddingLeft: 15 }}>
                <Paragraph>1. 1kg de harina</Paragraph>
                <Paragraph>2. 15g de sal</Paragraph>
                <Paragraph>3. Una cucharadita de azucar</Paragraph>
                <Paragraph>4. 600g de agua</Paragraph>
                <Paragraph>5. 45g de levadura fresca/15 g de levadura seca</Paragraph>
                <Paragraph>6. Una cucharadita de azucar</Paragraph>
                <Paragraph>7. 15g de sal</Paragraph>
                <Paragraph>8. Una cucharadita de azucar</Paragraph>
              </View>

            </View>
          </ScrollView>
        </View>
        <View style={styles.contentFooter}>
          <Button
            onPress={() => this.RBSheet.open()}
            style={{ backgroundColor: '#FBCB33' }}
            color="#4a4a4a"
          >
              AGREGAR POR 
            {' '}
            {details && `S/.${details.precio_venta}`}
          </Button>
        </View>

        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
        >
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={{ flex: 1, flexDirection: 'row', }}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                  <Text style={{ ...systemWeights.bold }}>{details && details.nombre}</Text>
                  <Text style={styles.time}>{details && `${details.tiempo_aprox} min. aprox.`}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  {details && (
                    <Image source={{ uri: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500' }} style={styles.image} />
                  )}
                </View>
              </View>
              <View style={styles.bottomAddRemove}>
                <IconButton
                  icon="remove-circle-outline"
                  onPress={() => this.removeQuantity()}
                />
                <Text>{this.state.quantity}</Text>
                <IconButton
                  icon="add-circle-outline"
                  onPress={() => this.addQuantity()}
                />
              </View>
            </View>
            <View style={[styles.footer, { justifyContent: 'center' }]}>
              <Button onPress={() => this.addCart()} style={{ backgroundColor: '#FBCB33' }} color="#4a4a4a">Agregar</Button>
            </View>
          </View>

        </RBSheet>

        <Snackbar
          visible={this.state.visibleSnackbar}
          onDismiss={() => this.setState({ visibleSnackbar: false })}
          action={{
            label: 'Ok',
            onPress: () => {
              // Do something
            },
          }}
        >
          Agregado al pedido!
        </Snackbar>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  recentlyTitle: {
    ...iOSUIKit.title3Emphasized,
    ...systemWeights.bold,
    marginBottom: 10,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 2,
    padding: 20,
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    maxHeight: 60,
  },
  bottomAddRemove: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  price: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#FBCB33',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  priceText: {
    ...systemWeights.bold,
    ...iOSUIKit.bodyEmphasized,
  },
  contentFooter: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  time: {
    color: iOSColors.gray,
    ...systemWeights.regular,
  }
});

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchDataDetail: bindActionCreators(fetchDataDetail, dispatch),
    addToCart: bindActionCreators(addToCart, dispatch),
  };
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
