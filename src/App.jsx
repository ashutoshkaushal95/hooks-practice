import React from 'react';
import UseEffectHook from './hooksExamples/UseEffectHook';
import UseEffectHook2 from './hooksExamples/UseEffectHook2';
import UseRefHook from './hooksExamples/UseRefHook';
import UseStateHook from './hooksExamples/UseStateHook';

const App = () => {
  return (
    <>
      <h4>useState Hook example</h4>
      <UseStateHook />
      <h4>UseEffect Hook example 1</h4>
      <UseEffectHook />
      <h4>UseEffect hook example 2</h4>
      <UseEffectHook2 />
      <h4>UseRef Hook example</h4>
      <UseRefHook />
    </>
  )
}

export default App