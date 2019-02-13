import React, {Component} from 'react'
import {Image, TouchableHighlight, View} from 'react-native';
import {connect} from 'react-redux';
import * as actions from "../actions";
import {styles} from '../App';
import {images} from './HeroList'

class Cell extends Component {

    state = {img: null};

    click(x, y) {
        if (this.state.img === null || this.state.img.id !== this.props.pressedHero) {
            this.props.pressCell({x: x, y: y});
            this.setState({
                img: images[this.props.pressedHero]
            });
        } else {
            this.props.pullCell({x: this.props.x, y: this.props.y});
            this.setState({
                img: null
            });
        }
    }

    render() {
        const {isEven, x, y} = this.props;
        const {img} = this.state;
        const dark = '#0D1F21';
        const light = '#143441';

        return (
            <TouchableHighlight
                onPress={() => this.click(x, y)}>
                <View style={{height: 35, width: 35, backgroundColor: isEven ? dark : light}}>
                    <View style={styles.icon}>
                        {img ? <Image source={img.icon}/> : null}
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pressedHero: state.pressedHero
    }
};

export default connect(mapStateToProps, actions)(Cell);