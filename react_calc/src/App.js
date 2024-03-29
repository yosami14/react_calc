import './style.css';
import { useReducer } from 'react'
import DigitButton from './DigitButton';
export const ACTIONS= {
  ADD_DIGITS:'add-digits',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGISTS:'delete-digits',
  EVALUATE: 'evaluate',
}

  function reducer(state, {type, payload}){
    switch(type){
    case ACTIONS.ADD_DIGITS:
      return {
        ...state,
        currentOperand: `${currentOperand || ''}${payload.digit}`,
      }
    }
  }


function App() {
  
  const [{currentOperand, previousOperand, operation},dispatch] = useReducer (reducer, {}) 
  dispatch({type: ACTIONS.ADD_DIGITS, payload: {digit: 1}})
  return(
    <div className='calculator-grid'>
      <div className="output">
        <div className="previous-operand">{previousOperand}{operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <DigitButton digit='DEL' dispatch={dispatch}/>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>

    </div>
  );
}

export default App;
