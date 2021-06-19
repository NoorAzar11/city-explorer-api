'use strict'

const axios=require('axios');
module.exports=weatherHandler;
let key=process.env.WEATHER_API_KEY;
require('dotenv').config()

//creating a new ending point=>req data from own api statclly
async function weatherHandler(req,res) {
  let areaData=req.query.areaName;
  let lat='';
  let lon='';
let weatherURL='https://api.weatherbit.io/v2.0/forecast/daiy?city=${areaName}&key=${key}&days=4';

try{
    let dataresult=await axios(weatherURL);
    let areaArray=dataresult.data.data.map(item => {
        return new Forecast(item);
        })
        res.send(areaArray);
    

}catch(errors){
    res.status.send(`Please try again ${errors}`)

}

}

class Forecast{
    constructor(daily){
        this.date=daily.valid_date;
        this.description=`min of ${daily.low_temp}, max of ${daily.max_temp} ${daily.weather.description}`
    }
}