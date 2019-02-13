import React, {Component} from 'react'
import {ScrollView, View} from 'react-native';
import Hero from "./Hero";

export default class HeroList extends Component {

    render() {
        return (
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    {images.map(image => <Hero key={image.id}
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
        icon: require('../images/miniheroes/abaddon.png'),
        source: require('../images/hero/npc_dota_hero_abaddon.png')
    },
    {
        id: 1,
        name: 'abyssal underlord',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../images/miniheroes/abyssal_underlord.png'),
        source: require('../images/hero/npc_dota_hero_abyssal_underlord.png')
    },
    {
        id: 2,
        name: 'alchemist',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../images/miniheroes/alchemist.png'),
        source: require('../images/hero/npc_dota_hero_alchemist.png')
    },
    {
        id: 3,
        name: 'ancient apparation',
        race: 'undead',
        clazz: 'knight',
        icon: require('../images/miniheroes/ancient_apparition.png'),
        source: require('../images/hero/npc_dota_hero_ancient_apparition.png')
    },
    {
        id: 4,
        name: 'antimage',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../images/miniheroes/antimage.png'),
        source: require('../images/hero/npc_dota_hero_antimage.png')
    },
    {
        id: 5,
        name: 'arc warden',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../images/miniheroes/arc_warden.png'),
        source: require('../images/hero/npc_dota_hero_arc_warden.png')
    },
    {
        id: 6,
        name: 'axe',
        race: 'undead',
        clazz: 'knight',
        icon: require('../images/miniheroes/axe.png'),
        source: require('../images/hero/npc_dota_hero_axe.png')
    },
    {
        id: 7,
        name: 'bane',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../images/miniheroes/bane.png'),
        source: require('../images/hero/npc_dota_hero_bane.png')
    },
    {
        id: 8,
        name: 'batrider',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../images/miniheroes/batrider.png'),
        source: require('../images/hero/npc_dota_hero_batrider.png')
    },
    {
        id: 9,
        name: 'beastmaster',
        race: 'undead',
        clazz: 'warrior',
        icon: require('../images/miniheroes/beastmaster.png'),
        source: require('../images/hero/npc_dota_hero_beastmaster.png')
    },
];