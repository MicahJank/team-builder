import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberForm from './components/MemberForm.js';
import Members from './components/Members.js';

function App() {
  const [memberList, setMemberList] = useState([
    {
        name: 'Micah',
        email: 'micah@test.com',
        role: 'backend engineer'
    },
]);
const [memberToEdit, setMemberToEdit] = useState({});

  return (
    <div className="App">
      <MemberForm memberToEdit={memberToEdit} memberList={memberList} setMemberList={setMemberList} />
      <Members memberList={memberList} setMemberToEdit={setMemberToEdit} />
    </div>
  );
}

export default App;
