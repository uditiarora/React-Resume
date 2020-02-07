import React from 'react';
import '../css/resume.css';
import data from "../data/resume.json";
function Resume(){
    var key = Object.keys(data);
    console.log(data);
    return(
        <div className="right">
            {key}
        </div>
    );
}

export default Resume;