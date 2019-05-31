import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import { iOSColors, systemWeights, iOSUIKit } from 'react-native-typography';
import { Button, IconButton, Snackbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import StarRating from 'react-native-star-rating';
import RBSheet from 'react-native-raw-bottom-sheet';
import { fetchDataDetail, addToCart } from '../actions';

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detalle'
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
    const { detail } = this.props.data;
    const product = {
      id: detail.id,
      name: detail.name,
      price: 9,
      quantity: this.state.quantity,
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
    const { detail } = this.props.data;
    const { photos } = detail;
    return (
      <View style={styles.container}>

        <View style={{ flex: 2 }}>

          {!isEmpty(detail) && (
          <Swiper>
            {photos.map((v, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <View style={styles.slideContainer} key={i}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={{ uri: v }}
                />
              </View>
            ))}
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
                  rating={detail && detail.rating}
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
                  <Text style={styles.priceText}>{`S/.${15}`}</Text>
                </View>
              </View>

            </View>

            <View style={{ flex: 3 }}>
              <Text style={styles.recentlyTitle}>{detail && detail.name}</Text>
              <Text style={styles.time}>15 min. aprox.</Text>
              <Text style={[systemWeights.regular, { marginTop: 10 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              <Text style={[{ marginTop: 20, ...systemWeights.bold }, iOSUIKit.bodyEmphasized]}>Ingredientes:</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.contentFooter}>
          <Button 
            onPress={() => this.RBSheet.open()} 
            style={{ backgroundColor: '#FBCB33' }} 
            color="#4a4a4a"
          >
              AGREGAR POR S/.15
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
                  <Text style={{ ...systemWeights.bold }}>{detail && detail.name}</Text>
                  <Text style={styles.time}>{`${15} min. aprox.`}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  {detail && (
                    <Image source={{ uri: detail.image_url }} style={styles.image} />
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
          El producto se agrego a su pedido.
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
  data: state.dataDetail,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchDataDetail: bindActionCreators(fetchDataDetail, dispatch),
    addToCart: bindActionCreators(addToCart, dispatch),
  };
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
