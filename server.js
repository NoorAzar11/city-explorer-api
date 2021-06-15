'use strict'

const express = require('express');
const server = express();
const weatherData=require('./data/weather.json');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const PORT=3012;
server.use(cors()); //make our sever open to others

server.listen(PORT,()=> { //in order to build a server and give it a port
    console.log(`lisning on ${PORT}`)
})

//localhost:3012/test
server.get('/',(req,re)=>{
    res.send(data);
 })
//localhost:3012/test/getweather
//to get weather data
server.get('/getweather',(req,res)=>{
    let weatherDetails=weatherData.data.map(item=>{
        return item.data;
    })
    //we should write it after retrun and map
    res.send(weatherDetails);

})
//localhost:3012/test/getweather?weatherdes

server.get('/getweather',(req,res)=>{
    let weatherParmeter=req.query.weatherDetails; //to get the value of the paramter itself
    let weatherdes=weatherData.data.find(item =>{
if (item.lat === weatherParmeter && item.lan === weatherParmeter)
return item;

    })
    res.send(weatherdes);
})

//localhost:3012/test.....
server.get('*',(req,res)=> { //this will server eveything
        res.status(404).send('Please Try Again 404 Error');