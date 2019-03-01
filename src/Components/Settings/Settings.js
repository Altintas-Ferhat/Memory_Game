import React from 'react';

import './Settings.css';

const settings = (props) => {

    let {isRunning} = props;
    let buttonText = "Start";

    if(isRunning) {
        buttonText = "Stop";
    }

    return (
        <div className="Settings">
            <div className="section">
                <h4>Time: </h4>
                <select defaultValue="1" onChange={(event) => props.change("time", event)}>
                    <option value="0.2">0.2 s</option>
                    <option value="0.5">0.5 s</option>
                    <option value="1">1 s</option>
                    <option value="2">2 s</option>
                    <option value="3">3 s</option>
                </select>
            </div>
            <div className="section">
                <h4>Rows: </h4>
                <select defaultValue="5" onChange={(event) => props.change("rows", event)}>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </div>
            <div className="section">
                <h4>Columns: </h4>
                <select defaultValue="5" onChange={(event) => props.change("columns", event)}>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </div>
            <button onClick={!isRunning ? props.start : props.stop}>{buttonText}</button>
        </div>
    );
}

export default settings;