import React from 'react';
import './App.css';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import First1 from './components/First1';
import Second1 from './components/Second1';
import Third1 from './components/Third1';
import Fourth1 from './components/Fourth1';
import StudentFunction from './components/StudentFunction';
import StudentClass from './components/StudentClass';
import Display from './components/Display';

function App() {
  const studentProps = {
    name: 'Suresh Ippili',
    address: 'krp',
    scores: [95, 88, 92]
  };

  const handleHelloClick = () => alert('Hello');
  const handleByeClick = () => alert('Bye');

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <First />
      <Second />
      <Third />
      <Fourth />
      <First1 />
      <Second1 />
      <Third1 />
      <Fourth1 />
      <StudentFunction {...studentProps} />
      <StudentClass {...studentProps} />
      <Display name={studentProps.name} address={studentProps.address}/>
      <button onClick={handleHelloClick}>Say Hello</button>
      <button onClick={handleByeClick}>Say Bye</button>
    </div>
  );
}

export default App;
