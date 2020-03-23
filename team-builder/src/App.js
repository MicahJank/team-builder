import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddMemberForm from './components/AddMemberForm.js';
import Members from './components/Members.js';

function App() {
  return (
    <div className="App">
      <AddMemberForm />
      <Members />
    </div>
  );
}

export default App;
