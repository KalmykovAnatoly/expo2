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
                                                  name={role.name}
                                                  source={role.source}/>)}
                </ScrollView>
            </View>
        )
    }
}

export const RoleEnum = {
    orc: "Orc",
    beast: "Beast",
    ogre: "Ogre",
    undead: "Undead",
    goblin: "Goblin",
    troll: "Troll",
    elf: "Elf",
    human: "Human",
    demon: "Demon",
    naga: "Naga",
    dragon: "Dragon",
    dwarf: "Dwarf",
    element: "Element",
};

export const roles = [
    {
        id: 0,
        name: RoleEnum.orc,
        source: require('../images/role/orc.png')
    },
    {
        id: 1,
        name: RoleEnum.beast,
        source: require('../images/role/beast.png')
    },
    {
        id: 2,
        name: RoleEnum.ogre,
        source: require('../images/role/ogre.png')
    },
    {
        id: 3,
        name: RoleEnum.undead,
        source: require('../images/role/undead.png')
    },
    {
        id: 4,
        name: RoleEnum.goblin,
        source: require('../images/role/goblin.png')
    },
    {
        id: 5,
        name: RoleEnum.troll,
        source: require('../images/role/troll.png')
    },
    {
        id: 6,
        name: RoleEnum.elf,
        source: require('../images/role/elf.png')
    },
    {
        id: 7,
        name: RoleEnum.human,
        source: require('../images/role/human.png')
    },
    {
        id: 8,
        name: RoleEnum.demon,
        source: require('../images/role/demon.png')
    },
    {
        id: 9,
        name: RoleEnum.naga,
        source: require('../images/role/naga.png')
    },
    {
        id: 10,
        name: RoleEnum.dragon,
        source: require('../images/role/dragon.png')
    },
    {
        id: 11,
        name: RoleEnum.dwarf,
        source: require('../images/role/dwarf.png')
    },
    {
        id: 12,
        name: RoleEnum.element,
        source: require('../images/role/element.png')
    },
];