import React from 'react';
import Pages from './pages/Pages';
import './App.scss';

const App: React.FC = (props: object) => {
  return (
    <>
      <Pages {...props} />
    </>
  );
}

export default App;
