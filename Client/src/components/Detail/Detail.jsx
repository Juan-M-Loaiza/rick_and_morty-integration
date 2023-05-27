import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Detail.css'
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faSquareCaretLeft, faCircleLeft } from "@fortawesome/free-solid-svg-icons";


const Detail = () => {
    const [character, setCharacter] = useState({});
    const {detailId} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${detailId}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailId]);


    return (
    <div className="detail-space">
        <div className="out-detail">
            
                <button className="out-button">
                    <Link className="ahref" to='/home'>
                       <FontAwesomeIcon icon={faCircleLeft} style={{height: '38px',}}/>
                    </Link>
                </button>
           
        </div>
        <div className="character-detail">
            <div className="properties">
                <div className="info-contain">
                    <h2>Name:</h2>
                    <p>{character.name}</p>
                </div>
                <div className="info-contain">
                    <h2>Status:</h2>
                    <p>{character.status}</p>
                </div>
                <div className="info-contain">
                    <h2>Specie:</h2>
                    <p>{character.species}</p>
                </div>
                <div className="info-contain">
                    <h2>Gender:</h2>
                    <p>{character.gender}</p>
                </div>
                <div className="info-contain">
                    <h2>Origin:</h2>
                    <p>{character.origin?.name}</p>
                </div>
            </div>
            <div className="image">
                <img src={character.image} className="img-char" alt="personaje" />
            </div>
        </div>
        </div>
    )
}

export default Detail;