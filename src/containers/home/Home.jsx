
import React,  { useEffect } from 'react'
import { connect } from 'react-redux';
import { character } from '../../redux/actions/characterData'



const Home = (props) => {
       useEffect(() => {
              console.log()
              character()
                  .catch(console.error)
          }, []);
       return (
              <div>
              <h1>Hello world</h1>

                     
              </div>
       )
}
const mapStateToProps = (state) => ({ character: state.character.character })
export default connect(mapStateToProps)(Home);


