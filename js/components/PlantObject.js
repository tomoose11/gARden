import React, { Component } from 'react';

import {
  ViroNode, Viro3DObject, ViroQuad, ViroMaterials
} from 'react-viro';

const deleteButton = require('../res/deleteButton.png');
const shadowMaterial = require('../res/empty.png');

class PlantObject extends Component {
  state = {
    isInFocus: false
  };

  toggleIsInFocus = () => {
    this.setState(prevState => ({ isInFocus: !prevState.isInFocus }));
  };

  handleDeleteClick = () => {
    const {
      removePlantFromRenderList, plantID, plantName, lowerPlantCounterByType
    } = this.props;
    removePlantFromRenderList(plantID);
    lowerPlantCounterByType(plantName);
  };

  render() {
    const { filesForPlant, plantName } = this.props;
    const { isInFocus } = this.state;
    filesForPlant.texture.forEach((file, index) => {
      ViroMaterials.createMaterials({
        [index]: {
          shininess: 2.0,
          lightingModel: 'Lambert',
          diffuseTexture: { uri: file }
        }
      });
    });
    ViroMaterials.createMaterials({
      deleteButton: {
        shininess: 2.0,
        lightingModel: 'Lambert',
        diffuseTexture: deleteButton
      },
      shadowMaterial: {
        lightingModel: 'Lambert',
        diffuseTexture: shadowMaterial
      }
    });
    return (
      <ViroNode
        position={[0, -1, -1]}
        dragType="FixedToWorld"
        onDrag={() => {}}
        onClick={this.toggleIsInFocus}
      >
        <Viro3DObject
          source={{ uri: filesForPlant.obj }}
          materials={filesForPlant.texture.map((file, index) => `${index}`)}
          position={[0, 0, 0]}
          scale={filesForPlant.scale}
          type="OBJ"
          rotation={plantName === 'New Zealand Flax' ? [90, 90, 180] : [90, 90, 90]}
        />
        {isInFocus && (
          <ViroQuad
            height={0.15}
            width={0.15}
            onClick={this.handleDeleteClick}
            position={[0, 0.7, 0]}
            materials={['deleteButton']}
            transformBehaviors="billboardY"
          />
        )}
        {/* <ViroQuad
          height={5}
          width={1}
          rotation={[-90, 0, 0]}
          position={[0, 0, 0]}
          materials={['shadowMaterial']}
          arShadowReceiver
        /> */}
      </ViroNode>
    );
  }
}

export default PlantObject;
