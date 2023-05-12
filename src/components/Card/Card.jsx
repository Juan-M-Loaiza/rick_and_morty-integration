import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faRightToBracket, faStar, faStarHalf} from "@fortawesome/free-solid-svg-icons";
import { addFav, removeFav } from "../../redux/actions";
import {  connect } from "react-redux";

function Card({ id, name, image, onClose, addFav, removeFav, myFavorites }) {
   const [isFav, setIsFav] = useState(false);

   
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false); 
         removeFav(id);
         // console.log(myFavorites)
      }
      else {
         setIsFav(true);
         addFav({ id, name, image, onClose, addFav, removeFav})
         // console.log(myFavorites)
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className="div-character">
         <div className="div-buttons">
         <button className="button-exit" onClick={() => onClose(id)}><FontAwesomeIcon icon={faTrash}/></button>
         {isFav ? (
               <button className="button-of-favorite" onClick={handleFavorite}><FontAwesomeIcon className ="favorite" icon={faStar} /></button>
            ) : (
               <button className="button-of-unfavorite" onClick={handleFavorite}><FontAwesomeIcon className="unfavorite" icon={faStar} /></button>
            )}
         </div>
         <ul>
         <Link to={`/detail/${id}`}>
         <li><button className="button-name"><span>{name} <FontAwesomeIcon icon={faRightToBracket}/></span></button></li>
         </Link>
         </ul>
         <img className="img-character" src={image} alt='' />

      </div>
   );
}
const mapDispatchToProps = (dispatch) => {
  return {
   addFav: (character) => {
      dispatch(addFav(character))
   },
   removeFav: (id) => {
      dispatch(removeFav(id))
   },
  }; 
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect (mapStateToProps, mapDispatchToProps)(Card);