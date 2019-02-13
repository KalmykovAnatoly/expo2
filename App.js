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
import HeroList from "./component/HeroList";
import reducer from "./reducer";
import {createStore} from 'redux'
import {Provider} from 'react-redux';

const store = createStore(reducer);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <HeroList/>
                    <Desk/>
                </View>
            </Provider>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    portrait: {
        borderWidth: 3,
        borderRadius: 5,
        margin: 5
    },
    icon:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    desk:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
