import ACTION_TYPES from "./constants";

export const incrementCounter = data => {
    return { type: ACTION_TYPES.COUNTER_INCREMENT, data };
};

export const decrementCounter = data => {
    return { type: ACTION_TYPES.COUNTER_DECREMENT, data };
}

