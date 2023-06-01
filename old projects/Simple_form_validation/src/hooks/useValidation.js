import {useState} from 'react'

const useValidation = (validateFunction) => {
  const [inputVal, setInbutVal] = useState('');
  const [inputValidate, setInputValidate] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);

  const hasError = !inputValidate && inputTouched


  const changeHandler = (val) => {
    setInbutVal(val)
    // if (inputTouched && !validateFunction(val) ) setInputValidate(false);
    // else if (validateFunction(val)) setInputValidate(true);
    setInputValidate(validateFunction(val))
  }
  const blurHandler = () => { 
    setInputTouched(true);
  }

  

  return {
    inputVal,
    inputValidate,
    hasError,
    inputTouched,
    changeHandler,
    blurHandler,
  }

}

export default useValidation;