import {deleteFromArray} from "./functions";

const initialState = {
    counter: 1,
    pressedCells: [],
    pressedHero: 2,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INC':
            return {...state, counter:state.counter + 1};
        case 'DEC':
            return {...state, counter:state.counter - 1};
        case 'RND':
            return {...state, counter:state.counter + action.payload};
        case 'PRESS_CELL':
            return {...state, pressedCells: [...state.pressedCells, action.payload]};
        case 'PULL_CELL':
            return {...state, pressedCells: deleteFromArray(state.pressedCells, action.payload)};
        case 'PRESS_HERO':
            return {...state, pressedHero: action.payload};
        default:
            return state;
    }
};

export default reducer;