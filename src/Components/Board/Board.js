import React, {Component} from 'react';
import Block from '../Block/Block';

import './Board.css';

class Board extends Component {

    //Inserts block to every row
    createColumns = (i) => {

        let blocks = [];
        let {columns, current} = this.props;

        for(let j = 0; j < columns; j++) {

            let key = (i * columns) + j;

            let active = false;

            if(key === current) {
                active = true;
            }

            blocks.push(<Block click={this.props.click} key={key} value={key} isActive={active}/>)
        }

        return blocks;

    }

    //Creates the board
    createBoard = () => {
        let {rows} = this.props;
        let array = [];
        let row;
        
        for(let i = 0; i < rows; i++) {
            row = (
            <ul>
                {this.createColumns(i)}
            </ul>)

            array.push(row);
        }

        return array;
    }

    render() {
        return (
        <div className="Board">
            {this.createBoard()}
        </div>);
    }
}

export default Board;