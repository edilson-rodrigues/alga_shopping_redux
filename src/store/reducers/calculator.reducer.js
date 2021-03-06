// reducer - return state
import {CALC_SUBTRACT, CALC_SUM} from "../actions/calculator.actions";

const initialState = 0;

const CalculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALC_SUM:
            return action.payload[0] + action.payload[1];
        case CALC_SUBTRACT:
            return action.payload[0] - action.payload[1];
        default:
            return state;
    }
};

export default CalculatorReducer;
