import ACTION_TYPES from "./constants";

const initialState = {
    counterValue: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action?.type) {
        case ACTION_TYPES.COUNTER_INCREMENT:
            return {
                counterValue: state.counterValue + 1
            };
        case ACTION_TYPES.COUNTER_DECREMENT:
            return {
                counterValue: state.counterValue - 1
            };
        default:
            return state
    }
};
export default CounterReducer;