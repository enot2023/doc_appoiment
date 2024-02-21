// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import "firebase/auth"
import "firebase/firestore"

function FirebaseConfig(){
    const firebaseConfig = {
        apiKey: "AIzaSyAUW4MBD8_c5UmxKHq12wXKqET6yUNz3DY",
        authDomain: "fir-withhooks-85b39.firebaseapp.com",
        databaseURL: "https://fir-withhooks-85b39-default-rtdb.firebaseio.com",
        projectId: "fir-withhooks-85b39",
        storageBucket: "fir-withhooks-85b39.appspot.com",
        messagingSenderId: "64603985469",
        appId: "1:64603985469:web:65674736183d91a2e6fc54",
        measurementId: "G-0VK33VEHG4"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      return getDatabase(app)

}
export default FirebaseConfig

