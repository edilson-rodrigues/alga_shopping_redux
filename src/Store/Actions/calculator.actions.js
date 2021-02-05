export const CALC_SUM = 'CALC_SUM';
export const CALC_SUBTRACT = 'CALC_SUBTRACT';
//actions creator
export const ActionSum = (num1, num2) => {
    return {
        type: CALC_SUM,
        payload: [num1, num2]
    }
}

export const ActionSubtract = (num1, num2) => {
    return {
        type: CALC_SUBTRACT,
        payload: [num1, num2]
    }
}

