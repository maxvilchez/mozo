import React from 'react';
import {
  View, Text, Image, StyleSheet, ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  human,
  systemWeights,
  iOSUIKit,
} from 'react-native-typography';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import StarRating from 'react-native-star-rating';
import RBSheet from 'react-native-raw-bottom-sheet';
import { fetchDataDetail, addToCart } from '../actions';

import ContentModal from '../components/ContentModal';

class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Detalles'
  };

  componentWillMount() {
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
    };

    this.props.actions.addToCart(product);
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
        <View style={{ padding: 20, flex: 3, }}>
          <ScrollView>
            <View style={{
              flex: 1, flexDirection: 'row', alignItems: 'flex-end',
            }}
            >
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
                <View style={{
                  width: 50, height: 50, borderRadius: 50, backgroundColor: '#FBCB33', alignItems: 'center'
                }}
                >
                  <Text>S/.</Text>
                  <Text style={iOSUIKit.subheadEmphasized}>9.99</Text>
                </View>
              </View>

            </View>

            <View style={{ flex: 3 }}>
              <Text style={styles.recentlyTitle}>{detail && detail.name}</Text>
              <Text style={{ marginTop: -10, color: '#4a4a4a', }}>15 min. aprox.</Text>
              <Text style={{ marginTop: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
              <Text style={[{ marginTop: 20, ...systemWeights.bold }, iOSUIKit.bodyEmphasized]}>Ingredientes:</Text>
            </View>
          </ScrollView>
        </View>
        <View style={{
          paddingTop: 5, paddingBottom: 5, flex: 1, alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center'
        }}
        >

          <Button onPress={() => this.RBSheet.open()} style={{ backgroundColor: '#FBCB33' }} color="#4a4a4a">AGREGAR POR S/.9.99</Button>
        </View>

        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          customStyles={{
            container: {
              justifyContent: 'center',
              alignItems: 'center'
            }
          }}
        >
          <ContentModal />
        </RBSheet>

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
    ...human.title2Object,
    ...systemWeights.bold,
    marginBottom: 10,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const mapStateToProps = state => ({
  data: state.dataDetail,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchDataDetail: bindActionCreators(fetchDataDetail, dispatch),
    addToCart: bindActionCreators(addToCart, dispatch),
  };
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
