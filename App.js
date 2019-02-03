/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Desk from "./component/Desk";
import ScrollList from "./component/ScrollList";
import reducer from "./reducer";
import {createStore} from 'redux'
import {Provider} from 'react-redux';

const store = createStore(reducer);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <ScrollList/>
                    <Desk/>
                </View>
            </Provider>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D56B78',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    portrait: {
        borderWidth: 3,
        borderRadius: 5,
        margin: 5
    },
});
