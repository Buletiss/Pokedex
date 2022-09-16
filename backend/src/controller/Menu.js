const axios = require('axios');

module.exports = {
  async get(req, res) {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');

      const allpokemon = response.data.results.map(e => {
        const filter = {
          name: e.name,
        };
        return filter;
      });

      return res.json(response);
    } catch {
      return res.status(400).send('message: error');
    }
  },
};
