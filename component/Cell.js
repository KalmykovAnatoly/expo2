import React, {Component} from 'react'
import {Text, TouchableHighlight, View} from 'react-native';

export default class Cell extends Component {

    click = (x, y) => {
        console.log(x + " - " + y)
    };

    render() {
        const {isEven, x, y} = this.props;
        const dark = '#0D1F21';
        const light = '#143441';
        return (
            <TouchableHighlight onPress={() => this.click(x, y)}>
                <View style={{height: 30, width: 30, backgroundColor: isEven ? dark : light}}>
                    <Text>{x}:{y}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}
