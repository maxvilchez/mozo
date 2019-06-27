import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { iOSColors, iOSUIKit, systemWeights } from 'react-native-typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Paragraph, IconButton } from 'react-native-paper';
import { fetchData, fetchDataCategories } from '../actions';

import CardFood from '../components/CardFood';
import CardFoodItem from '../components/CardFoodItem';
import Category from '../components/Category';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Empresa',
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
    headerRight: (
      <IconButton
        icon="search"
        size={26}
        onPress={() => navigation.navigate('Search')}
      />
    ),
  });

  state = {}

  componentWillMount() {
    this.props.actions.fetchData();
    this.props.actions.fetchDataCategories();
  }

  render() {
    const { listProducts, productToday } = this.props.products;
    const { listCategories } = this.props.categories;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>

          <View>
            <Paragraph style={styles.direction}>Dirección</Paragraph>
            <Paragraph>Av.jose pardo 668, Miraflores</Paragraph>
          </View>

          <Paragraph style={styles.recentlyTitle}>Categorias</Paragraph>

          <ScrollView horizontal>
            {
              listCategories.map(d => (
                <TouchableOpacity key={d.id} onPress={() => this.props.navigation.navigate('CategoryDetail', { id: d.id })}>
                  <Category name={d.nombre} color="#b5e2e1" icon="md-beer" />
                </TouchableOpacity>
              ))
            }
          </ScrollView>

          <Paragraph style={styles.recentlyTitle}>Plato del dia</Paragraph>

          {
            productToday && (
              <CardFood
                name={productToday.nombre}
                photo="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
                time={productToday.tiempo_aprox}
                details={() => this.props.navigation.navigate('Detail', { id: productToday.id })}
              />
            )
          }

          <Paragraph style={styles.recentlyTitle}>Todo el restaurante</Paragraph>
          {
            listProducts.map(d => (
              <CardFoodItem
                key={d.id}
                name={d.nombre}
                photo="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
                time={d.tiempo_aprox}
                price={d.precio_venta}
                details={() => this.props.navigation.navigate('Detail', { id: d.id })}
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  recentlyTitle: {
    ...iOSUIKit.largeTitleEmphasized,
    ...systemWeights.bold,
    marginTop: 15,
    marginBottom: 15,
  },
  direction: {
    color: iOSColors.gray
  },
});

const mapStateToProps = state => ({
  products: state.products,
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchData: bindActionCreators(fetchData, dispatch),
    fetchDataCategories: bindActionCreators(fetchDataCategories, dispatch),
  };
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
