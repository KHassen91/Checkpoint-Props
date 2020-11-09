import React from 'react';
import './App.css';
import Profile from './Profile/profile';
import Photo from './Hassen.jpg';

function App() {
  return (
    <div className="App">
      <div>
        <Profile 
        fname="Knani Hassen" 
        bio="Resourceful developer, very familar with C++, C#.NET and
        LabVIEW. Enjoying problem solving and mastering the necessary
        tools of design, programming and creating embedded systems
        including robotics."
        adress="Tunis Road Km 9.5 Ons City Sfax Tunisia" 
        children={Photo}/>
      </div>
    </div>
  );
}

export default App;
