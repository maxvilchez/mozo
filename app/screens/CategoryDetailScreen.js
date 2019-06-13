import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { iOSColors, iOSUIKit, systemWeights } from 'react-native-typography';

class CategoryDetailScreen extends React.Component {
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

  state = {}

  componentWillMount = () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    console.log(id);
  }

  render() {
    return (
      <View style={styles.container}>
        <Paragraph style={styles.title}>Nombre de categoria</Paragraph>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    ...iOSUIKit.title3Emphasized,
    ...systemWeights.bold,
    color: iOSColors.black,
  }
});

export default CategoryDetailScreen;
