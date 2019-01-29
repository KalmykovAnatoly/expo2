import React, {Component} from 'react'
import {Image, TouchableHighlight} from 'react-native';

export default class Portrait extends Component {

    click = (id) => {
        console.log(id)
    };

    render() {
        const {id, source} = this.props;
        return (
            <TouchableHighlight onPress={() => this.click(id)}>
                <Image source={source}/>
            </TouchableHighlight>
        )
    }
}
