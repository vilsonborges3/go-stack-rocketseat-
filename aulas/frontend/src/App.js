import React from 'react';

import Header from './componets/Header';

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Home</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header  title="Projects">
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Sign in</li>
          <li>Sign up</li>
        </ul>
      </Header> 
    </>
    );
}

export default App;