const swapi = require('swapi-node');

swapi.people({ id: 1 }).then((result) => {
    console.log(result);
});

