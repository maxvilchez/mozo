/* eslint-disable array-callback-return */
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { iOSColors, iOSUIKit, systemWeights } from 'react-native-typography';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDataCategoriesDetail } from '../actions';

import CardFood from '../components/CardFood';

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

  state = {
    id: null
  }

  componentWillMount = () => {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    this.setState({ id });
    this.props.actions.fetchDataCategoriesDetail(id);
  }

  render() {
    const { details, listCategories } = this.props.categories;
    const { id } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
          <Paragraph style={styles.title}>
            {
              // eslint-disable-next-line array-callback-return
              // eslint-disable-next-line consistent-return
              listCategories.map((d) => {
                // eslint-disable-next-line eqeqeq
                if (d.id == id) {
                  return d.descripcion;
                }
              })
            }
          </Paragraph>

          {
            details.map(d => (
              <CardFood
                key={d.id}
                name={d.nombre}
                photo="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
                time={d.tiempo_aprox}
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
  title: {
    ...iOSUIKit.largeTitleEmphasized,
    ...systemWeights.bold,
    color: iOSColors.black,
    marginBottom: 15
  }
});

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    fetchDataCategoriesDetail: bindActionCreators(fetchDataCategoriesDetail, dispatch),
  };
  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetailScreen);
