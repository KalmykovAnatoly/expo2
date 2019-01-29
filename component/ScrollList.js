import React, {Component} from 'react'
import {ScrollView} from 'react-native';
import Portrait from "./Portrait";

export default class ScrollList extends Component {

    images = [
        {
            id: 1,
            name: 'abaddon',
            race: 'undead',
            clazz: 'knight',
            source: require('../portraits/npc_dota_hero_abaddon.png')
        },
        {
            id: 2,
            name: 'abyssal underlord',
            race: 'undead',
            clazz: 'warrior',
            source: require('../portraits/npc_dota_hero_abyssal_underlord.png')
        },
        {
            id: 3,
            name: 'alchemist',
            race: 'undead',
            clazz: 'warrior',
            source: require('../portraits/npc_dota_hero_alchemist.png')
        },
        {
            id: 4,
            name: 'abaddon',
            race: 'undead',
            clazz: 'knight',
            source: require('../portraits/npc_dota_hero_abaddon.png')
        },
        {
            id: 5,
            name: 'abyssal underlord',
            race: 'undead',
            clazz: 'warrior',
            source: require('../portraits/npc_dota_hero_abyssal_underlord.png')
        },
        {
            id: 6,
            name: 'alchemist',
            race: 'undead',
            clazz: 'warrior',
            source: require('../portraits/npc_dota_hero_alchemist.png')
        },
        {
            id: 7,
            name: 'abaddon',
            race: 'undead',
            clazz: 'knight',
            source: require('../portraits/npc_dota_hero_abaddon.png')
        },
        {
            id: 8,
            name: 'abyssal underlord',
            race: 'undead',
            clazz: 'warrior',
            source: require('../portraits/npc_dota_hero_abyssal_underlord.png')
        },
        {
            id: 9,
            name: 'alchemist',
            race: 'undead',
            clazz: 'warrior',
            source: require('../portraits/npc_dota_hero_alchemist.png')
        },
    ];

    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}>
                {this.images.map(image => <Portrait key={image.id}
                                                    id={image.id}
                                                    source={image.source}/>)}
            </ScrollView>
        )
    }
}