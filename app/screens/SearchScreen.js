import React from 'react';
import { Searchbar } from 'react-native-paper';
import {
  View, StyleSheet, Text, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { fetchDataSearch } from '../actions';

import CardFoodItem from '../components/CardFoodItem';

class SearchScren extends React.Component {
  static navigationOptions = {
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
    firstQuery: '',
  };

  searchProducts = (query) => {
    this.setState({ firstQuery: query });
    let name = 'z';
    if (query.length > 0) { name = query; }
    this.props.actions.fetchDataSearch(name); 
  }

  render() {
    const { firstQuery } = this.state;
    const { listResults } = this.props.results;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, paddingLeft: 15, paddingRight: 15, paddingTop: 5 }}>
          <Searchbar
            placeholder="Buscar"
            onChangeText={query => this.searchProducts(query)}
            value={firstQuery}
          />
        </View>
        <View style={{
          flex: 5, justifyContent: 'center', flexDirection: 'row',
        }}
        >

          <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            {_.isEmpty(listResults) ? <Text style={{ color: '#cccccc', alignSelf: 'center' }}>Sin resultados</Text> : null}
            {
              listResults.map(d => (
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
});

const mapStateToProps = state => ({
  results: state.results,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchDataSearch: bindActionCreators(fetchDataSearch, dispatch),
  };
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScren);
