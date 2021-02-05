import {combineReducers} from 'redux';
import calculatorReducer from './calculator.reducers'

const rootReducer =  combineReducers({
   calculator: calculatorReducer,
});

export default rootReducer;
