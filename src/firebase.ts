import firebase from "firebase/app";
import "firebase/firestore";

const {
  API_KEY,
  AUTO_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENSOR_ID,
  APP_ID,
  MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: API_KEY,
  autoDomain: AUTO_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messageSensorId: MESSAGE_SENSOR_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
