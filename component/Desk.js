import React, {Component} from 'react'
import {View} from 'react-native';
import Cell, {mapStateToProps} from "./Cell";
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions";

class Desk extends Component {

    render() {
        const {pressedCell} = this.props;
        const matrix = [];
        for (let i = 0; i < 8; i++) {
            matrix[i] = [];
            for (let j = 0; j < 8; j++) {
                matrix[i][j] = pressedCell.x === j && pressedCell.y === i;
            }
        }
        return (
            <View>
                {
                    matrix.map((row, i) => (
                        <View key={i}
                              style={{flexDirection: 'row'}}>
                            {row.map((column, j) => (<Cell key={j}
                                                           x={j}
                                                           y={i}
                                                           isPressed={matrix[i][j]}
                                                           isEven={(i + j) % 2}/>))}
                        </View>
                    ))
                }
            </View>
        )
    }
}

export default connect(mapStateToProps, actions)(Desk);