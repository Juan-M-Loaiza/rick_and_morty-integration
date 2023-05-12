import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards'
import About from './components/About/About'
import SearchBar from './components/SearchBar/SearchBar';
import Detail from './components/Detail/Detail';
import Form from './components/Formulario/Form'
import Favorites from './components/Favorites/Favorites';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function App() {
   const [characters, setCharacters] = useState([])
   
   const location = useLocation();
   const excludedRoute = '/';
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'user@gmail.com';
   const PASSWORD = '123henry';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      else{
         alert("Credenciales incorrectas.")
      }
   }
 
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logOut = () => {
      
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id} `).then(({ data }) => {
         if (data.name && !characters.find((char) => char.id === data.id )) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function getRandomCharacter() {
      axios('https://rickandmortyapi.com/api/character/')
        .then(({ data }) => {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          const randomCharacter = data.results[randomIndex];
          if (!characters.find((char) => char.id === randomCharacter.id)) {
            setCharacters((oldChars) => [...oldChars, randomCharacter]);
          } else {
            getRandomCharacter();
          }
        })
        .catch((error) => {
          console.log('Error fetching random character', error);
        });
    }

   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id))
   }


   return (
      <div className='App'>
         <Routes>
            <Route path='/' element = {
                  <div>
                     {location.pathname !== excludedRoute  && <Nav/>}
                     <Form login = {login}/>
                  </div>
               } />
            <Route path='/home' element ={
                  <div className='characters-content'>
                     {location.pathname !== excludedRoute  && <Nav/>}
                     <SearchBar  onSearch={onSearch} onRandomSearch={getRandomCharacter} />
                     <Cards characters={characters} onClose={onClose} />
                  </div>
               }/>
            <Route path='/about' element = {
                  <div className='about'>

                     <div className='button-back'>
                        <button className="go-home">
                           <Link className="ahref-about" to='/home'>
                              <FontAwesomeIcon icon={faCircleLeft} style={{height: '38px',}}/>
                           </Link>
                        </button>
                     </div>
                     <About />
                  </div>
               }/>
            <Route path='/detail/:detailId' element={
                  <div className='detail-contain'>
                     <Detail />
                  </div>
               }/>  
            <Route path='/favorites' element = {
                  <div className='favorites-container'>
                     <Favorites />
                  </div>
               }>   
            </Route>          
         </Routes>
      </div>
   );
}

export default App;

   /* <div className='App'>
          
         <div className='characters-content'>
         
         </div>
      </div> */