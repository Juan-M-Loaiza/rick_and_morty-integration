import { useState } from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faRandom } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function SearchBar({ onSearch, onRandomSearch }) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   const handleRandomClick = () => {
      onRandomSearch();
    };

   return (
      <div className="searchBar">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" className='logo-searchBar' alt="logo" />
         <button className='button-to-favorites'>
            <Link className='to-favorites' to='/favorites'>
               Favorites
            </Link>
         </button>
         <button className='button-icon' onClick={handleRandomClick}><FontAwesomeIcon icon={faRandom} style={{ width: '20px', height: '20px' }} /></button>
         <input className='input-searchbar' placeholder='id... 826 max' type='search'  onChange={handleChange}/>
         <button className='add-button' onClick={() => onSearch(id)}>Add</button>
      </div>
   );
}
