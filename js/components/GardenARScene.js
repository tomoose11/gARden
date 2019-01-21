/* eslint no-underscore-dangle: 0 */

import React, { Component } from 'react';

import { ViroARScene, ViroAmbientLight, ViroSpotLight } from 'react-viro';

import { checkForNewSlug, createID, filterArray } from '../../utils';
import 'firebase/firestore';
import api from '../api';
import PlantObject from './PlantObject';

class GardenARScene extends Component {
  state = {
    plantFiles: {},
    plantsToRender: [],
    childIsScreenshotTaken: false,
    childIsReset: false
  };

  addScreenshot = async () => {
    const { sceneNavigator } = this.props;
    sceneNavigator.takeScreenshot('aFile', true);
  };

  callScreenshot = () => {
    this.addScreenshot();
    this.setState(prevState => ({
      childIsScreenshotTaken: !prevState.childIsScreenshotTaken
    }));
  };

  callResetCounter = () => {
    const {
      sceneNavigator: {
        viroAppProps: { isReset, resetCounter }
      }
    } = this.props;
    this.setState({
      childIsReset: isReset,
      plantsToRender: [],
      plantFiles: {}
    });
    resetCounter();
  };

  addPlantToScreen = () => {
    const {
      sceneNavigator: {
        viroAppProps: { plantTypeCounter }
      }
    } = this.props;
    const { plantsToRender } = this.state;
    let newTypeToRender = '';
    Object.keys(plantTypeCounter).forEach((plantType) => {
      if (
        plantTypeCounter[plantType]
        !== plantsToRender.filter(plant => plant.name === plantType).length
      ) {
        newTypeToRender = plantType;
      }
    });
    this.setState((prevState) => {
      const newPlant = { name: newTypeToRender, id: createID(prevState.plantsToRender) };
      return { plantsToRender: [...prevState.plantsToRender, newPlant] };
    });
  };

  componentDidUpdate = () => {
    const {
      sceneNavigator: {
        viroAppProps: {
          plantTypeCounter, makeIsARLoadingTrue, isReset, parentIsScreenshotTaken
        }
      }
    } = this.props;
    const {
      plantsToRender, plantFiles, childIsReset, childIsScreenshotTaken
    } = this.state;
    const numOfPlants = Object.values(plantTypeCounter).reduce((acc, val) => acc + val, 0);
    const isNewObj = checkForNewSlug(Object.keys(plantFiles), Object.keys(plantTypeCounter));
    const { bool, slugName } = isNewObj;

    if (bool && plantsToRender !== plantTypeCounter) {
      makeIsARLoadingTrue();
      this.fetchPlantAttributes(slugName);
    } else if (plantsToRender.length !== numOfPlants) {
      this.addPlantToScreen();
    }
    if (parentIsScreenshotTaken !== childIsScreenshotTaken) {
      this.callScreenshot();
    }
    if (isReset !== childIsReset) {
      this.callResetCounter();
    }
  };

  removePlantFromRenderList = (id) => {
    this.setState((prevState) => {
      const { plantsToRender } = prevState;
      const filteredArray = filterArray(plantsToRender, id);
      return {
        plantsToRender: [...filteredArray]
      };
    });
  };

  fetchPlantAttributes = (slugName) => {
    const {
      sceneNavigator: {
        viroAppProps: { makeIsARLoadingFalse }
      }
    } = this.props;
    api.getPlantAttributes().then((doc) => {
      if (doc.exists) {
        const {
          attrsObj: {
            [slugName]: { obj, texture, scale }
          }
        } = doc.data();
        this.setState(
          prevState => ({
            plantFiles: {
              ...prevState.plantFiles,
              [slugName]: { obj, texture, scale }
            }
          }),
          () => {
            makeIsARLoadingFalse();
          }
        );
      }
    });
  };

  render() {
    const {
      sceneNavigator: {
        viroAppProps: { lowerPlantCounterByType }
      }
    } = this.props;
    const { plantsToRender, plantFiles } = this.state;
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" influenceBitMask={1} />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.91]}
          position={[0, 3, 3]}
          color="#ffffff"
          castsShadow
          lightinfluenceBitMask={2}
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={5}
          shadowOpacity={0.2}
          intensity={250}
        />

        {plantsToRender.map(plant => (
          <PlantObject
            key={plant.id}
            removePlantFromRenderList={this.removePlantFromRenderList}
            filesForPlant={plantFiles[plant.name]}
            plantID={plant.id}
            plantName={plant.name}
            lowerPlantCounterByType={lowerPlantCounterByType}
          />
        ))}
      </ViroARScene>
    );
  }
}

module.exports = GardenARScene;
