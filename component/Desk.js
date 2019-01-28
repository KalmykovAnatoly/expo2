import React, {Component} from 'react'
import {View} from 'react-native';
import Cell from "./Cell";

export default class Desk extends Component
{

    render()
    {
        const matrix = [];
        for(let i = 0; i<8; i++){
            matrix[i] = [];
            for(let j = 0; j<8; j++){
                matrix[i][j] = i
            }
        }
        return (
            <View>
                {
                    matrix.map((row,i) =>(
                        <View key={i} style={{ flexDirection:'row'}}>{row.map((column,j) => (<Cell key={j} x={j} y={i} isEven={(i+j)%2}/>))}</View>
                    ))
                }
            </View>
        )
    }
}