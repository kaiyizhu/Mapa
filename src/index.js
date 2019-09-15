import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

let arr = [];

var config = {
    apiKey: "AIzaSyBKo669TN8weWWWOtrBIaya9lq2Dqotej0",
    authDomain: "td-app-c4b43.firebaseapp.com",
    databaseURL: "https://td-app-c4b43.firebaseio.com",
    projectId: "td-app-c4b43",
    storageBucket: "td-app-c4b43.appspot.com",
    messagingSenderId: "649798001798",
    appId: "1:649798001798:web:557fa094e4e0b8da0e1d07"
}

firebase.initializeApp(config);

const db = firebase.firestore(); 

db.collection("points").get().then(function(doc) {
  console.log(doc.docs.map(doc => doc.data()));
  console.log(doc)
  if (doc.exists) {
      console.log("Document data:", doc);
      arr.push(doc.data());
      console.log(arr.length);
  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch(function(error) {
  console.log("Error getting document:", error);
});

function test(name, state, country) {
  db.collection("points").doc("LA").set({
    name, state, country
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });
}

test("Mexico", "Africa", "Denmark");

ReactDOM.render(
    <Router>
      <App />  
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
