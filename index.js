  
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
var axios = require("axios").default;



// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

// Routes



app.get('/weather/:city', function(req, res) {
    const { city } = req.params;
    var options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
          q: city,
        },
        headers: {
          'x-rapidapi-key': 'db1d13ee8emsh8de4da56c3ae7e6p138cadjsn876a4b63140e',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    };
    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        res.send('No se a encontrado la ciudad solicitada');
    });
  });

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});


