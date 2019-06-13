import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { iOSColors, iOSUIKit, systemWeights } from 'react-native-typography';
import { Icon } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions';

import CardFood from '../components/CardFood';
import CardFoodItem from '../components/CardFoodItem';
import Category from '../components/Category';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    categories: [
      {
        id: 1,
        color: '#ff8f73',
        name: 'Pizza',
        icon: 'md-pizza'
      },
      {
        id: 2,
        color: '#b5e2e1',
        name: 'Bebidas',
        icon: 'md-beer'
      },
      {
        id: 3,
        color: '#dde657',
        name: 'Frutas',
        icon: 'logo-apple'
      },
      {
        id: 4,
        color: '#ffc300',
        name: 'Cafes',
        icon: 'md-cafe'
      },
      {
        id: 5,
        color: '#fac1b8',
        name: 'Tragos',
        icon: 'md-wine'
      }
    ]
  }

  componentWillMount() {
    this.props.actions.fetchData();
  }

  render() {
    const { menus } = this.props.data;
    const { categories } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
          
          <View style={styles.headerTitle}>
            <Text style={iOSUIKit.largeTitleEmphasized}>Empresa</Text>
            <View style={styles.headerIconContainer}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')}>
                <Icon.Ionicons
                  name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
                  size={28}
                  style={styles.headerIcon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.headerSubTitle}>
            <Text style={styles.textNormalGray}>Dirección</Text>
            <Text style={styles.textNormal}>Av.jose pardo 668, Miraflores</Text>
          </View>

          <Text style={styles.recentlyTitle}>Categorias</Text>

          <ScrollView horizontal style={{ marginBottom: 15 }}>
            {
              categories.map(d => (
                <TouchableOpacity key={d.id} onPress={() => console.log(d.name)}>
                  <Category name={d.name} color={d.color} icon={d.icon} />
                </TouchableOpacity>
              ))
            }
          </ScrollView>

          <Text style={styles.recentlyTitle}>Plato del dia</Text>

          {
            menus.length > 0 && (
              <CardFood 
                name={menus[5].name} 
                photo={menus[5].image_url} 
                time={15}
                details={() => this.props.navigation.navigate('Detail', { id: menus[5].id })} 
              />
            )
          }

          <Text style={styles.recentlyTitle}>Lo mejor del restaurante</Text>
          {
            menus.map(d => (
              <CardFoodItem
                key={d.id} 
                name={d.name} 
                photo={d.image_url} 
                time={15} 
                price={9}
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
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerSubTitle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: iOSColors.customGray
  },
  recentlyTitle: {
    ...iOSUIKit.title3Emphasized,
    ...systemWeights.bold,
    marginTop: 20,
    marginBottom: 15,
  },
  headerIconContainer: {
    flexDirection: 'row',
    paddingRight: 5,
  },
  headerIcon: {
    color: '#4a4a4a',
  },
  textNormal: {
    ...systemWeights.regular
  },
  textNormalGray: {
    ...systemWeights.regular,
    color: iOSColors.gray
  },
});

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchData: bindActionCreators(fetchData, dispatch),
  };
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
