'use strict'

const axios=require('axios');
module.exports=movieHandler;
let key=process.env.MOVIE_API_KEY;
require('dotenv').config()

let movieData3={};

function movieHandler(req,res) {
    let movieData2=req.query.areaName;
    let movieURL=`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieData2}&page=1`;
   if (movieData3[movieData2] !== undefined){
       res.send(movieData2[movieData3])
   }else
   axios
   .get(movieURL)
   .then(reslut =>{
       let movieholder=reslut.data.reslut.map(item =>{
           return new Movie(item);
       })
       movieData2[movieData2]=movieholder;
       console.log('bring data');
       res.send(movieholder);
   })
.catch(errors =>{
    res.status(500).send(`please try again ${errors}`);

})
}
}

let imageURL='https://image.tmdb.org/t/p/w500/'

class Movie {
    constructor(daily){
        this.title=daily.title;
        this.average_votes=daily.average_votes;
        this.total_votes=daily.vote_count;
    }
}