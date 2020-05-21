import React, { useEffect } from 'react';
import './PopularsFilms.scss'
import { connect } from 'react-redux';
import { populars } from '../../redux/actions/Populars'


const PopularsFilms = (props) => {
       useEffect(() => {
              console.log()
              populars()
                  .catch(console.error)
          }, []);

       return (
              <div className="popularsContainer">
              <h1>Hello world</h1>

       
                     
              </div>
       )
}

export default PopularsFilms
