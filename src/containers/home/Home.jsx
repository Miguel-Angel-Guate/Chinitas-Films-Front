
import React,  { useEffect } from 'react'
import './Home.scss'
import { connect } from 'react-redux';
import HeaderHome from '../../containerOfChaposHome/Header/HeaderHome';
import VideoPlay from '../../containerOfChaposHome/videPlay/VideoPlay';



const Home = (props) => {
       
       return (
              <div>
              <HeaderHome />
              <VideoPlay />

                     
              </div>
       )
}
export default Home


