import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Reduced test case</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
