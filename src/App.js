import React from 'react';
import './App.css';
import Panel from './components/Panel';
function App() {
  const name="Hey, I am Uditi Arora.";
  const subtext="I am a UG student at MNIT, Jaipur.";
  const jobStatus="";
  const twitterURL="";
  const instaURL="";
  const githubURL="";
  const linkedinURL="";
  return (
    
        <div>
          <Panel 
            name = {name}
            subtext = {subtext}
            jobStatus = {jobStatus}
            twitterURL = {twitterURL}
            instaURL = {instaURL}
            githubURL = {githubURL}
            linkedinURL = {linkedinURL}
          />
        </div>
      
  );
}

export default App;
