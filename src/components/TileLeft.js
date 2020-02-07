import React from 'react';

function TileLeft(props) {
    return(
        <div className="col-sm-2 tile-left">
            <h5>{props.obj}</h5>
        </div>
    );

}

export default TileLeft;