import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import './index.css';
import '../node_modules/graphiql/graphiql.css'

const API_KEY = 'your_api_key';
const ORG_SECRET_KEY = 'your_org_secret';

function graphQLFetcher(graphQLParams) {
  return fetch('https://api.tipe.io/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': API_KEY,
      'Tipe-Id': ORG_SECRET_KEY,
    },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.getElementById('root'));
