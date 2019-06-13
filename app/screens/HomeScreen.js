import React from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { iOSColors, iOSUIKit, systemWeights } from 'react-native-typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Paragraph, IconButton } from 'react-native-paper';
import { fetchData } from '../actions';

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

          <View>
            <Paragraph style={styles.direction}>Dirección</Paragraph>
            <Paragraph>Av.jose pardo 668, Miraflores</Paragraph>
          </View>

          <Paragraph style={styles.recentlyTitle}>Categorias</Paragraph>

          <ScrollView horizontal>
            {
              categories.map(d => (
                <TouchableOpacity key={d.id} onPress={() => this.props.navigation.navigate('CategoryDetail', { id: d.id })}>
                  <Category name={d.name} color={d.color} icon={d.icon} />
                </TouchableOpacity>
              ))
            }
          </ScrollView>

          <Paragraph style={styles.recentlyTitle}>Plato del dia</Paragraph>

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

          <Paragraph style={styles.recentlyTitle}>Todo el restaurante</Paragraph>
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
  data: state.data
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchData: bindActionCreators(fetchData, dispatch),
  };
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
