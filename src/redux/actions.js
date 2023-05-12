export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFav = (character) => {
    return { type: ADD_FAVORITE, payload: character}
};

export const removeFav = (id) => {
    return { type: REMOVE_FAVORITE, payload: id}
};