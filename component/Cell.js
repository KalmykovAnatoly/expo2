import React, {Component} from 'react'
import {Image, TouchableHighlight, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from "../actions";
import {styles} from '../App';
import {images} from './ScrollList'

class Cell extends Component {

    isPressed = false;

    click(x, y) {
        console.log("isPressed", this.props.isPressed);
        if (this.isPressed) {
            console.log("first");
            this.img = null;
            this.props.pressCell({x: -1, y: -1});
        } else {
            console.log("second");
            this.img = images[this.props.pressedHero];
            this.props.pressCell({x: x, y: y})
        }
    }

    render() {
        const {isEven, x, y} = this.props;
        const dark = '#0D1F21';
        const light = '#143441';
        return (
            <TouchableHighlight
                onPress={() => this.click(x, y)}>
                <View style={{height: 35, width: 35, backgroundColor: isEven ? dark : light}}>
                    <View style={styles.icon}>
                        {this.img ? <Image source={this.img.icon}/> : null}
                    </View>
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