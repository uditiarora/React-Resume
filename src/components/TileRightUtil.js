import React from 'react';

function TileRightUtil(props) {
    return(
        <div>
            {Object.keys(props.data).map((key, i) =>  <p>{props.data[key]}</p>)}
        </div>
    );
    
}
export default TileRightUtil;