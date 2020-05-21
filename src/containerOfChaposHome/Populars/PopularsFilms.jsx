import React, { useEffect } from 'react';
import './PopularsFilms.scss'
import { connect } from 'react-redux';
import { getPopulars } from './../../redux/actions/Populars'


 const PopularsFilms = ({populars}) => {
       useEffect(() => {
              console.log()
              getPopulars()
                  .catch(console.error)
          }, []);
          

       return (
              <div className="popularsFilms">
            {populars?.map(popular=> 
                <img src={'http://image.tmdb.org/t/p/w185'+ popular.poster_path} alt=""/>
                
            )}
        </div>
              
                     
              
       )

}
const mapStateToProps  = ({Populars}) => ({populars:Populars?.populars})
export default connect(mapStateToProps)(PopularsFilms)