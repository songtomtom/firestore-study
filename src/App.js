import React, { useState } from 'react';
import './App.css';

import { firestore, analytics } from './firebase/firebase';

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
    firestore
      .collection('users')
      // .doc('8R0cQb7K56xA9fO5dBH1')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch((err) => console.log(err));
  };

  const handleEventClick = (e) => {
    analytics.logEvent('test_event');
  };

  const handleSaveClick = (e) => {
    firestore
      .collection('users')
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
      <button type="button" onClick={handleEventClick}>
        Event
      </button>
    </div>
  );
}

export default App;
