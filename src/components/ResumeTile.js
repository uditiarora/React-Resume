import React from 'react';
import TileLeft from './TileLeft';
import TileRight from './TileRight';
function ResumeTile(props) {
    return(
        <div>
            <div className="row">
                <TileLeft obj = {props.obj} />
                <TileRight tile_data = {props.tile_data} />
            </div>
        </div>
    );

}

export default ResumeTile;