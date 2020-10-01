import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "../Home";

import * as firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyCqA2hxmu1SK1yeBevBcqT6Cgqf80NVnwg",
  authDomain: "collab-ae69b.firebaseapp.com",
  databaseURL: "https://collab-ae69b.firebaseio.com",
  projectId: "collab-ae69b",
  storageBucket: "collab-ae69b.appspot.com",
  messagingSenderId: "599958094526",
  appId: "1:599958094526:web:931af7559a8936b98394ef",
  measurementId: "G-6ZTZQ0VVRX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Signup: { screen: Signup },
    Home: { screen: Home },
    Login: { screen: Login },
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const Routes = createAppContainer(MainNavigator);

export default Routes;

// e62d646191c14a79a7fb6c05280af2bc
