import React, {Component} from 'react'
import {Image, TouchableHighlight, View, StyleSheet, Text} from 'react-native';
import {styles} from '../App';
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions";

class HeroFrame extends Component {

    click = (id) => {
        if (id===this.props.pressedHero){
            this.props.pressHero(-1);
        }else{
            this.props.pressHero(id);
        }
    };

    render() {
        const {id, source, pressedHero, name} = this.props;
        let style = styles.hero;
        if (id === pressedHero){
            style = StyleSheet.flatten([
                styles.hero,
                {borderColor: '#B2F6BB'},
            ]);
        }
        return (
            <TouchableHighlight onPress={() => this.click(id)}>
                <View style={style}>
                    <Image source={source} />
                    <Text style={{textAlign:'center'}}>{name}</Text>
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

export default connect(mapStateToProps, actions)(HeroFrame);