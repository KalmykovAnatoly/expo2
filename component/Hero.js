import React, {Component} from 'react'
import {Image, TouchableHighlight, View, StyleSheet} from 'react-native';
import {styles} from '../App';
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions";

class Hero extends Component {

    click = (id) => {
        if (id===this.props.pressedHero){
            this.props.pressHero(-1);
        }else{
            this.props.pressHero(id);
        }
    };

    render() {
        const {id, source, pressedHero} = this.props;
        let style = styles.portrait;
        if (id === pressedHero){
            style = StyleSheet.flatten([
                styles.portrait,
                {borderColor: '#B2F6BB'},
            ]);
        }
        return (
            <TouchableHighlight onPress={() => this.click(id)}>
                <View style={style}>
                    <Image source={source}/>
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

export default connect(mapStateToProps, actions)(Hero);