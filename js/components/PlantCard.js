import React from 'react';
import {
  View, TouchableHighlight, StyleSheet, Image, Text
} from 'react-native';

const info = require('../res/infoButton.png');
const add = require('../res/addButton.png');

const PlantCard = (props) => {
  const {
    plantName, addPlantToRenderList, toggleInfoPage, icon
  } = props;

  const handleClick = () => {
    addPlantToRenderList(plantName);
  };

  return (
    <View style={styles.plantCard}>
      <View style={styles.header}>
        <Text
          style={{
            flex: 1,
            marginTop: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20
          }}
        >
          {plantName}
        </Text>
      </View>

      <View style={{ flex: 3, flexDirection: 'row' }}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={handleClick} underlayColor="#00000000">
            <Image style={styles.icon} source={add} />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => toggleInfoPage(plantName, icon)}
            underlayColor="#00000000"
          >
            <Image style={styles.icon} source={info} />
          </TouchableHighlight>
        </View>

        <Image source={{ uri: icon }} style={{ flex: 2 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plantCard: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    height: 175,
    alignItems: 'center',
    margin: 3,
    borderRadius: 2
  },
  buttonContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 2,
    borderColor: 'red'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

export default PlantCard;
