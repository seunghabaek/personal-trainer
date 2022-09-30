import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTO_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGE_SENSOR_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  autoDomain: REACT_APP_AUTO_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messageSensorId: REACT_APP_MESSAGE_SENSOR_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
// export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
