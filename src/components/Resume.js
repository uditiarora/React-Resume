import React from 'react';
import '../css/resume.css';
import data from "../data/resume.json";
import ResumeTile from "./ResumeTile";

function Resume(){
    return(
        <div className="right">
            {Object.keys(data).map((obj, i) => <div><ResumeTile key = {i} obj = {obj} tile_data = {data[obj]}/></div>)}
        </div>
    );
}

export default Resume;