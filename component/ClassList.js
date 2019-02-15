import React, {Component} from 'react'
import {ScrollView, View} from 'react-native';
import RoleFrame from "./RoleFrame";

export default class ClassList extends Component {

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

export const ClassEnum = {
    warrior: "Warrior",
    druid: "Druid",
    mage: "Mage",
    hunter: "Hunter",
    assasin: "Assasin",
    mech: "Mech",
    shaman: "Shaman",
    knight: "Knight",
    demon_hunter: "Demon hunter",
    warlock: "Warlock",
};

export const roles = [
    {
        id: 0,
        name: ClassEnum.warrior,
        source: require('../images/class/warrior.png')
    },
    {
        id: 1,
        name: ClassEnum.druid,
        source: require('../images/class/druid.png')
    },
    {
        id: 2,
        name: ClassEnum.mage,
        source: require('../images/class/mage.png')
    },
    {
        id: 3,
        name: ClassEnum.hunter,
        source: require('../images/class/hunter.png')
    },
    {
        id: 4,
        name: ClassEnum.assasin,
        source: require('../images/class/assasin.png')
    },
    {
        id: 5,
        name: ClassEnum.mech,
        source: require('../images/class/mech.png')
    },
    {
        id: 6,
        name: ClassEnum.shaman,
        source: require('../images/class/shaman.png')
    },
    {
        id: 7,
        name: ClassEnum.knight,
        source: require('../images/class/knight.png')
    },
    {
        id: 8,
        name: ClassEnum.demon_hunter,
        source: require('../images/class/demon_hunter.png')
    },
    {
        id: 9,
        name: ClassEnum.warlock,
        source: require('../images/class/warlock.png')
    }
];