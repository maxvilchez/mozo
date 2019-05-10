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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.headerTitle}>
            <Text style={iOSUIKit.largeTitleEmphasized}>Empresa</Text>
            <View style={styles.headerIconContainer}>
              <TouchableOpacity>
                <Icon.Ionicons
                  name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
                  size={28}
                  style={styles.headerIcon}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Icon.Ionicons
                  name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
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

          <Text style={styles.recentlyTitle}>Plato del dia</Text>

          <Text style={styles.recentlyTitle}>Todo el restaurante</Text>
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
    ...systemWeights.bold
  },
  headerIconContainer: {
    flexDirection: 'row'
  },
  headerIcon: {
    color: '#4a4a4a',
    marginLeft: 18
  },
  textNormal: {
    ...human.footnoteObject
  },
  textNormalGray: {
    ...human.footnoteObject,
    color: iOSColors.gray
  }
});
