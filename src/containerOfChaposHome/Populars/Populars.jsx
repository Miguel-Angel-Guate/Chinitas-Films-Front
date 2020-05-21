import React, { useEffect } from 'react';
import './Populars.scss'
import { connect } from 'react-redux';
import { populars } from '../../redux/actions/Populars'


const Populars = (props) => {
       useEffect(() => {
              console.log()
              populars()
                  .catch(console.error)
          }, []);

       return (
              <div >

       
                     
              </div>
       )
}

const mapStateToProps = (state) => ({ populars: state.populars.populars })
export default connect(mapStateToProps)(Populars);