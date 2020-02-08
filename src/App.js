import React from 'react';
import './App.css';
import Panel from './components/Panel';
import Resume from './components/Resume';
function App() {
  const name="Hey, I am Uditi Arora.";
  const subtext="I am a UG student at MNIT, Jaipur.";
  const jobStatus="";
  const twitterURL="";
  const instaURL="";
  const githubURL="";
  const linkedinURL="";
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5"><Panel 
            name = {name}
            subtext = {subtext}
            jobStatus = {jobStatus}
            twitterURL = {twitterURL}
            instaURL = {instaURL}
            githubURL = {githubURL}
            linkedinURL = {linkedinURL}
          /></div>
          <div className="col-md-7"><Resume /></div>
        </div>
      </div>
      
  );
}

export default App;
