'use strict'

const express = require('express');
const server = express();
const weatherData = require('./data/weather.json');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const PORT = process.env.PORT;
server.use(cors()); //make our sever open to others


//localhost:3012/test
server.get('/', (req, re) => {
    res.send(data);

})

//localhost:3012/test/getweather
//to get weather data
//we should write it after retrun and map
server.get('/getweather', (req, res) => {
    let weatherDetails = weatherData.data.map(item => {
        return item.data;
    })
    res.send(weatherDetails);

})
console.log(weatherData);

server.get('/weather', (req, res) => {
    let arEa = req.query;
    let daTa2 = [];
    let ciTy = weatherData.find(
        (item) => item.city_name.toLowerCase() === arEa.city_name.toLowerCase()
    );
    if (ciTy) {
        class Forecast {
            constructor(date, description) {
                this.date = date;
                this.description = description;

            }
        }
        ciTy.data.forEach((item) => {
            daTa2.push(new Forecast(item.valid_date, item.weather.description));
            
        });
        // console.log(daTa2);
       
res.status(200).send(daTa2);

    }else {
    res
        .status(500)
        .send(`Try Again`)
        console.log(daTa2);
    }
});
//localhost:3012/test/getweather?weatherdes

// server.get('/getweather', (req, res) => {
//     let weatherParmeter = req.query.weatherDetails; //to get the value of the paramter itself
//     let weatherdes = weatherData.data.find(item => {
//         if (item.lon && item.lan)
//             return item;
//             console.log(weatherdes);
//     })

//     res.send(weatherdes);

// })



// class Weather {
//     constructor(date) {
//         this.date = date.valid_date;
// this.description = date.weather.description;

//     }}
//     console.log(this.date.valid_date);

//localhost:3012/test....
//this will server eveything

server.get('*', (req, res) => {
    res.status(404).send('Please Try Again 404 Error');

    server.listen(PORT, () => { //in order to build a server and give it a port
        console.log(`lisning on ${PORT}`);
    })
})