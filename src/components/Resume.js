import React from 'react';
import '../css/resume.css';
import data from "../data/resume.json";
import ResumeTile from "./ResumeTile";

function Resume(){
    return(
        <div className="right">
            {Object.keys(data).map((obj, i) => <div><ResumeTile key = {i} obj = {obj} tile_data = {data[obj]}/></div>)}
            <br />
            <br />
            <a className="resume" href = "https://drive.google.com/open?id=1srvf3R2JIBtxNJGbc5lWPZ7mQPkrGKgL" target="_blank" download><div className="resume-link">Grab a PDF of my full resume</div></a>
        </div>
    );
}

export default Resume;