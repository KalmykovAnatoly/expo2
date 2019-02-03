import React, {Component} from 'react'
import {TouchableHighlight, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from "../actions";

class Cell extends Component {

    click(x, y) {
        if (this.props.isPressed) {
            this.props.pressCell({x: -1, y: -1})
        } else {
            this.props.pressCell({x: x, y: y})
        }
    }

    render() {
        const {isEven, isPressed, x, y} = this.props;
        const dark = '#0D1F21';
        const light = '#143441';
        const pressed = '#B2F6BB';
        return (
            <TouchableHighlight
                onPress={() => this.click(x, y)}>
                <View style={{height: 35, width: 35, backgroundColor: isPressed ? pressed : isEven ? dark : light}}>
                </View>
            </TouchableHighlight>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        pressedCell: state.pressedCell,
        pressedHero: state.pressedHero
    }
};

export default connect(mapStateToProps, actions)(Cell);