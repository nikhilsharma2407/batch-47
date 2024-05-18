const initialState = {
    count: 0
};

const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
}


// export const incrementActionCreator = (payload = 1) => {
//     return { type: ACTIONS.INCREMENT, value }
// }

export const incrementActionCreator = () => {
    return async (dispatch) => {
        const value = await Promise.resolve(10);
        dispatch({ type: ACTIONS.INCREMENT, payload:value });
    }
};

export const decrementActionCreator = (payload = 1) => ({ type: ACTIONS.DECREMENT, payload });

export const countReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.INCREMENT:
            // update the state immutably
            const copyState = { ...state };
            copyState.count += payload
            return copyState

        case ACTIONS.DECREMENT:
            return { ...state, count: state.count - payload }
        default:
            return state
    }
};
