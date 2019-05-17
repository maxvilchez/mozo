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
import { fetchData } from '../actions';

import CardFood from '../components/CardFood';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    const { menus } = this.props.data;
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
                <View style={{ position: 'relative' }}>
                  <Text style={styles.badge}> 2 </Text>
                  <Icon.Ionicons
                    name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
                    size={28}
                    style={styles.headerIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.headerSubTitle}>
            <Text style={styles.textNormalGray}>Dirección</Text>
            <Text style={styles.textNormal}>Av.jose pardo 668, Miraflores</Text>
          </View>

          <Text style={styles.recentlyTitle}>Categorias</Text>

          <Text style={styles.recentlyTitle}>Plato del dia</Text>

          {menus.length > 0 && (
          <TouchableOpacity>
            <CardFood name={menus[3].name} time={menus[3].review_count} img={menus[3].image_url} price={9.99} />
          </TouchableOpacity>
          )}
          <Text style={styles.recentlyTitle}>Todo el restaurante</Text>
          <ScrollView horizontal>
            {
              menus.map(d => (
                <TouchableOpacity key={d.id}>
                  <CardFood name={d.name} time={d.review_count} img={d.image_url} price={9.99} horizontal />
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

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
