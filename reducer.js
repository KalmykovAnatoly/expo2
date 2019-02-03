const initialState = {
    counter: 1,
    pressedCell: {x:2,y:3},
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
            return {...state, pressedCell: action.payload};
        case 'PRESS_HERO':
            return {...state, pressedHero: action.payload};
        default:
            return state;
    }
};

export default reducer;