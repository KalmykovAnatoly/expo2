import React, {Component} from 'react'
import {Text, View} from 'react-native';

export default class TransparentLabel extends Component {

    render() {
        const {fontSize, height} = this.props;

        return (
            <View style={{
                height: height,
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(52, 52, 52, 0.6)'
            }}>
                <Text style={{color: 'white', fontSize: fontSize, textAlign: 'center'}}>
                    {this.props.children}
                </Text>
            </View>
        )
    }
}