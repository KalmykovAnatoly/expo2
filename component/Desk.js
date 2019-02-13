import React, {Component} from 'react'
import {View} from 'react-native';
import Cell from "./Cell";
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions";
import {styles} from '../App';

class Desk extends Component {

    constructor() {
        super();
        this.originMatrix = [];
        for (let i = 0; i < 8; i++) {
            this.originMatrix[i] = [];
            for (let j = 0; j < 8; j++) {
                this.originMatrix[i][j] = false;
            }
        }
    }

    render() {
        const matrix = JSON.parse(JSON.stringify(this.originMatrix));

        return (
            <View style={styles.desk}>
                {
                    matrix.map((row, i) => (
                        <View key={i}
                              style={{flexDirection: 'row'}}>
                            {row.map((column, j) => (<Cell key={j}
                                                           x={j}
                                                           y={i}
                                                           isPressed={column}
                                                           isEven={(i + j) % 2}/>))}
                        </View>
                    ))
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pressedCells: state.pressedCells,
    }
};

export default connect(mapStateToProps, actions)(Desk);