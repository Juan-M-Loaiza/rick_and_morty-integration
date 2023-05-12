import './Favorites.css'
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/fontawesome-svg-core';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Favorites = () => {
    const favorites = useSelector((state) => state.myFavorites);

    return(
        <div className='favorites-container-two'>
            <div className='header-favorites'>
            <button className='button-back-favorites'>
                <Link to='/home'>
                    <FontAwesomeIcon className="icon-back" icon={faCircleLeft}/>
                </Link>
            </button>
            <div className='favorites-title'>
                <h1>Mis Favoritos</h1>
            </div>
            </div>

        <div className="favorites">
            {favorites.map(({id, name, image, onClose}) => {
                return (
                    <Card
                    id={id}
                    name={name}
                    image={image}
                    onClose={onClose}
                   />
                )
            })}
        </div>
        </div>
    )
}

export default Favorites;