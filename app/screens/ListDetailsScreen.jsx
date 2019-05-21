import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import CardFood from '../components/CardFood';

import {
  human,
  systemWeights
} from 'react-native-typography';

export default class ListDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Platos del dia'
  };

  state = {}

  render() {
    const { navigation } = this.props;
    const foods = navigation.getParam('foods', []);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Text style={styles.recentlyTitle}>Platos</Text>
          {
            foods.map((d, i) => {
              return (
                <TouchableOpacity key={i}>
                  <CardFood name={d.name} time={d.review_count} img={d.image_url} price={9.99} horizontal={false}/>
                </TouchableOpacity>
              )
            })
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
    padding: 15,
  },
  recentlyTitle: {
    ...human.title2Object,
    ...systemWeights.bold,
    marginBottom: 10,
  },
});