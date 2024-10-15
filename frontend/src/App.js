import React from 'react';
import './App.css';
import Editor from './components/Editor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog Editor</h1>
      </header>
      <main>
        <Editor />
      </main>
    </div>
  );
}

export default App;
