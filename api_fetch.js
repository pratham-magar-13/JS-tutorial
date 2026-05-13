// api_fetch.js

const API_URL = 'https://cat-fact.herokuapp.com/facts';

async function getCatFacts() {

  const promise = await fetch(API_URL);
  console.log(promise)
}