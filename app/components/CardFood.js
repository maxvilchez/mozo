import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const CardFood = ({ name, time, photo, details }) => (
  <Card onPress={details} style={styles.card}>
    <Card.Cover source={{ uri: photo }} />
    <Card.Content>
      <Title>
        { ((name).length > 25) 
          ? (`${(name).substring(0, 25 - 3)}...`) 
          : name }
      </Title>
      <Paragraph>
        {`${time} min apróx.`}
      </Paragraph>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    margin: 0,
  },
});

export default CardFood;
