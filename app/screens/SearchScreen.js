import React from 'react';
import { Searchbar } from 'react-native-paper';
import {
  View, StyleSheet, Text
} from 'react-native';

class SearchScren extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    firstQuery: '',
  };

  render() {
    const { firstQuery } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, paddingTop: 30 }}>
          <Searchbar
            placeholder="Buscar"
            onChangeText={(query) => { this.setState({ firstQuery: query }); }}
            value={firstQuery}
            icon="arrow-back"
            onIconPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={{
          flex: 3, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'
        }}
        >
          <Text style={{ color: '#cccccc' }}>Sin resultados</Text>
        </View>
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
});

export default SearchScren;
