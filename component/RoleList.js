import React, {Component} from 'react'
import {ScrollView, View} from 'react-native';
import RoleFrame from "./RoleFrame";

export default class RoleList extends Component {

    render() {
        return (
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    {roles.map(role => <RoleFrame key={role.id}
                                               id={role.id}
                                               source={role.source}/>)}
                </ScrollView>
            </View>
        )
    }
}

export const roles = [
    {
        id: 0,
        name: 'orc',
        source: require('../images/role/orc.png')
    },
    {
        id: 1,
        name: 'beast',
        source: require('../images/role/beast.png')
    },
    {
        id: 2,
        name: 'ogre',
        source: require('../images/role/ogre.png')
    },
    {
        id: 3,
        name: 'undead',
        source: require('../images/role/undead.png')
    },
    {
        id: 4,
        name: 'goblin',
        source: require('../images/role/goblin.png')
    },
    {
        id: 5,
        name: 'troll',
        source: require('../images/role/troll.png')
    },
    {
        id: 6,
        name: 'elf',
        source: require('../images/role/elf.png')
    },
    {
        id: 7,
        name: 'human',
        source: require('../images/role/human.png')
    },
    {
        id: 8,
        name: 'demon',
        source: require('../images/role/demon.png')
    },
    {
        id: 9,
        name: 'naga',
        source: require('../images/role/naga.png')
    },
    {
        id: 10,
        name: 'dragon',
        source: require('../images/role/dragon.png')
    },
    {
        id: 11,
        name: 'dwarf',
        source: require('../images/role/dwarf.png')
    },
    {
        id: 12,
        name: 'element',
        source: require('../images/role/element.png')
    },
];