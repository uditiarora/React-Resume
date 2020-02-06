import React from 'react';
import '../css/panel.css';
function Panel(props){
    return(
        <div className="left">
            <div className="bg-img">
                <div className="left-inner">
                    <div className="info">
                        <h2 className="name">{ props.name}</h2>
                        <div className="subtext">{ props.subtext}</div>
                        <div className="jobStatus">{ props.jobStatus}</div>
                        <div className="social-links">
                            <a href={ props.twitterURL} target="_blank"><i className="fa fa-twitter"></i></a>
                            <a href={ props.instaURL} target="_blank"><i className="fa fa-instagram"></i></a>
                            <a href={ props.githubURL} target="_blank"><i className="fa fa-github"></i></a>
                            <a href={ props.linkedinURL}  target="_blank"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;