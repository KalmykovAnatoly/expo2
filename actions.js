export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = () => {
    return {
        type: 'RND',
        payload: Math.floor(Math.random() * 10)
    }
};
export const pressCell = (pressed) => {
    return {
        type: 'PRESS_CELL',
        payload: pressed
    }
};
export const pressHero = (pressed) => {
    return {
        type: 'PRESS_HERO',
        payload: pressed
    }
};