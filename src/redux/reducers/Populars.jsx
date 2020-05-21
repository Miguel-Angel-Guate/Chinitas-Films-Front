
const  PopularsReducer = (state = {}, action) => {
       switch (action.type) {
              case 'POPULARS':
                  return {
                      ...state,
                      populars: action.payload
                  }
             
                 
              default:
                  return state;
          }
}

export default PopularsReducer
