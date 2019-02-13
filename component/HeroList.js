import React, {Component} from 'react'
import {ScrollView, View} from 'react-native';
import HeroFrame from "./HeroFrame";

export default class HeroList extends Component {

    render() {
        return (
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    {heroes.map(hero => <HeroFrame key={hero.id}
                                                   id={hero.id}
                                                   name={hero.name}
                                                   source={hero.source}/>)}
                </ScrollView>
            </View>
        )
    }
}
const ClassEnum = {
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

const RoleEnum = {
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

const HeroEnum = {
    axe: "Axe",
    enchantress: "Enchantress",
    ogre_magi: "Ogre magi",
    tusk: "Tusk",
    drow_ranger: "Drow ranger",
    bounty_hunter: "Bounty hunter",
    clockwerk: "Clockwerk",
    shadow_shaman: "Shadow shaman",
    batrider: "Batrider",
    tinker: "Tinker",
    anti_mage: "Anti mage",
    tiny: "Tiny",
    crystal_maiden: "Crystal maiden",
    beast_master: "Beast master",
    juggernaut: "Juggernaut",
    timbersaw: "Timbersaw",
    queen_of_pain: "Queen of pain",
    puck: "Puck",
    witch_doctor: "Witch doctor",
    slardar: "Slardar",
    chaos_knight: "Chaos knight",
    treant_protector: "Treant protector",
    luna: "Luna",
    natures_prophet: "Nature's prophet",
    morphling: "Morphling",
    lycan: "Lycan",
    venomancer: "Venomancer",
    omniknight: "Omniknight",
    razor: "Razor",
    windranger: "Windranger",
    phantom_assasin: "Phantom assasin",
    abaddon: "Abaddon",
    sand_king: "Sand king",
    slark: "Slark",
    sniper: "Sniper",
    viper: "Viper",
    shadow_fiend: "Shadow fiend"
};

export const heroes = [
    {
        id: 0,
        name: HeroEnum.axe,
        race: RoleEnum.orc,
        clazz: ClassEnum.warrior,
        icon: require('../images/miniheroes/axe.png'),
        source: require('../images/hero/npc_dota_hero_axe.png')
    },
    {
        id: 1,
        name: HeroEnum.enchantress,
        race: RoleEnum.beast,
        clazz: ClassEnum.druid,
        icon: require('../images/miniheroes/enchantress.png'),
        source: require('../images/hero/npc_dota_hero_enchantress.png')
    },
    {
        id: 2,
        name: HeroEnum.ogre_magi,
        race: RoleEnum.ogre,
        clazz: ClassEnum.mage,
        icon: require('../images/miniheroes/ogre_magi.png'),
        source: require('../images/hero/npc_dota_hero_ogre_magi.png')
    },
    {
        id: 3,
        name: HeroEnum.tusk,
        race: RoleEnum.beast,
        clazz: ClassEnum.warrior,
        icon: require('../images/miniheroes/tusk.png'),
        source: require('../images/hero/npc_dota_hero_tusk.png')
    },
    {
        id: 4,
        name: HeroEnum.drow_ranger,
        race: RoleEnum.undead,
        clazz: ClassEnum.hunter,
        icon: require('../images/miniheroes/drow_ranger.png'),
        source: require('../images/hero/npc_dota_hero_drow_ranger.png')
    },
    {
        id: 5,
        name: HeroEnum.bounty_hunter,
        race: RoleEnum.goblin,
        clazz: ClassEnum.assasin,
        icon: require('../images/miniheroes/bounty_hunter.png'),
        source: require('../images/hero/npc_dota_hero_bounty_hunter.png')
    },
    {
        id: 6,
        name: HeroEnum.clockwerk,
        race: RoleEnum.goblin,
        clazz: ClassEnum.mech,
        icon: require('../images/miniheroes/rattletrap.png'),
        source: require('../images/hero/npc_dota_hero_rattletrap.png')
    },
    {
        id: 7,
        name: HeroEnum.shadow_shaman,
        race: RoleEnum.troll,
        clazz: ClassEnum.shaman,
        icon: require('../images/miniheroes/shadow_shaman.png'),
        source: require('../images/hero/npc_dota_hero_shadow_shaman.png')
    },
    {
        id: 8,
        name: HeroEnum.batrider,
        race: RoleEnum.troll,
        clazz: ClassEnum.knight,
        icon: require('../images/miniheroes/batrider.png'),
        source: require('../images/hero/npc_dota_hero_batrider.png')
    },
    {
        id: 9,
        name: HeroEnum.tinker,
        race: RoleEnum.goblin,
        clazz: ClassEnum.mech,
        icon: require('../images/miniheroes/tinker.png'),
        source: require('../images/hero/npc_dota_hero_tinker.png')
    },
    {
        id: 10,
        name: HeroEnum.anti_mage,
        race: RoleEnum.elf,
        clazz: ClassEnum.demon_hunter,
        icon: require('../images/miniheroes/antimage.png'),
        source: require('../images/hero/npc_dota_hero_antimage.png')
    },
    {
        id: 11,
        name: HeroEnum.tiny,
        race: RoleEnum.element,
        clazz: ClassEnum.warrior,
        icon: require('../images/miniheroes/tiny.png'),
        source: require('../images/hero/npc_dota_hero_tiny.png')
    },
    {
        id: 12,
        name: HeroEnum.crystal_maiden,
        race: RoleEnum.human,
        clazz: ClassEnum.mage,
        icon: require('../images/miniheroes/crystal_maiden.png'),
        source: require('../images/hero/npc_dota_hero_crystal_maiden.png')
    },
    {
        id: 13,
        name: HeroEnum.beast_master,
        race: RoleEnum.orc,
        clazz: ClassEnum.hunter,
        icon: require('../images/miniheroes/beastmaster.png'),
        source: require('../images/hero/npc_dota_hero_beastmaster.png')
    },
    {
        id: 14,
        name: HeroEnum.juggernaut,
        race: RoleEnum.orc,
        clazz: ClassEnum.warrior,
        icon: require('../images/miniheroes/juggernaut.png'),
        source: require('../images/hero/npc_dota_hero_juggernaut.png')
    },
    {
        id: 15,
        name: HeroEnum.timbersaw,
        race: RoleEnum.goblin,
        clazz: ClassEnum.mech,
        icon: require('../images/miniheroes/shredder.png'),
        source: require('../images/hero/npc_dota_hero_shredder.png')
    },
    {
        id: 16,
        name: HeroEnum.queen_of_pain,
        race: RoleEnum.demon,
        clazz: ClassEnum.assasin,
        icon: require('../images/miniheroes/queenofpain.png'),
        source: require('../images/hero/npc_dota_hero_queenofpain.png')
    },
    {
        id: 17,
        name: HeroEnum.puck,
        race: RoleEnum.dragon,
        clazz: ClassEnum.mage,
        icon: require('../images/miniheroes/puck.png'),
        source: require('../images/hero/npc_dota_hero_puck.png')
    },
    {
        id: 18,
        name: HeroEnum.witch_doctor,
        race: RoleEnum.troll,
        clazz: ClassEnum.warlock,
        icon: require('../images/miniheroes/witch_doctor.png'),
        source: require('../images/hero/npc_dota_hero_witch_doctor.png')
    },
    {
        id: 19,
        name: HeroEnum.slardar,
        race: RoleEnum.naga,
        clazz: ClassEnum.warrior,
        icon: require('../images/miniheroes/slardar.png'),
        source: require('../images/hero/npc_dota_hero_slardar.png')
    },
    {
        id: 20,
        name: HeroEnum.chaos_knight,
        race: RoleEnum.demon,
        clazz: ClassEnum.knight,
        icon: require('../images/miniheroes/chaos_knight.png'),
        source: require('../images/hero/npc_dota_hero_chaos_knight.png')
    },
    {
        id: 21,
        name: HeroEnum.treant_protector,
        race: RoleEnum.elf,
        clazz: ClassEnum.druid,
        icon: require('../images/miniheroes/treant.png'),
        source: require('../images/hero/npc_dota_hero_treant.png')
    },
    {
        id: 22,
        name: HeroEnum.luna,
        race: RoleEnum.elf,
        clazz: ClassEnum.knight,
        icon: require('../images/miniheroes/luna.png'),
        source: require('../images/hero/npc_dota_hero_luna.png')
    },
    {
        id: 23,
        name: HeroEnum.natures_prophet,
        race: RoleEnum.elf,
        clazz: ClassEnum.druid,
        icon: require('../images/miniheroes/furion.png'),
        source: require('../images/hero/npc_dota_hero_furion.png')
    },
    {
        id: 24,
        name: HeroEnum.morphling,
        race: RoleEnum.element,
        clazz: ClassEnum.assasin,
        icon: require('../images/miniheroes/morphling.png'),
        source: require('../images/hero/npc_dota_hero_morphling.png')
    },
    {
        id: 25,
        name: HeroEnum.lycan,
        race: RoleEnum.human,
        clazz: ClassEnum.warrior,
        icon: require('../images/miniheroes/lycan.png'),
        source: require('../images/hero/npc_dota_hero_lycan.png')
    },
    {
        id: 26,
        name: HeroEnum.venomancer,
        race: RoleEnum.beast,
        clazz: ClassEnum.warlock,
        icon: require('../images/miniheroes/venomancer.png'),
        source: require('../images/hero/npc_dota_hero_venomancer.png')
    },
    {
        id: 27,
        name: HeroEnum.omniknight,
        race: RoleEnum.human,
        clazz: ClassEnum.knight,
        icon: require('../images/miniheroes/omniknight.png'),
        source: require('../images/hero/npc_dota_hero_omniknight.png')
    },
    {
        id: 28,
        name: HeroEnum.razor,
        race: RoleEnum.element,
        clazz: ClassEnum.mage,
        icon: require('../images/miniheroes/razor.png'),
        source: require('../images/hero/npc_dota_hero_razor.png')
    },
    {
        id: 29,
        name: HeroEnum.windranger,
        race: RoleEnum.elf,
        clazz: ClassEnum.hunter,
        icon: require('../images/miniheroes/windrunner.png'),
        source: require('../images/hero/npc_dota_hero_windrunner.png')
    },
    {
        id: 30,
        name: HeroEnum.phantom_assasin,
        race: RoleEnum.elf,
        clazz: ClassEnum.assasin,
        icon: require('../images/miniheroes/phantom_assassin.png'),
        source: require('../images/hero/npc_dota_hero_phantom_assassin.png')
    },
    {
        id: 31,
        name: HeroEnum.abaddon,
        race: RoleEnum.undead,
        clazz: ClassEnum.knight,
        icon: require('../images/miniheroes/abaddon.png'),
        source: require('../images/hero/npc_dota_hero_abaddon.png')
    },
    {
        id: 32,
        name: HeroEnum.sand_king,
        race: RoleEnum.beast,
        clazz: ClassEnum.assasin,
        icon: require('../images/miniheroes/sand_king.png'),
        source: require('../images/hero/npc_dota_hero_sand_king.png')
    },
    {
        id: 33,
        name: HeroEnum.slark,
        race: RoleEnum.naga,
        clazz: ClassEnum.assasin,
        icon: require('../images/miniheroes/slark.png'),
        source: require('../images/hero/npc_dota_hero_slark.png')
    },
    {
        id: 34,
        name: HeroEnum.sniper,
        race: RoleEnum.dwarf,
        clazz: ClassEnum.hunter,
        icon: require('../images/miniheroes/sniper.png'),
        source: require('../images/hero/npc_dota_hero_sniper.png')
    }
];