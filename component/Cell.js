import React, {Component} from 'react'
import {Text, TouchableHighlight, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from "../actions";

class Cell extends Component {

    click = () => {
        if (this.props.isEven) {
            console.log("Y");
            this.props.inc();
        } else {
            console.log("N");
            this.props.dec();
        }
    };

    render() {
        const {isEven, counter} = this.props;
        const dark = '#0D1F21';
        const light = '#143441';
        return (
            <TouchableHighlight onPress={() => this.click()}>
                <View style={{height: 30, width: 30, backgroundColor: isEven ? dark : light}}>
                    <Text>{counter}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

export default connect(mapStateToProps, actions)(Cell);