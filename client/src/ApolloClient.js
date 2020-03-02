import {ApolloClient,HttpLink,split,InMemoryCache} from 'apollo-boost';
import {getMainDefinition} from 'apollo-utilities';
import {WebSocketLink} from 'apollo-link-ws';

const httpLink = new HttpLink({
    uri: "http://localhost:4000"
  });
  
  const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000/`,
    options: {
      reconnect: true
    }
  });
  
  const link = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === "OperationDefinition" && operation === "subscription";
    },
    wsLink,
    httpLink
  );
  
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });
  
  export default client;