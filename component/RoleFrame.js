import React, {Component} from 'react'
import {Image, TouchableHighlight, View, Text} from 'react-native';
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions";
import {styles} from '../App';

class RoleFrame extends Component {

    click = (id) => {
        console.log(id);
    };

    render() {
        const {id, source} = this.props;

        return (
            <TouchableHighlight onPress={() => this.click(id)}>
                <View style={styles.role}>
                    <Image source={source} style={{height:52, width: 52}}/>
                    <Text style={{textAlign:'center'}}>Element</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pressedCell: state.pressedCell,
        pressedHero: state.pressedHero
    }
};

export default connect(mapStateToProps, actions)(RoleFrame);