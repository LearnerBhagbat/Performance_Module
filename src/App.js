import './App.css';
import React from 'react';
import LineGraph from './Charts/LineGraph';
// import PieGraph from './Charts/PieGraph';
import Navbar from './Components/Navbar';
// import UserProfile from './Components/UserProfile';
// import U from "./Img/U.png"
import Data from './Charts/Data';
import NewProf from './Components/ProfileV2';



function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <h1>
        Charts
      </h1>

      <div className="lineG">
      </div>

      {/* <div className="userP">
        <UserProfile name="User"
        avatar={U}
        bio="Lorem"
        email="nobody@gmail.com"
          location="Bindekhapur"
          website="nobody.com"
          ></UserProfile>
        </div> */}

      <NewProf></NewProf>

      <Data></Data>

        <LineGraph />

    </div>
  );
}

export default App;
