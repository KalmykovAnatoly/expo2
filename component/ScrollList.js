import React, {Component} from 'react'
import {ScrollView, View} from 'react-native';
import Portrait from "./Portrait";

export default class ScrollList extends Component {

    render() {
        return (
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    {images.map(image => <Portrait key={image.id}
                                                   id={image.id}
                                                   source={image.source}/>)}
                </ScrollView>
            </View>
        )
    }
}

export const images = [
    {
        id: 0,
        name: 'abaddon',
        race: 'undead',
        clazz: 'knight',
        icon: require('../miniheroes/abaddon.png'),
        source: require('../portraits/npc_dota_hero_abaddon.png')
    },
    {
        id: 1,
        name: 'abyssal underlord',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../miniheroes/abyssal_underlord.png'),
        source: require('../portraits/npc_dota_hero_abyssal_underlord.png')
    },
    {
        id: 2,
        name: 'alchemist',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../miniheroes/alchemist.png'),
        source: require('../portraits/npc_dota_hero_alchemist.png')
    },
    {
        id: 3,
        name: 'ancient apparation',
        race: 'undead',
        clazz: 'knight',
        icon: require('../miniheroes/ancient_apparition.png'),
        source: require('../portraits/npc_dota_hero_ancient_apparition.png')
    },
    {
        id: 4,
        name: 'antimage',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../miniheroes/antimage.png'),
        source: require('../portraits/npc_dota_hero_antimage.png')
    },
    {
        id: 5,
        name: 'arc warden',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../miniheroes/arc_warden.png'),
        source: require('../portraits/npc_dota_hero_arc_warden.png')
    },
    {
        id: 6,
        name: 'axe',
        race: 'undead',
        clazz: 'knight',
        icon: require('../miniheroes/axe.png'),
        source: require('../portraits/npc_dota_hero_axe.png')
    },
    {
        id: 7,
        name: 'bane',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../miniheroes/bane.png'),
        source: require('../portraits/npc_dota_hero_bane.png')
    },
    {
        id: 8,
        name: 'batrider',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../miniheroes/batrider.png'),
        source: require('../portraits/npc_dota_hero_batrider.png')
    },
    {
        id: 9,
        name: 'beastmaster',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../miniheroes/beastmaster.png'),
        source: require('../portraits/npc_dota_hero_beastmaster.png')
    },
];