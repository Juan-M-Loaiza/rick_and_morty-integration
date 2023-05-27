import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Nav.css'
import { Link } from "react-router-dom";


export default function Nav(props) {
    return (
       <div className="nav-bar">
         <div className='buttons-container'>
            <div className='home-buttons-main'>
            <Link className='home' to='/About' >
                  <h4>About</h4>
                  <FontAwesomeIcon icon={faUser}/>
               </Link>

               <Link className='home' to='/home'>
                  <h4>Home</h4>
                  <FontAwesomeIcon icon={faHome}/>
               </Link>
            </div>


            <div className='button-exit'>
            <Link className='home' to='/'>
                  <h4>Exit</h4>
                  <FontAwesomeIcon icon={faPersonWalkingArrowRight}/>
               </Link>
            </div>

               

               

         </div>
       </div>
    );
 }