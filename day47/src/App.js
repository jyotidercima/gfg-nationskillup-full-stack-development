import React from 'react';
import Button from './componenets/Button';
import FetchButton from './components/FetchButton';
import './App.css';

function App(){
  // mock fetchData function for FetchButton
  const mockFetchData = async () => {
    return "Hello, World!";
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>TEsting React Components</h1>

        <Button label='Click Me' onClick={() => alert("button Clicked")} />

        <FetchButton fetchData={mockFetchData}/>
      </header>
    </div>
  );
}

export default App;