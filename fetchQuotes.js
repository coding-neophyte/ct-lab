const fetch = require('cross-fetch');
const fetchQuotes = async () => {

  return fetch('https://futuramaapi.herokuapp.com/api/characters/fry/1')
    .then((res) => res.json())
    .then((quote) => quote.map((quote) => [{ character: quote.character, quote: quote.quote, image: quote.image }]));
};

module.exports = fetchQuotes;
