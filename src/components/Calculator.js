import React, { useState } from 'react';
import CalculatorTitle from './CalculatorTitle';
import OutputScreen from './OutputScreen';
import Button from './Button';

const Calculator = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleClick = e => {
    const { value } = e.target;

    switch (value) {
      case '=': {
        if (question !== '') {
          let ans = '';
          try {
            // eslint-disable-next-line no-eval
            ans = eval(question);
          } catch (err) {
            setAnswer('Math Error');
          }
          if (ans === undefined) {
            setAnswer('Math Error');
          } else {
            setAnswer(ans);
            setQuestion('');
          }
        }
        break;
      }
      case 'Clear': {
        setQuestion('');
        setAnswer('');
        break;
      }
      case 'Delete': {
        let str = question;
        str = str.substr(0, str.length - 1);
        setQuestion(str);
        break;
      }
      default: {
        setQuestion(question + value);
      }
    }
  };

  return (
    <div>
      <div className="frame">
        <CalculatorTitle title="abhi's Calculator" />
        <div className="mainCalc">
          <OutputScreen question={question} answer={answer} />
          <div className="buttons" style={{ display: 'inline-block' }}>
            <div className="button-row">
              <Button label={'Clear'} handleClick={handleClick} />
              <Button label={'Delete'} handleClick={handleClick} />
              <Button label={'.'} handleClick={handleClick} />
              <Button label={'/'} handleClick={handleClick} />
            </div>
            <div className="button-row">
              <Button label={'7'} handleClick={handleClick} />
              <Button label={'8'} handleClick={handleClick} />
              <Button label={'9'} handleClick={handleClick} />
              <Button label={'*'} handleClick={handleClick} />
            </div>
            <div className="button-row">
              <Button label={'4'} handleClick={handleClick} />
              <Button label={'5'} handleClick={handleClick} />
              <Button label={'6'} handleClick={handleClick} />
              <Button label={'-'} handleClick={handleClick} />
            </div>
            <div className="button-row">
              <Button label={'1'} handleClick={handleClick} />
              <Button label={'2'} handleClick={handleClick} />
              <Button label={'3'} handleClick={handleClick} />
              <Button label={'+'} handleClick={handleClick} />
            </div>
            <div className="button-row">
              <Button label={'0'} handleClick={handleClick} />
              <Button label={'='} handleClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
