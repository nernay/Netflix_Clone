import React, { useState } from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Bannner';
import Nav from './Nav';

function App(){
    return (
        <div className='App'>
            <Nav/>
            <Banner/>
            <h1 align="center"></h1>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}
            // means it is isLargeRow is true
            isLargeRow/>
            <Row title="TopRated"fetchUrl={requests.fetchTopRated}/>
            <Row title="ActionMovies"fetchUrl={requests.fetchActionMovies}/>
            <Row title="ComedyMovies"fetchUrl={requests.fetchComedyMovies}/>
            <Row title="HorrorMovies"fetchUrl={requests. fetchHorrorMovies}/>
            <Row title="RomanceMovies"fetchUrl={requests.fetchRomanceMovies}/>
           
        </div>
    )
}
// we are exporting this default app we have
export default App;
