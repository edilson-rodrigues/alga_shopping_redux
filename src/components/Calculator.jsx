import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {ActionSubtract, ActionSum} from "../store/actions/calculator.actions";
import {calculator} from "../store/selectors/calculator.selectors";

const Calculator = () => {
    const dispatch = useDispatch();
    const result = useSelector(calculator);

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    return (
        <div>
            <input
                type="number"
                placeholder={'num1'}
                onChange={e => setNum1(+e.target.value)}
                value={num1}
            />
            <input
                type="number"
                placeholder={'num2'}
                onChange={e => setNum2(+e.target.value)}
                value={num2}
            />
            <button
                onClick={() => {
                    dispatch(ActionSum(num1, num2))
                }}
            >
                somar
            </button>
            <button
                onClick={() => {
                    dispatch(ActionSubtract(num1, num2))
                }}
            >subtrair
            </button>
            <div>{result}</div>
        </div>
    );
};

export default Calculator;
