import axios from "axios";
export const ADD_FAV = "ADD_FAVORITE";
export const REMOVE_FAV = "REMOVE_FAVORITE";

export const addFav = (character) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
       const { data } = await axios.post(endpoint, character)
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
      };
   } catch (error) {
      console.log(error.message);
   }
    
 };

// export const addFav = (character) => {
//     return { type: ADD_FAVORITE, payload: character}
// };

export const removeFav = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint)
          return dispatch({
             type: REMOVE_FAV,
             payload: id,
       });
    };
   } catch (error) {
      console.log(error.message);
   }
    
 };



// export const removeFav = (id) => {
//     return { type: REMOVE_FAV, payload: id}
// };