import React from 'react';
import PlantDetail from './components/PlantDetail';

const myPlants = [{
    id: 1,
    nickname: 'weed',
    species: 'cannabis',
    h2oFrequency: 2,
    image: 'image url'
},

{
    id: 2,
    nickname: 'spice',
    species: 'oregano',
    h2oFrequency: 3,
    image: 'image url'
},    

{   id: 3,
    nickname: 'rose',
    species: 'flower',
    h2oFrequency: 4,
    image: 'image url'
}];

function PlantList() {
    return <h2>List of Plants</h2>;
  }

  export default PlantList;