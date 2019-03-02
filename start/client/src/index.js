import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://server-8qq5x6s50.now.sh/'
})
const client = new ApolloClient({
  cache,
  link
})