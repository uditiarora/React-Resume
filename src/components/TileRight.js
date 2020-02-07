import React from 'react';
import TileRightUtil from './TileRightUtil';

function TileRight(props) {
    if(props.tile_data.length<=1){
        return(
            <div className="col-sm-10 tile-right">
                {Object.keys(props.tile_data).map((key,i) => <TileRightUtil data = {props.tile_data[key]} obj = {key} />)}
                
            </div>
        );
    }
    else{
        return(
            <div className="col-sm-10 tile-right">
                <ul>
                {Object.keys(props.tile_data).map((key,i) => <li><TileRightUtil data = {props.tile_data[key]} obj = {key} /></li>)}
                </ul>
            </div>
        );
    }


    

}

export default TileRight;