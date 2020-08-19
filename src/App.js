import React, { useState } from 'react';
import './App.css';

import firebase from 'firebase';
import 'firebase/firestore';

/**
 * Firebase configuration
 */
const firebaseConfig = {
  apiKey: 'AIzaSyB3f4M3wHVua4rS0_Bdm4oXnSS8mzzgi58',
  authDomain: 'firestore-study-80674.firebaseapp.com',
  databaseURL: 'https://firestore-study-80674.firebaseio.com',
  projectId: 'firestore-study-80674',
  storageBucket: 'firestore-study-80674.appspot.com',
  messagingSenderId: '79996497059',
  appId: '1:79996497059:web:d8ef7baf3e054dbb3ae316',
  measurementId: 'G-P18KB0R3SJ',
};

/**
 * Initialize firebase
 */
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function App() {
  const [name, setName] = useState('tom');
  const [age, setAge] = useState(20);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleListClick = (e) => {
    db.collection('users')
      // .doc('8R0cQb7K56xA9fO5dBH1')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch((err) => console.log(err));
  };

  const handleSaveClick = (e) => {
    db.collection('users')
      // .doc('8R0cQb7K56xA9fO5dBH1')
      .add({
        name,
        age,
        isValid: true,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h3>
        Name:{name}, Age:{age}
      </h3>
      <div>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        ></input>
      </div>

      <div>
        <input
          type="number"
          value={age}
          onChange={handleAgeChange}
          placeholder="Age"
        ></input>
      </div>

      <button type="button" onClick={handleSaveClick}>
        Save
      </button>
      <button type="button" onClick={handleListClick}>
        List
      </button>
    </div>
  );
}

export default App;
