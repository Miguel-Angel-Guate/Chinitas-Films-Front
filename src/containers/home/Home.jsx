
import React,  { useEffect } from 'react'
import './Home.scss'
import { connect } from 'react-redux';
import HeaderHome from '../../containerOfChaposHome/Header/HeaderHome';
import VideoPlay from '../../containerOfChaposHome/videPlay/VideoPlay';
import PopularsFilms from '../../containerOfChaposHome/Populars/PopularsFilms'




const Home = (props) => {
       
       return (
              <div className="containerHome">
              <HeaderHome />
              <VideoPlay />
              <PopularsFilms />

                     
              </div>
       )
}
export default Home


