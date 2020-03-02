import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './ApolloClient'
import Home from './Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <Home client={client}/>
    </ApolloProvider>
  );
}

export default App;
