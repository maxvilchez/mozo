import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform
} from 'react-native';
import {
  iOSColors,
  human,
  iOSUIKit,
  systemWeights
} from 'react-native-typography';
import { Icon } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions';

import CardFood from '../components/CardFood';
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
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.headerTitle}>
            <Text style={iOSUIKit.largeTitleEmphasized}>Empresa</Text>
            <View style={styles.headerIconContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Search')}
              >
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
                <TouchableOpacity key={d.id}>
                  <Category name={d.name} color={d.color} icon={d.icon} />
                </TouchableOpacity>
              ))
            }
          </ScrollView>

          <Text style={styles.recentlyTitle}>Plato del dia</Text>
          {menus.length > 0 && (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Detail', { id: menus[3].id })}
          >
            <CardFood name={menus[3].name} time={menus[3].review_count} img={menus[3].image_url} price={9.99} />
          </TouchableOpacity>
          )}
          <Text style={styles.recentlyTitle}>Todo el restaurante</Text>
          <ScrollView>
            {
              menus.map(d => (
                <TouchableOpacity key={d.id} onPress={() => this.props.navigation.navigate('Detail', { id: d.id })}>
                  <CardFood name={d.name} time={d.review_count} img={d.image_url} price={9.99} />
                </TouchableOpacity>
              ))
            }
          </ScrollView>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 7
  },
  contentContainer: {
    paddingTop: 30
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
    ...human.title2Object,
    ...systemWeights.bold,
    marginBottom: 15,
  },
  headerIconContainer: {
    flexDirection: 'row'
  },
  headerIcon: {
    color: '#4a4a4a',
  },
  textNormal: {
    ...human.footnoteObject
  },
  textNormalGray: {
    ...human.footnoteObject,
    color: iOSColors.gray
  },
  badge: {
    color: '#fff',
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    right: 10,
    width: 20,
    height: 20,
    textAlign: 'center',
    backgroundColor: 'red',
    borderRadius: 50
  }
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
