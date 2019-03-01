import React from 'react';

import './Block.css';

const block = (props) => {
    
    let color;

    if(props.isActive) {
        color = "rgb(199, 33, 210)";
    }

    else {
        color = "rgb(127, 21, 134)";
    }

    return (<li onClick={props.click} value={props.value} style={{backgroundColor: color}}></li>);
}

export default block;