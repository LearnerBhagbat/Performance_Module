import './App.css';
import React from 'react';
import LineGraph from './Charts/LineGraph';
// import PieGraph from './Charts/PieGraph';
import Navbar from './Components/Navbar';
import UserProfile from './Components/UserProfile';
import U from "./Img/U.png"
import Data from './Charts/Data';
import ReportCard from './Components/ReportCard';
import



function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <h1>
        Charts
      </h1>

      <div className="lineG">
        <LineGraph />
      </div>

      <div className="userP">
        <UserProfile name="User"
          avatar={U}
          bio="Lorem"
          email="nobody@gmail.com"
          location="Bindekhapur"
          website="nobody.com"
        ></UserProfile>
      </div>

      <Data></Data>
      <ReportCard> </ReportCard>

    
    </div>
  );
}

export default App;
