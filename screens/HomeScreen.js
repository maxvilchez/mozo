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
import axios from 'axios';
import { Icon } from 'expo';

import CardFood from '../components/CardFood';


const token = '29l1GH32Y2MBz_x1NHaMYe-QY0YQvAyVkx1OwmCQXIAUw8Q93xYlj8GNBI6Kc-HWVLnRHr3Bj1i_9CR4iormr-LQm5CLmywKSde_WY6miWl5B4pgTLAX7Z-ht2bQXHYx';

const config = {
  headers: {'Authorization': `Bearer ${token}`},
  params: {
    location: 'Lima'
  }
};

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    categories: [
      {"id": "1", "title": "Postres", "icon": ""},
      {"id": "2", "title": "Helados", "icon": ""},
      {"id": "3", "title": "Fast Food", "icon": ""},
      {"id": "4", "title": "Hamburquesa", "icon": ""},
      {"id": "5", "title": "Pizza", "icon": ""},
    ],
    today: [],
    all: [],
  }

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
      .then(response => {
        
        console.log(response.data.businesses);
        
        this.setState({
          all: response.data.businesses,
          today: response.data.businesses[5]
        })
      })
      .catch(error => console.log(error))
  }

  render() {

    const { today, all } = this.state;

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

          <TouchableOpacity>
            <CardFood name={today.name} time={today.review_count} img={today.image_url} price={9.99} />
          </TouchableOpacity>

          <Text style={styles.recentlyTitle}>Todo el restaurante</Text>
          <ScrollView horizontal>
            {
              all.map((d, i) => {
                return (
                  <TouchableOpacity key={i}>
                    <CardFood name={d.name} time={d.review_count} img={d.image_url} price={9.99} horizontal={true}/>
                  </TouchableOpacity>
                )
              })
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
  }
});
