import './Form.css'
import { useState } from 'react';
import validate from './validation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';



const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })


    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        console.log(userData);
        setUserData({...userData, [property]: value});
        validate({ ...userData, [property]: value}, setErrors, errors);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return(
        <div className='formulario'>
            <div className='form-section'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" className='img-header' alt="img" />
                <form onSubmit={handleSubmit}>
                    <div className='input-zone'>
                        <div className='input-zone-two'>
                            <input 
                            type="text" 
                            name='email'
                            value={userData.email}
                            onChange={handleChange}/>
                            <label htmlFor="email">Email</label>
                        </div>
                    <span>{errors.email}</span>
                    </div>
                    <div className='input-zone'>
                        <div className='input-zone-two'>
                            <input 
                            type="password" 
                            name='password'
                            value={userData.password}
                            onChange={handleChange}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <span>{errors.password}</span>

                    </div>
                    <button type="submit">Log In <FontAwesomeIcon icon={faSignIn}/></button>
                </form>
            </div>
            <div className='img-section'>
                <img src="https://res.cloudinary.com/diewi2ur1/image/upload/v1683571419/img-form3_jxyidh.jpg"   className='img-form' alt="img-form" />
            </div>
        </div>
    )
}

export default Form;
