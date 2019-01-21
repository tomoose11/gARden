import axios from 'axios';
import { firebase, hereConfig } from '../../config/index';

const db = firebase.firestore();
const api = {};

api.getMenuItems = async () => {
  const menuData = await db
    .collection('plants')
    .doc('menuPlants')
    .get();
  return menuData;
};

api.getPlantAttributes = async () => {
  const plantAttrs = await db
    .collection('plants')
    .doc('plantAttrs')
    .get();
  return plantAttrs;
};

api.getPlantInfo = async () => {
  const plantInfo = await db
    .collection('plants')
    .doc('plantInfo')
    .get();
  return plantInfo;
};

api.setShopplingList = async (shoppingList) => {
  const { uid } = firebase.auth().currentUser;
  await db
    .collection('userCollection')
    .doc(uid)
    .set({ shoppingList });
};

api.getShopplingList = async () => {
  const { uid } = firebase.auth().currentUser;

  const shoppingListGet = await db
    .collection('userCollection')
    .doc(uid)
    .get()
    .then(list => list.data().shoppingList);
  return shoppingListGet;
};

api.userSignIn = async (email, password) => {
  const signIn = await firebase.auth().signInWithEmailAndPassword(email, password);
  return signIn;
};

api.userSignUp = async (email, password) => {
  const signUp = await firebase.auth().createUserWithEmailAndPassword(email, password);
  return signUp;
};

api.getStores = async ({ latitude, longitude }) => {
  const { appid, appcode } = hereConfig;
  const URL = `https://places.api.here.com/places/v1/discover/search?q=garden+centre&app_id=${appid}&size=5&app_code=${appcode}`;
  const response = await axios
    .get(URL, {
      headers: {
        'Content-Type': 'application/json',
        Geolocation: `geo:${latitude},${longitude}`,
        'Accept-Language': 'en-US,en;q=0.9'
      }
    })
    .then(res => res.data.results.items)
    .catch(() => 'Stores cannot be found at this time');
  return response;
};

export default api;
