import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { systemWeights } from 'react-native-typography';

const CardFoodItem = ({ name, time, photo, details, price }) => (
  <Card onPress={details} style={styles.card}>
    <Card.Content>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Card.Cover source={{ uri: photo }} style={styles.image} />
        </View>

        <View style={{ flex: 2, paddingLeft: 10, }}>
          <Title>
            { ((name).length > 20) 
              ? (`${(name).substring(0, 20 - 3)}...`) 
              : name }
          </Title>
          <Paragraph>
            {`${time} min apróx.`}
          </Paragraph>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.price}>
              <Paragraph style={styles.priceText}>{`S/.${price}`}</Paragraph>
            </View>
          </View>
        </View>
        
      </View>      
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 5,
  },
  price: {
    width: 50, 
    height: 35,
    backgroundColor: '#FBCB33',
    alignItems: 'center', 
    flex: 1, 
    justifyContent: 'center', 
    position: 'absolute', 
    right: 0, 
    bottom: -16,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  priceText: {
    ...systemWeights.bold
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    maxHeight: 60,
  },
});

export default CardFoodItem;
